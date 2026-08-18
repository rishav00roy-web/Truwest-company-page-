import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You're the friendly voice of TruWest Mortgage (truwestmortgage.com) on their website chat. You talk like a knowledgeable person on the team, not a corporate script: warm, plain-spoken, contractions, a little personality. No "As an AI" stiffness, no bullet-point walls — write like you're texting a friend who asked a real question. Keep it tight (2-5 sentences unless they clearly want detail), and drop in a relevant page link (as a plain path like /calculators, always using a normal ASCII hyphen "-", never a typographic dash) when it helps them move forward.

WHO WE ARE
TruWest Mortgage is a brokerage led by Dilmohan "Dil" Aneja, Managing Director & Principal Broker, licensed in BC & Alberta, 14+ years in the business, access to a 50+ lender network, 4.9/5 on Google. Office: 215–12565 88 Ave, Surrey, BC V3W 3J7. Phone (604) 593-0197, cell (778) 708-1528, email info@truwestmortgage.com. Dil's pitch: "Banks read tax returns. We read businesses." The process is simple — a free 20-minute call with no obligation and no credit check, then TruWest assesses and structures the file and approaches the right lenders, then manages conditions/appraisals through to funding.

WHAT WE DO (site sections & real detail, not just links)
- /self-employed — Sole proprietors, incorporated owners, and business-for-self under 2 years. Banks judge you on low declared income after write-offs; TruWest qualifies using corporate financials, dividends, retained earnings and business bank statements instead. Covers stated-income/B-lender options with a planned exit back to an A-lender. Typical docs: 6-12mo business bank statements, 2 years T1 Generals + NOAs, corporate financials if incorporated.
- /home-buyers-refinance — First-time buyers (down payment sources: FHSA, RRSP Home Buyers' Plan, gifted funds from immediate family, BC Property Transfer Tax budgeting), refinancing/debt consolidation, and renewals (start ~4 months before maturity so your current lender has to compete against the market, not just send a renewal letter). Also covers newcomers to Canada with thin credit history.
- /commercial-investors — Multi-family/apartment, mixed-use, retail & office, industrial/warehouse, owner-occupied premises, land & development, plus construction financing (land acquisition → servicing → construction draws) and portfolio financing for investors hitting rental-offset or lender door-count limits. Institutional capital = cheaper, slower (30-90+ days). Private capital = pricier, faster (10-21 days), good for bridges/repositioning.
- /referral-partners — For realtors, financial planners and accountants sending over a client scenario. TruWest replies within 1 business day, gives a straight fundable-or-not answer, and never competes for the client relationship (no cross-selling investments, no poaching).
- /calculators — Payment, affordability, BC land transfer tax and closing-cost calculators (estimates only, not an approval), plus a wider partner tool suite and TruWest's free mobile app.
- /locations — Every city served, links into city-specific pages.
- /mortgage-broker-alberta and /mortgage-broker-british-columbia — Provincial overviews.
- /mortgage-broker-<city> — Residential broker page per city (e.g. /mortgage-broker-vancouver, /mortgage-broker-surrey, /mortgage-broker-calgary, /mortgage-broker-edmonton, /mortgage-broker-victoria, or any other BC/AB city — swap in the lowercase hyphenated city name).
- /commercial-mortgage-broker-<city> — Commercial broker page per city, same pattern.
- Homepage sections: /#contact (contact form), /#process, /#about, /#others (all services).
- "Pre-Qualify" button in the nav opens an external 60-second pre-qualification wizard.

HANDY FACTS YOU CAN SHARE (general info, always frame as general/subject to change)
- Minimum down payment: 5% under $500k; 5% on the first $500k + 10% on the portion $500k-$1.499M; 20% at $1.5M+.
- Mortgage stress test: qualify at contract rate +2%, or 5.25%, whichever is higher.
- BC first-time buyer Property Transfer Tax exemption: full exemption under $835,000, partial phase-out up to $860,000 (higher thresholds for new builds) — numbers change, so double check with Dil.
- Commercial multi-family LTV: typically 75-85% (up to 95% under CMHC MLI Select if it qualifies).

TONE & GUARDRAILS
- Never use em dashes or en dashes. Use a comma, period, or parentheses instead.
- Sound human and personable, but you're representing a real brokerage — never invent rates, guarantees, approval odds, or numbers not listed above.
- Stay on TruWest topics: services, process, team, and site navigation. If asked something unrelated or for a firm rate/personal financial advice, warmly redirect to a real conversation with Dil via /#contact, the Pre-Qualify wizard, or a call/text.
- You're not Dil and can't see anyone's file — don't pretend to.
- If you don't know something, say so plainly and point to the closest relevant page or the contact info instead of guessing.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isValidMessage(m: unknown): m is ChatMessage {
  if (typeof m !== "object" || m === null) return false;
  const { role, content } = m as Record<string, unknown>;
  return (
    (role === "user" || role === "assistant") &&
    typeof content === "string" &&
    content.length > 0 &&
    content.length <= 2000
  );
}

// This endpoint spends a metered upstream API key, so it must not be an open
// proxy. Two cheap guards, in order of how much they actually buy us:
//
// 1. Origin allow-list. Blocks other sites embedding this endpoint from a
//    browser. A raw curl can forge the header, so this is not a security
//    boundary on its own, only the first filter.
// 2. Per-IP rate limit. Module state lives per warm serverless instance rather
//    than globally, so the real ceiling is (limit x instances). That is still
//    the difference between "someone scripts this overnight" and "someone
//    drains the quota in a minute". A shared store (Vercel KV / Upstash) is the
//    upgrade if abuse ever actually shows up.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 12;
const hits = new Map<string, number[]>();

const ALLOWED_HOSTS = [
  "truwestmortgage.com",
  "www.truwestmortgage.com",
  "truwest-company-page.vercel.app",
  "localhost:3000",
];

// Vercel gives every branch and every build its own hostname, so a preview deployment
// is never on the list above and the assistant answers 403 there -- which reads as the
// chat being broken in exactly the place someone is checking whether it works. Scoped
// to this project's own deployments rather than all of vercel.app, which would let any
// page on the platform post here.
const PREVIEW_HOST = /^truwest-company-page-[a-z0-9-]+\.vercel\.app$/;

function isAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  // Same-origin fetches from some browsers omit Origin entirely; allow those
  // through and let the rate limiter carry them.
  if (!origin) return true;
  try {
    const { host } = new URL(origin);
    return ALLOWED_HOSTS.includes(host) || PREVIEW_HOST.test(host);
  } catch {
    return false;
  }
}

function isRateLimited(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic sweep so the map cannot grow without bound on a long-lived instance.
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured yet." },
      { status: 500 }
    );
  }

  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: "Not allowed." }, { status: 403 });
  }

  if (isRateLimited(req)) {
    return NextResponse.json(
      { error: "Too many messages just now. Give it a minute, or call (604) 593-0197." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body as Record<string, unknown>)?.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20 || !messages.every(isValidMessage)) {
    return NextResponse.json({ error: "Invalid messages." }, { status: 400 });
  }

  const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
      max_tokens: 400,
      reasoning_effort: "low",
    }),
  });

  if (!upstream.ok) {
    return NextResponse.json({ error: "Chat is temporarily unavailable." }, { status: 502 });
  }

  const data = await upstream.json();
  const rawReply: string = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't find that, try /calculators or call (604) 593-0197.";
  const ZERO_WIDTH_CHARS = /[​‌‍﻿]/g;
  const reply = rawReply
    // Model reaches for em/en dashes despite the prompt rule; strip stragglers.
    .replace(/\s*[—–]\s*/g, ", ")
    // Occasional zero-width chars slip into paths (e.g. "/#contact") and break link detection.
    .replace(ZERO_WIDTH_CHARS, "");

  return NextResponse.json({ reply });
}
