import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import selfEmployedHero from '@public/images/self-employed-hero.jpg';
import FlagshipSection from '@/components/sections/FlagshipSection';
import ComparisonGrid from '@/components/sections/ComparisonGrid';
import StepCardGrid from '@/components/sections/StepCardGrid';
import FaqSection from '@/components/sections/FaqSection';
import ReviewWall from '@/components/sections/ReviewWall';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self-Employed Mortgage Broker Surrey BC | TruWest',
  description: 'Specialized mortgage solutions for self-employed borrowers, business owners, and corporate contractors across BC & Alberta. Qualify using corporate cash flow.',
  alternates: {
    canonical: 'https://truwestmortgage.com/self-employed'
  }
};

export default function SelfEmployedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Self-Employed Mortgage Brokerage",
    "provider": {
      "@type": "FinancialService",
      "name": "TruWest Mortgage",
      "telephone": "+1-604-593-0197",
      "email": "info@truwestmortgage.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "215-12565 88 Ave",
        "addressLocality": "Surrey",
        "addressRegion": "BC",
        "postalCode": "V3W 3J7",
        "addressCountry": "CA"
      }
    },
    "areaServed": ["British Columbia", "Alberta"],
    "url": "https://truwestmortgage.com/self-employed"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <SubPageHero 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Self-Employed Mortgages' }
        ]}
        eyebrow="Self-Employed Mortgages · BC & Alberta"
        title="Self-Employed Mortgage Broker Solutions in BC & Alberta"
        lede="Bypass rigid bank income calculations. We structure custom approvals using corporate financials, dividends, and business cash flow."
        ctaText="Get Your Self-Employed File Reviewed &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
        image={{
          src: selfEmployedHero,
          alt: "A self-employed potter standing in his own workshop, surrounded by finished work",
        }}
      />

      <FlagshipSection
        id="comparison"
        title="What banks see vs. what TruWest sees."
        intro="You write off expenses to keep taxes low. Smart. Then the bank uses that same low income to decline you. Not smart. This is exactly the kind of problem we know how to navigate."
        ctaText="Get Your Self-Employed File Reviewed &rarr;"
        ctaHref="#contact"
      >
        <ComparisonGrid
          leftTitle="WHAT THE BANK SEES"
          leftItems={[
            "Declared personal income that may not reflect the full strength of your business.",
            "Business deductions that can reduce the income recognized under traditional qualification.",
            "Two years of averaged tax returns that punish recent growth.",
            "Standard underwriting criteria that may not capture the complete financial picture.",
            "A single lending policy that may not fit your circumstances.",
            "Result: declined, or approved for far less than expected."
          ]}
          rightTitle="WHAT WE SEE"
          rightItems={[
            "The bigger financial picture behind your business and personal income.",
            "Corporate financials, dividends, retained earnings and business cash flow.",
            "Business bank statements and revenue trends instead of just tax returns.",
            "Lender programs designed specifically for self-employed borrowers.",
            "Multiple financing paths, not just one bank's lending policy.",
            "A strategy built around what is realistically possible."
          ]}
        />
      </FlagshipSection>

      <section className="bg-white py-[110px]" id="borrower-types">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[70px]">Three self-employed files. Three different approaches.</h2>
          <StepCardGrid 
            columns={3}
            items={[
              {
                title: 'Sole Proprietors',
                description: 'Contractors, consultants and trades. Depending on the lender and program, gross-up methods, business income and bank statements may help provide a more complete picture of qualifying income.'
              },
              {
                title: 'Incorporated Business Owners',
                description: 'Your personal tax return isn\'t always the whole story. Corporate financials, dividends, retained earnings and cash flow can help demonstrate the strength of your business.'
              },
              {
                title: 'Business-for-Self, under 2 years',
                description: 'A short self-employment history does not automatically mean there is no financing path. Your previous experience, industry, income, credit, down payment and overall file may all matter.'
              }
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-[110px]" id="exit-strategy">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">Stated income & alternative lending</span>
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[20px]">If the A-lender says no, that’s a starting point, not the end.</h2>
          <p className="font-sans text-[17px] leading-[1.65] text-stone mb-[70px] max-w-[700px]">Alternative (B-lender) and private financing can bridge a self-employed file that doesn’t fit today. Used properly, it is a planned route with an exit, not a permanent home.</p>
          <StepCardGrid 
            columns={3}
            items={[
              {
                title: 'Place the file honestly',
                description: 'We position the file with stated income or alternative programs, ensuring terms and costs are set plainly and clearly.'
              },
              {
                title: 'Use the term to strengthen',
                description: 'We use the mortgage term to build a 2-year picture, clean up credit, and keep corporate filings current.'
              },
              {
                title: 'Plan the exit from day one',
                description: 'We map the move back to A-lending before you even sign, and review your file well ahead of renewal.'
              }
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-[110px]" id="documents">
        <div className="max-w-[1140px] mx-auto px-6 border-t border-line pt-[100px]">
          <h2 className="font-serif font-medium text-[clamp(34px,4.5vw,52px)] leading-[1.05] text-ink mb-[14px]">What we’ll usually ask for.</h2>
          <p className="font-sans text-[17px] leading-[1.65] text-stone max-w-[600px] mb-[48px]">Not every lender asks for everything. Having these ready simply makes the assessment faster and the options clearer.</p>
          
          <div className="border-t border-line">
            {[
              { q: 'Business bank statements', bullets: [
                'Typically 6-12 months of business account statements',
                'Used by some programs to evidence revenue and cash flow',
                'Consistent deposits matter more than any single month'
              ] },
              { q: 'T1 Generals', bullets: [
                'Usually the two most recent years, complete with all schedules',
                'Shows declared personal income and business statements',
                'Bring them even if the declared income looks low: it’s the starting point, not the conclusion'
              ] },
              { q: 'Notices of Assessment (NOAs)', bullets: [
                'Matching the same two tax years',
                'Confirms filings are up to date',
                'Any taxes owing should be disclosed early: it affects which lenders can proceed'
              ] },
              { q: 'Corporate financial statements', bullets: [
                'For incorporated borrowers: accountant-prepared financials, typically two years',
                'Balance sheet, income statement, and retained earnings',
                'Articles of incorporation or business licence where applicable'
              ] },
              { q: 'Supporting documents', bullets: [
                'Photo ID, down payment confirmation and mortgage statements on existing properties',
                'Leases or rental agreements if you own rental property',
                'Contracts or invoices for contractors and consultants'
              ] }
            ].map((item, idx) => (
              <details key={idx} className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center py-[24px] cursor-pointer font-serif font-medium text-[22px] md:text-[26px] hover:text-bronze transition-colors duration-300">
                  <span className="text-ink group-hover:text-bronze transition-colors duration-300">{item.q}</span>
                  <span className="text-bronze text-[24px] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="pb-[32px] max-w-[800px]">
                  <ul className="list-none p-0 m-0 flex flex-col gap-[10px]">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-[14px] items-baseline font-sans text-[16px] text-stone leading-[1.65]">
                        <span className="text-bronze font-mono shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <p className="font-sans text-[12.5px] tracking-[0.02em] text-stone max-w-[780px] leading-[1.75] mt-[48px] uppercase">Note: Document requirements vary by lender and program and this list is a general guide, not a complete or final requirement list for any specific application. Please don&rsquo;t send confidential financial documents through the form below. We&rsquo;ll arrange a secure method once we&rsquo;ve spoken.</p>
        </div>
      </section>

      <ReviewWall 
        title="Self-employed clients, in their own words."
        reviews={[
          {
            quote: "Dil and Mandeep were incredible! They were communicative, supportive, and knowledgeable. They guided us every step of the way, making the process much smoother. Highly recommend!",
            author: "Jackie Gee · March 2026 · Google",
            stars: 5
          },
          {
            quote: "I’m a self employed person and I was struggling to get home loan for my 2nd house. One of my friend referred me to Mr Dilmohan Aneja and all works well for me. He helped me to get best mortgage rate with peace of mind. He is very committed to his work and his team is very professional and prompt.",
            author: "sachin patel · Dec 3, 2020 · Google",
            stars: 5
          }
        ]}
      />

      <FaqSection 
        title="Self-Employed Mortgage FAQ"
        subtitle="Straight answers to what people actually ask. Every situation is different: these are general guides, not advice on your file."
        items={[
          {
            question: "Can I get a mortgage in Canada if I write off most of my income?",
            answer: "Yes, but likely not through standard bank guidelines. There are 'stated income' or alternative programs that look at your business cash flow, gross revenue, or bank statements rather than just your net declared personal income."
          },
          {
            question: "How many years of self-employment do lenders want to see?",
            answer: "Typically, lenders want a two-year history. However, if you have less than two years but strong prior experience in the same industry, good credit, and a solid down payment, exceptions can often be made."
          },
          {
            question: "What is a stated income mortgage, and would I qualify?",
            answer: "Stated income programs allow you to 'state' a reasonable income based on your industry and business revenue, backed up by business bank statements or other non-traditional documents, rather than relying solely on tax returns. Qualification depends on down payment, credit, and industry norms."
          },
          {
            question: "My bank declined me. Is a B-lender a permanent downgrade?",
            answer: "No. A B-lender (alternative lender) is a stepping stone. It's used to secure the property or consolidate debt now, with a clear plan to improve your credit or income history so you can move back to an A-lender (bank) at renewal."
          },
          {
            question: "What documents should self-employed borrowers have ready?",
            answer: "Start with your last two years of T1 Generals and NOAs, 6-12 months of business bank statements, articles of incorporation (if applicable), and any corporate financials. Having these ready speeds up the assessment."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard 
          formName="lead-form-self-employed" 
          pageSource="self-employed" 
          defaultGoal="Self-Employed Approval" 
        />
      </ContactSection>
    </>
  );
}
