import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/interactive/MobileActionBar";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://truwestmortgage.com"),
  title: "TruWest Mortgage",
  description: "Mortgage Broker in BC and Alberta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${cormorant.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#main">Skip to main content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
