"use client";

import { motion } from "framer-motion";

export default function SpotifyEmbed() {
  return (
    <motion.section
      id="spotify"
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
          <radialGradient id="spot-topo-fade" cx="45%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="spot-topo-mask">
            <rect width="100%" height="100%" fill="url(#spot-topo-fade)" />
          </mask>
        </defs>
        <g mask="url(#spot-topo-mask)" stroke="white" strokeWidth="0.5">
          {[35, 75, 120, 165, 215, 270, 340, 420].map((r, i) => (
            <ellipse key={i} cx="45%" cy="50%" rx={r} ry={r * 0.55} />
          ))}
          <line x1="0" y1="45%" x2="100%" y2="45%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="0" y1="65%" x2="100%" y2="65%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="45%" y1="0" x2="45%" y2="100%" strokeWidth="0.3" strokeDasharray="3 14" />
        </g>
      </svg>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title — Industrial Bounding Box */}
        <div className="relative w-full border border-neutral-800/60 border-l-4 border-l-red-600 bg-neutral-950/80 p-5 md:p-8 mb-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row md:items-center justify-between overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-600 uppercase mb-3">
              // AUDIO_NETWORK — LIVE_STREAM
            </p>
            <h2 className="font-display text-xl sm:text-2xl lg:text-4xl font-bold text-brand-red uppercase tracking-widest">
              <span className="animate-neon-flicker">{"// LO QUE SUENA EN SPOTIFY"}</span>
              <span className="animate-blink">_</span>
            </h2>
          </div>
          <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-600 mt-2 md:mt-0 uppercase">ID: AUDIO_STREAM</span>
        </div>

        {/* Embed container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-neutral-800/60 bg-[#0a0a0a] overflow-hidden"
        >
          <iframe
            src="https://open.spotify.com/embed/artist/62fm63OqMRWNUxHAbvjVtR?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        </motion.div>

        {/* System label */}
        <p className="font-mono text-[9px] text-silver/25 tracking-[0.35em] uppercase mt-3 text-right">
          {"SRC: SPOTIFY_API // STREAM.ACTIVE"}
        </p>
      </div>
    </motion.section>
  );
}
