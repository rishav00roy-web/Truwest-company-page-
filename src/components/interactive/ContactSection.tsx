"use client";
import React from 'react';

interface ContactSectionProps {
  children: React.ReactNode;
  note?: string;
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const
};

const contactRows = [
  {
    label: 'Office',
    href: 'tel:+16045930197',
    value: '+1 (604) 593-0197',
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  },
  {
    label: 'Cell',
    href: 'tel:+17787081528',
    value: '(778) 708-1528',
    icon: (
      <svg {...iconProps}>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    )
  },
  {
    label: 'Email',
    href: 'mailto:info@truwestmortgage.com',
    value: 'info@truwestmortgage.com',
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 9.1 6.1a2 2 0 0 0 2.2 0L22 7" />
      </svg>
    )
  },
  {
    label: 'Address',
    href: 'https://maps.google.com/?q=215-12565+88+Ave+Surrey+BC+V3W+3J7',
    external: true,
    value: '215–12565 88 Ave, Surrey, BC V3W 3J7',
    icon: (
      <svg {...iconProps}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    label: 'Directions',
    href: 'https://www.google.com/maps/dir/?api=1&destination=215-12565+88+Ave,+Surrey,+BC+V3W+3J7',
    external: true,
    value: 'Get turn-by-turn directions to our office →',
    dataCta: 'directions',
    icon: (
      <svg {...iconProps}>
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    )
  },
  {
    label: 'Serving',
    href: '#contact',
    value: 'All of BC & Alberta: phone, video, in person',
    icon: (
      <svg {...iconProps}>
        <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2Z" />
        <path d="M9 4v14" />
        <path d="M15 6v14" />
      </svg>
    )
  },
  {
    label: 'Apply Online',
    href: 'https://velocity.newton.ca/sso/public.php?sc=136pf7uo80xqk',
    external: true,
    value: 'Start a Mortgage Application →',
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    )
  }
];

export default function ContactSection({ children, note }: ContactSectionProps) {
  return (
    <section className="bg-ink py-[140px] px-6 text-white" id="contact">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[80px] lg:gap-[120px] items-start">
          <div>
            <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-6">Contact Us</span>
            <h2 className="font-serif font-medium text-[clamp(38px,5vw,56px)] leading-[1.05] text-white mb-6">Twenty minutes. Straight answers.</h2>
            <p className="font-sans text-[18px] leading-[1.65] text-[#B8B4AC] mb-[60px]">Tell us about your situation. We respond within one business day.</p>

            <ul className="list-none m-0 p-0 border-t border-[#2C2C2A]">
              {contactRows.map(row => (
                <li key={row.label} className="group py-5 border-b border-[#2C2C2A] flex flex-col sm:flex-row sm:items-baseline sm:gap-[28px]">
                  <span className="flex items-center gap-2.5 w-[128px] shrink-0 mb-1 sm:mb-0">
                    <span className="text-[var(--bronze-dark-bg)] shrink-0 transition-transform duration-300 group-hover:scale-110">{row.icon}</span>
                    <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63]">{row.label}</span>
                  </span>
                  <a
                    className="font-mono text-[16px] text-[#EDEBE6] hover:text-bronze transition-all duration-300 group-hover:translate-x-1"
                    href={row.href}
                    {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(row.dataCta ? { 'data-cta': row.dataCta } : {})}
                  >
                    {row.value}
                  </a>
                </li>
              ))}
            </ul>
            {note && <p className="mt-6 font-sans text-[14px] text-[#B5B1A9] leading-[1.6]">{note}</p>}
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
          className="w-full h-full grayscale opacity-80"
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
