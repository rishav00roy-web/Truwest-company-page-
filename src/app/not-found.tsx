import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | TruWest Mortgage',
  // A 404 has nothing to offer a search index, and indexing it would let a mistyped
  // URL compete with the real page it was a typo of.
  robots: { index: false, follow: true },
};

// Every route the site actually serves, minus the 30-odd city pages that /locations
// already lists. Enough that a visitor who lands here from a broken or truncated link
// can get where they were going in one click instead of hunting through the nav.
const DESTINATIONS = [
  { href: '/self-employed', label: 'Self-Employed & Alternative', note: 'Business owners, bank declines, bruised credit.' },
  { href: '/home-buyers-refinance', label: 'Home Buyers & Refinancing', note: 'First homes, renewals, debt consolidation.' },
  { href: '/commercial-investors', label: 'Commercial & Investors', note: 'Rentals, multi-unit, commercial files.' },
  { href: '/calculators', label: 'Calculators', note: 'Payment, affordability and closing costs.' },
  { href: '/locations', label: 'Locations', note: 'City pages across BC and Alberta.' },
  { href: '/referral-partners', label: 'Referral Partners', note: 'Realtors, accountants and planners.' },
];

export default function NotFound() {
  return (
    <>
      <header className="py-[96px] sm:py-[84px] bg-white border-b border-line">
        <div className="wrap">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">Error 404</span>
          <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.05] tracking-[-0.01em] mb-6 max-w-[800px] font-serif font-medium">
            That page moved, or never existed.
          </h1>
          <p className="text-stone text-[18px] max-w-[620px] mb-10 leading-[1.65]">
            Nothing is broken on your end. Check the address for a stray character, or pick up
            from one of the pages below. If you were sent this link by someone at TruWest, call
            and we will find what you were looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300"
            >
              Back to the homepage
            </Link>
            <a
              href="tel:+16045930197"
              data-cta="call-404"
              className="inline-flex items-center justify-center min-h-[48px] bg-transparent text-ink border border-ink px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-ink hover:text-white transition-colors duration-300"
            >
              Call (604) 593-0197
            </a>
          </div>
        </div>
      </header>

      <section className="py-[100px] bg-[#F5F3EE]">
        <div className="wrap">
          <h2 className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-stone mb-10">
            Where you might have been headed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {DESTINATIONS.map(({ href, label, note }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white p-8 flex flex-col gap-2 hover:bg-white/60 transition-colors duration-300"
              >
                <span className="font-serif text-[26px] leading-[1.15] text-ink group-hover:text-bronze transition-colors">
                  {label}
                </span>
                <span className="font-sans text-[14.5px] leading-[1.6] text-stone">{note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
