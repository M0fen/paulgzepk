"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

/* ── Nav Links ── */
const NAV_LINKS = [
  { href: "#inicio", label: "INICIO" },
  { href: "#biografia", label: "BIOGRAFÍA" },
  { href: "#galeria", label: "GALERÍA DE PRENSA" },
  { href: "#reciente", label: "LO MÁS RECIENTE" },
  { href: "#spotify", label: "SPOTIFY" },
  { href: "#booking", label: "BOOKING" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ── Scroll-Triggered HUD Logic ── */
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      // Auto-close mobile menu when scrolling back to top
      if (menuOpen) setMenuOpen(false);
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[150] bg-black/95 backdrop-blur-md border-b border-red-900/30 ${
          isScrolled ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo text */}
          <a
            href="#inicio"
            className="font-mono text-sm font-bold tracking-[0.3em] text-white uppercase hover:text-brand-red transition-colors"
          >
            PaulGZ
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-bold tracking-[0.2em] text-silver/70 uppercase hover:text-brand-red transition-colors duration-200"
              >
                <ScrambleText text={link.label} />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-mono text-xs tracking-[0.3em] text-silver/70 uppercase border border-silver/20 px-3 py-1.5 hover:text-brand-red hover:border-brand-red/40 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? "[ X ]" : "[ MENU ]"}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-[140] bg-black/95 backdrop-blur-md border-b border-silver/15 md:hidden"
          >
            <div className="flex flex-col py-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 px-6 py-4 font-mono text-sm font-bold tracking-[0.2em] text-silver/80 uppercase hover:text-brand-red hover:bg-white/[0.02] transition-colors border-b border-silver/5"
                >
                  <span className="text-silver/30 text-[10px] font-mono tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ScrambleText text={link.label} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

