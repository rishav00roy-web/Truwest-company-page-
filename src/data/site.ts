/**
 * The origin every canonical on this site points at.
 *
 * Deliberately not derived from the Vercel env vars that `layout.tsx` uses for
 * `metadataBase`: those resolve to whatever host is serving, which is what social
 * scrapers need, whereas canonical and structured-data URLs have to name the one
 * domain the site is meant to rank on, whether or not it is attached yet. Every
 * `alternates.canonical` in the app already hard-codes this value; this is where it
 * should be changed if the domain ever does.
 */
export const CANONICAL_ORIGIN = 'https://truwestmortgage.com';
