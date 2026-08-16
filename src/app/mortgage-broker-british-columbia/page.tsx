import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import RelatedMarkets from '@/components/sections/RelatedMarkets';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Broker British Columbia | Complex & Self-Employed Files | TruWest Mortgage',
  description: 'Local BC mortgage broker structuring complex, self-employed and high-value files around the stress test and Property Transfer Tax province-wide. Licensed since 2012.',
  alternates: {
    canonical: 'https://truwestmortgage.com/mortgage-broker-british-columbia'
  }
};

export default function BritishColumbiaPage() {
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
      "name": "British Columbia"
    },
    "url": "https://truwestmortgage.com/mortgage-broker-british-columbia"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'British Columbia' }
        ]}
        eyebrow="Mortgage Broker · British Columbia"
        title="British Columbia Mortgage Broker: Structuring Complex Files Province-Wide, Since 2012"
        lede="The affordability gap, the Property Transfer Tax and a stress test that squeezes hardest where prices are highest. These are the three pressures on every BC file, and structuring around them is what we do."
        ctaText="Run My BC Numbers &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="market"
        eyebrow="British Columbia · Provincial market reality"
        title="In British Columbia, qualifying is the hard part, not affording the payment."
        paragraphs={[
          "BC has spent a decade with the widest gap in the country between what households earn and what homes cost. That gap is the defining feature of every mortgage file in this province. It is why a buyer with a strong income, clean credit and real savings can still be told no, not because the payment is beyond them, but because the qualifying math is built for a cheaper province.",
          "The federal stress test lands hardest here for exactly that reason. Under OSFI's B-20 guideline, every federally regulated lender must qualify you at a rate above the one you will actually pay. On a modest mortgage that buffer costs a borrower a small slice of purchasing power. At BC price levels the same rule removes a far larger slice, and it removes it from disciplined, well-qualified buyers, not from marginal ones. No one can remove that rule for you, and any broker who says they can should worry you.",
          "Then there is the BC Property Transfer Tax. It is charged on the fair market value of the property at closing, it is tiered so it rises disproportionately at higher price points, and, critically, it is a cash cost that cannot be rolled into the mortgage. Buyers regularly reach completion having budgeted the down payment perfectly and been caught by the PTT bill on top of it. First-time and newly built home exemptions exist and can change the number materially, but they are threshold-based, so a small movement in purchase price can decide whether you get relief at all.",
          "Since 2012, TruWest Mortgage has structured BC files around these three pressures at once: presenting income the way an A-lender needs to see it under B-20, building the closing-cost picture so the PTT is planned rather than discovered, and mapping alternative lending with a route back to A when an A-lender genuinely cannot fit the file today. We are licensed in both British Columbia and Alberta. We structure files to qualify. We do not get anyone around a qualification rule."
        ]}
        ctaText="Structure My BC File &rarr;"
        ctaHref="#contact"
        tickItems={[
          "The affordability gap is a qualifying problem: strong BC borrowers hit the qualifying calculation long before they hit the payment",
          "The stress test scales with price: the same federal rule takes more purchasing power out of a BC file than an equivalent file elsewhere",
          "Property Transfer Tax is cash at closing: tiered on fair market value, payable at completion, not financeable into the mortgage",
          "Exemptions are threshold-based: first-time and newly built home relief can shift the number, or disappear just over a line",
          "Lender policy varies more than rate: suite rental income, combined household income and self-employed earnings are read very differently lender to lender",
          "Licensed in BC and Alberta: one brokerage across both provinces, including clients moving between them"
        ]}
        note="General information for British Columbia, not advice on your specific file, and not a commitment to lend. The federal stress test (OSFI Guideline B-20) applies to every federally regulated lender in Canada and cannot be removed or bypassed by any brokerage. Property Transfer Tax rates and exemption thresholds change; confirm current figures against gov.bc.ca. Every application is assessed on its own facts under the applicable federal guidelines."
      />

      <RelatedMarkets
        title="Find your local BC broker"
        subtitle="Provincial rules set the frame; the file itself is local. Choose your market for the specific lending realities and structuring approach in your area."
        markets={[
          { label: 'Mortgage Broker in Surrey', description: 'Mortgage-helper suites, multi-generational household income, and self-employed trades and contractors', href: '/mortgage-broker-surrey' },
          { label: 'Mortgage Broker in Greater Vancouver', description: "The province's highest price points, strata and condo financing, and the files where the stress test bites hardest", href: '/mortgage-broker-vancouver' },
          { label: 'Mortgage Broker in Victoria', description: 'Vancouver Island buyers, public-sector and seasonal income, and out-of-town equity relocations', href: '/mortgage-broker-victoria' }
        ]}
      />

      <CalculatorsCta />

      <ContactSection>
        <LeadQualificationWizard formName="lead-form-british-columbia" pageSource="mortgage-broker-british-columbia" />
      </ContactSection>
    </>
  );
}
