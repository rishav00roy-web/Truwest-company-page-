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
  title: 'Mortgage Broker Victoria, BC | TruWest Mortgage',
  description: 'Victoria mortgage broker structuring public-sector, seasonal and relocation income for Vancouver Island buyers to qualify under B-20. Since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-victoria'
  }
};

export default function VictoriaPage() {
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
      "name": "Victoria"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-victoria"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'British Columbia', href: '/mortgage-broker-british-columbia' },
          { label: 'Victoria' }
        ]}
        eyebrow="Mortgage Broker · Victoria, British Columbia"
        title="Victoria Mortgage Broker: Island Income, Structured to Qualify, Since 2012"
        lede="Public-sector salaries, seasonal Island businesses and buyers arriving with mainland equity. Three very different files, all of them badly served by a branch form built for one salary."
        ctaText="Run My Victoria Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="Victoria, BC · Local market reality"
        title="Victoria is a small market with three very different kinds of borrower."
        paragraphs={[
          "Vancouver Island is supply-constrained by geography over the long run, but that is not the same as the market you are buying in today. Right now Greater Victoria is inventory-rich: more active listings than a year ago, and buyers with genuine choice and negotiating room. The structural squeeze is real over a decade; the near-term reality is that you have time to get your financing right rather than rush an offer you have not fully costed. Both facts matter, and a broker who tells you only the first one is selling urgency rather than advice.",
          "The borrower mix is what makes Victoria distinctive. A large share of the region works in the public sector: provincial government, health authority, education, federal offices, the military. On paper that is the cleanest income a lender can read. In practice it still generates questions: term and auxiliary positions, acting pay, secondments, pension-buyback deductions and probationary periods all sit awkwardly on a branch form built for permanent full-time salary.",
          "Alongside that sits a substantial self-employed and seasonal population: trades, tourism and hospitality operators, marine and construction contractors, consultants and creative professionals. Their income is real and often strong, but it arrives unevenly across the year and lands on a tax return written to be efficient rather than impressive. And then there is the third group: buyers relocating in with equity from Greater Vancouver, Alberta or Ontario, carrying a home to sell somewhere else and a closing timeline that does not line up.",
          "Since 2012, TruWest Mortgage has structured all three. Public-sector income documented so term, acting and auxiliary components are presented correctly under the federal B-20 rules. Seasonal and self-employed earnings averaged and evidenced the way an A-lender needs to see them. Relocation purchases sequenced so a sale-dependent completion, bridge financing and out-of-province equity are planned rather than improvised. We structure files to qualify. We do not evade any qualification rule."
        ]}
        ctaText="Structure My Victoria File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Public-sector income is not automatically simple: term, auxiliary, acting pay, secondments and probation all raise lender questions",
          "Seasonal income needs a track record: tourism, hospitality, marine and construction earnings need averaging and evidence a branch form has no field for",
          "Self-employed Islanders are a large share of the market: corporate financials, dividends and business banking often show far more than a single T1 line",
          "Relocation files need sequencing: a home to sell elsewhere, out-of-province equity and a misaligned completion date are a structuring problem, not a credit problem",
          "Bridge financing is a real option, but it has to be arranged deliberately, before the offer, not discovered afterwards",
          "BC rules still apply here: Property Transfer Tax is payable in cash at completion and the federal stress test applies the same as anywhere in Canada"
        ]}
        note="General information for Victoria and British Columbia, not advice on your specific file, and not a commitment to lend. Lender income treatment, bridge financing availability and qualification criteria vary by lender and program and change over time; every application is assessed on its own facts under the applicable federal guidelines."
      />

      <div className="max-w-[1140px] mx-auto px-6">
        <Pullquote
          quote="Illustrative: the MLS® Home Price Index benchmark for a single-family home across Greater Victoria was approximately $1,170,200 in July 2026, with 3,847 active listings at month end."
          author="Source: Victoria Real Estate Board (VREB), July 2026: illustrative, not a TruWest Mortgage claim or guarantee"
        />
      </div>

      <CalculatorsCta />

      <FaqSection
        title="Victoria mortgage questions"
        subtitle="Straight answers for Victoria buyers. General information for British Columbia, not advice on your specific file; every situation is assessed on its own facts under the federal qualification rules."
        items={[
          {
            question: "I work for the provincial government or the health authority. Is my mortgage application automatically straightforward?",
            answer: "Usually it is a strength, but not automatically simple. Lenders read permanent full-time public-sector salary as about as stable as income gets. Where files slow down is the detail around it: an auxiliary or term position with an end date, acting pay that is not guaranteed to continue, a recent secondment, a probationary period, or pension-buyback deductions that change your net figures. Each of those has an answer, and lenders differ on how they treat them. The work is documenting the position accurately so an underwriter is not left guessing about permanence, which is where most avoidable delays come from."
          },
          {
            question: "My Victoria business is seasonal: my income is heavy in summer and thin in winter. Can I still qualify?",
            answer: "Yes, in many cases. Lenders do not require income to arrive evenly; they require it to be demonstrable. Typically that means a two-year history, with earnings averaged across full years rather than measured over a strong or weak quarter. Depending on how you are set up, corporate financials, dividends, retained earnings and business banking can present a fuller and more accurate picture than a single line of a T1 written to be tax-efficient. Since 2012 we have documented seasonal Island income under B-20 so the averaging is evidenced properly: we structure the file, we do not overstate earnings."
          },
          {
            question: "I'm moving to Victoria and still own a home elsewhere. How do I buy before my current place sells?",
            answer: "This is one of the most common Victoria files and it is a sequencing problem more than a qualifying one. The options generally involve bridge financing between the two completion dates, an offer written with a subject to sale, or qualifying while carrying both properties if your ratios allow. Each has trade-offs, and lenders differ on how they treat a sale-dependent purchase and out-of-province equity. The right structure depends on your closing dates, the strength of the sale on the other end and your tolerance for carrying both: a conversation worth having before you write the offer, not after."
          },
          {
            question: "Should I make a subject-free offer to compete in Victoria?",
            answer: "Be careful with this one. Pre-qualification tells you what you can realistically shop for and shows a seller you are organised: it is not a funded commitment, and it is not a substitute for a financing condition. A subject-free offer removes your protection if the lender's view of the property, the appraisal or the documentation differs from the assumption you made. That is a decision to take with your realtor and, where the amounts are significant, legal advice. What we can do is have your documentation complete and reviewed in advance, so any financing condition is short and credible rather than open-ended."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-victoria" pageSource="mortgage-broker-victoria" />
      </ContactSection>
    </>
  );
}
