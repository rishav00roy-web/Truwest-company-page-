import React from 'react';
import Link from 'next/link';

interface SubPageHeroProps {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  lede: string;
  ctaText: string;
  ctaHref: string;
  dataCta?: string;
}

export default function SubPageHero({ breadcrumbs, eyebrow, title, lede, ctaText, ctaHref, dataCta }: SubPageHeroProps) {
  return (
    <header className="py-[96px] sm:py-[84px] bg-[#FCFCFA] border-b border-[#E8E5DE]">
      <div className="wrap">
        <nav className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-[#635F57]">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#161616] transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-[#161616]">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
            </React.Fragment>
          ))}
        </nav>
        <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">{eyebrow}</span>
        <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.05] tracking-[-0.01em] mb-6 max-w-[800px] font-serif font-medium">{title}</h1>
        <p className="text-[#635F57] text-[18px] max-w-[620px] mb-10 leading-[1.65]">{lede}</p>
        <Link href={ctaHref} className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300" data-cta={dataCta}>
          {ctaText}
        </Link>
      </div>
    </header>
  );
}
