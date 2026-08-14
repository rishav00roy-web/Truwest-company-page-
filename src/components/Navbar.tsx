"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
      <div className="wrap flex items-center justify-between h-[80px]">
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image src="/images/logo.png" alt="TruWest Mortgage" width={160} height={34} className="h-[34px] w-auto object-contain" />
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2"
          aria-label="Toggle navigation" 
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className={`block w-6 h-[2px] bg-ink transition-transform ${navOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-ink transition-opacity ${navOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-ink transition-transform ${navOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        {/* Links */}
        <ul className={`${navOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-none border-line p-6 md:p-0 gap-6 md:gap-8 items-start md:items-center shadow-lg md:shadow-none`}>
          <li><Link href="/self-employed" className="font-sans text-[15.5px] font-medium text-stone hover:text-ink whitespace-nowrap" onClick={() => setNavOpen(false)}>Self-Employed</Link></li>
          <li><Link href="/home-buyers-refinance" className="font-sans text-[15.5px] font-medium text-stone hover:text-ink whitespace-nowrap" onClick={() => setNavOpen(false)}>Home Buyers</Link></li>
          <li><Link href="/commercial-investors" className="font-sans text-[15.5px] font-medium text-stone hover:text-ink whitespace-nowrap" onClick={() => setNavOpen(false)}>Commercial</Link></li>
          <li><Link href="/referral-partners" className="font-sans text-[15.5px] font-medium text-stone hover:text-ink whitespace-nowrap" onClick={() => setNavOpen(false)}>Partners</Link></li>
          <li className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center w-full md:w-auto mt-4 md:mt-0">
            <a href="tel:+16045930197" className="font-sans text-[15.5px] font-medium text-stone hover:text-ink whitespace-nowrap" onClick={() => setNavOpen(false)}>Call 604-593-0197</a>
            <a href="https://cma.me/dilmohansingh-aneja/wizard?tid=bzlEG1fFfcn30EavNb2s" target="_blank" rel="noopener noreferrer" className="bg-ink text-white px-5 py-2.5 text-[14.5px] font-medium tracking-wide hover:bg-bronze transition-colors flex items-center justify-center min-h-[44px]">
              Pre-Qualify
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
