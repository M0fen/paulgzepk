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
        {children}
        <TickerTape />
      </body>
    </html>
  );
}
