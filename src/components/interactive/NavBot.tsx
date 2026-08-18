"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MOBILE_REVEAL_SCROLL_Y } from "./revealThreshold";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I can help you find the right page: calculators, your city's mortgage broker page, self-employed options, and more. What are you looking for?",
};

// Shown only before the visitor has asked anything, so the empty state suggests
// what this thing is actually good for instead of just blinking a cursor.
const STARTERS = [
  "I'm self-employed",
  "First-time buyer",
  "Open the calculators",
  "How do I get started?",
];

// LLM output sometimes swaps in typographic hyphen/dash variants (e.g. U+2011)
// inside paths like "/self‑employed" — normalize those to ASCII "-" so the
// link both matches this pattern and actually resolves to the real route.
const HYPHEN_VARIANTS = /[‐‑‒–—−]/g;
// A route only ever starts at a word boundary, so a slash sitting inside ordinary
// text ("T1s/NOAs", "and/or") must not become a link. That rule is applied in code
// rather than as a negative lookbehind in the pattern: JavaScriptCore only learned
// lookbehind in Safari 16.4, and an unsupported lookbehind is a *parse* error, so on
// iOS 15/16.0-16.3 and macOS Safari 15 it takes down this whole module -- and with it
// the client bundle chunk it ships in -- rather than just degrading the link markup.
const LINK_PATTERN = /\/[a-zA-Z0-9\-/#‐‑‒–—−]+/g;
const WORD_CHAR = /[a-zA-Z0-9]/;

// Matches the stroke/viewBox conventions used by the contact-section icons.
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

function renderContent(content: string) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(content)) !== null) {
    // Stands in for the old negative lookbehind: a match glued to the end of a word
    // is punctuation, not a path.
    if (match.index > 0 && WORD_CHAR.test(content[match.index - 1])) continue;

    if (match.index > cursor) {
      nodes.push(<React.Fragment key={cursor}>{content.slice(cursor, match.index)}</React.Fragment>);
    }
    const href = match[0].replace(HYPHEN_VARIANTS, "-");
    nodes.push(
      <Link key={match.index} href={href} className="underline text-bronze hover:text-bronze-deep">
        {href}
      </Link>
    );
    cursor = match.index + match[0].length;
  }

  if (cursor < content.length) {
    nodes.push(<React.Fragment key={cursor}>{content.slice(cursor)}</React.Fragment>);
  }
  return nodes;
}

export default function NavBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // On a phone the hero CTA sits low on the first screen, exactly where a launcher
  // pinned bottom-right lands. So below md the launcher waits until the visitor has
  // scrolled past the hero -- the same point the action bar appears -- and an open
  // panel keeps it visible regardless. From md up the hero is wide enough that
  // nothing collides and the launcher is always there.
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > MOBILE_REVEAL_SCROLL_Y);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // deep-linked or restored scroll positions start past the threshold
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Opening a panel that you then have to click into is a small papercut; and a
  // panel you cannot dismiss from the keyboard is an accessibility one.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || loading) return;

      const next: ChatMessage[] = [...messages, { role: "user", content: text }];
      setMessages(next);
      setInput("");
      setLoading(true);
      setError(false);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next.slice(-10) }),
        });
        if (!res.ok) throw new Error("bad response");
        const data = await res.json();
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } catch {
        setError(true);
        setMessages((m) => [
          ...m,
          { role: "assistant", content: "Something went wrong. Try again, or call (604) 593-0197." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages]
  );

  const showStarters = messages.length === 1 && !loading;
  const revealed = open || scrolledPastHero;

  return (
    // The mobile offset clears the 56px action bar plus the home-indicator inset, which
    // `env(safe-area-inset-bottom)` adds on iPhones and leaves at 0 elsewhere.
    // Faded rather than unmounted so the panel keeps its conversation across the
    // threshold, and `pointer-events-none` keeps the invisible launcher untappable.
    <div
      className={`fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-end transition-opacity duration-300 motion-reduce:transition-none ${
        revealed ? "opacity-100" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
      }`}
    >
      {open && (
        // `chat-panel-h` (globals.css) measures against `svh` so the panel cannot grow
        // past the top of the visible viewport on a phone, where `vh` over-reports by
        // the height of the browser chrome, and falls back to `vh` on Safari < 15.4.
        <div
          className="chat-panel-h mb-3 w-[min(370px,calc(100vw-2.5rem))] bg-white border border-line shadow-[0_18px_50px_rgba(22,22,22,0.22)] flex flex-col"
          role="dialog"
          aria-modal="false"
          aria-label="Ask TruWest, site assistant"
        >
          <div className="flex items-center justify-between bg-ink text-white px-4 py-3 shrink-0">
            <span className="flex flex-col">
              <span className="font-sans font-medium text-[14.5px] leading-tight">Ask TruWest</span>
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/55 mt-[3px]">
                Finds the right page
              </span>
            </span>
            <button
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
              aria-label="Close chat"
              className="text-white/70 hover:text-white transition-colors p-1 -mr-1"
            >
              <svg {...iconProps} width="18" height="18">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-[14.5px] leading-[1.5] max-w-[86%] px-3.5 py-2.5 ${
                  m.role === "user"
                    ? "ml-auto bg-ink text-white"
                    : "mr-auto bg-[#F5F3EE] text-ink border border-line"
                }`}
              >
                {renderContent(m.content)}
              </div>
            ))}

            {loading && (
              <div className="mr-auto bg-[#F5F3EE] border border-line px-3.5 py-3 flex items-center gap-1.5">
                <span className="sr-only">Thinking</span>
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 bg-stone/60 animate-bounce motion-reduce:animate-none"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            )}

            {showStarters && (
              <div className="pt-1 flex flex-wrap gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="border border-line text-stone hover:border-bronze hover:text-ink transition-colors text-[13px] px-3 py-1.5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-line p-3 shrink-0"
          >
            <label htmlFor="navbot-input" className="sr-only">
              Ask a question about the site
            </label>
            <input
              id="navbot-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask where to find something…"
              className="flex-1 min-w-0 bg-[#FAFAF7] border border-line px-3 py-2.5 text-[14.5px] text-ink outline-none focus:border-bronze transition-colors"
              maxLength={500}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="bg-ink text-white p-2.5 hover:bg-bronze transition-colors disabled:opacity-35 disabled:hover:bg-ink shrink-0"
            >
              <svg {...iconProps} width="18" height="18">
                <path d="m5 12 14 0M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          {error && (
            <p className="text-[12.5px] text-stone px-3 pb-3 -mt-1">
              Having trouble? Call{" "}
              <a href="tel:+16045930197" className="underline hover:text-ink">
                (604) 593-0197
              </a>
              .
            </p>
          )}
        </div>
      )}

      <button
        ref={launcherRef}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close site assistant" : "Open site assistant"}
        aria-expanded={open}
        // Round, unlike every other surface on this site: a floating assistant is not
        // part of the page's own grid, and the circle is what marks it as an overlay
        // rather than a block someone forgot to align.
        className="bg-ink text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[0_10px_30px_rgba(22,22,22,0.28)] hover:bg-bronze transition-colors"
      >
        {open ? (
          <svg {...iconProps} width="22" height="22">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg {...iconProps} width="22" height="22">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
