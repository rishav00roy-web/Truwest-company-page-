import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import RelatedMarkets from '@/components/sections/RelatedMarkets';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Broker Alberta | Variable & Self-Employed Income | TruWest Mortgage',
  description: 'Local Alberta mortgage broker structuring variable, bonus, contract and self-employed income to qualify under B-20. No provincial land transfer tax. Licensed since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-alberta'
  }
};

export default function AlbertaPage() {
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
      "@type": "State",
      "name": "Alberta"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-alberta"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Alberta' }
        ]}
        eyebrow="Mortgage Broker · Alberta"
        title="Alberta Mortgage Broker: Variable Income Structured to Qualify, Since 2012"
        lede="Migration is reshaping the market, most of the province earns through bonuses, contracts and shift premiums, and there is no provincial land transfer tax. All three change how an Alberta file should be built."
        ctaText="Run My Alberta Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="Alberta · Provincial market reality"
        title="Alberta rewards the buyer; then the branch template penalizes how they earn."
        paragraphs={[
          "Alberta has absorbed the largest inter-provincial migration wave in the country. Households arriving from Ontario and British Columbia bring equity out of a more expensive market and buy into a province where the same money reaches considerably further. That inflow shapes everything: competition for well-located inventory, the pace at which offers move, and how many files are cross-provincial rather than local.",
          "It also creates a specific structuring problem. A relocating buyer often has a home to sell in another province, a new Alberta employment offer, and a closing timeline that does not line up cleanly. Lenders assess sale-dependent purchases, probationary employment and out-of-province equity very differently. The file is not weak: it is simply not the shape a branch form expects.",
          "The second Alberta reality is income. A large share of the province earns through energy-sector bonuses, shift and overtime premiums, consulting contracts, and self-employment. This is genuine, durable income. But a bank branch is built to approve the predictable: one employer, one salary, one clean pay stub. Bonus income gets discounted or ignored, contract income gets read as unstable, and self-employed earnings get taken off the bottom line of a tax return written to be small. The same Alberta borrower can be a straightforward approval at one lender and a decline at the next, purely on how each one treats variable income.",
          "The one genuine structural advantage is closing costs. Alberta charges no provincial land transfer tax: a real difference from BC and Ontario, and one that changes how much cash a buyer needs at completion. Land Titles registration fees still apply, so it is not free, but the gap is significant and it is the thing relocating buyers most often underestimate in their own favour.",
          "Since 2012, TruWest Mortgage has structured exactly these files: variable and self-employed income documented the way an A-lender needs to see it under the federal B-20 rules, cross-provincial and sale-dependent purchases sequenced properly, and alternative lending mapped with a route back to A when an A-lender cannot fit the file today. We structure files to qualify. We do not evade any qualification rule."
        ]}
        ctaText="Structure My Alberta File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "Migration drives the market: sustained inter-provincial inflow means more competition for good inventory and more cross-provincial files",
          "Relocation files are their own category: sale-dependent purchases, probationary employment and out-of-province equity are each treated differently lender to lender",
          "Variable income is the Alberta norm: bonuses, overtime, contract work and self-employment, all read poorly by branch templates",
          "Bonus treatment decides the approval: some lenders average a documented two-year history, others read base salary alone",
          "No provincial land transfer tax: a genuine cash advantage at completion, though Land Titles registration fees still apply",
          "Licensed in Alberta and BC: one brokerage for clients moving in either direction"
        ]}
        note="General information for Alberta, not advice on your specific file, and not a commitment to lend. The federal stress test (OSFI Guideline B-20) applies to every federally regulated lender in Canada, including in Alberta, and cannot be removed or bypassed by any brokerage. Alberta charges no provincial land transfer tax; Land Titles registration fees still apply; confirm current amounts before relying on them. Every application is assessed on its own facts under the applicable federal guidelines."
      />

      <RelatedMarkets
        title="Find your local Alberta broker"
        subtitle="Provincial conditions set the frame; the borrower profile is local. Choose your market for the income structuring that applies there."
        markets={[
          { label: 'Mortgage Broker in Calgary', description: 'Energy-sector bonus income, independent consultants on contract, and self-employed professionals', href: '/mortgage-broker-calgary' },
          { label: 'Mortgage Broker in Edmonton', description: 'Public-sector and trades employment, shift and overtime income, and investment-property buyers', href: '/mortgage-broker-edmonton' }
        ]}
      />

      <CalculatorsCta />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-alberta" pageSource="mortgage-broker-alberta" />
      </ContactSection>
    </>
  );
}
