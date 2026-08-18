import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import FaqSection from '@/components/sections/FaqSection';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Broker Surrey, BC | TruWest Mortgage',
  description: 'Surrey mortgage broker structuring mortgage-helper suite income, multi-generational household income and self-employed files to qualify under B-20. Since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-surrey'
  }
};

export default function SurreyPage() {
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
      "name": "Surrey"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-surrey"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'British Columbia', href: '/mortgage-broker-british-columbia' },
          { label: 'Surrey' }
        ]}
        eyebrow="Mortgage Broker · Surrey, British Columbia"
        title="Surrey Mortgage Broker: Local Expertise, Whole-Market Access"
        lede="Basement-suite helpers, multi-generational income, self-employed earnings: Surrey files a bank branch struggles with are the files we structure to qualify under B-20. Since 2012."
        ctaText="Run My Surrey Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="Surrey, BC · Local market reality"
        title="Surrey doesn't buy homes the way the bank's form assumes."
        paragraphs={[
          "Half of Surrey's purchase files carry something a branch template struggles with. A basement suite doing double duty as a mortgage helper. Two or three generations pooling income to reach a price in Newton, Fleetwood or South Surrey. A self-employed contractor whose real earnings never show up cleanly on a single tax line. None of these are edge cases here: in Surrey, they're the market.",
          "The problem isn't the borrower. It's that a single lender's policy rarely has room for a multi-layered Surrey file. One lender counts suite rental income generously and household co-borrowers freely; the next barely counts either. The same family, the same suite, the same income: approved in one room, declined in the other.",
          "Since 2012, that structuring is what TruWest Mortgage does. We present combined household income, mortgage-helper rent and self-employed earnings the way an A-lender needs to see them under the federal B-20 rules, and when an A-lender genuinely can't fit the file today, we pivot to alternative lending with the route back mapped from the start. We don't get you around any qualification rule. We structure the file so you qualify under it."
        ]}
        ctaText="Structure My Surrey File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Mortgage-helper suites: presenting suite rental income the way each lender actually counts it",
          "Multi-generational purchases in Newton, Fleetwood, Cloverdale and South Surrey: pooled household income, structured properly",
          "Self-employed trades, contractors and business owners: income documented beyond a single T1 line",
          "Newcomer families building Canadian credit while buying their first home",
          "Co-borrower, co-signer and guarantor structures: chosen deliberately, not by default",
          "A-lender first under B-20; a mapped alternative-lending route when the file needs it"
        ]}
        note="General information for Surrey and the surrounding Metro Vancouver area, not advice on your specific file, and not a commitment to lend. Lender income treatment, suite-rental policies and qualification criteria vary by lender and change over time; every application is assessed on its own facts under the applicable federal guidelines."
      />

      <CalculatorsCta />

      <FaqSection
        title="Surrey mortgage questions"
        subtitle="Straight answers for Surrey buyers. General information for British Columbia, not advice on your specific file; every situation is assessed on its own facts under the federal qualification rules."
        items={[
          {
            question: "Can I use rental income from a basement suite to qualify for a mortgage in Surrey?",
            answer: "Often, yes: many Surrey files use a mortgage-helper suite to support qualification, but how much of that rent counts depends entirely on the lender. Some apply a rental offset against the property's costs, others add a percentage of the rent to your income, and the treatment differs again between an existing, tenanted suite and a projected one. For a new build or an untenanted suite, expect a lender to want evidence such as a market rent appraisal. Since 2012 we've structured these files across A-lenders under B-20, and we'll tell you upfront which lender's method makes your Surrey purchase work, not just quote you a rate."
          },
          {
            question: "We're a multi-generational family pooling our income to buy in Newton or South Surrey. How does that work?",
            answer: "It's one of the most common Surrey files we handle. Multiple incomes on one application (parents, adult children, sometimes extended family) can be presented together, but lenders differ on how many applicants they'll accept, how they treat each income type, and how the title and guarantees are structured. A co-signer, a co-borrower and a guarantor are not the same thing, and choosing the wrong one has real consequences. We structure the application so the combined income is presented properly under B-20, and where an A-lender can't fit the household, we'll tell you what alternative lending would look like instead."
          },
          {
            question: "I'm a self-employed contractor in Surrey and the bank keeps declining me. What can you do differently?",
            answer: "Surrey has a large population of self-employed trades, contractors and business owners, and a bank branch is often the wrong room for that file, not because the income isn't there, but because of how declared income reads on a T1 after write-offs. Depending on the lender and program, corporate financials, dividends, retained earnings and business bank statements can present a fuller picture than a single tax line. We don't evade any qualification rule; we structure the file so the income you genuinely earn is documented the way a lender needs to see it under B-20. If it still doesn't fit an A-lender today, we'll map the alternative-lending route and the plan back."
          },
          {
            question: "Does the mortgage stress test make it impossible to buy in Surrey right now?",
            answer: "The federal stress test (OSFI's B-20 guideline) applies to every federally regulated lender in Canada: no broker can remove it or get you around it, and anyone who says otherwise should worry you. What experience does change is how a file is built to qualify under it: which lender's income treatment fits your situation, how a mortgage-helper suite or combined household income is presented, and whether an alternative lender is the smarter path for now. Since 2012 we've done exactly this structuring work for Surrey buyers, so the stress test becomes a rule we navigate for you, not a wall you hit alone."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-surrey" pageSource="mortgage-broker-surrey" />
      </ContactSection>
    </>
  );
}
