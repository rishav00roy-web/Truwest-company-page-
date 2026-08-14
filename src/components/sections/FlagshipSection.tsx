import React from 'react';

interface FlagshipSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  ctaText?: string;
  ctaHref?: string;
  children: React.ReactNode;
}

export default function FlagshipSection({ id, eyebrow, title, intro, ctaText, ctaHref, children }: FlagshipSectionProps) {
  return (
    <section className="py-[110px] bg-ink text-white" id={id}>
      <div className="wrap">
        <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase block mb-[22px] text-bronze-dark-bg">{eyebrow}</span>
        <h2 className="font-serif font-medium text-[clamp(42px,6vw,76px)] leading-[1.06] tracking-[-0.01em] max-w-[820px] text-white mb-5">{title}</h2>
        {intro && <p className="max-w-[680px] text-[#B8B4AC] my-0 mb-[80px] text-[19px] leading-[1.6]">{intro}</p>}
        {children}
        {ctaText && ctaHref && (
          <div className="mt-[100px] text-center">
            <a href={ctaHref} className="inline-flex items-center justify-center min-h-[48px] px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] transition-colors duration-300 bg-white text-ink border border-white hover:bg-bronze hover:border-bronze hover:text-white">
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
