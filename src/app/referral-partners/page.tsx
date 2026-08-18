import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import partnersHero from '@public/images/partners-hero.jpg';
import SplitSection from '@/components/sections/SplitSection';
import StepCardGrid from '@/components/sections/StepCardGrid';
import ComparisonGrid from '@/components/sections/ComparisonGrid';
import FaqSection from '@/components/sections/FaqSection';
import ReviewWall from '@/components/sections/ReviewWall';
import ContactSection from '@/components/interactive/ContactSection';
import ScenarioReviewForm from '@/components/interactive/ScenarioReviewForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Referral Partners: Realtors & Advisors | TruWest',
  description: 'Keep your real estate deals alive. Direct broker communication for Realtors, financial planners, and accountants in BC and Alberta.',
  alternates: {
    canonical: 'https://truwestmortgage.com/referral-partners'
  }
};

export default function ReferralPartnersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Referral Partners - TruWest Mortgage",
    "description": "Information and scenario submission for Realtors, Financial Advisors, and Accountants."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <SubPageHero 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Referral Partners' }
        ]}
        eyebrow="For Realtors, Advisors & Accountants"
        title="Financing killed your deal? Send it here first."
        lede="Self-employed buyers, newcomers, complex income, bank declines. We tell you quickly whether there is a realistic path, and what it takes to keep the deal alive."
        ctaText="Send a Scenario for Review &rarr;"
        ctaHref="#contact"
        dataCta="partner-scenario"
        image={{
          src: partnersHero,
          alt: "A real estate agent reviewing paperwork with a couple inside a home",
        }}
      />

      <SplitSection
        id="for-realtors"
        eyebrow="For Realtors"
        title="Save the deal. Keep the client."
        paragraphs={[
          "A bank decline doesn’t mean the client can’t buy: it just means they don’t fit that specific bank’s box.",
          "When a subject removal is looming, you need fast, straight answers. We handle the files that need structuring: self-employed, bruised credit, alternative/B-lending, and private bridges."
        ]}
        ctaText="Submit a Scenario"
        ctaHref="#contact"
        tickItems={[
          "Fast answers: Is it fundable or not?",
          "Direct broker communication (no call centres)",
          "B-lending and private capital expertise",
          "Updates at every milestone of the file"
        ]}
      />

      <section className="bg-white py-[110px]" id="for-advisors">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">For Financial Planners & Accountants</span>
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[20px]">The lending side of the plan you built.</h2>
          <p className="font-sans text-[17px] leading-[1.65] text-stone mb-[48px] max-w-[700px]">Your incorporated and self-employed clients built careful structures: holdcos, dividends, retained earnings, tax planning that took years to get right. Financing shouldn’t unwind that work to satisfy one lender’s form.</p>
          <ComparisonGrid
            leftTitle="What can go wrong"
            leftItems={[
              "A lender insists on higher personal income: triggering unplanned dividends or salary and a tax bill nobody budgeted for.",
              "Corporate structure treated as an obstacle rather than documented and understood.",
              "Assets under management liquidated for a down payment when borrowing capacity already existed.",
              "Your client is handed to an institution that then cross-sells them investment products."
            ]}
            rightTitle="How we work with you"
            rightItems={[
              "We look for lender programs that read corporate financials, dividends and retained earnings as they are.",
              "We flag the tax consequences of an income-raising strategy before it’s executed, and refer that decision back to you and their accountant.",
              "We consider borrowing structures that leave an investment portfolio intact where that’s the better outcome.",
              "We don’t sell investments, and we don’t compete with you. The client relationship stays where it belongs."
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-[110px]" id="commitment">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[14px]">What you can expect, every time.</h2>
          <p className="font-sans text-[17px] leading-[1.65] text-stone max-w-[640px] mb-[48px]">A referral puts your reputation on the line as much as ours. These are the standards we hold ourselves to, not aspirations.</p>
          <StepCardGrid
            columns={3}
            items={[
              {
                title: 'Fast first response',
                description: 'Every scenario is acknowledged within one business day. Where we have enough information, that first reply includes our initial read on viability rather than a request to book a call.'
              },
              {
                title: 'A straight answer, including no',
                description: 'If a file isn’t financeable as presented, we tell you plainly and explain what would need to change. We won’t hold a deal open on optimism while your timeline runs out.'
              },
              {
                title: 'Transparent status through to funding',
                description: 'You’ll know where the file stands at each stage (submission, approval, conditions and funding) without having to chase for an update.'
              }
            ]}
          />
          <p className="font-sans text-[12.5px] text-stone max-w-[780px] leading-[1.75] mt-[48px]">Response times reflect our standard practice, and complex or incomplete files may require more information before we can give a meaningful read. Nothing here is a commitment to lend or an assurance of any particular financing outcome, which always depends on lender criteria and the client’s circumstances.</p>
        </div>
      </section>

      <ReviewWall
        title="The team behind the deal."
        reviews={[
          {
            quote: "Dilmohan helped us to get second mortgage and refinance from the current property very easily for us. He was always accessible - any day or time - through email, phone-call, or text.",
            author: "Darshan Patel · May 4, 2021 · Google",
            stars: 5
          }
        ]}
      />

      <FaqSection 
        title="Partner FAQ"
        items={[
          {
            question: "How fast can you review a declined file?",
            answer: "If you send over a scenario with the client's income, down payment, and credit outline, we can typically tell you within a few hours if there is a realistic path worth pursuing."
          },
          {
            question: "Do you handle commercial deals?",
            answer: "Yes. Multi-family, mixed-use, industrial, land, and construction. Commercial deals rely heavily on the asset's economics (DSCR, NOI), and we can quickly assess if the numbers align with institutional or private lender expectations."
          },
          {
            question: "My client was declined because they are self-employed. What are the options?",
            answer: "Many A-lenders rely solely on a 2-year average of T1 net income. We work with alternative lenders who can use business bank statements, gross revenue, or corporate retained earnings to prove the ability to service the debt."
          },
          {
            question: "Does my client stay my client?",
            answer: "Yes. We arrange the financing and send them back to you. We don’t sell investment products and we don’t compete with advisors for the wealth relationship or with realtors for the next transaction."
          },
          {
            question: "Do you work across BC and Alberta?",
            answer: "We work with clients across British Columbia and Alberta, from the Surrey office. Meetings happen by phone, video or in person depending on what suits your client."
          },
          {
            question: "What do you need from me to review a scenario?",
            answer: "File type, the key obstacle, approximate property value and the timeline, that’s usually enough for a first read. Please don’t send your client’s personal or financial documents through the form; we’ll arrange a secure method and obtain their consent before reviewing anything identifiable."
          }
        ]}
        ctaText="Discuss a File with Dil &rarr;"
        ctaHref="#contact"
      />

      <ContactSection note="Urgent file? Call the cell directly: a subject removal deadline is a phone call, not a form.">
        <ScenarioReviewForm formName="partner-scenario" variant="referral-partner" />
      </ContactSection>
    </>
  );
}
