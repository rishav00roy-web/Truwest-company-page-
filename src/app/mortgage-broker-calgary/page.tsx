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
  title: 'Mortgage Broker Calgary, AB | TruWest Mortgage',
  description: 'Calgary mortgage broker structuring energy-sector bonus, contract and self-employed income to qualify under B-20. Independent approvals since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-calgary'
  }
};

export default function CalgaryPage() {
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
      "name": "Calgary"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-calgary"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Alberta', href: '/mortgage-broker-alberta' },
          { label: 'Calgary' }
        ]}
        eyebrow="Mortgage Broker · Calgary, Alberta"
        title="Calgary Mortgage Broker: Independent Approvals for Complex Income, Since 2012"
        lede="Energy-sector bonuses, contract income, self-employed earnings: the Calgary files a bank branch penalizes are the files we structure to qualify under B-20. Since 2012."
        ctaText="Run My Calgary Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="Calgary, AB · Local market reality"
        title="In Calgary, strong income and a bank approval are two different things."
        paragraphs={[
          "Calgary runs on income a branch template wasn't built to read. The energy professional whose base salary is solid but whose real earnings live in an annual bonus. The independent consultant invoicing on contract. The self-employed professional who writes off expenses and watches their declared income shrink on a single line of a T1. The money is real. The way a bank branch reads it is the problem.",
          "A branch is built to approve the predictable: one employer, one salary, one clean pay stub. Bonus income gets discounted or ignored. Contract income gets flagged as unstable. Self-employed earnings get read off the bottom line of a tax return that was written to be small. The same Calgary borrower is a straightforward approval at one lender and a decline at the next, purely on how each one treats variable income.",
          "Since 2012, that's the file TruWest Mortgage structures. We document bonus history, contract income and self-employed earnings the way an A-lender needs to see them under the federal B-20 rules, and we place the file with the lender whose income-averaging method actually fits your situation. When an A-lender genuinely can't fit it today, we map the alternative-lending route with the plan back. We don't evade any qualification rule. We structure the file so you qualify under it."
        ]}
        ctaText="Structure My Calgary File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Energy-sector base-plus-bonus income: documenting the bonus history lenders will actually count",
          "Independent consultants and contractors: income presented beyond a single T1 line",
          "Self-employed professionals: corporate financials, dividends and retained earnings, read properly",
          "Fluctuating annual income: matched to the lender whose averaging method fits the trend",
          "Commission and incentive earners: structured to show consistency, not just a single strong year",
          "A-lender first under B-20; a mapped alternative-lending route when the file needs it"
        ]}
        note="General information for Calgary and Alberta, not advice on your specific file, and not a commitment to lend. Lender treatment of bonus, contract and self-employed income varies by lender and program and changes over time; every application is assessed on its own facts under the applicable federal guidelines."
      />

      <div className="max-w-[1140px] mx-auto px-6">
        <Pullquote
          quote="Illustrative: Calgary's total residential benchmark price was approximately $569,200 in July 2026, down about 2% year over year."
          author="Source: Calgary Real Estate Board (CREB), July 2026: illustrative, not a TruWest Mortgage claim or guarantee"
        />
      </div>

      <CalculatorsCta />

      <FaqSection
        title="Calgary mortgage questions"
        subtitle="Straight answers for Calgary buyers. General information for Alberta, not advice on your specific file; every situation is assessed on its own facts under the federal qualification rules."
        items={[
          {
            question: "Can I qualify for a mortgage in Calgary if a large part of my income comes from energy-sector bonuses?",
            answer: "Often, yes, but how a lender treats bonus income is the whole game, and branches vary widely. Many A-lenders will consider bonus, overtime or incentive income if you can show a consistent two-year history, typically averaging it and sometimes applying a haircut; others lean heavily on base salary alone. The same Calgary energy professional can qualify for meaningfully different amounts depending on which lender's policy the file is placed with. Since 2012 we've structured variable-income files across A-lenders under B-20, documenting bonus history the way a lender needs to see it, not leaving it to a branch that only reads your base line."
          },
          {
            question: "I'm an independent consultant in Calgary on contract. Why does the bank treat me as high-risk?",
            answer: "Because a branch template reads a contract or consulting income as \"self-employed,\" and after business write-offs your declared income on a single T1 line rarely reflects what you actually earn. That's a documentation problem, not an earnings problem. Depending on the lender and program, your contracts, invoices, business bank statements, corporate financials and retained earnings can present a fuller, truer picture. We structure the file so a consultant's real income is documented properly under B-20, and if an A-lender still can't fit it today, we map the alternative-lending route and the plan back."
          },
          {
            question: "My income changes every year. How do lenders in Alberta look at fluctuating self-employed income?",
            answer: "Most lenders want to see a track record and will typically average your income over the last two years rather than take your best year or your worst. A declining trend gets scrutinised more closely than a stable or rising one, and the documentation (T1 Generals, Notices of Assessment, corporate financials) needs to tell a coherent story. Where income genuinely fluctuates, which lender you approach matters enormously, because their averaging methods and appetite differ. Structuring that presentation is exactly the work we've done for Calgary's self-employed professionals since 2012."
          },
          {
            question: "Does the federal stress test make it harder for variable-income earners to buy in Calgary?",
            answer: "The stress test (OSFI's B-20 guideline) applies to every federally regulated lender in Canada, and no broker can remove it or get you around it; be wary of anyone who claims they can. For variable-income earners it can feel sharper, because qualifying is calculated on a higher rate than the one you'll pay. What changes the outcome is how the file is built: which lender's income-averaging method fits your bonus or contract history, and whether an alternative lender is the smarter route for now with a plan back to A-lending. That structuring is what TruWest Mortgage does, so the stress test becomes a rule we navigate for you, not a wall you hit alone."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-calgary" pageSource="mortgage-broker-calgary" />
      </ContactSection>
    </>
  );
}
