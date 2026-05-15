import type { Metadata } from "next";
import { Inter, Space_Mono, Syncopate, New_Tegomin } from "next/font/google";
import TickerTape from "@/components/TickerTape";
import "./globals.css";

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

const orientalDisplay = New_Tegomin({
  subsets: ["latin"],
  variable: "--font-oriental-display",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "PaulGZ | Electronic Press Kit 2026",
  description:
    "Reggaetón & Dancehall artist. Press Kit, música, booking y contacto.",
  openGraph: {
    title: "PaulGZ | Electronic Press Kit 2026",
    description:
      "Reggaetón & Dancehall artist. Press Kit, música, booking y contacto.",
    type: "website",
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
        className={`${inter.variable} ${spaceMono.variable} ${syncopate.variable} ${orientalDisplay.variable} antialiased cursor-default bg-black text-silver overflow-x-hidden`}
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

        {/* ── Global CRT Scanlines Overlay ── */}
        <div className="crt-scanlines" aria-hidden="true" />
        {/* ── Global Noise Grain Overlay ── */}
        <div className="noise-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
