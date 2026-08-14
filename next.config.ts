import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
