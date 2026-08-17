import React from 'react';
import Link from 'next/link';

export default function CalculatorsCta() {
  return (
    <section className="py-[140px] px-6 bg-[#F5F3EE] text-center" id="calculators">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-6">Run your own numbers.</h2>
        <p className="font-sans text-[18px] leading-[1.65] text-stone mb-10 max-w-[560px] mx-auto">Payment, affordability, land transfer and closing-cost calculators, all in one place.</p>
        <Link href="/calculators" className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300">
          Open the Calculators &rarr;
        </Link>
      </div>
    </section>
  );
}
