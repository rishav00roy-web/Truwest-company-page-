import React from 'react';
import Link from 'next/link';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}

/**
 * Shared shell for the privacy and terms pages. Narrower measure than the marketing
 * pages -- these are read, not scanned -- and no CTA, because a legal page that tries
 * to sell is a legal page nobody trusts.
 */
export default function LegalPage({ eyebrow, title, updated, intro, children }: LegalPageProps) {
  return (
    <>
      <header className="py-[96px] sm:py-[84px] bg-white border-b border-line">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-stone">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{title}</span>
          </nav>
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">{eyebrow}</span>
          <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.05] tracking-[-0.01em] mb-6 max-w-[800px] font-serif font-medium">
            {title}
          </h1>
          <p className="text-stone text-[18px] max-w-[620px] leading-[1.65]">{intro}</p>
          <p className="mt-8 font-mono text-[11px] tracking-[0.14em] uppercase text-stone">Last updated {updated}</p>
        </div>
      </header>

      <section className="py-[100px] bg-[#F5F3EE]">
        <div className="wrap">
          <div className="max-w-[720px] flex flex-col gap-10">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif font-medium text-[26px] leading-[1.15] text-ink">{heading}</h2>
      <div className="flex flex-col gap-4 text-[16.5px] leading-[1.7] text-stone">{children}</div>
    </div>
  );
}
