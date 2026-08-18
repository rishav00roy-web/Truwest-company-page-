import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import Pullquote from '@/components/sections/Pullquote';
import FaqSection from '@/components/sections/FaqSection';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Broker Vancouver, BC | TruWest Mortgage',
  description: 'Greater Vancouver mortgage broker structuring large loans and strata files around the federal stress test. Licensed since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-vancouver'
  }
};

export default function VancouverPage() {
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
    "areaServed": {
      "@type": "City",
      "name": "Greater Vancouver"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-vancouver"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'British Columbia', href: '/mortgage-broker-british-columbia' },
          { label: 'Greater Vancouver' }
        ]}
        eyebrow="Mortgage Broker · Greater Vancouver, British Columbia"
        title="Greater Vancouver Mortgage Broker: Large Loans, Strata Files, Since 2012"
        lede="At Vancouver price points the stress test takes its biggest bite out of the strongest borrowers, and the strata you choose can decline you all on its own. Both are structuring problems."
        ctaText="Run My Vancouver Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="Greater Vancouver, BC · Local market reality"
        title="In Greater Vancouver, the problem isn't your income. It's the size of the loan your income has to carry."
        paragraphs={[
          "Greater Vancouver carries the highest price points in the country, and that single fact reshapes every file written here. A physician, a senior engineer, a lawyer four years into partnership: these are borrowers no lender would call risky. They have clean credit, real savings and durable income. They are still routinely told no, and not because of anything they did wrong.",
          "The reason is arithmetic. The federal stress test under OSFI's B-20 guideline requires every federally regulated lender to qualify you at a rate above the one you will actually pay. That buffer is applied to the whole mortgage. On a smaller loan it trims the edges. On a Greater Vancouver loan it removes a substantial block of borrowing power, which means the stress test squeezes hardest exactly where incomes are strongest, because the loan size is doing the damage, not the borrower profile.",
          "Then there is the building itself. A large share of Greater Vancouver purchases are strata (condos and townhomes), and in strata financing the lender assesses two things, not one. Your file, and the building. The depreciation report, the contingency reserve fund, the age and envelope history, whether the strata is self-managed, whether it is in litigation, whether rentals are restricted. A perfectly qualified buyer can be declined because of the strata they chose. Most people find this out after their offer is accepted.",
          "Since 2012, TruWest Mortgage has built Greater Vancouver files with both halves in view. We present income the way an A-lender needs to see it under B-20, we check the strata documents against lender policy before the subject-removal clock runs out, and where the loan size genuinely pushes a file past A-lending today, we map the alternative-lending route with a plan back. We structure files to qualify. We do not evade any qualification rule."
        ]}
        ctaText="Structure My Vancouver File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Loan size drives the squeeze: the stress-test buffer applies to the whole mortgage, so it costs Vancouver borrowers far more purchasing power",
          "Strong borrowers, not marginal ones: professionals with clean credit and real savings hit the qualifying ceiling here",
          "Lenders assess the building too: depreciation report, contingency reserve, self-management, litigation and rental restrictions can decline a strata",
          "Strata review belongs before subject removal: document problems found after an accepted offer are expensive",
          "Insured and uninsured are different worlds: down payment, amortization and the maximum insured purchase price change which lenders are available",
          "Rental and secondary income is read unevenly: how much of a suite or condo rental a lender counts decides approvals at these price points"
        ]}
        note="General information for Greater Vancouver and British Columbia, not advice on your specific file, and not a commitment to lend. Lender income treatment, strata requirements and qualification criteria vary by lender and program and change over time; every application is assessed on its own facts under the applicable federal guidelines."
      />

      <div className="max-w-[1140px] mx-auto px-6">
        <Pullquote
          quote="Illustrative: the MLS® Home Price Index composite benchmark price across Metro Vancouver was approximately $1,088,800 in July 2026, down 6.2% year over year."
          author="Source: Greater Vancouver REALTORS®, July 2026: illustrative, not a TruWest Mortgage claim or guarantee"
        />
      </div>

      <CalculatorsCta />

      <FaqSection
        title="Greater Vancouver mortgage questions"
        subtitle="Straight answers for Greater Vancouver buyers. General information for British Columbia, not advice on your specific file; every situation is assessed on its own facts under the federal qualification rules."
        items={[
          {
            question: "My income is strong and my credit is clean. Why am I still short on the mortgage amount I need in Vancouver?",
            answer: "Because the stress test scales with the loan, not with you. Under OSFI's B-20 guideline, every federally regulated lender must qualify you at a rate higher than the one you will pay, and that buffer applies across the entire mortgage. In a lower-priced market it trims your maximum modestly. At Greater Vancouver price points it removes a large block of borrowing power from borrowers whose finances are genuinely strong. Nobody can waive that rule. What changes the outcome is which lender's income treatment, amortization and debt-servicing ratios fit your file, and those vary meaningfully from one lender to the next."
          },
          {
            question: "Does putting more than 20% down actually help me qualify for a larger mortgage in Vancouver?",
            answer: "It changes which lenders and which products are available, which is not quite the same thing. Above 20% down your mortgage is uninsured, which can open longer amortizations at some lenders, and a longer amortization lowers the qualifying payment, which can lift your maximum. Below 20% you are in insured territory, which prices differently and is capped by the federal maximum insured purchase price, a real ceiling in this market. There is no single right answer; the correct structure depends on your down payment, the property and your timeline. That comparison is exactly what we run before you commit."
          },
          {
            question: "Can I be declined because of the condo building rather than because of my own finances?",
            answer: "Yes, and in Greater Vancouver it happens regularly. Lenders assess the strata alongside the borrower. A weak contingency reserve fund, an overdue or concerning depreciation report, active litigation, a self-managed strata, a high proportion of rentals, or a building with envelope history can all cause a decline or a restricted approval, even where your income and credit are excellent. This is why we review strata documentation against lender policy early, rather than discovering the problem during subject removal when your options have narrowed."
          },
          {
            question: "Will rental income from a suite or an investment condo help me qualify?",
            answer: "Often, but how much help you get is entirely a lender-policy question. Some lenders offset a generous share of documented rental income against the property's costs; others add a smaller portion to your income; a few apply meaningful haircuts or want a longer history than you have. The same lease on the same condo can move your qualifying amount substantially depending on where the file is placed. We document the rental income properly under B-20 and place the file with the lender whose treatment actually fits your situation: we do not inflate income to reach a number."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-vancouver" pageSource="mortgage-broker-vancouver" />
      </ContactSection>
    </>
  );
}
