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
      />

      <SplitSection
        id="for-realtors"
        eyebrow="For Realtors"
        title="Save the deal. Keep the client."
        paragraphs={[
          "A bank decline doesn’t mean the client can’t buy — it just means they don’t fit that specific bank’s box.",
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
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[70px]">The lending side of the plan.</h2>
          <StepCardGrid 
            columns={3}
            items={[
              {
                badge: 'Respect the Structure',
                title: 'Corporate complexity',
                description: 'Your incorporated clients built careful structures—holdcos, dividends, retained earnings. Their financing should respect that work, not unwind it.'
              },
              {
                badge: 'Preserve the Relationship',
                title: 'You keep the client',
                description: 'We do not sell wealth management, insurance, or accounting services. We handle the debt structuring and hand the client back. The relationship stays exactly where it belongs: with you.'
              },
              {
                badge: 'Portfolio Growth',
                title: 'Investor capacity',
                description: 'When your clients want to acquire more real estate, we map the lender preservation strategy so they don’t hit an arbitrary brick wall on property #4.'
              }
            ]}
          />
        </div>
      </section>

      <ReviewWall 
        title="The team behind the deal."
        reviews={[
          {
            quote: "Dilmohan helped us to get second mortgage and refinance from the current property very easily for us. He was always accessible - any day or time - through email, phone-call, or text.",
            author: "Darshan Patel · Google review",
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
          }
        ]}
        ctaText="Discuss a File with Dil &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <ScenarioReviewForm formName="partner-scenario" />
      </ContactSection>
    </>
  );
}
