import React from 'react';
import SubPageHero from '@/components/sections/SubPageHero';
import SplitSection from '@/components/sections/SplitSection';
import StepCardGrid from '@/components/sections/StepCardGrid';
import ReviewWall from '@/components/sections/ReviewWall';
import FaqSection from '@/components/sections/FaqSection';
import CalculatorsCta from '@/components/sections/CalculatorsCta';
import ContactSection from '@/components/interactive/ContactSection';
import LeadQualificationWizard from '@/components/interactive/LeadQualificationWizard';
import { BC_CITIES, AB_CITIES, DEDICATED_RESIDENTIAL_CITIES, formatCityName, getProvince } from '@/data/locations';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [...BC_CITIES, ...AB_CITIES]
    .filter(city => !DEDICATED_RESIDENTIAL_CITIES.includes(city))
    .map(city => ({ city }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const province = getProvince(city);
  if (!province) return {};
  const cityFormatted = formatCityName(city);
  return {
    title: `Mortgage Broker ${cityFormatted} ${province.code} | First-Time Buyers & Self-Employed`,
    description: `Local mortgage broker serving ${cityFormatted}, ${province.code}. Specializing in first-time buyers, self-employed mortgages, renewals and debt consolidation.`,
    alternates: {
      canonical: `https://truwestmortgage.com/mortgage-broker-${city}`
    }
  };
}

export default async function ResidentialCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const province = getProvince(city);
  if (!province) notFound();

  const cityFormatted = formatCityName(city);
  const closingCostLine = province.hasPtt
    ? `Budgeting for ${province.code} Property Transfer Tax and closing costs`
    : `Budgeting for closing costs (${province.name} charges no provincial land transfer tax)`;
  const marketDisclaimer = province.hasPtt
    ? `General information for ${cityFormatted} and ${province.name}, not advice on your specific file, and not a commitment to lend. Lender income treatment and qualification criteria vary by lender and program and change over time; Property Transfer Tax rates and exemption thresholds change; confirm current figures against gov.bc.ca. Every application is assessed on its own facts under the applicable federal guidelines.`
    : `General information for ${cityFormatted} and ${province.name}, not advice on your specific file, and not a commitment to lend. Lender income treatment and qualification criteria vary by lender and program and change over time. ${province.name} charges no provincial land transfer tax; Land Titles registration fees still apply; confirm current amounts before relying on them. Every application is assessed on its own facts under the applicable federal guidelines.`;

  return (
    <>
      <SubPageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: cityFormatted }
        ]}
        eyebrow={`Mortgage Broker in ${cityFormatted}, ${province.code}`}
        title={`Your local ${cityFormatted} mortgage broker.`}
        lede={`Whether you're buying your first home in ${cityFormatted}, renewing your mortgage, or need a self-employed approval: we secure financing when the bank says no.`}
        ctaText="Find Out What You Qualify For &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <SplitSection
        id="local-market"
        eyebrow={`${cityFormatted} real estate`}
        title="We run the numbers so you can run the search."
        paragraphs={[
          `Online calculators give you a guess. A real pre-qualification gives you a ceiling to shop confidently in ${cityFormatted}.`,
          "We review your income, debts and down payment to tell you exactly what you can afford, what your monthly payments will look like, and how much cash you actually need to close."
        ]}
        ctaText="Get Pre-Qualified"
        ctaHref="#contact"
        tickItems={[
          "True affordability and stress-test limits",
          "Down payment strategies (FHSA, RRSP, Gifted)",
          closingCostLine,
          "Credit review and improvement strategies"
        ]}
        note={marketDisclaimer}
      />

      <section className="py-[110px]" id="services">
        <div className="wrap">
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">Mortgage Solutions</span>
          <h2 className="text-[clamp(34px,4.5vw,52px)] mb-[70px]">{`How we help ${cityFormatted} buyers.`}</h2>
          <StepCardGrid
            columns={3}
            items={[
              {
                title: 'Self-Employed Mortgages',
                description: 'We use corporate financials, bank statements, and grossed-up income to qualify business owners who get declined by traditional banks.'
              },
              {
                title: 'First-Time Home Buyers',
                description: 'We map out your exact affordability, down payment sources, and the closing costs you need to budget for before you start shopping.'
              },
              {
                title: 'Renewals & Refinancing',
                description: "Don't sign your bank's renewal letter blindly. We make 50+ lenders compete for your maturity date to ensure you get the right rate."
              }
            ]}
          />
        </div>
      </section>

      <ReviewWall
        title="What clients say about working with TruWest"
        reviews={[
          {
            quote: "Dil and Mandeep were incredible! They were communicative, supportive, and knowledgeable. They guided us every step of the way, making the process much smoother. Highly recommend!",
            author: "Jackie Gee · March 2026 · Google",
            stars: 5
          }
        ]}
      />

      <CalculatorsCta />

      <FaqSection
        title={`${cityFormatted} Mortgage FAQ`}
        items={[
          {
            question: `Do I need a down payment to buy a home in ${cityFormatted}?`,
            answer: "Yes, the minimum down payment in Canada is 5% for homes under $500,000. For homes between $500,000 and $999,999, you need 5% on the first $500k and 10% on the portion above that."
          },
          {
            question: `Can a mortgage broker get better rates than my bank in ${cityFormatted}?`,
            answer: "Usually, yes. A bank only offers its own products and rates. As a broker, we have access to over 50 lenders, including monoline lenders that only work through brokers and often offer lower rates and better penalty terms."
          }
        ]}
        ctaText="Ask Dil About Your Situation &rarr;"
        ctaHref="#contact"
      />

      <ContactSection>
        <LeadQualificationWizard formName={`lead-form-residential-${city}`} pageSource={`city-residential-${city}`} />
      </ContactSection>
    </>
  );
}
