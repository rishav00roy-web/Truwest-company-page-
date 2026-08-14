import React from 'react';

interface SplitSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  ctaText?: string;
  ctaHref?: string;
  tickItems: string[];
  note?: string;
}

export default function SplitSection({ id, eyebrow, title, paragraphs, ctaText, ctaHref, tickItems, note }: SplitSectionProps) {
  return (
    <section className="py-[110px]" id={id}>
      <div className="max-w-[1140px] mx-auto">
        <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">{eyebrow}</span>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[64px] items-start">
          <div>
            <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.06] tracking-[-0.01em] text-ink mb-[20px]">{title}</h2>
            {paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[18px] leading-[1.65] text-[#4A463F] max-w-[540px] mb-[18px]">
                {p}
              </p>
            ))}
            {ctaText && ctaHref && (
              <a href={ctaHref} className="mt-[12px] inline-flex items-center justify-center min-h-[48px] px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] border border-ink text-ink hover:bg-ink hover:text-white transition-colors duration-300">
                {ctaText}
              </a>
            )}
          </div>
          <div>
            <ul className="list-none p-0 m-0 border-t border-line">
              {tickItems.map((item, idx) => (
                <li key={idx} className="flex gap-[16px] items-baseline py-[15px] border-b border-line text-[15.5px] text-[#4A463F]">
                  <span className="text-bronze font-mono shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {note && <p className="mt-[48px] font-sans text-[12.5px] text-[#635F57] max-w-[780px] leading-[1.75]">{note}</p>}
      </div>
    </section>
  );
}
