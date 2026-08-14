import type { MetadataRoute } from 'next';
import { BC_CITIES, AB_CITIES } from '@/data/locations';

const BASE_URL = 'https://truwestmortgage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/self-employed`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/home-buyers-refinance`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/commercial-investors`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/referral-partners`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/mortgage-broker-alberta`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/mortgage-broker-british-columbia`, changeFrequency: 'monthly', priority: 0.8 }
  ];

  const cities = [...BC_CITIES, ...AB_CITIES];

  const residentialCityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE_URL}/mortgage-broker-${city}`,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const commercialCityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE_URL}/commercial-mortgage-broker-${city}`,
    changeFrequency: 'monthly',
    priority: 0.5
  }));

  return [...staticPages, ...residentialCityPages, ...commercialCityPages];
}
