import React from 'react';

interface FaqSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { question: string; answer: string }[];
  ctaText?: string;
  ctaHref?: string;
}

export default function FaqSection({ id = 'faq', eyebrow, title, subtitle, items, ctaText, ctaHref }: FaqSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-[110px]" id={id}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap border-t border-line pt-[100px]">
        {eyebrow && <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">{eyebrow}</span>}
        <h2 className="text-[clamp(34px,4.5vw,54px)] mb-[14px]">{title}</h2>
        {subtitle && <p className="text-stone max-w-[600px] mb-[48px] text-[17px]">{subtitle}</p>}

        <div className="border-t border-line">
          {items.map((item, idx) => (
            <details key={idx} className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center py-[24px] cursor-pointer font-serif font-medium text-[22px] md:text-[26px] hover:text-bronze transition-colors">
                <span>{item.question}</span>
                <span className="text-bronze text-[24px] transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="pb-[32px] text-[16px] text-[#4A463F] leading-[1.65] max-w-[800px]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {ctaText && ctaHref && (
          <div className="mt-[64px]">
            <a href={ctaHref} className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300">{ctaText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
