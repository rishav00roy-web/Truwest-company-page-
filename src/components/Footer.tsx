import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink py-[120px] border-t border-[#2C2C2A]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[60px] mb-[100px]">
          <div>
            <Link href="/" className="mb-8 block">
              <span className="font-serif font-medium text-[24px] text-white tracking-tight">TruWest.</span>
            </Link>
            <p className="mb-8 max-w-[320px] text-[15px] leading-[1.65] text-[#B8B4AC] font-sans">
              Bespoke mortgage strategy for self-employed borrowers, investors and complex financial situations.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] text-white font-sans tracking-wide">Call: <a href="tel:+16045930197" className="hover:text-bronze transition-colors duration-300">(604) 593-0197</a></p>
              <p className="text-[14px] text-white font-sans tracking-wide">Email: <a href="mailto:info@truwestmortgage.com" className="hover:text-bronze transition-colors duration-300">info@truwestmortgage.com</a></p>
            </div>
          </div>
          
          <div>
            <span className="block mb-[28px] text-[#6E6A63] font-mono text-[11.5px] tracking-[0.2em] uppercase">Specialties</span>
            <ul className="flex flex-col gap-[16px] text-[14.5px] font-sans text-[#EDEBE6]">
              <li><Link href="/self-employed" className="hover:text-bronze transition-colors duration-300">Self-Employed Mortgages</Link></li>
              <li><Link href="/commercial-investors" className="hover:text-bronze transition-colors duration-300">Commercial Financing</Link></li>
              <li><Link href="/commercial-investors" className="hover:text-bronze transition-colors duration-300">Investment Portfolios</Link></li>
              <li><Link href="/home-buyers-refinance" className="hover:text-bronze transition-colors duration-300">First-Time Home Buyers</Link></li>
              <li><Link href="/home-buyers-refinance" className="hover:text-bronze transition-colors duration-300">Renewals & Refinancing</Link></li>
            </ul>
          </div>
          
          <div>
            <span className="block mb-[28px] text-[#6E6A63] font-mono text-[11.5px] tracking-[0.2em] uppercase">Service Areas</span>
            <ul className="flex flex-col gap-[16px] text-[14.5px] font-sans text-[#EDEBE6]">
              <li><Link href="/mortgage-broker-surrey" className="hover:text-bronze transition-colors duration-300">Surrey</Link></li>
              <li><Link href="/mortgage-broker-vancouver" className="hover:text-bronze transition-colors duration-300">Vancouver</Link></li>
              <li><Link href="/mortgage-broker-burnaby" className="hover:text-bronze transition-colors duration-300">Burnaby</Link></li>
              <li><Link href="/mortgage-broker-langley" className="hover:text-bronze transition-colors duration-300">Langley</Link></li>
              <li><Link href="/locations" className="text-bronze hover:text-white transition-colors duration-300 mt-2 block tracking-wide">All Locations &rarr;</Link></li>
            </ul>
          </div>
          
          <div>
            <span className="block mb-[28px] text-[#6E6A63] font-mono text-[11.5px] tracking-[0.2em] uppercase">Company</span>
            <ul className="flex flex-col gap-[16px] text-[14.5px] font-sans text-[#EDEBE6]">
              <li><Link href="/referral-partners" className="hover:text-bronze transition-colors duration-300">Referral Partners</Link></li>
              <li><a href="https://velocity.newton.ca/sso/public.php?sc=136pf7uo80xqk" target="_blank" rel="noopener noreferrer" className="hover:text-bronze transition-colors duration-300">Apply Online</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-[40px] border-t border-[#2C2C2A] flex flex-col md:flex-row justify-between gap-[32px] text-[12.5px] text-[#6E6A63] font-sans">
          <div className="max-w-[700px]">
            <p className="mb-2 text-[#9C988F]">&copy; {new Date().getFullYear()} TruWest Mortgage. All rights reserved. Licensed in British Columbia and Alberta.</p>
            <p className="leading-[1.75]">
              Disclaimer: The tools and calculators on this website are for estimation purposes only and do not constitute financial advice, approval, or a rate offer. Borrowing limits, rates, and qualification criteria change frequently. Speak directly with a licensed broker for numbers specific to your situation.
            </p>
          </div>
          <div className="flex gap-[24px] font-mono text-[11px] tracking-[0.1em] uppercase">
            <span className="hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors duration-300">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
