import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import StepCardGrid from '@/components/sections/StepCardGrid';
import ReviewWall from '@/components/sections/ReviewWall';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/interactive/ContactSection';
import ScenarioReviewForm from '@/components/interactive/ScenarioReviewForm';
import { BC_CITIES, AB_CITIES, formatCityName, getProvince } from '@/data/locations';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [...BC_CITIES, ...AB_CITIES].map(city => ({ city }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const province = getProvince(city);
  if (!province) return {};
  const cityFormatted = formatCityName(city);
  return {
    title: `Commercial Mortgage Broker ${cityFormatted} ${province.code} | TruWest`,
    description: `Commercial property financing, multi-family, land development, and multi-property investor portfolio structuring in ${cityFormatted}, ${province.code}.`,
    alternates: {
      canonical: `https://truwestmortgage.com/commercial-mortgage-broker-${city}`
    }
  };
}

export default async function CommercialCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const province = getProvince(city);
  if (!province) notFound();

  const cityFormatted = formatCityName(city);

  return (
    <>
      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: `Commercial ${cityFormatted}` }
        ]}
        eyebrow={`Commercial Mortgage Broker in ${cityFormatted}, ${province.code}`}
        title={`Commercial & Investment Mortgages in ${cityFormatted}.`}
        lede={`From institutional capital to private debt, we structure commercial loans, construction draws, and portfolio financing for ${cityFormatted} assets.`}
        ctaText="Discuss a Commercial File &rarr;"
        ctaHref="#contact"
        dataCta="commercial-file"
      />

      <SplitSection
        id="commercial-lending"
        eyebrow="Commercial Lending"
        title="Commercial isn't a sideline. It's a specialty."
        paragraphs={[
          "Commercial files live or die on structure: loan-to-value, debt coverage, lease strength, exit. Bring the deal early.",
          `We secure financing for multi-family, mixed-use, retail, industrial, and land development projects in and around ${cityFormatted}.`
        ]}
        ctaText="Explore Options"
        ctaHref="#contact"
        tickItems={[
          "Multi-family, mixed-use, retail & office",
          "Industrial, warehouse & owner-occupied premises",
          "Land, construction & development",
          "Acquisition bridges and repositioning"
        ]}
      />

      <section className="py-[110px]" id="asset-types">
        <div className="wrap">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">What we finance</span>
          <h2 className="text-[clamp(34px,4.5vw,52px)] mb-[70px]">Commercial property categories.</h2>
          <StepCardGrid
            columns={3}
            items={[
              { badge: 'Asset 01', title: 'Multi-family & apartment', description: 'Purpose-built rental, NOI, DSCR, rent roll analysis.' },
              { badge: 'Asset 02', title: 'Mixed-use', description: 'Retail at grade with residential above. Structuring commercial vs residential components.' },
              { badge: 'Asset 03', title: 'Retail & office', description: 'Lease covenants, remaining terms, and rollover risk analysis.' },
              { badge: 'Asset 04', title: 'Industrial & warehouse', description: 'Clear height, zoning, environmental review and specialized use considerations.' },
              { badge: 'Asset 05', title: 'Owner-occupied premises', description: 'Blending property security with your core business cash flow.' },
              { badge: 'Asset 06', title: 'Land & development', description: 'Raw land, assembly, zoning stage, and exit credibility.' }
            ]}
          />
        </div>
      </section>

      <ReviewWall
        title="In their own words."
        reviews={[
          {
            quote: "I recently had the working with Dilmohan for business mortgage needs, he was incredibly supportive and informative. His expertise and guidance were invaluable, ensuring I understood every step of the process.",
            author: "Sung Cin Par Cinpar · Apr 15, 2025 · Google",
            stars: 5
          }
        ]}
      />

      <FaqSection
        title={`${cityFormatted} Commercial FAQ`}
        items={[
          {
            question: "What is the difference between commercial and residential qualification?",
            answer: "Residential mortgages focus heavily on your personal income. Commercial mortgages focus primarily on the asset itself: its Debt Service Coverage Ratio (DSCR), Net Operating Income (NOI), and the strength of the leases."
          },
          {
            question: `Do you handle land and construction financing in ${cityFormatted}?`,
            answer: "Yes. We arrange financing across the full development lifecycle: raw land acquisition, servicing/infrastructure, and vertical construction draws."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <ScenarioReviewForm formName={`lead-form-commercial-${city}`} />
      </ContactSection>
    </>
  );
}
