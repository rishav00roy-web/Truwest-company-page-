import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import StepCardGrid from '@/components/sections/StepCardGrid';
import FlagshipSection from '@/components/sections/FlagshipSection';
import ComparisonGrid from '@/components/sections/ComparisonGrid';
import FaqSection from '@/components/sections/FaqSection';
import ReviewWall from '@/components/sections/ReviewWall';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
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
        lede="Your first mortgage shouldn't feel like a test you didn't study for. We start with what you can actually afford; then you shop with numbers you trust."
        ctaText="Find Out What You Qualify For &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
        image={{
          src: "/images/first-time-buyers-hero.jpg",
          alt: "A couple carrying moving boxes and house keys into their new home",
        }}
      />

      <SplitSection
        id="first-time"
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
          "Budgeting for Property Transfer Tax and closing costs",
          "Credit review and improvement strategies"
        ]}
        note="This overview is general information, not tax or financial advice. Program rules, limits and eligibility are set by government and lenders and change over time; confirm current details for your own situation."
      />

      <section className="bg-white py-[110px]" id="down-payment-sources">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[70px]">Your down payment has more sources than you think.</h2>
          <StepCardGrid
            columns={4}
            items={[
              {
                title: 'First Home Savings Account (FHSA)',
                description: 'A registered account designed for first-home savings, with contribution and lifetime limits set by the federal government. Eligibility and limits apply: worth confirming with your accountant or financial planner alongside your mortgage plan.'
              },
              {
                title: 'RRSP Home Buyers’ Plan',
                description: 'Allows eligible first-time buyers to withdraw from an RRSP toward a home purchase, repaid over a set schedule. Withdrawal limits, holding periods and repayment terms are set by CRA and change from time to time.'
              },
              {
                title: 'Gifted down payments',
                description: 'Many lenders accept gifted funds from an immediate family member, supported by a signed gift letter and evidence the funds are a gift rather than a loan. Requirements vary by lender: we’ll tell you exactly what yours needs.'
              },
              {
                title: 'Budgeting for Property Transfer Tax and closing costs',
                description: 'BC charges a provincial property transfer tax, with first-time buyer and newly built home exemptions that may reduce or eliminate it on qualifying purchases; Alberta has no provincial land transfer tax but still carries registration and closing costs. Thresholds and eligibility rules change: confirm your situation before you budget for closing.'
              }
            ]}
          />
        </div>
      </section>

      <FlagshipSection
        id="refinance"
        eyebrow="Equity refinance & debt consolidation"
        title="Equity is only useful if the plan behind it is sound."
        intro="Rolling high-interest debt into a mortgage can lower a monthly payment, but it also moves unsecured debt onto your home and can extend how long you pay for it. That trade-off deserves a straight conversation, not a sales pitch."
        ctaText="Review My Refinance Options &rarr;"
        ctaHref="#contact"
      >
        <ComparisonGrid
          leftTitle="What people usually ask"
          leftItems={[
            "“Can I lower my monthly payment?”",
            "“Can I pull out equity for a renovation?”",
            "“Should I consolidate my cards and line of credit?”",
            "“What will it cost me to break my current term?”"
          ]}
          rightTitle="What we work through with you"
          rightItems={[
            "The full cost over the remaining amortization, not just the new monthly figure.",
            "Prepayment penalties, appraisal, legal and discharge costs, quantified before you decide.",
            "Whether a refinance, a HELOC or a second mortgage actually fits the goal.",
            "What happens to the debt you consolidate, and the plan to keep it from returning.",
            "Whether doing nothing is the better answer this year."
          ]}
        />
      </FlagshipSection>

      <SplitSection
        id="renewals"
        eyebrow="Mortgage renewals"
        title="Your bank’s renewal letter is their best offer, for them."
        paragraphs={[
          "Renewal is the one moment your mortgage is fully portable, and the one moment most people do nothing. Signing the letter that arrives in the mail is the easiest thing to do, and it is rarely the most competitive option available to you.",
          "A renewal handled properly is a negotiation: your current lender competes against every other lender we can place your file with. Sometimes your existing lender wins, and it wins on better terms than the letter offered.",
          "Start the conversation about four months before your maturity date. That’s enough runway to secure a rate hold, weigh the switch costs, and avoid being rushed into a decision by a deadline."
        ]}
        ctaText="Review My Renewal"
        ctaHref="#contact"
        tickItems={[
          "What your current lender is actually offering versus the wider market",
          "Switch costs (discharge, legal and appraisal) weighed against any benefit",
          "Fixed versus variable, and the term length that suits your plans",
          "Prepayment privileges, portability and penalty calculations in the fine print",
          "Whether to consolidate debt or access equity at the same time",
          "Rate holds so a rising market doesn’t decide for you"
        ]}
        note="Whether a switch or an early renewal makes sense depends on your lender, term, penalty structure and circumstances. Results vary and no particular outcome or saving is implied."
      />

      <section className="bg-white py-[110px]" id="scenarios">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[70px]">Beyond the first home.</h2>
          <StepCardGrid
            columns={1}
            items={[
              {
                title: 'New to Canada',
                description: 'Thin Canadian credit and foreign income shouldn’t lock you out of the market. We work with lenders who run specific newcomer programs and know how to package the file.'
              }
            ]}
          />
        </div>
      </section>

      <CalculatorsCta />

      <ReviewWall 
        title="Homebuyers, in their own words."
        reviews={[
          {
            quote: "As first-time homebuyers, we had many questions, and Dil and Mandeep always took the time to explain everything clearly and made sure we understood all our options. Their professionalism, patience, and dedication made what could have been a stressful experience so much easier.",
            author: "Jackie Gee · March 2026 · Google",
            stars: 5
          },
          {
            quote: "Dilmohan is one of the most professional and down to earth individual you will find. His hard work speaks volume when it comes to mortgages. He made things possible when others couldn’t. Highly recommended and greatly appreciated for all he does.",
            author: "Jyoti Nath · Apr 28, 2021 · Google",
            stars: 5
          }
        ]}
      />

      <FaqSection 
        title="Home Buyer FAQ"
        items={[
          {
            question: "What is the minimum down payment required in Canada?",
            answer: "For a home under $500,000, the minimum is 5%. For a home between $500,000 and $1,499,999, you need 5% on the first $500k and 10% on the portion above that. Homes at $1.5M or above require a 20% minimum down payment."
          },
          {
            question: "What is the mortgage stress test?",
            answer: "The stress test (OSFI B-20) requires lenders to prove you can afford your mortgage payments if interest rates go up. You must qualify at a rate that is 2% higher than your contract rate, or 5.25%, whichever is higher."
          },
          {
            question: "How does the BC Property Transfer Tax work for first-time buyers?",
            answer: "If you are a Canadian citizen or permanent resident, have lived in BC for a year, and are buying your first home anywhere in the world for under $835,000, you may be fully exempt. Partial exemptions phase out up to $860,000 (and higher thresholds apply for newly built homes). Thresholds change: confirm current figures with Dil before budgeting."
          },
          {
            question: "Should I wait for my bank’s renewal offer?",
            answer: "You should review it, but you should not sign it blindly. Banks often send renewal letters with posted or uncompetitive rates, hoping you sign for convenience. A broker can check that rate against 50+ other lenders."
          },
          {
            question: "Can I use gifted money for my down payment?",
            answer: "Yes. Most lenders allow a down payment to be gifted from an immediate family member (parent, grandparent, sibling). You will need a signed gift letter confirming the money does not need to be repaid."
          },
          {
            question: "How much down payment do I need to buy in Metro Vancouver?",
            answer: "Canadian minimums are tiered: 5% on the first $500,000, 10% on the portion between $500,000 and $1.5M, and 20% at $1.5M and above. Given Surrey and Metro Vancouver prices, many buyers land in the tiered band, which is where the arithmetic surprises people. Run your number through our affordability calculator before you shop."
          },
          {
            question: "Can I combine the FHSA and the RRSP Home Buyers’ Plan?",
            answer: "Many first-time buyers use both, and gifted funds from immediate family alongside them. Each program has its own eligibility rules, contribution and withdrawal limits, and repayment terms set by government, and those change. Confirm current figures with your accountant; then we’ll build the mortgage around what you actually have."
          },
          {
            question: "Does refinancing to consolidate debt actually make sense?",
            answer: "Sometimes. It can lower a monthly payment, but it moves unsecured debt onto your home and can stretch how long you pay for it. The honest test is total cost over the remaining amortization, including penalty, appraisal and legal costs, and whether the debt is likely to return. We’ll run that with you before you decide."
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
