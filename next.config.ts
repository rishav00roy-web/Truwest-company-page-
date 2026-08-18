import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback. The hero photos are the heaviest thing these
    // pages download -- on a 3x phone `sizes` resolves to the 1920px variant -- and AVIF
    // lands them meaningfully smaller than the WebP-only default for the same quality.
    formats: ['image/avif', 'image/webp']
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
