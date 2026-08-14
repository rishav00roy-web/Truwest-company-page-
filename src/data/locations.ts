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

export function formatCityName(slug: string) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
