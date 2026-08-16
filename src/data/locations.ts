export const BC_CITIES = [
  'abbotsford', 'burnaby', 'chilliwack', 'coquitlam', 'delta', 
  'kamloops', 'kelowna', 'langley', 'maple-ridge', 'nanaimo', 
  'new-westminster', 'north-vancouver', 'penticton', 'port-coquitlam', 
  'port-moody', 'prince-george', 'richmond', 'surrey', 'vancouver', 
  'vernon', 'victoria', 'white-rock'
];

export const AB_CITIES = [
  'airdrie', 'calgary', 'edmonton', 'lethbridge', 'medicine-hat', 
  'red-deer', 'st-albert', 'strathcona-county'
];

// Cities with a hand-written residential page at /mortgage-broker-<city>.
// Those file-system routes win over the /mortgage-broker-:city rewrite, so the
// shared city template must not also generate them.
export const DEDICATED_RESIDENTIAL_CITIES = [
  'calgary', 'edmonton', 'surrey', 'vancouver', 'victoria'
];

export function formatCityName(slug: string) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function getProvince(city: string) {
  if (BC_CITIES.includes(city)) return { code: 'BC', name: 'British Columbia', hasPtt: true, provinceHref: '/mortgage-broker-british-columbia' };
  if (AB_CITIES.includes(city)) return { code: 'AB', name: 'Alberta', hasPtt: false, provinceHref: '/mortgage-broker-alberta' };
  return null;
}
