import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import StepCardGrid from '@/components/sections/StepCardGrid';
import FaqSection from '@/components/sections/FaqSection';
import ReviewWall from '@/components/sections/ReviewWall';
import ContactSection from '@/components/interactive/ContactSection';
import ScenarioReviewForm from '@/components/interactive/ScenarioReviewForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Mortgage Broker Surrey & BC | TruWest',
  description: 'Commercial property financing, multi-family, land development, and multi-property investor portfolio structuring in BC & Alberta.',
  alternates: {
    canonical: 'https://truwestmortgage.com/commercial-investors'
  }
};

export default function CommercialInvestorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Mortgage Brokerage and Real Estate Investment Financing",
    "provider": {
      "@type": "FinancialService",
      "name": "TruWest Mortgage",
      "telephone": "+1-604-593-0197",
      "email": "info@truwestmortgage.com"
    },
    "areaServed": ["British Columbia", "Alberta"],
    "url": "https://truwestmortgage.com/commercial-investors"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <SubPageHero 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Commercial & Investors' }
        ]}
        eyebrow="Commercial, Construction & Investment · BC & Alberta"
        title="Commercial & Real Estate Investment Mortgages"
        lede="From institutional capital to private debt, we structure commercial loans, construction draws, and portfolio financing around deal economics."
        ctaText="Discuss a Commercial File &rarr;"
        ctaHref="#contact"
        dataCta="commercial-file"
      />

      <section className="bg-[#F5F3EE] py-[110px]" id="asset-types">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">What we finance</span>
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[14px]">Commercial property categories.</h2>
          <p className="font-sans text-[17px] leading-[1.65] text-stone max-w-[700px] mb-[70px]">Every asset class underwrites differently. What follows is how lenders tend to look at each one, and what we prepare before the file goes anywhere.</p>
          
          <StepCardGrid 
            columns={3}
            items={[
              { badge: 'Asset 01', title: 'Multi-family & apartment', description: 'Purpose-built rental, NOI, DSCR, rent roll analysis.' },
              { badge: 'Asset 02', title: 'Mixed-use', description: 'Retail at grade with residential above. Structuring commercial vs residential components.' },
              { badge: 'Asset 03', title: 'Retail & office', description: 'Lease covenants, remaining terms, and rollover risk analysis.' },
              { badge: 'Asset 04', title: 'Industrial & warehouse', description: 'Clear height, zoning, environmental review and specialized use considerations.' },
              { badge: 'Asset 05', title: 'Owner-occupied premises', description: 'Blending property security with your core business cash flow.' },
              { badge: 'Asset 06', title: 'Land & development', description: 'Raw land, assembly, zoning stage, and exit credibility.' }
            ]}
          />
        </div>
      </section>

      <section className="bg-ink py-[140px] px-6 text-[#F7F3EA]" id="construction">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-6">Construction & development</span>
          <h2 className="font-serif font-medium text-[clamp(38px,5.5vw,68px)] leading-[1.05] max-w-[760px] text-white mb-6">Construction financing is a schedule, not just a loan.</h2>
          <p className="font-sans text-[17.5px] leading-[1.6] max-w-[600px] text-[#B8B4AC] my-[26px] mb-[70px]">Land acquisition, servicing and vertical construction each carry different risk, and are usually financed differently. The draw schedule, not the rate, is what determines whether a project stays liquid.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-[60px] border-t border-[#2C2C2A] pt-[60px]">
            <div>
              <span className="font-mono text-[11.5px] tracking-[0.2em] text-bronze uppercase block mb-4">STAGE 01</span>
              <h3 className="font-serif font-medium text-[20px] md:text-[22px] tracking-[0.02em] mb-[12px] text-white">Land acquisition</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-[#B8B4AC]">Advance rates reflecting zoning stage & holding costs.</p>
            </div>
            <div>
              <span className="font-mono text-[11.5px] tracking-[0.2em] text-bronze uppercase block mb-4">STAGE 02</span>
              <h3 className="font-serif font-medium text-[20px] md:text-[22px] tracking-[0.02em] mb-[12px] text-white">Servicing & serviced lots</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-[#B8B4AC]">Funding infrastructure to buildable lot stage.</p>
            </div>
            <div>
              <span className="font-mono text-[11.5px] tracking-[0.2em] text-bronze uppercase block mb-4">STAGE 03</span>
              <h3 className="font-serif font-medium text-[20px] md:text-[22px] tracking-[0.02em] mb-[12px] text-white">Construction draw management</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-[#B8B4AC]">Staged advances against cost consultant inspections with builders lien holdbacks.</p>
            </div>
          </div>
          
          <div className="mt-[80px] text-center">
            <a href="#contact" className="inline-flex items-center justify-center min-h-[54px] bg-white text-ink px-8 py-3 font-sans font-medium text-[16px] tracking-[0.02em] hover:bg-bronze hover:text-white transition-colors duration-300">
              Discuss a Construction File &rarr;
            </a>
          </div>
        </div>
      </section>

      <SplitSection
        id="investors"
        eyebrow="Real estate investors"
        title="The ceiling most investors hit isn’t equity. It’s qualification."
        paragraphs={[
          "As you build a portfolio, the rules change. Rental income offsets, gross add-backs, and net T1 mechanics dictate borrowing capacity far more than the equity in your properties.",
          "We structure financing across holding companies and personal title, mapping out lender preservation strategies so you don't exhaust your options too early."
        ]}
        ctaText="Review My Portfolio &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Rental income treatment and offset rules",
          "Property count limits across A-lenders",
          "Personal vs. corporate title considerations",
          "Navigating existing maturities and renewals",
          "Equity take-out refinancing for next purchase",
          "Lender preservation strategy"
        ]}
        note="Rental income treatment, property count limits and corporate lending policy vary by lender and change over time. Nothing here is a commitment to lend or a statement of any lender’s current policy."
      />

      <section className="bg-ink py-[140px] px-6 text-[#F7F3EA]" id="capital">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-6">Sources of capital</span>
          <h2 className="font-serif font-medium text-[clamp(38px,5.5vw,68px)] leading-[1.05] max-w-[760px] text-white mb-6">Institutional or private? It depends on the deal, not the borrower.</h2>
          <p className="font-sans text-[17.5px] leading-[1.6] max-w-[600px] text-[#B8B4AC] my-[26px] mb-[70px]">Neither source is better. Institutional capital is usually cheaper and slower; private capital is usually faster and more expensive. The right answer follows the timeline, the story and the exit.</p>
          
          <div className="overflow-x-auto border border-[#2C2C2A]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <caption className="text-left font-mono text-[11px] tracking-[0.14em] uppercase text-[#6E6A63] p-[16px_24px] bg-[#1C1C1C] border-b border-[#2C2C2A] caption-top">General characteristics: actual terms vary by lender, asset and file</caption>
              <thead>
                <tr>
                  <th className="bg-[#1C1C1C] p-[20px_24px] font-mono text-[11px] tracking-[0.2em] uppercase text-[#6E6A63] border-b border-[#2C2C2A] border-r">Consideration</th>
                  <th className="bg-ink p-[20px_24px] font-mono text-[11px] tracking-[0.2em] uppercase text-bronze border-b border-[#2C2C2A] border-r">Institutional</th>
                  <th className="bg-ink p-[20px_24px] font-mono text-[11px] tracking-[0.2em] uppercase text-bronze border-b border-[#2C2C2A]">Private</th>
                </tr>
              </thead>
              <tbody className="text-[#B8B4AC] font-sans text-[15px]">
                <tr className="border-b border-[#2C2C2A] transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Typical cost</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">Lower rates & fees</td>
                  <td className="p-[20px_24px]">Higher rates & fees</td>
                </tr>
                <tr className="border-b border-[#2C2C2A] transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Speed to funding</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">Slower (30–90+ days)</td>
                  <td className="p-[20px_24px]">Faster (10–21 days)</td>
                </tr>
                <tr className="border-b border-[#2C2C2A] transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Underwriting focus</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">DSCR, historical NOI, covenant strength</td>
                  <td className="p-[20px_24px]">LTV, property quality, credible exit plan</td>
                </tr>
                <tr className="border-b border-[#2C2C2A] transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Documentation</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">Extensive (Phase I/II, appraisals, full financials)</td>
                  <td className="p-[20px_24px]">Pragmatic (focused heavily on the asset itself)</td>
                </tr>
                <tr className="border-b border-[#2C2C2A] transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Typical term</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">3, 5, or 10 years</td>
                  <td className="p-[20px_24px]">1 to 2 years (bridge)</td>
                </tr>
                <tr className="border-b border-[#2C2C2A] transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Best suited to</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">Stabilized assets with strong operating history</td>
                  <td className="p-[20px_24px]">Acquisition bridges, repositioning, quick closings</td>
                </tr>
                <tr className="transition-colors hover:bg-[#1C1C1C]">
                  <td className="p-[20px_24px] border-r border-[#2C2C2A] font-medium text-white">Exit strategy</td>
                  <td className="p-[20px_24px] border-r border-[#2C2C2A]">Hold and amortize</td>
                  <td className="p-[20px_24px]">Refinance to institutional or sell asset</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-[80px] text-center">
            <a href="#contact" className="inline-flex items-center justify-center min-h-[54px] bg-white text-ink px-8 py-3 font-sans font-medium text-[16px] tracking-[0.02em] hover:bg-bronze hover:text-white transition-colors duration-300">
              Talk Through the Structure &rarr;
            </a>
          </div>
        </div>
      </section>

      <ReviewWall 
        title="In their own words."
        reviews={[
          {
            quote: "I recently had the working with Dilmohan for business mortgage needs, he was incredibly supportive and informative. His expertise and guidance were invaluable, ensuring I understood every step of the process. For anyone in need of mortgage assistance, I highly recommend Dilmohan - TruWest Mortgage. His professionalism, knowledge, and genuine care for his clients make him stand out in the industry.",
            author: "Sung Cin Par Cinpar · Apr 15, 2025 · Google",
            stars: 5
          }
        ]}
      />

      <FaqSection 
        title="Commercial & Investor FAQ"
        items={[
          {
            question: "What is the difference between commercial and residential qualification?",
            answer: "Residential mortgages focus heavily on your personal income and debt servicing. Commercial mortgages focus primarily on the asset itself: specifically its Debt Service Coverage Ratio (DSCR), Net Operating Income (NOI), and the strength of the leases or business operating within it."
          },
          {
            question: "How much down payment do I need for a multi-family property?",
            answer: "For standard commercial multi-family (5+ units), typical loan-to-value (LTV) maxes out around 75% to 85%, meaning a 15% to 25% down payment. If it qualifies for CMHC MLI Select (energy efficiency or affordability criteria), LTV can sometimes push up to 95%."
          },
          {
            question: "Do you handle land and construction financing?",
            answer: "Yes. We arrange financing across the full development lifecycle: raw land acquisition, servicing/infrastructure, and vertical construction draws. We place these with both institutional lenders and private capital depending on the project phase."
          },
          {
            question: "When does private capital make more sense than a bank?",
            answer: "Private capital is a tool for speed and flexibility. It makes sense when you need to close an acquisition in 14 days, when the asset needs significant repositioning before it qualifies for bank financing, or when you are bridging a temporary gap."
          },
          {
            question: "I've been declined because I own too many rentals. Can you help?",
            answer: "Yes. Many A-lenders cap the number of doors they will finance for a single borrower. We work with specialized lenders who do not have arbitrary door limits and who use more generous rental income offset calculations."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <ScenarioReviewForm formName="lead-form-commercial" />
      </ContactSection>
    </>
  );
}
