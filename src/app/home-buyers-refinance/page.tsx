import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import StepCardGrid from '@/components/sections/StepCardGrid';
import FaqSection from '@/components/sections/FaqSection';
import ReviewWall from '@/components/sections/ReviewWall';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import MortgageCalculators from '@/components/interactive/MortgageCalculators';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Buyer & Refinancing Mortgage Broker Surrey | TruWest',
  description: 'First-time home buyers, mortgage renewals, and equity refinancing in Surrey, BC and across Alberta. Get real numbers before you shop.',
  alternates: {
    canonical: 'https://truwestmortgage.com/home-buyers-refinance'
  }
};

export default function HomeBuyersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Mortgage Brokerage",
    "provider": {
      "@type": "FinancialService",
      "name": "TruWest Mortgage",
      "telephone": "+1-604-593-0197",
      "email": "info@truwestmortgage.com"
    },
    "areaServed": ["British Columbia", "Alberta"],
    "url": "https://truwestmortgage.com/home-buyers-refinance"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <SubPageHero 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Home Buyers & Refinance' }
        ]}
        eyebrow="Residential mortgages · BC & Alberta"
        title="First-time buyers, renewals and refinancing."
        lede="Your first mortgage shouldn't feel like a test you didn't study for. We start with what you can actually afford—then you shop with numbers you trust."
        ctaText="Find Out What You Qualify For &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="first-time"
        eyebrow="First-time buyers"
        title="We run the numbers so you can run the search."
        paragraphs={[
          "Online calculators give you a guess. A real pre-qualification gives you a ceiling.",
          "We review your income, debts and down payment to tell you exactly what you can afford, what your monthly payments will look like, and how much cash you actually need to close."
        ]}
        ctaText="Get Pre-Qualified"
        ctaHref="#contact"
        tickItems={[
          "True affordability and stress-test limits",
          "Down payment strategies (FHSA, RRSP, Gifted)",
          "Budgeting for BC Property Transfer Tax and closing costs",
          "Credit review and improvement strategies"
        ]}
      />

      <section className="bg-white py-[110px]" id="scenarios">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">Other residential files</span>
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[70px]">Beyond the first home.</h2>
          <StepCardGrid 
            columns={3}
            items={[
              {
                badge: 'Scenario 01',
                title: 'Renewals & Transfers',
                description: 'Your bank’s renewal letter is their best offer for them. We make lenders compete for your maturity date to ensure you get the right rate and terms for the next five years.'
              },
              {
                badge: 'Scenario 02',
                title: 'Refinancing & Equity',
                description: 'Access the equity in your home for renovations, debt consolidation, or investing. We run the penalty calculations to see if breaking your current term makes mathematical sense.'
              },
              {
                badge: 'Scenario 03',
                title: 'New to Canada',
                description: 'Thin Canadian credit and foreign income shouldn’t lock you out of the market. We work with lenders who run specific newcomer programs and know how to package the file.'
              }
            ]}
          />
        </div>
      </section>

      <MortgageCalculators hasPtt={true} />

      <ReviewWall 
        title="Homebuyers, in their own words."
        reviews={[
          {
            quote: "As first-time homebuyers, we had many questions, and Dil and Mandeep always took the time to explain everything clearly and made sure we understood all our options. Their professionalism, patience, and dedication made what could have been a stressful experience so much easier.",
            author: "Jackie Gee · Google review",
            stars: 5
          },
          {
            quote: "Dilmohan is one of the most professional and down to earth individual you will find. His hard work speaks volume when it comes to mortgages. He made things possible when others couldn’t. Highly recommended and greatly appreciated for all he does.",
            author: "Jyoti Nath · Google review",
            stars: 5
          }
        ]}
      />

      <FaqSection 
        title="Home Buyer FAQ"
        items={[
          {
            question: "What is the minimum down payment required in Canada?",
            answer: "For a home under $500,000, the minimum is 5%. For a home between $500,000 and $999,999, you need 5% on the first $500k, and 10% on the portion above that. Homes $1M or over require a 20% minimum down payment."
          },
          {
            question: "What is the mortgage stress test?",
            answer: "The stress test (OSFI B-20) requires lenders to prove you can afford your mortgage payments if interest rates go up. You must qualify at a rate that is 2% higher than your contract rate, or 5.25% — whichever is higher."
          },
          {
            question: "How does the BC Property Transfer Tax work for first-time buyers?",
            answer: "If you are a Canadian citizen or permanent resident, have lived in BC for a year, and are buying your first home anywhere in the world for under $500,000, you may be fully exempt. Partial exemptions exist up to $525,000 (and higher for newly built homes)."
          },
          {
            question: "Should I wait for my bank’s renewal offer?",
            answer: "You should review it, but you should not sign it blindly. Banks often send renewal letters with posted or uncompetitive rates, hoping you sign for convenience. A broker can check that rate against 50+ other lenders."
          },
          {
            question: "Can I use gifted money for my down payment?",
            answer: "Yes. Most lenders allow a down payment to be gifted from an immediate family member (parent, grandparent, sibling). You will need a signed gift letter confirming the money does not need to be repaid."
          }
        ]}
        ctaText="Start Your Pre-Qualification &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-residential" pageSource="home-buyers-refinance" />
      </ContactSection>
    </>
  );
}
