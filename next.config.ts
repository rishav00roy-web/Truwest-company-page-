import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback. The hero photos are the heaviest thing these
    // pages download -- on a 3x phone `sizes` resolves to the 1920px variant -- and AVIF
    // lands them meaningfully smaller than the WebP-only default for the same quality.
    formats: ['image/avif', 'image/webp']
  },

  /**
   * Deliberately no Content-Security-Policy here. The calculators page embeds a
   * third-party widget that injects its own scripts and styles at runtime, so a
   * meaningful CSP for this site is its own piece of work with its own testing, and a
   * half-written one would either break that page or be permissive enough to be
   * decoration. These four are the headers that carry weight without that risk.
   * HSTS is already applied by the platform.
   */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // The lead form is the thing worth framing on someone else's page.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Send the full URL within this site, only the origin when leaving it, and
          // nothing at all when downgrading to http.
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Nothing on this site asks for any of these; denying them means an injected
          // script cannot ask on the visitor's behalf either.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
          }
        ]
      }
    ];
  },

  async rewrites() {
    return [
      { source: "/mortgage-broker-:city", destination: "/city-pages/mortgage-broker/:city" },
      { source: "/commercial-mortgage-broker-:city", destination: "/city-pages/commercial-mortgage-broker/:city" }
    ];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:slug.html", destination: "/:slug", permanent: true }
    ];
  }
};

export default nextConfig;
