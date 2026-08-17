import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/interactive/MobileActionBar";
import NavBot from "@/components/interactive/NavBot";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// og:image and twitter:image are emitted as absolute URLs built from metadataBase.
// Hard-coding truwestmortgage.com there breaks previews while that domain is not
// yet serving this site: scrapers fetch the card from a host that does not answer
// and fall back to the favicon. So prefer whatever domain is actually serving this
// deployment. Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the production domain,
// which becomes truwestmortgage.com by itself once that domain is attached to the
// project, so this needs no follow-up edit at launch. NEXT_PUBLIC_SITE_URL is an
// explicit override if it is ever needed.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://truwestmortgage.com");

// `openGraph.title` / `description` are deliberately omitted: Next falls back to
// each page's own title and description, so shared links describe the page that
// was actually shared rather than repeating a single site-wide blurb.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TruWest Mortgage | Mortgage Broker in BC & Alberta",
  description:
    "Independent mortgage brokerage for self-employed borrowers, first-time buyers, investors and commercial files across British Columbia and Alberta.",
  openGraph: {
    type: "website",
    siteName: "TruWest Mortgage",
    locale: "en_CA",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

// globals.css sets `scroll-behavior: smooth` for in-page anchor links. As of Next 16
// the router no longer overrides that during route changes, so without the
// `data-scroll-behavior` attribute below a navigation smooth-scrolls instead of
// jumping, and strands the visitor part-way down the new page.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${archivo.variable} ${cormorant.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#main">Skip to main content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <NavBot />
      </body>
    </html>
  );
}
