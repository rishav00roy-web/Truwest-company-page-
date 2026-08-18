import type { MetadataRoute } from 'next';
import { DEDICATED_RESIDENTIAL_CITIES } from '@/data/locations';

const BASE_URL = 'https://truwestmortgage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/self-employed`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/home-buyers-refinance`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/commercial-investors`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/referral-partners`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/calculators`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/mortgage-broker-alberta`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/mortgage-broker-british-columbia`, changeFrequency: 'monthly', priority: 0.8 }
  ];

  // Only the hand-written city pages belong here. The template-generated ones carry
  // `robots: { index: false }` (see the two [city] routes), and a sitemap that
  // advertises URLs the same site asks Google not to index is a contradiction that
  // devalues the whole file. They stay linked from /locations, which is how a visitor
  // reaches them and how their outbound links still count.
  const residentialCityPages: MetadataRoute.Sitemap = DEDICATED_RESIDENTIAL_CITIES.map(city => ({
    url: `${BASE_URL}/mortgage-broker-${city}`,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticPages, ...residentialCityPages];
}
