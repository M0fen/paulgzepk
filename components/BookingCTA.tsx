"use client";

import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";
import TopoOverlay from "@/components/TopoOverlay";

export default function BookingCTA() {
  return (
    <motion.section
      id="booking"
      className="relative w-full py-10 px-5 md:px-10 overflow-hidden bg-neutral-950 border-l-2 border-red-950/30 shadow-[0_0_50px_rgba(0,0,0,0.6)] group/section transition-all duration-300 hover:border-red-600/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TopoOverlay variant="booking" />

      {/* Metrpolús Line 30 — PCB / Transit Map */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] overflow-hidden">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* ── Main trunk line (horizontal, LTR across center) ── */}
          <line x1="0" y1="250" x2="900" y2="250" stroke="silver" strokeWidth="0.8" />

          {/* ── Branch lines departing at 45° ── */}
          {/* NE branch from node 1 (x=150) */}
          <line x1="150" y1="250" x2="300" y2="100" stroke="silver" strokeWidth="0.6" />
          <line x1="300" y1="100" x2="500" y2="100" stroke="silver" strokeWidth="0.6" />

          {/* SW branch from node 2 (x=280) */}
          <line x1="280" y1="250" x2="180" y2="350" stroke="silver" strokeWidth="0.5" />
          <line x1="180" y1="350" x2="180" y2="420" stroke="silver" strokeWidth="0.5" />

          {/* NW stub from node 3 (x=450) */}
          <line x1="450" y1="250" x2="450" y2="80" stroke="silver" strokeWidth="0.6" />
          <line x1="450" y1="80" x2="340" y2="80" stroke="silver" strokeWidth="0.5" strokeDasharray="4 8" />

          {/* SE branch from node 4 (x=580) */}
          <line x1="580" y1="250" x2="680" y2="350" stroke="silver" strokeWidth="0.6" />
          <line x1="680" y1="350" x2="680" y2="440" stroke="silver" strokeWidth="0.5" />
          <line x1="680" y1="440" x2="800" y2="440" stroke="silver" strokeWidth="0.5" />

          {/* NE branch from node 5 (x=720) */}
          <line x1="720" y1="250" x2="820" y2="150" stroke="silver" strokeWidth="0.55" />
          <line x1="820" y1="150" x2="900" y2="150" stroke="silver" strokeWidth="0.5" />

          {/* SW terminal branch from node 6 (x=840) */}
          <line x1="840" y1="250" x2="840" y2="390" stroke="silver" strokeWidth="0.5" />
          <line x1="840" y1="390" x2="760" y2="390" stroke="silver" strokeWidth="0.5" strokeDasharray="3 7" />

          {/* ── Secondary horizontal rail, upper ── */}
          <line x1="0" y1="100" x2="500" y2="100" stroke="silver" strokeWidth="0.4" strokeDasharray="6 14" />
          {/* Secondary vertical connectors */}
          <line x1="100" y1="100" x2="100" y2="250" stroke="silver" strokeWidth="0.35" strokeDasharray="3 9" />
          <line x1="500" y1="100" x2="500" y2="250" stroke="silver" strokeWidth="0.35" strokeDasharray="3 9" />

          {/* ── PCB pad rings at each node ── */}
          {/* Node 1 — x=150 y=250 */}
          <circle cx="150" cy="250" r="5" stroke="silver" strokeWidth="0.6" fill="none" />
          <circle cx="150" cy="250" r="2" fill="#dc2626" className="opacity-50" />

          {/* Node 2 — x=280 y=250 */}
          <circle cx="280" cy="250" r="5" stroke="silver" strokeWidth="0.6" fill="none" />
          <circle cx="280" cy="250" r="2" fill="#dc2626" className="opacity-50" />

          {/* Node 3 — x=450 y=250 */}
          <circle cx="450" cy="250" r="6" stroke="silver" strokeWidth="0.7" fill="none" />
          <circle cx="450" cy="250" r="2.5" fill="#dc2626" className="opacity-60" />

          {/* Node 4 — x=580 y=250 */}
          <circle cx="580" cy="250" r="5" stroke="silver" strokeWidth="0.6" fill="none" />
          <circle cx="580" cy="250" r="2" fill="#dc2626" className="opacity-50" />

          {/* Node 5 — x=720 y=250 */}
          <circle cx="720" cy="250" r="5" stroke="silver" strokeWidth="0.6" fill="none" />
          <circle cx="720" cy="250" r="2" fill="#dc2626" className="opacity-50" />

          {/* Node 6 — x=840 y=250 (terminal) */}
          <circle cx="840" cy="250" r="7" stroke="silver" strokeWidth="0.8" fill="none" />
          <circle cx="840" cy="250" r="3" fill="#dc2626" className="opacity-70" />
          {/* Second outer ring on terminal */}
          <circle cx="840" cy="250" r="11" stroke="silver" strokeWidth="0.3" strokeDasharray="2 4" fill="none" />

          {/* ── Branch terminus pads ── */}
          <circle cx="500" cy="100" r="3" stroke="silver" strokeWidth="0.5" fill="none" />
          <circle cx="180" cy="420" r="3" stroke="silver" strokeWidth="0.5" fill="none" />
          <circle cx="800" cy="440" r="3" stroke="silver" strokeWidth="0.5" fill="none" />

          {/* ── Trace corner dots (solder joints) ── */}
          <circle cx="300" cy="100" r="1.5" fill="silver" />
          <circle cx="680" cy="350" r="1.5" fill="silver" />
          <circle cx="820" cy="150" r="1.5" fill="silver" />
          <circle cx="680" cy="440" r="1.5" fill="silver" />

          {/* ── Micro text labels at key nodes (monospace style rendered as paths) ── */}
          <line x1="148" y1="238" x2="148" y2="235" stroke="silver" strokeWidth="0.4" />
          <line x1="278" y1="238" x2="278" y2="235" stroke="silver" strokeWidth="0.4" />
          <line x1="448" y1="236" x2="448" y2="232" stroke="silver" strokeWidth="0.4" />
          <line x1="578" y1="238" x2="578" y2="235" stroke="silver" strokeWidth="0.4" />
          <line x1="718" y1="238" x2="718" y2="235" stroke="silver" strokeWidth="0.4" />
          <line x1="838" y1="236" x2="838" y2="232" stroke="silver" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">

        {/* Title — Industrial Bounding Box */}
        <div className="relative w-full border border-neutral-800/60 border-l-4 border-l-red-600 bg-neutral-950/80 p-5 md:p-8 mb-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row md:items-center justify-between overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-600 uppercase mb-3">
              // COMMS_CHANNEL — SECURE_LINK
            </p>
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-4xl text-red-600 uppercase tracking-widest">
              <span className="animate-neon-flicker">{"// BOOKING.TERMINAL"}</span>
              <span className="animate-blink">_</span>
            </h2>
          </div>
          <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-600 mt-2 md:mt-0 uppercase">ID: SECURE_COMMS</span>
        </div>

        {/* ── Data Command Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 relative z-10 w-full"
        >

          {/* ── COMMS MODULE 1: WhatsApp — PRIMARY CTA (More Prominent) ── */}
          <a
            href="https://wa.me/573234470562"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-28 p-6 border-2 border-emerald-900/50 bg-emerald-950/10 hover:bg-emerald-950/20 transition-all duration-300 hover:border-emerald-500/50 flex flex-col gap-4 overflow-hidden hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-emerald-800/40 group-hover:border-emerald-500/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-emerald-800/40 group-hover:border-emerald-500/40 transition-colors duration-300" />

            {/* Top row — Label + ONLINE status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-silver font-mono text-base md:text-lg tracking-widest uppercase font-bold">
                  WHATSAPP
                </span>
                {/* ONLINE badge */}
                <span className="flex items-center gap-1.5 px-2 py-0.5 border border-emerald-700/50 rounded-sm bg-emerald-950/30">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-emerald-400 uppercase font-bold animate-pulse">
                    ONLINE
                  </span>
                </span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <span className="text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
                // ENCRYPTED_CHANNEL — PRIORITY
              </span>
              <span className="text-emerald-600 group-hover:text-emerald-400 font-mono text-[10px] tracking-widest transition-colors duration-200 font-bold">
                {">"} INIT_CONNECTION
              </span>
            </div>
          </a>

          {/* ── COMMS MODULE 2: Instagram ── */}
          <a
            href="https://www.instagram.com/paulgzco/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-24 p-5 border border-neutral-800 bg-neutral-950/80 hover:bg-neutral-900 transition-all duration-300 hover:border-red-600/50 flex flex-col gap-4 overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-neutral-700 group-hover:border-red-600/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-neutral-700 group-hover:border-red-600/40 transition-colors duration-300" />

            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-silver font-mono text-sm md:text-base tracking-widest uppercase">
                INSTAGRAM
              </span>
              {/* Active status dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" style={{ animationDelay: "0.4s" }} />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.8)]" />
              </span>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <span className="text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
                // VISUAL_FEED — LIVE
              </span>
              <span className="text-neutral-400 group-hover:text-red-500 font-mono text-[10px] tracking-widest transition-colors duration-200">
                {">"} ACCESS_FEED
              </span>
            </div>
          </a>

          {/* ── FULL-WIDTH MODULE: Tech Rider Download — HIGH PRIORITY ── */}
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Disponible próximamente"
            className="group col-span-1 md:col-span-2 mt-2 w-full p-6 border-2 border-red-800/60 bg-red-950/15 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden opacity-50 cursor-not-allowed text-left"
          >
            {/* Subtle scan line on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Left: Labels */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-mono text-base tracking-widest font-bold uppercase">
                  <ScrambleText text="DOWNLOAD TECH RIDER (PDF)" />
                </span>
                {/* Priority badge */}
                <span className="px-2 py-0.5 border border-red-700/60 bg-red-950/40 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase font-bold animate-pulse">
                  PRIORITY: HIGH
                </span>
              </div>
              <span className="text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
                FILE_SIZE: 4.2MB // FORMAT: PDF // SECURE_TRANSFER // FOR_SOUND_ENGINEERS
              </span>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Download arrow SVG — Larger */}
              <svg
                className="w-6 h-6 text-red-600 group-hover:text-red-400 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="font-mono text-[11px] tracking-widest text-neutral-400 transition-colors duration-200 uppercase font-bold">
                [ SOON ]
              </span>
            </div>
          </button>

        </motion.div>

        {/* System label */}
        <p className="mt-6 font-mono text-[9px] text-silver/25 tracking-[0.35em] uppercase text-right">
          {"// SECURE_COMMS — ALL_CHANNELS_OPEN"}
        </p>

      </div>
    </motion.section>
  );
}
