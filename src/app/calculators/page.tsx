import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import SubPageHero from '@/components/sections/SubPageHero';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import MortgageCalculators from '@/components/interactive/MortgageCalculators';

export const metadata: Metadata = {
  title: 'Mortgage Calculators | Payment, Affordability & Closing Costs | TruWest Mortgage',
  description: 'Run your own mortgage numbers: payment, affordability, BC property transfer tax and closing-cost calculators from TruWest Mortgage.',
  alternates: {
    canonical: 'https://truwestmortgage.com/calculators'
  }
};

export default function CalculatorsPage() {
  return (
    <>
      {/* Widget assets come from tools.bendigi.com and it verifies against api.bendigi.com */}
      <link rel="preconnect" href="https://tools.bendigi.com" />
      <link rel="preconnect" href="https://api.bendigi.com" />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Calculators' }
        ]}
        eyebrow="Mortgage Tools"
        title="Run your own numbers."
        lede="Payment, affordability, land transfer and closing-cost calculators, all in one place. Estimates for planning, not approvals, rate offers or advice."
        ctaText="Talk to Dil About Your Numbers &rarr;"
        ctaHref="#contact"
        dataCta="calculators-hero"
      />

      <section className="py-[100px] px-6 bg-[#F5F3EE]">
        <div className="max-w-[1140px] mx-auto">
          <MortgageCalculators hasPtt />

          <div className="mt-8 max-w-[760px] flex flex-col gap-3">
            <p className="font-sans text-[13px] text-stone leading-[1.6]">These calculators provide estimates for planning purposes only. They are not a mortgage approval, pre-approval or commitment to lend. Actual qualification depends on credit, income documentation, property details, lender guidelines, mortgage-insurance requirements and other factors.</p>
            <p className="font-sans text-[13px] text-stone leading-[1.6]">Estimates are intended for residential property and may not fully apply to commercial, mixed-use, industrial, development or other property types. Additional exemptions, rebates, surtaxes or special rules may apply. Individual lender programs, including several for self-employed borrowers, can produce very different results. This is exactly what a file review is for.</p>
          </div>

          <div className="mt-[80px] pt-[64px] border-t border-line">
            <h2 className="font-serif font-medium text-[clamp(28px,3.5vw,38px)] leading-[1.1] text-ink mb-4">Renewal, comparisons & more, from Canadian Mortgage App.</h2>
            <p className="font-sans text-[15px] leading-[1.6] text-stone max-w-[640px] mb-8">A wider set of specialty calculators (renewal, debt-service ratios and side-by-side scenario comparison), powered by our partner Canadian Mortgage App.</p>
            <div className="bg-white border border-line p-8 md:p-12">
              <div
                className="bendigi-calculators min-h-[520px]"
                // @ts-expect-error - bendigi widget custom attributes are not part of the DOM typings
                apikey="e14ae5e49319a630:7BRq84gZj5qS8m-pCcz1h8_fJUqNoE6E"
                terms="https://canadianmortgageapp.com/terms"
                theme="auto"
                navpositiontop="80px"
                navpositiontopmobile="66px"
                tools="all"
              ></div>
              <Script src="https://tools.bendigi.com/assets/calculators.js" />
            </div>
            <p className="mt-4 font-sans text-[13px] text-stone leading-[1.6]">Provided by Canadian Mortgage App and uses their own default rates, ratios and assumptions, which may be updated at any time. Use is subject to their <a href="https://canadianmortgageapp.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">terms of use</a>.</p>
          </div>

          <div className="mt-[52px] bg-ink p-[clamp(30px,4vw,46px)_clamp(28px,4.5vw,54px)] flex justify-between items-center gap-7 flex-wrap">
            <div>
              <h3 className="font-serif font-medium text-[clamp(24px,3vw,32px)] text-white mb-2">Every calculator, in your pocket.</h3>
              <p className="text-[#B5B1A9] text-[15px] max-w-[520px]">The Mortgage App: free to download. Payment, affordability, land transfer and closing-cost calculators, connected directly to Dil.</p>
            </div>
            <a
              href="https://cma.me/dilmohansingh-aneja/download"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="calculator-app"
              className="inline-flex items-center justify-center min-h-[48px] px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] bg-white text-ink border border-white hover:bg-bronze hover:border-bronze hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Get the Free App
            </a>
          </div>
        </div>
      </section>

      <ContactSection>
        <LeadQualificationWizard formName="lead-form" pageSource="calculators" />
      </ContactSection>
    </>
  );
}
