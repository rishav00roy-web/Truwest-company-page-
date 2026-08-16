import React from 'react';
import Link from 'next/link';
import SubPageHero from '@/components/sections/SubPageHero';
import { BC_CITIES, AB_CITIES, formatCityName } from '@/data/locations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | TruWest Mortgage Broker',
  description: 'TruWest Mortgage serves clients across British Columbia and Alberta for residential and commercial financing.',
  alternates: {
    canonical: 'https://truwestmortgage.com/locations'
  }
};

export default function LocationsPage() {
  return (
    <>
      <SubPageHero 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas' }
        ]}
        eyebrow="Locations"
        title="We serve BC and Alberta."
        lede="No matter where you're located, our entire process can be completed remotely via phone, video, and secure document portals. We fund residential and commercial mortgages across both provinces."
        ctaText="Find Out What You Qualify For &rarr;"
        ctaHref="#contact"
        dataCta="talk-to-dil"
      />

      <section className="py-[110px]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[32px] mb-8 font-serif">British Columbia</h2>
              
              <div className="mb-12">
                <h3 className="text-[18px] text-[#856437] mb-4 font-mono tracking-wider uppercase">Residential Lending</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[16px]">
                  {BC_CITIES.map(city => (
                    <li key={city}>
                      <Link href={`/mortgage-broker-${city}`} className="hover:text-[#856437] underline decoration-[#E8E5DE] underline-offset-4">
                        {formatCityName(city)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[18px] text-[#856437] mb-4 font-mono tracking-wider uppercase">Commercial Lending</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[16px]">
                  {BC_CITIES.map(city => (
                    <li key={`comm-${city}`}>
                      <Link href={`/commercial-mortgage-broker-${city}`} className="hover:text-[#856437] underline decoration-[#E8E5DE] underline-offset-4">
                        {formatCityName(city)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-[32px] mb-8 font-serif">Alberta</h2>
              
              <div className="mb-12">
                <h3 className="text-[18px] text-[#856437] mb-4 font-mono tracking-wider uppercase">Residential Lending</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[16px]">
                  {AB_CITIES.map(city => (
                    <li key={city}>
                      <Link href={`/mortgage-broker-${city}`} className="hover:text-[#856437] underline decoration-[#E8E5DE] underline-offset-4">
                        {formatCityName(city)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[18px] text-[#856437] mb-4 font-mono tracking-wider uppercase">Commercial Lending</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[16px]">
                  {AB_CITIES.map(city => (
                    <li key={`comm-${city}`}>
                      <Link href={`/commercial-mortgage-broker-${city}`} className="hover:text-[#856437] underline decoration-[#E8E5DE] underline-offset-4">
                        {formatCityName(city)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
