import { NextResponse, type NextRequest } from 'next/server';

/**
 * Vercel serves this site's routes case-sensitively, so `/Self-Employed` or
 * `/Mortgage-Broker-Vancouver` — the shapes a URL takes once it has been through a
 * chat message, an email signature or an iOS keyboard that capitalised the first
 * letter — miss every route and render the bare Next 404 inside the site chrome.
 * That is the "the site loads but the content says 404" report.
 *
 * Paths on this site are lowercase by construction (see `src/data/locations.ts`), so
 * a path that is not already lowercase can be redirected to its lowercase form without
 * ambiguity. 308 keeps the method and tells crawlers the lowercase URL is the real one.
 *
 * Query strings and hashes are untouched: `nextUrl.clone()` carries the search params,
 * and the hash never reaches the server in the first place.
 */
/**
 * Every page declares its canonical on truwestmortgage.com, and the sitemap lists that
 * host too. Until that domain is attached, the deployment answers on a vercel.app
 * address that is fully crawlable -- so a crawler can index the staging copy while its
 * canonical points at a host that serves nothing.
 *
 * Matching on the vercel.app suffix rather than on an allowlist of "real" domains is
 * deliberate: an allowlist that falls out of date would noindex production itself,
 * which is the one mistake here that is expensive and slow to notice. A vercel.app
 * host is never the domain this site is meant to rank on.
 */
function isPreviewHost(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  return host.endsWith('.vercel.app');
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowercased = pathname.toLowerCase();

  if (lowercased !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = lowercased;
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  if (isPreviewHost(request)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  // Everything except Next's own assets, the API routes and any path with a file
  // extension (favicon.ico, /images/mark.png, opengraph-image.png and friends), whose
  // casing is decided by the filesystem rather than by this site's URL scheme.
  // `[.]` rather than `\.`: this pattern is a string literal first and a regex
  // second, so a lone backslash is eaten at parse time and the dot silently becomes
  // "any character", which excludes every path from the matcher.
  matcher: ['/((?!api/|_next/|.*[.][^/]+$).*)'],
};
