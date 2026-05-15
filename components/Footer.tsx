"use client";

import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

const FOOTER_LINKS = [
  { label: "SPOTIFY", href: "https://open.spotify.com/artist/62fm63OqMRWNUxHAbvjVtR" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/paulgzco/" },
  { label: "YOUTUBE", href: "https://www.youtube.com/@PaulGZ" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-neutral-800/40 overflow-hidden">
      {/* Topographic subtle overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="white" strokeWidth="0.4">
          {[60, 120, 200, 300].map((r, i) => (
            <ellipse key={i} cx="50%" cy="80%" rx={r} ry={r * 0.35} />
          ))}
        </g>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Top section — Brand + Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand block */}
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-white uppercase">
              PAUL<span className="text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">GZ</span>
            </h2>
            <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase">
              // BELÉN — MEDELLÍN — COLOMBIA
            </p>
          </div>

          {/* External links */}
          <div className="flex items-center gap-6 md:gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-neutral-500 uppercase hover:text-[#FF0000] transition-colors duration-300"
              >
                <ScrambleText text={link.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

        {/* Bottom section — Copyright + Coordinates + Credits */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-600 uppercase">
              © {currentYear} PAULGZ // ALL_RIGHTS_RESERVED
            </span>
            <span className="font-mono text-[8px] tracking-[0.35em] text-neutral-700 uppercase">
              LAT: 06.23°N // LON: -75.62°W // ALTITUDE: 1,495m
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            {/* Status indicator */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.8)]" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-600 uppercase">
              SYS.STATUS: ONLINE // v2026.1
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom padding to clear the TickerTape bar */}
      <div className="h-7" />
    </footer>
  );
}
