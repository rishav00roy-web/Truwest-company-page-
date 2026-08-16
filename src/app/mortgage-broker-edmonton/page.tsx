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
  title: 'Mortgage Broker Edmonton, AB | Rates & Pre-Qualification | TruWest',
  description: 'Edmonton mortgage broker averaging overtime, shift premium and trades income to qualify under B-20. Public-sector and trades households since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-edmonton'
  }
};

export default function EdmontonPage() {
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
      "name": "Edmonton"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-edmonton"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Alberta', href: '/mortgage-broker-alberta' },
          { label: 'Edmonton' }
        ]}
        eyebrow="Mortgage Broker · Edmonton, Alberta"
        title="Edmonton Mortgage Broker: Averaging Trades & Shift Income to Qualify, Since 2012"
        lede="Overtime, shift differentials and premiums are real income. Whether a lender counts them, and how, is the single biggest variable in an Edmonton approval."
        ctaText="Run My Edmonton Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="Edmonton, AB · Local market reality"
        title="Edmonton households earn steady and variable income at the same time. Most branch forms read only one of them."
        paragraphs={[
          "Edmonton is a public-sector city and a trades city at once. Provincial government, health, education and post-secondary employment provide the kind of stable, documented salary a lender reads without hesitation. Around and often inside the same household sits the other half of the economy: journeypersons and apprentices, industrial and construction trades, shift workers, plant and maintenance crews: people whose base rate is only part of what they actually earn.",
          "That second half is where files stall. Overtime, shift differentials, premiums, on-call pay and seasonal turnaround work can represent a large and entirely reliable share of annual income. A bank branch is built to approve the predictable: one employer, one base salary, one clean pay stub. Variable earnings get discounted, treated as unreliable, or left out of the calculation altogether, and the borrower is told they qualify for less than their T4 plainly shows they earn.",
          "The dual-income Edmonton household makes this concrete. One salary reads perfectly; the other carries overtime and premiums that one lender will average over two years and the next will barely count. Same household, same T4s, materially different approvals: decided entirely by whose policy the file was placed with.",
          "Since 2012, averaging fluctuating trades income for A-lender approval has been core work at TruWest Mortgage. We evidence overtime, shift premium and seasonal earnings across a full history the way an A-lender needs to see them under the federal B-20 rules, and we place the file with the lender whose averaging method actually fits your pay pattern. Where an A-lender cannot fit it today, we map the alternative-lending route with the plan back. We structure files to qualify. We do not evade any qualification rule."
        ]}
        ctaText="Structure My Edmonton File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Two economies, one household: stable public-sector salary alongside variable trades income is the Edmonton norm",
          "Overtime and premiums are real income: documented across a consistent history, many A-lenders will average them",
          "Averaging method decides the approval: two-year averaging, a haircut, or exclusion entirely, from the same pay stubs",
          "Apprentices are their own case: progressing wage rates and periods of schooling need presenting deliberately rather than as gaps",
          "Seasonal and turnaround work needs a full-year view: income measured over a strong or slow stretch misrepresents the year in both directions",
          "No provincial land transfer tax in Alberta: a genuine cash advantage at completion, though Land Titles registration fees still apply"
        ]}
        note="General information for Edmonton and Alberta, not advice on your specific file, and not a commitment to lend. Lender treatment of overtime, shift premium, contract and self-employed income varies by lender and program and changes over time; every application is assessed on its own facts under the applicable federal guidelines."
      />

      <div className="max-w-[1140px] mx-auto px-6">
        <Pullquote
          quote="Illustrative: the MLS® Home Price Index composite benchmark price in the Greater Edmonton Area was approximately $429,100 in July 2026, essentially unchanged year over year."
          author="Source: REALTORS® Association of Edmonton, July 2026: illustrative, not a TruWest Mortgage claim or guarantee"
        />
      </div>

      <CalculatorsCta />

      <FaqSection
        title="Edmonton mortgage questions"
        subtitle="Straight answers for Edmonton buyers. General information for Alberta, not advice on your specific file; every situation is assessed on its own facts under the federal qualification rules."
        items={[
          {
            question: "A big part of my income is overtime and shift premiums. Will a lender actually count it?",
            answer: "Many A-lenders will, and how much they count is the single biggest variable in an Edmonton trades file. The common approach is a two-year average of documented overtime and premium income, evidenced by T4s, a year-to-date pay stub and often an employment letter confirming the pay is ongoing rather than exceptional. Some lenders apply a haircut to the average; others go on base rate alone. The same pay stubs can produce noticeably different maximums depending on placement. Since 2012 we have documented variable trades income under B-20 so the averaging is properly evidenced: we present what you earn, we do not inflate it."
          },
          {
            question: "I'm a journeyperson and my partner works for the province. How does a lender treat a household like ours?",
            answer: "As two separate income assessments that have to be presented together, which is where dual-income Edmonton files get lost. The public-sector salary is generally straightforward. The trades income needs its overtime, shift and premium components evidenced across a full history so an underwriter can see the pattern rather than a single strong or weak stretch. Lenders differ mainly on the second half, so the household's qualifying amount can shift materially depending on placement. We build both sides of the file properly and place it where the variable-income treatment fits your actual pay structure."
          },
          {
            question: "I'm a self-employed contractor in Edmonton and my tax return shows very little income. What can you do differently?",
            answer: "The issue is usually presentation, not earnings. A T1 written to be tax-efficient understates what a working contractor actually brings in, and a branch reads the bottom line and stops. Depending on how you are structured, corporate financials, dividends, retained earnings, shareholder loans and business bank statements can evidence a fuller and more accurate picture. Documentation requirements and how much of it counts vary by lender and program. We structure the file so genuine income is documented the way a lender needs to see it under B-20, and if an A-lender still cannot fit it today, we map the alternative-lending route and the plan back to A."
          },
          {
            question: "Does the stress test hit Edmonton buyers as hard as it hits buyers in BC?",
            answer: "Less hard in dollar terms, because the qualifying buffer applies across the whole mortgage and Edmonton loan sizes are typically smaller than in Greater Vancouver. But the rule is identical: OSFI's B-20 guideline applies to every federally regulated lender in Canada, and no brokerage can remove or bypass it. What tends to decide an Edmonton approval is not the buffer itself but how much of your variable income the lender counts before applying it. Two lenders can qualify the same borrower at meaningfully different amounts on that basis alone, which is why placement matters more here than rate shopping does."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-edmonton" pageSource="mortgage-broker-edmonton" />
      </ContactSection>
    </>
  );
}
