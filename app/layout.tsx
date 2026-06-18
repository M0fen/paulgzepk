import type { Metadata } from "next";
import { Inter, Space_Mono, Syncopate } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import TickerTape from "@/components/TickerTape";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paulgz.com"),
  title: "PaulGZ | Electronic Press Kit 2026",
  description:
    "Reggaetón & Dancehall artist desde Belén, Medellín. Press Kit, música, booking y contacto.",
  openGraph: {
    title: "PaulGZ | Electronic Press Kit 2026",
    description:
      "Reggaetón & Dancehall artist desde Belén, Medellín. Press Kit, música, booking y contacto.",
    type: "website",
    url: "https://paulgz.com",
    siteName: "PaulGZ",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaulGZ | EPK 2026",
    description:
      "Reggaetón & Dancehall · Belén // Medellín. Música, booking y contacto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "PaulGZ",
  alternateName: "Paul GZ",
  genre: ["Reggaetón", "Dancehall"],
  foundingLocation: {
    "@type": "Place",
    name: "Medellín, Colombia",
  },
  sameAs: [
    "https://open.spotify.com/artist/62fm63OqMRWNUxHAbvjVtR",
    "https://www.instagram.com/paulgzco/",
  ],
  description:
    "Reggaetón & Dancehall artist from Medellín, Colombia. Compositor, freestyler y artista urbano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${spaceMono.variable} ${syncopate.variable} antialiased cursor-default bg-black text-silver overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Tactical max-width container — 1200px elegance */}
        <div className="max-w-[1200px] mx-auto relative">
          {children}
        </div>
        <TickerTape />
        <Analytics />

        {/* ── Global CRT Scanlines Overlay ── */}
        <div className="crt-scanlines" aria-hidden="true" />
        {/* ── Global Noise Grain Overlay ── */}
        <div className="noise-grain" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  );
}
