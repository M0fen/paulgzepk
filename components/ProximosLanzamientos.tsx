"use client";

import { motion } from "framer-motion";

const RELEASES = [
  {
    track: "Unknown",
    feat: "Santos OG",
    location: "PEREIRA x MEDALLO",
    date: "ABRIL - XXXX",
    status: "confirmed" as const,
  },
  {
    track: "[ ENCRIPTADO ]",
    feat: null,
    location: null,
    date: "TBA",
    status: "encrypted" as const,
  },
  {
    track: "[ ENCRIPTADO ]",
    feat: null,
    location: null,
    date: "TBA",
    status: "encrypted" as const,
  },
];

export default function ProximosLanzamientos() {
  return (
    <motion.section
      id="lanzamientos"
      className="relative w-full py-10 px-5 md:px-10 overflow-hidden bg-neutral-950 border-l-2 border-red-950/30 shadow-[0_0_50px_rgba(0,0,0,0.6)] group/section transition-all duration-300 hover:border-red-600/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Topographic SVG convergence overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.08] transition-opacity duration-500 group-hover/section:opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="rel-topo-fade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="rel-topo-mask">
            <rect width="100%" height="100%" fill="url(#rel-topo-fade)" />
          </mask>
        </defs>
        <g mask="url(#rel-topo-mask)" stroke="white" strokeWidth="0.5">
          {[35, 70, 110, 160, 220, 290, 370].map((r, i) => (
            <ellipse key={i} cx="50%" cy="50%" rx={r} ry={r * 0.5} />
          ))}
          <line x1="0" y1="42%" x2="100%" y2="42%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="0" y1="58%" x2="100%" y2="58%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="0.3" strokeDasharray="3 14" />
        </g>
      </svg>

      {/* Radar sweep background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] overflow-hidden flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Concentric radar rings */}
          {[40, 80, 130, 190, 260].map((r, i) => (
            <circle key={i} cx="300" cy="300" r={r} stroke="white" strokeWidth="0.5" />
          ))}
          {/* Crosshair lines */}
          <line x1="300" y1="0" x2="300" y2="600" stroke="white" strokeWidth="0.3" strokeDasharray="6 12" />
          <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeWidth="0.3" strokeDasharray="6 12" />
          {/* Diagonal sweeps */}
          <line x1="100" y1="100" x2="500" y2="500" stroke="white" strokeWidth="0.2" strokeDasharray="4 14" />
          <line x1="500" y1="100" x2="100" y2="500" stroke="white" strokeWidth="0.2" strokeDasharray="4 14" />
          {/* Blip points */}
          <circle cx="340" cy="260" r="3" fill="white" opacity="0.4" />
          <circle cx="260" cy="340" r="2" fill="white" opacity="0.25" />
          <circle cx="380" cy="310" r="2.5" fill="white" opacity="0.3" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Header — Industrial Bounding Box (matching all other sections) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full border border-neutral-800/60 border-l-4 border-l-red-600 bg-neutral-950/80 p-5 md:p-8 mb-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row md:items-center justify-between overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-600 uppercase mb-3">
              // TACTICAL_RADAR — INCOMING_SIGNALS
            </p>
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-4xl text-brand-red uppercase tracking-widest">
              <span className="animate-neon-flicker">{"// RADAR DE LANZAMIENTOS"}</span>
              <span className="animate-blink">_</span>
            </h2>
            {/* Rule */}
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-24 bg-gradient-to-r from-red-700/50 to-transparent" />
              <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-700 uppercase">
                {RELEASES.length} SIGNALS // TRACKING
              </span>
            </div>
          </div>
          <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-600 mt-2 md:mt-0 uppercase">ID: RELEASE_RADAR</span>
        </motion.div>

        {/* Column Labels (desktop only) */}
        <div className="hidden sm:flex justify-between px-4 pb-3 border-b border-neutral-700">
          <div className="flex gap-12">
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase w-44">
              TRACK
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase">
              FEAT / INFO
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase">
            RELEASE
          </span>
        </div>

        {/* Data Rows */}
        <ul className="divide-y divide-neutral-800/60">
          {RELEASES.map((release, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-4 hover:bg-neutral-900/50 transition-colors duration-200 group"
            >
              {/* Left block */}
              <div className="flex flex-col sm:flex-row sm:gap-12">
                {/* Track name */}
                <div className="flex items-center gap-2 sm:w-44">
                  {/* Status indicator */}
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      release.status === "confirmed"
                        ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                        : "bg-neutral-700"
                    }`}
                  />
                  <span
                    className={`font-mono text-sm tracking-wide ${
                      release.status === "encrypted"
                        ? "text-neutral-600 blur-[0.5px] select-none"
                        : "text-white"
                    }`}
                  >
                    {release.track}
                  </span>
                </div>

                {/* Feat / Info */}
                <span className="font-mono text-xs text-neutral-400 tracking-wide mt-1 sm:mt-0 pl-4 sm:pl-0">
                  {release.feat
                    ? `ft. ${release.feat}`
                    : release.status === "encrypted"
                      ? "—"
                      : ""}
                  {release.location && (
                    <span className="text-neutral-600 ml-3">
                      // {release.location}
                    </span>
                  )}
                </span>
              </div>

              {/* Right block: Date */}
              <span
                className={`font-mono text-xs tracking-[0.2em] uppercase mt-2 sm:mt-0 pl-4 sm:pl-0 ${
                  release.status === "encrypted"
                    ? "text-neutral-600 blur-[1px] select-none"
                    : "text-white"
                }`}
              >
                {release.date}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Footer line */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-800" />
          <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-700 uppercase">
            SYS.RADAR // LIVE_FEED
          </span>
          <div className="h-px flex-1 bg-neutral-800" />
        </div>

      </div>
    </motion.section>
  );
}
