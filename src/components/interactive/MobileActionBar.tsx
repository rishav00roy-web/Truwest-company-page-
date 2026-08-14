"use client";

import React, { useEffect, useState } from 'react';

export default function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 420);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-40 md:hidden transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex items-stretch bg-white border-t border-line shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <a
          href="tel:+16045930197"
          data-cta="call-mobile"
          className="flex-1 flex items-center justify-center min-h-[56px] font-sans font-medium text-[14px] text-ink border-r border-line"
        >
          Call (604) 593-0197
        </a>
        <a
          className="flex-1 flex items-center justify-center min-h-[56px] font-sans font-medium text-[14px] bg-ink text-white"
          data-cta="qualification-tool"
          href="https://cma.me/dilmohansingh-aneja/wizard?tid=bzlEG1fFfcn30EavNb2s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Pre-Qualified
        </a>
      </div>
    </div>
  );
}
