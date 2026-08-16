"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function PunchlineBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Anyone who asked for less motion gets the finished underline outright: see the
  // motion-reduce utilities below, which override the swept-in state.
  return (
    <section ref={bannerRef} className="py-[10px] pb-[130px] text-center overflow-hidden" id="punch">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-serif font-medium leading-[1.05] tracking-[-0.01em]">
          <span className="block text-[clamp(46px,8.5vw,108px)]" style={{ WebkitTextStroke: '1.5px var(--color-ink)', color: 'transparent' }}>
            You find it.
          </span>
          <span className="block text-[clamp(46px,8.5vw,108px)] text-ink">
            We <em className={`italic text-bronze relative after:content-[''] after:absolute after:left-[2%] after:right-[2%] after:bottom-[0.04em] after:h-[2px] after:bg-bronze after:origin-left after:transition-transform after:duration-700 after:ease-out motion-reduce:after:transition-none motion-reduce:after:scale-x-100 ${revealed ? 'after:scale-x-100' : 'after:scale-x-0'}`}>fund</em> it.
          </span>
        </h2>
      </div>
    </section>
  );
}
