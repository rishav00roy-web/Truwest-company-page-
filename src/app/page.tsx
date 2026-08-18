import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dilmohanPortrait from '@public/images/dilmohan-aneja.jpg';
import FlagshipSection from '@/components/sections/FlagshipSection';
import ComparisonGrid from '@/components/sections/ComparisonGrid';
import Pullquote from '@/components/sections/Pullquote';
import ReviewWall from '@/components/sections/ReviewWall';
import PunchlineBanner from '@/components/sections/PunchlineBanner';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TruWest Mortgage | Self-Employed & Complex Mortgage Broker | BC & Alberta',
  description: 'Bespoke mortgage strategy for self-employed borrowers, investors, and complex financial situations across British Columbia and Alberta. Get direct access to an experienced broker.',
  alternates: {
    canonical: 'https://truwestmortgage.com'
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "TruWest Mortgage",
    "description": "Mortgage brokerage specializing in self-employed borrowers, commercial mortgages, real estate investors and complex financing.",
    "url": "https://truwestmortgage.com/",
    "telephone": "+1-604-593-0197",
    "email": "info@truwestmortgage.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "215-12565 88 Ave",
      "addressLocality": "Surrey",
      "addressRegion": "BC",
      "postalCode": "V3W 3J7",
      "addressCountry": "CA"
    },
    "areaServed": ["British Columbia", "Alberta"],
    "founder": {
      "@type": "Person",
      "name": "Dilmohan Aneja"
    },
    "sameAs": ["https://share.google/paWEQpy3IslpiACOP"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Editorial Hero */}
      {/* `hero-min-h` (globals.css) is 80svh with a vh fallback: mobile browsers resolve
          `vh` against the viewport with the URL bar retracted, so a `vh` hero is always
          taller than what the visitor can actually see on first paint. Horizontal padding
          lives on the inner wrapper, not the header, so the stat bar below can run edge
          to edge in both its in-flow (mobile) and pinned (md+) positions. */}
      <header className="hero-min-h relative bg-white text-ink flex flex-col justify-center items-center pt-28 md:pt-32 pb-0 md:pb-48 overflow-hidden border-b border-line" id="top">
        <div className="max-w-[1140px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 md:mb-12 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-bronze"></span>
            <span className="font-mono text-xs tracking-[0.22em] uppercase text-bronze">
              TruWest Mortgage
            </span>
            <span className="w-8 h-[1px] bg-bronze"></span>
          </div>
          
          <h1 className="font-serif font-medium text-[clamp(48px,8vw,96px)] leading-[1.05] tracking-[-0.01em] text-ink max-w-[900px] mb-6 md:mb-8">
            Banks read tax returns.<br/>
            <span className="text-bronze italic">We read businesses.</span>
          </h1>
          
          <p className="font-sans text-xl leading-relaxed text-stone max-w-[600px] mb-10 md:mb-12">
            Bespoke mortgage strategy for self-employed borrowers, investors, and complex financial situations. Get direct access to an experienced broker.
          </p>
          
          <div className="flex justify-center">
            <a href="https://cma.me/dilmohansingh-aneja/wizard?tid=bzlEG1fFfcn30EavNb2s" target="_blank" rel="noopener noreferrer" className="shine-cta !bg-ink !text-white px-10 py-5 font-sans font-medium text-[15px] tracking-[0.02em] hover:!bg-bronze transition-colors duration-300">
              Get Pre-Qualified in 60 Seconds
            </a>
          </div>
        </div>
        
        {/* Pinned to the bottom of the hero from md up, where it is a single 234px-tall
            row that `pb-48` reserves room for. Below md it wraps to two rows and no
            longer fits that reservation, so it sits in normal flow instead of being
            absolutely positioned on top of the CTA. */}
        <div className="w-full mt-12 md:mt-0 md:absolute md:bottom-0 md:left-0 bg-white border-t border-line">
          <div className="max-w-[1140px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-line">
            <div className="flex flex-col">
              <span className="font-serif text-4xl text-emerald mb-1">14+</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-stone">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl text-emerald mb-1">50+</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-stone">Lender Network</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl text-emerald mb-1">BC & AB</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-stone">Licensed</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl text-emerald mb-1">4.9/5</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-stone">Rating on Google</span>
            </div>
          </div>
        </div>
      </header>

      {/* Editorial Pathways */}
      <section className="bg-white py-[160px] px-6 border-b border-line" id="pathways">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[100px] items-start">
            <div className="flex flex-col border-t border-ink pt-8">
              <h2 className="font-serif font-medium text-[clamp(40px,5vw,56px)] leading-[1.05] text-ink mb-6">
                What brings you here?
              </h2>
              <p className="font-sans text-[16.5px] leading-[1.65] text-stone">
                Every mortgage situation is different. Standard bank underwriting isn&apos;t built for nuance. We build strategies that are.
              </p>
            </div>
            
            <div className="flex flex-col gap-0 border-t border-line">
              <Link href="/self-employed" className="group flex flex-col sm:flex-row sm:items-center justify-between py-12 border-b border-line hover:bg-[#F9F8F6] transition-colors duration-300 px-6 -mx-6">
                <div className="flex items-start gap-8">
                  <span className="text-bronze-dark-bg mt-1 shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <rect x="3" y="7" width="18" height="13" rx="2"/>
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      <path d="M3 12h18"/>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-4xl !font-medium !text-ink mb-3 group-hover:!text-bronze transition-colors">Self-Employed & Alternative</h3>
                    <p className="font-sans text-base !text-stone">Business owners, bruised credit, bank declines.</p>
                  </div>
                </div>
                <span className="text-bronze text-3xl mt-4 sm:mt-0 transform group-hover:translate-x-3 transition-transform duration-300">&rarr;</span>
              </Link>
              <Link href="/home-buyers-refinance" className="group flex flex-col sm:flex-row sm:items-center justify-between py-12 border-b border-line hover:bg-[#F9F8F6] transition-colors duration-300 px-6 -mx-6">
                <div className="flex items-start gap-8">
                  <span className="text-bronze-dark-bg mt-1 shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <path d="M3 11l9-8 9 8"/>
                      <path d="M5 10v10h14V10"/>
                      <path d="M10 20v-6h4v6"/>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-4xl !font-medium !text-ink mb-3 group-hover:!text-bronze transition-colors">Home Buyers & Refinancing</h3>
                    <p className="font-sans text-base !text-stone">First homes, renewals, refinancing, new to Canada.</p>
                  </div>
                </div>
                <span className="text-bronze text-3xl mt-4 sm:mt-0 transform group-hover:translate-x-3 transition-transform duration-300">&rarr;</span>
              </Link>
              <Link href="/commercial-investors" className="group flex flex-col sm:flex-row sm:items-center justify-between py-12 border-b border-line hover:bg-[#F9F8F6] transition-colors duration-300 px-6 -mx-6">
                <div className="flex items-start gap-8">
                  <span className="text-bronze-dark-bg mt-1 shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <rect x="4" y="3" width="16" height="18" rx="1"/>
                      <path d="M9 8h.01M9 12h.01M9 16h.01M15 8h.01M15 12h.01M15 16h.01"/>
                      <path d="M10 21v-4h4v4"/>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-4xl !font-medium !text-ink mb-3 group-hover:!text-bronze transition-colors">Commercial & Investors</h3>
                    <p className="font-sans text-base !text-stone">Portfolios, multi-family, land and development.</p>
                  </div>
                </div>
                <span className="text-bronze text-3xl mt-4 sm:mt-0 transform group-hover:translate-x-3 transition-transform duration-300">&rarr;</span>
              </Link>
              <Link href="/referral-partners" className="group flex flex-col sm:flex-row sm:items-center justify-between py-12 border-b border-line hover:bg-[#F9F8F6] transition-colors duration-300 px-6 -mx-6">
                <div className="flex items-start gap-8">
                  <span className="text-bronze-dark-bg mt-1 shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <circle cx="9" cy="8" r="3"/>
                      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
                      <circle cx="17" cy="8" r="2.5"/>
                      <path d="M15 14.2c2.8.4 5 2.9 5 5.8"/>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-4xl !font-medium !text-ink mb-3 group-hover:!text-bronze transition-colors">Realtors & Partners</h3>
                    <p className="font-sans text-base !text-stone">Send a scenario. Keep the deal alive.</p>
                  </div>
                </div>
                <span className="text-bronze text-3xl mt-4 sm:mt-0 transform group-hover:translate-x-3 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Employed */}
      <FlagshipSection
        id="selfemployed"
        eyebrow="Our specialty · Self-Employed Mortgages"
        title="You built a business. Now get the mortgage it deserves."
        intro="You write off expenses to keep taxes low. Smart. Then the bank uses that same low income to decline you. Not smart. This is exactly the kind of problem we know how to navigate."
        ctaText="Get Your Self-Employed File Reviewed, Free"
        ctaHref="#contact"
      >
        <ComparisonGrid
          leftTitle="WHAT THE BANK SEES"
          leftItems={[
            "Declared personal income that may not reflect the full strength of your business.",
            "Business deductions that can reduce the income recognized under traditional qualification.",
            "Standard underwriting criteria that may not capture the complete financial picture.",
            "A lending structure that may not fit your circumstances.",
            "Result: declined, or approved for far less than expected."
          ]}
          rightTitle="WHAT WE SEE"
          rightItems={[
            "The bigger financial picture behind your business and personal income.",
            "Corporate financials, dividends, business cash flow and available documentation.",
            "Lender programs designed for different types of self-employed borrowers.",
            "Multiple financing paths, not just one bank's lending policy.",
            "A strategy built around what is realistically possible."
          ]}
        />
        
        <Pullquote 
          quote="I’m a self employed person and I was struggling to get home loan for my 2nd house... He helped me to get best mortgage rate with peace of mind."
          author="sachin patel · Google review"
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-16">
          <div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bronze-dark-bg block mb-3">SOLE PROPRIETORS</span>
            <h3 className="font-serif font-medium text-[22px] text-white mb-2">Contractors, consultants, trades</h3>
            <p className="font-sans text-[14.5px] text-[#B8B4AC] leading-[1.6]">Depending on the lender and program, gross-up methods, business income and bank statements may help provide a more complete picture of qualifying income.</p>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bronze-dark-bg block mb-3">INCORPORATED</span>
            <h3 className="font-serif font-medium text-[22px] text-white mb-2">Business owners &amp; professionals</h3>
            <p className="font-sans text-[14.5px] text-[#B8B4AC] leading-[1.6]">Your personal tax return isn&apos;t always the whole story. Depending on the lender and program, corporate financials, dividends, cash flow and other documentation can help demonstrate the strength of your business.</p>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bronze-dark-bg block mb-3">NEWLY SELF-EMPLOYED</span>
            <h3 className="font-serif font-medium text-[22px] text-white mb-2">Less than two years in?</h3>
            <p className="font-sans text-[14.5px] text-[#B8B4AC] leading-[1.6]">A short self-employment history does not automatically mean there is no financing path. Your previous experience, industry, income, credit, down payment and overall file may all matter.</p>
          </div>
        </div>
      </FlagshipSection>

      {/* First-Time Buyers */}
      <section className="bg-white py-[140px] px-6 border-t border-line" id="firsttime">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-6">Your first mortgage shouldn’t feel like a test you didn’t study for.</h2>
              <p className="font-sans text-[18px] leading-[1.65] text-stone max-w-[560px] mb-6">We start with what you can actually afford; then you shop with numbers you trust.</p>
              <a className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300 mt-4" data-cta="qualification-tool" href="https://cma.me/dilmohansingh-aneja/wizard?tid=bzlEG1fFfcn30EavNb2s" target="_blank" rel="noopener noreferrer">
                Explore Options &rarr;
              </a>
            </div>
            <div>
              <ul className="border-t border-line">
                <li className="flex gap-4 items-baseline py-4 border-b border-line text-base text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>What you can realistically afford, before you shop</span></li>
                <li className="flex gap-4 items-baseline py-4 border-b border-line text-base text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Down payment sources: savings, FHSA, RRSP Home Buyers’ Plan, gifted funds</span></li>
                <li className="flex gap-4 items-baseline py-4 border-b border-line text-base text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Insurance, transfer taxes and the closing costs nobody warns you about</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <Pullquote 
              quote="As first-time homebuyers, we had many questions, and Dil and Mandeep always took the time to explain everything clearly and made sure we understood all our options."
              author="Jackie Gee · Google review"
            />
          </div>
        </div>
      </section>

      {/* Others */}
      <section className="py-[140px] px-6 bg-white" id="others">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-[80px] max-w-[700px]">Complex is our comfort zone.</h2>
          <div className="border-t border-line">
            {[
              { href: "/home-buyers-refinance", id: "newcomers", title: "New to Canada", desc: "Thin Canadian credit, foreign income. We know which lenders run real newcomer programs, and how to package the file." },
              { href: "/commercial-investors", id: "investors", title: "Real Estate Investors", desc: "The more doors you own, the harder standard qualification gets. We work with lenders who understand portfolios and rental income." },
              { href: "/commercial-investors", id: "commercial-row", title: "Commercial Mortgages", desc: "Multi-family, mixed-use, industrial, land. Financing structured for the deal, from institutional to private capital." },
              { href: "/commercial-investors", id: "construction", title: "Construction & Development", desc: "Custom homes, land development and construction need more than a standard mortgage. Structures across institutional, alternative and private capital." },
              { href: "/self-employed", id: "alternative", title: "Alternative & Private Lending", desc: "Bruised credit. Consumer proposal. A bank said no. A bridge back to A-lending, with the exit planned from day one." },
              { href: "/home-buyers-refinance", id: "renewals", title: "Renewals & Refinancing", desc: "Your bank's renewal letter is their best offer for them. Fifty lenders make it a negotiation." },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} id={item.id} className="group grid grid-cols-1 lg:grid-cols-[320px_1fr_auto] gap-4 lg:gap-10 items-baseline py-11 border-b border-line text-decoration-none hover:bg-[#FAFAF7] hover:translate-x-1 transition duration-300 -mx-4 px-4 lg:mx-0 lg:px-0">
                <h3 className="font-serif font-medium text-[32px] text-ink">{item.title}</h3>
                <p className="font-sans text-[16.5px] leading-[1.6] text-stone max-w-[580px]">{item.desc}</p>
                <span className="font-mono text-[14px] tracking-[0.05em] text-bronze whitespace-nowrap hidden sm:flex items-center min-h-[44px]">Start a file &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="bg-[#F5F3EE] py-[140px] px-6 mb-[140px]" id="commercial">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-6">Commercial Lending</span>
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-6">Commercial isn&apos;t a sideline. It&apos;s a specialty.</h2>
              <p className="font-sans text-[18px] leading-[1.65] text-stone max-w-[560px] mb-6">Commercial files live or die on structure: loan-to-value, debt coverage, lease strength, exit. Bring the deal early.</p>
              <a className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300 mt-4" data-cta="commercial-file" href="#contact">
                Explore Options &rarr;
              </a>
            </div>
            <div>
              <ul className="border-t border-[#DDD8CC]">
                <li className="flex gap-4 items-baseline py-4 border-b border-[#DDD8CC] text-base text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Multi-family, mixed-use, retail & office</span></li>
                <li className="flex gap-4 items-baseline py-4 border-b border-[#DDD8CC] text-base text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Industrial, warehouse & owner-occupied premises</span></li>
                <li className="flex gap-4 items-baseline py-4 border-b border-[#DDD8CC] text-base text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Land, construction & development</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PunchlineBanner />

      {/* Process */}
      <section className="py-[140px] px-6" id="process">
        <div className="max-w-[1140px] mx-auto border-t border-line pt-[120px]">
          <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-[80px]">Three steps. No mystery.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[60px]">
            <div className="flex flex-col">
              <span className="font-serif text-[64px] text-bronze italic leading-none mb-5">1</span>
              <h3 className="font-serif font-medium text-[26px] text-ink mb-3.5">Talk to Dil. Twenty minutes.</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-stone">We identify the key issues, the likely financing paths, and what’s needed to assess your file properly. No obligation, no credit check to talk.</p>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[64px] text-bronze italic leading-none mb-5">2</span>
              <h3 className="font-serif font-medium text-[26px] text-ink mb-3.5">We assess, structure and place your file.</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-stone">With your documents in hand we assess the full picture, structure the strategy, and approach the lenders best suited to the file.</p>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[64px] text-bronze italic leading-none mb-5">3</span>
              <h3 className="font-serif font-medium text-[26px] text-ink mb-3.5">Approval through funding.</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-stone">We manage lender conditions, appraisals and the professionals involved, keeping you informed through to completion.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Pullquote 
              quote="We were especially impressed with how fast the entire process moved; from our initial inquiry to final approval, it took less than two weeks."
              author="Anjana Dhingra · Google review"
            />
          </div>
        </div>
      </section>

      <CalculatorsCta />

      {/* About */}
      <section className="bg-[#F5F3EE] py-[140px] px-6" id="about">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-[100px] items-start">
            <div className="reveal-card aspect-[4/5] max-w-[320px] md:max-w-none mx-auto w-full">
              <div className="reveal-card__panel bg-ink px-7 pt-5 pb-6" aria-hidden="true">
                <p className="font-serif font-medium text-[21px] leading-tight text-white">Dilmohan &ldquo;Dil&rdquo; Aneja</p>
                <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-bronze-dark-bg mt-2.5">Managing Director &amp; Principal Broker</p>
              </div>
              <div className="reveal-card__face bg-[#F2EFE8] overflow-hidden">
                {/* Static import so the build can measure the file and inline a blur
                    preview; the portrait is far below the fold and therefore lazy, which
                    is exactly the case where an empty frame is visible while it loads. */}
                <Image
                  src={dilmohanPortrait}
                  alt="Dilmohan Aneja"
                  placeholder="blur"
                  sizes="(min-width: 1140px) 460px, (min-width: 768px) 42vw, 320px"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-6">Your broker</span>
              <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-8">Dilmohan &ldquo;Dil&rdquo; Aneja</h2>
              <div className="flex flex-col gap-5 text-[18px] leading-[1.65] text-stone max-w-[620px]">
                <p>Fourteen years of working through mortgage situations that don&apos;t always fit neatly into a bank&apos;s box.</p>
                <p>I’ve worked with homebuyers, business owners, self-employed borrowers, investors and clients facing complex financing situations.</p>
                <p>My approach: understand the whole financial picture, identify the real obstacles, then determine which financing paths are worth pursuing.</p>
                <p>Clients should have direct access to experienced advice, not be passed from one person to another.</p>
                <p>My job is clarity: what’s possible, what isn&apos;t, and the strongest next step.</p>
              </div>
              
              <p className="font-serif italic text-[32px] text-ink mt-10">Dil</p>
              
              <div className="font-mono text-[11.5px] tracking-[0.05em] text-stone leading-[2.2] mt-8 uppercase">
                MANAGING DIRECTOR & PRINCIPAL BROKER, TRUWEST MORTGAGE<br/>
                LICENSED &middot; BRITISH COLUMBIA & ALBERTA<br/>
                CMP TOP 75 BROKER &middot; 2020
              </div>
              
              <div className="mt-12">
                <Pullquote 
                  quote="From the very start, he was clear and transparent with the numbers, and in the end, those figures matched perfectly."
                  author="Vishvjit Grover · Google review"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewWall 
        title="What clients say about working with TruWest"
        reviews={[
          {
            quote: "I’m a self employed person and I was struggling to get home loan for my 2nd house. One of my friend referred me to Mr Dilmohan Aneja and all works well for me. He helped me to get best mortgage rate with peace of mind. He is very committed to his work and his team is very professional and prompt. I recommend him 100% if your looking for home loan. He is best.",
            author: "sachin patel · Dec 3, 2020 · Google",
            stars: 5
          },
          {
            quote: "Awesome team at TruWest Mortgage ! Dilmohan is one of the most professional and down to earth individual you will find . His hard work speaks volume when it comes to mortgages. He made things possible when others couldn’t . Highly recommended and greatly appreciated for all he does . Thank you Dilmohan for your great service and your awesome capabilities. So glad I chose you as my mortgage specialist . You are the Best !!!",
            author: "Jyoti Nath · Apr 28, 2021 · Google",
            stars: 5
          },
          {
            quote: "I recently had the working with Dilmohan for business mortgage needs, he was incredibly supportive and informative. His expertise and guidance were invaluable, ensuring I understood every step of the process. For anyone in need of mortgage assistance, I highly recommend Dilmohan - TruWest Mortgage. His professionalism, knowledge, and genuine care for his clients make him stand out in the industry.",
            author: "Sung Cin Par Cinpar · Apr 15, 2025 · Google",
            stars: 5
          },
          {
            quote: "I had an amazing experience working with Dilmohan Aneja. He and his team made the entire mortgage process smooth, stress-free, and easy to understand. From the very beginning, they were professional, patient, and always available to answer my questions. They explained all my options clearly and helped me secure a great rate. I truly felt like they had my best interests in mind every step of the way.",
            author: "Daljit Mangat · May 9, 2025 · Google",
            stars: 5
          },
          {
            quote: "We were introduced to Dilmohan through a family member who had previously gone through True west mortgage for his second home purchase. Dilmohan helped us to get second mortgage and refinance from the current property very easily for us. He was always accessible - any day or time - through email, phone-call, or text.",
            author: "Darshan Patel · May 4, 2021 · Google",
            stars: 5
          },
          {
            quote: "We refinanced our mortgage with Dilmohan recently and it was a great experience. He is really knowledgeable and professional. He suggested all the options with great detail and explained all the pros and cons. Also got a great rate for us. Highly recommended for everyone getting mortgages. We had many queries other than related to mortgage and he was able answered all our queries and questions.",
            author: "Baljinder Singh Rai · Apr 17, 2021 · Google",
            stars: 5
          }
        ]}
      />

      {/* Partners */}
      <section className="bg-white py-[140px] px-6 text-center" id="partners">
        <div className="max-w-[1140px] mx-auto border-t border-line pt-[100px]">
          <h2 className="font-serif font-medium text-[clamp(38px,5vw,66px)] leading-[1.05] text-ink max-w-[760px] mx-auto mb-7">Financing killed your deal? Send it here first.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-line border border-line mt-12 text-left">
            <div className="bg-white p-10 md:p-12">
              <span className="font-mono text-[11.5px] tracking-[0.18em] uppercase text-bronze block mb-5">For Realtors</span>
              <h3 className="font-serif font-medium text-[32px] text-ink mb-4.5">Keep the deal alive.</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-stone mb-8">Self-employed buyer. Newcomer. Complex income. A bank decline. Send it over: we’ll tell you quickly whether there looks to be a realistic path, and what it may take to keep the deal alive.</p>
              <ul className="border-t border-line mb-8">
                <li className="flex gap-3.5 items-baseline py-3 border-b border-line text-[15px] text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Fast, straight answers: fundable or not</span></li>
                <li className="flex gap-3.5 items-baseline py-3 border-b border-line text-[15px] text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Self-employed, newcomers, bruised credit, commercial and private</span></li>
                <li className="flex gap-3.5 items-baseline py-3 border-b border-line text-[15px] text-ink"><span className="text-bronze font-mono shrink-0">&rarr;</span><span>Direct broker communication: you’re never chasing updates</span></li>
              </ul>
              <Link href="/referral-partners" className="inline-flex items-center justify-center min-h-[48px] bg-transparent text-ink border border-ink px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-ink hover:text-white transition-colors duration-300">Send Me a Scenario</Link>
            </div>
            <div className="bg-white p-10 md:p-12">
              <span className="font-mono text-[11.5px] tracking-[0.18em] uppercase text-bronze block mb-5">For Financial Planners & Advisors</span>
              <h3 className="font-serif font-medium text-[32px] text-ink mb-4.5">The lending side of the plan.</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-stone mb-8">Your incorporated clients built careful structures: holdcos, dividends, retained earnings. Their financing should respect that work, not unwind it. And the client relationship stays exactly where it belongs: with you.</p>
              <Link href="/referral-partners" className="inline-flex items-center justify-center min-h-[48px] bg-transparent text-ink border border-ink px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-ink hover:text-white transition-colors duration-300 mt-6">Refer a Client</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection>
        <LeadQualificationWizard formName="lead-form" pageSource="homepage" />
      </ContactSection>
    </>
  );
}
