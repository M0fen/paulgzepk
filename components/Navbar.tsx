"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── ScrambleText ── */
const GLYPHS = "!<>-_\\/[]{}—=+*^?#@$%&01";

function ScrambleText({ text, autoPlay = false }: { text: string; autoPlay?: boolean }) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 30);
  }, [text]);

  useEffect(() => {
    if (autoPlay) scramble();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoPlay, scramble]);

  return (
    <span
      className="inline-block"
      onMouseEnter={scramble}
    >
      {display}
    </span>
  );
}

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-silver/15"
            : "bg-transparent border-b border-transparent"
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
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-black/95 backdrop-blur-md border-b border-silver/15 md:hidden"
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
