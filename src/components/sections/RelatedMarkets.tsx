import React from 'react';
import Link from 'next/link';

interface RelatedMarketsProps {
  title: string;
  subtitle: string;
  markets: { label: string; description: string; href: string }[];
}

export default function RelatedMarkets({ title, subtitle, markets }: RelatedMarketsProps) {
  return (
    <section className="py-[110px] bg-[#F5F3EE]">
      <div className="max-w-[1140px] mx-auto px-6">
        <h2 className="font-serif font-medium text-[clamp(30px,4vw,44px)] leading-[1.06] tracking-[-0.01em] text-ink mb-[14px]">{title}</h2>
        <p className="font-sans text-[17px] leading-[1.65] text-stone max-w-[600px] mb-[48px]">{subtitle}</p>
        <ul className={`list-none p-0 m-0 grid grid-cols-1 gap-[1px] bg-line border border-line ${markets.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {markets.map((m, idx) => (
            <li key={idx}>
              <Link href={m.href} className="group flex flex-col gap-2 bg-white hover:bg-white p-[32px] h-full transition-colors duration-300">
                <span className="flex items-center gap-3 font-serif font-medium text-[20px] text-ink group-hover:text-bronze transition-colors duration-300">
                  {m.label}
                  <span className="text-bronze font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-6px] group-hover:translate-x-0 duration-300">&rarr;</span>
                </span>
                <span className="font-sans text-[14.5px] text-stone leading-[1.5]">{m.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
