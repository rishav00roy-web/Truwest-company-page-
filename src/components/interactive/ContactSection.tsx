"use client";
import React from 'react';

interface ContactSectionProps {
  children: React.ReactNode;
}

export default function ContactSection({ children }: ContactSectionProps) {
  return (
    <section className="bg-ink py-[140px] px-6 text-white" id="contact">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[80px] lg:gap-[120px] items-start">
          <div>
            <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-6">Contact Us</span>
            <h2 className="font-serif font-medium text-[clamp(38px,5vw,56px)] leading-[1.05] text-white mb-6">Twenty minutes. Straight answers.</h2>
            <p className="font-sans text-[18px] leading-[1.65] text-[#B8B4AC] mb-[60px]">Tell us about your situation. We respond within one business day.</p>
            
            <ul className="list-none m-0 p-0 border-t border-[#2C2C2A]">
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Office</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" href="tel:+16045930197">+1 (604) 593-0197</a>
              </li>
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Cell</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" href="tel:+17787081528">(778) 708-1528</a>
              </li>
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Email</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" href="mailto:info@truwestmortgage.com">info@truwestmortgage.com</a>
              </li>
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Address</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" href="https://maps.google.com/?q=215-12565+88+Ave+Surrey+BC+V3W+3J7" target="_blank" rel="noopener noreferrer">215–12565 88 Ave, Surrey, BC V3W 3J7</a>
              </li>
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Directions</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" data-cta="directions" href="https://www.google.com/maps/dir/?api=1&destination=215-12565+88+Ave,+Surrey,+BC+V3W+3J7" target="_blank" rel="noopener noreferrer">
                  Get turn-by-turn directions to our office &rarr;
                </a>
              </li>
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Serving</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" href="#contact">All of BC & Alberta — phone, video, in person</a>
              </li>
              <li className="py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[40px]">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] w-[100px] shrink-0 mb-1 sm:mb-0">Apply Online</span>
                <a className="font-sans text-[16.5px] text-[#EDEBE6] hover:text-bronze transition-colors" href="https://velocity.newton.ca/sso/public.php?sc=136pf7uo80xqk" target="_blank" rel="noopener noreferrer">Start a Mortgage Application &rarr;</a>
              </li>
            </ul>
          </div>
          <div className="bg-[#1C1C1C] border border-[#2C2C2A] p-8 md:p-12 relative overflow-hidden group">
            {children}
          </div>
        </div>
      </div>
      
      <div className="relative mt-[140px] h-[500px] border-t border-[#2C2C2A]">
        <iframe 
          src="https://www.google.com/maps?q=215-12565+88+Ave,+Surrey,+BC+V3W+3J7&output=embed" 
          title="TruWest Mortgage Location"
          loading="lazy"
          allowFullScreen
          className="w-full h-full grayscale opacity-80 mix-blend-luminosity"
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6">
          <a href="https://www.google.com/maps/dir/?api=1&destination=215-12565+88+Ave,+Surrey,+BC+V3W+3J7" target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300 shadow-xl">
            Get Directions &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
