"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

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
// Negative lookbehind keeps this from firing on slashes inside ordinary text
// like "T1s/NOAs" or "and/or" — a route only ever starts at a word boundary.
const LINK_PATTERN = /(?<![a-zA-Z0-9])(\/[a-zA-Z0-9\-/#‐‑‒–—−]+)/g;

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
  const parts = content.split(LINK_PATTERN);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      const href = part.replace(HYPHEN_VARIANTS, "-");
      return (
        <Link key={i} href={href} className="underline text-bronze hover:text-bronze-deep">
          {href}
        </Link>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function NavBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

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

  return (
    <div className="fixed bottom-24 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      {open && (
        <div
          className="mb-3 w-[min(370px,calc(100vw-2.5rem))] h-[min(520px,72vh)] bg-white border border-line shadow-[0_18px_50px_rgba(22,22,22,0.22)] flex flex-col"
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
        // Square, not a pill: every other surface on this site has hard corners,
        // and a round floating bubble reads as a bolted-on third-party widget.
        className="bg-ink text-white w-14 h-14 flex items-center justify-center shadow-[0_10px_30px_rgba(22,22,22,0.28)] hover:bg-bronze transition-colors"
      >
        {open ? (
          <svg {...iconProps} width="22" height="22">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg {...iconProps} width="22" height="22">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
