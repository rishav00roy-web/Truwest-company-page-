"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LINK_BASE =
  'font-sans text-[14px] font-medium whitespace-nowrap transition-colors text-white/65 hover:text-white';

const CTA_HREF = 'https://cma.me/dilmohansingh-aneja/wizard?tid=bzlEG1fFfcn30EavNb2s';
// No `display` utility here on purpose. Tailwind v4 emits `.inline-flex` after
// `.hidden`, so a class list holding both resolves to inline-flex and `hidden`
// silently does nothing -- which is what put this desktop-only CTA inside the
// mobile island, overflowing it. Each call site adds its own display class.
const CTA_CLASS =
  'bg-white text-ink rounded-[9px] px-4 py-2 text-[13.5px] font-semibold tracking-[0.01em] hover:bg-bronze hover:text-white transition-colors items-center justify-center min-h-[38px] whitespace-nowrap shrink-0';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const close = () => setNavOpen(false);

  return (
    // Wrapper stays sticky and transparent so it still reserves layout space,
    // while the island inside it is what reads as the bar.
    <nav className="sticky top-0 z-50 px-4 pt-3 pb-1">
      <div className="relative mx-auto w-full lg:w-fit bg-ink rounded-[14px] shadow-[0_10px_34px_rgba(22,22,22,0.28)]">
        <div className="flex items-center justify-between gap-6 xl:gap-8 h-[62px] px-4 lg:px-5">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-85 transition-opacity" onClick={close}>
            {/* Mark only, not the full lockup: the wide wordmark-plus-tagline logo is
                what makes a compact island impossible to fit. */}
            <Image src="/images/mark.png" alt="" aria-hidden width={123} height={128} priority className="h-[27px] w-auto object-contain" />
            <span className="font-serif font-medium text-[18px] leading-none text-white tracking-[0.01em] whitespace-nowrap">
              TruWest <span className="text-white/55">Mortgage</span>
            </span>
          </Link>

          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 shrink-0 ml-auto"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            aria-controls="main-nav"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className={`block w-6 h-[2px] bg-white transition-transform ${navOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-opacity ${navOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-transform ${navOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>

          {/* Absolute-centring this list collapses the w-fit island (the links leave
              the flow), so it stays in the flow and takes the space between the logo
              and the CTA. Below lg the same list is the drop-down under the island. */}
          <ul
            id="main-nav"
            className={`${navOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:static top-[62px] left-0 w-full lg:w-auto lg:flex-1 lg:justify-center bg-ink lg:bg-transparent rounded-b-[14px] lg:rounded-none p-6 lg:p-0 gap-5 lg:gap-4 xl:gap-[18px] items-start lg:items-center border-t border-white/10 lg:border-0`}
          >
            <li><Link href="/self-employed" className={LINK_BASE} onClick={close}>Self-Employed</Link></li>
            <li><Link href="/home-buyers-refinance" className={LINK_BASE} onClick={close}>First-Time Buyers</Link></li>
            <li><Link href="/commercial-investors" className={LINK_BASE} onClick={close}>Commercial</Link></li>
            <li><Link href="/referral-partners" className={LINK_BASE} onClick={close}>Partners</Link></li>
            <li><Link href="/calculators" className={LINK_BASE} onClick={close}>Calculators</Link></li>
            {/* Homepage anchors. All nine links only fit inside the island from xl up,
                so between lg and xl these stay in the menu with the rest. */}
            <li className="lg:hidden xl:block"><Link href="/#others" className={LINK_BASE} onClick={close}>All Services</Link></li>
            <li className="lg:hidden xl:block"><Link href="/#process" className={LINK_BASE} onClick={close}>Process</Link></li>
            <li className="lg:hidden xl:block"><Link href="/#about" className={LINK_BASE} onClick={close}>About</Link></li>
            <li><Link href="/#contact" className={LINK_BASE} onClick={close}>Contact</Link></li>

            {/* Phone and CTA belong to the drop-down on small screens only: above lg
                the CTA is rendered once, outside this list, pinned to the right. */}
            <li className="flex flex-col gap-4 w-full mt-2 lg:hidden">
              <a href="tel:+16045930197" className={LINK_BASE} onClick={close}>Call 604-593-0197</a>
              <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={`${CTA_CLASS} inline-flex`} onClick={close}>
                Apply Now
              </a>
            </li>
          </ul>

          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={`${CTA_CLASS} hidden lg:inline-flex`}>
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
