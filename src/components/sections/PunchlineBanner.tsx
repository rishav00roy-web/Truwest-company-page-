import React from 'react';

export default function PunchlineBanner() {
  return (
    <section className="py-[10px] pb-[130px] text-center overflow-hidden" id="punch">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-serif font-medium leading-[1.05] tracking-[-0.01em]">
          <span className="block text-[clamp(46px,8.5vw,108px)]" style={{ WebkitTextStroke: '1.5px var(--color-ink)', color: 'transparent' }}>
            You find it.
          </span>
          <span className="block text-[clamp(46px,8.5vw,108px)] text-ink">
            We <em className="italic text-bronze relative after:content-[''] after:absolute after:left-[2%] after:right-[2%] after:bottom-[0.04em] after:h-[2px] after:bg-bronze after:scale-x-100 after:origin-left transition-transform duration-800 delay-850">fund</em> it.
          </span>
        </h2>
      </div>
    </section>
  );
}
