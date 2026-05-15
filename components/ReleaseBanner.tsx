"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

const SPOTIFY_URL =
  "https://open.spotify.com/album/4CMyVY9QwJ5ziGzDX87OdF?si=qlM3MxnqRt2h1-1etDQApA";

const TRACKS = [
  "SOLA",
  "MANIATIKOS",
  "2KCLASSIC",
  "SUELTATE",
  "ROMANTIKEO",
  "CLACK CLACK",
];

export default function ReleaseBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Staggered entrance — appears after 800ms
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full z-[160] overflow-hidden"
        >
          {/* ── Background layers ── */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

          {/* Subtle red radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(255,0,0,0.06) 0%, transparent 60%)",
            }}
          />

          {/* Scanline texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 1px, rgba(255,0,0,0.15) 1px, rgba(255,0,0,0.15) 2px)",
              backgroundSize: "100% 3px",
            }}
          />

          {/* Bottom border — pulsing red line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #FF0000 20%, #FF0000 80%, transparent 100%)",
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
            {/* Desktop Layout */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
              {/* Left: Status + Label */}
              <div className="flex items-center gap-3 shrink-0">
                {/* Pulsing red LED */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.9)]" />
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-red-500 uppercase font-bold drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
                  // NUEVO EP EN LAS CALLES
                </span>
              </div>

              {/* Center: Title + Info */}
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 flex-1 min-w-0">
                {/* EP Title */}
                <h3 className="font-display text-base sm:text-lg md:text-xl font-bold tracking-[0.15em] text-white uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  <ScrambleText text="PEREIRA X MEDALLO" autoPlay />
                </h3>

                {/* Separator (desktop) */}
                <span className="hidden sm:block text-neutral-700 font-mono text-xs">
                  //
                </span>

                {/* Metadata */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-semibold">
                    EP · 6 TEMAS QUE ESTÁN CANDELA
                  </span>
                </div>
              </div>

              {/* Right: CTA + Close */}
              <div className="flex items-center gap-3 shrink-0">
                {/* CTA Button */}
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-5 py-2 border border-red-600/70 bg-red-950/20 hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] overflow-hidden"
                >
                  {/* Hover scanline */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)",
                      backgroundSize: "100% 3px",
                    }}
                  />
                  {/* Spotify icon */}
                  <svg
                    className="w-4 h-4 text-red-500 group-hover:text-white transition-colors duration-300 relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-red-200 group-hover:text-white font-bold uppercase transition-colors duration-300 relative z-10 whitespace-nowrap">
                    ESCUCHAR AHORA
                  </span>
                </a>

                {/* Close button */}
                <button
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => setIsDismissed(true), 500);
                  }}
                  className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-neutral-400 hover:text-red-500 transition-colors duration-200 px-2 py-1"
                  aria-label="Cerrar banner"
                >
                  [X]
                </button>
              </div>
            </div>

            {/* Featured artists & Track Ticker — compact line */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 w-full overflow-hidden max-w-[800px] mx-auto px-1 sm:px-0">
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-neutral-400 uppercase shrink-0">
                ft. Santos OG |
              </span>
              <div 
                className="overflow-hidden flex-1 relative"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)"
                }}
              >
                <motion.div
                  className="flex gap-3 whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...TRACKS, ...TRACKS, ...TRACKS].map((track, i) => (
                    <span
                      key={i}
                      className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] text-neutral-300 uppercase"
                    >
                      {track}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
