"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── ScrambleText ── */
const GLYPHS = "!<>-_\\/[]{}—=+*^?#@$%&01";

function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    if (ivRef.current) clearInterval(ivRef.current);
    ivRef.current = setInterval(() => {
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
        if (ivRef.current) clearInterval(ivRef.current);
        setDisplay(text);
      }
    }, 25);
  }, [text]);

  return <span onMouseEnter={scramble}>{display}</span>;
}

/* ── Tech Metallic Frame ── */
const FRAME_SPECS = [
  { unit: "UNIT_SPEC-GZ01", rev: "REV_C", freq: "24.0MHz", led: "emerald" },
  { unit: "UNIT_SPEC-GZ02", rev: "REV_A", freq: "48.0MHz", led: "red" },
  { unit: "UNIT_SPEC-GZ03", rev: "REV_D", freq: "96.0MHz", led: "emerald" },
];

function TechFrame({
  src,
  alt,
  spec,
  index,
  onClick,
}: {
  src: string;
  alt: string;
  spec: (typeof FRAME_SPECS)[number];
  index: number;
  onClick?: () => void;
}) {
  const isEmerald = spec.led === "emerald";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="relative group text-left outline-none block w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* ── Outer Gunmetal Bezel ── */}
      <div
        className="relative p-[2px] overflow-visible"
        style={{
          background:
            "linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 40%, #2e2e2e 60%, #111 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.8)",
        }}
      >
        {/* Corner Cutouts — SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-left corner cutout */}
          <polygon points="0,0 12,0 0,12" fill="#000" />
          <polyline points="12,0 12,4 4,4 4,12 0,12" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Top-right corner cutout */}
          <polygon points="100,0 88,0 100,12" fill="#000" />
          <polyline points="88,0 88,4 96,4 96,12 100,12" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Bottom-left corner cutout */}
          <polygon points="0,100 12,100 0,88" fill="#000" />
          <polyline points="12,100 12,96 4,96 4,88 0,88" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Bottom-right corner cutout */}
          <polygon points="100,100 88,100 100,88" fill="#000" />
          <polyline points="88,100 88,96 96,96 96,88 100,88" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

          {/* Top-center tick marks */}
          <line x1="48" y1="0" x2="48" y2="1.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
          <line x1="50" y1="0" x2="50" y2="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
          <line x1="52" y1="0" x2="52" y2="1.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
          {/* Bottom-center tick marks */}
          <line x1="48" y1="100" x2="48" y2="98.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
          <line x1="50" y1="100" x2="50" y2="97.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
          <line x1="52" y1="100" x2="52" y2="98.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
        </svg>

        {/* ── Top Bezel Bar (serial + LED) ── */}
        <div
          className="relative flex items-center justify-between px-3 py-1 z-10"
          style={{
            background:
              "linear-gradient(90deg, #1e1e1e 0%, #252525 50%, #1a1a1a 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span className="font-mono text-[7px] tracking-[0.25em] text-neutral-500 uppercase select-none">
            {spec.unit}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[6px] tracking-[0.2em] text-neutral-600 uppercase select-none">
              {spec.freq}
            </span>
            {/* Micro-LED status indicator */}
            <span className="relative flex h-[5px] w-[5px]">
              <span
                className={`absolute inline-flex h-full w-full rounded-full animate-ping opacity-60 ${
                  isEmerald ? "bg-emerald-400" : "bg-red-500"
                }`}
              ></span>
              <span
                className={`relative inline-flex h-[5px] w-[5px] rounded-full ${
                  isEmerald ? "bg-emerald-500" : "bg-red-600"
                }`}
                style={{
                  boxShadow: isEmerald
                    ? "0 0 4px rgba(16,185,129,0.9)"
                    : "0 0 4px rgba(220,38,38,0.9)",
                }}
              ></span>
            </span>
          </div>
        </div>

        {/* ── Image Viewport ── */}
        <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "3/4" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-105"
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)",
            }}
          />
          {/* Spec overlay on hover */}
          <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2" />
              <span className="font-mono text-[7px] tracking-[0.3em] text-neutral-400 uppercase">
                {spec.rev} // VERIFIED
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Bezel Bar (etched spec) ── */}
        <div
          className="flex items-center justify-between px-3 py-1"
          style={{
            background:
              "linear-gradient(90deg, #1a1a1a 0%, #222 50%, #1e1e1e 100%)",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <span className="font-mono text-[6px] tracking-[0.3em] text-neutral-600 uppercase select-none">
            {spec.rev}
          </span>
          {/* Second LED — crimson */}
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[6px] tracking-[0.2em] text-neutral-700 uppercase select-none">
              SYS:{isEmerald ? "OK" : "REC"}
            </span>
            <span
              className="inline-flex h-[4px] w-[4px] rounded-full bg-red-700"
              style={{ boxShadow: "0 0 3px rgba(185,28,28,0.8)" }}
            ></span>
          </div>
        </div>
      </div>

      {/* Side-rule measurement bar */}
      <div className="absolute -left-2 top-6 bottom-6 flex flex-col justify-between items-center pointer-events-none">
        <div className="w-[1px] flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </motion.button>
  );
}

/* ── Main Biografia Export ── */
export default function Biografia() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      id="biografia"
      className="relative w-full py-10 px-5 md:px-10 overflow-hidden bg-neutral-950 border-l-2 border-red-950/30 shadow-[0_0_50px_rgba(0,0,0,0.6)] group/section transition-all duration-300 hover:border-red-600/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {/* Topographic SVG background — convergence overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.08] transition-opacity duration-500 group-hover/section:opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="bio-topo-fade" cx="60%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="bio-topo-mask">
            <rect width="100%" height="100%" fill="url(#bio-topo-fade)" />
          </mask>
        </defs>
        <g mask="url(#bio-topo-mask)" stroke="white" strokeWidth="0.5">
          {/* Converging topographic contour rings */}
          {[30, 60, 90, 130, 175, 225, 285, 355, 435, 525].map((r, i) => (
            <ellipse key={i} cx="62%" cy="50%" rx={r} ry={r * 0.6} />
          ))}
          {/* Tactical horizontal rails */}
          <line x1="0" y1="35%" x2="100%" y2="35%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="0" y1="65%" x2="100%" y2="65%" strokeWidth="0.3" strokeDasharray="4 16" />
          {/* Vertical axis */}
          <line x1="62%" y1="0" x2="62%" y2="100%" strokeWidth="0.3" strokeDasharray="3 14" />
        </g>
      </svg>

      {/* Hiroshi Naito / Belén Library — Isometric Architectural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            {/* 30°/150° isometric line pattern */}
            <pattern id="bio-iso-grid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              {/* Horizontal */}
              <line x1="0" y1="26" x2="60" y2="26" stroke="silver" strokeWidth="0.5" />
              {/* 30-degree lines (\) */}
              <line x1="0" y1="0" x2="60" y2="52" stroke="silver" strokeWidth="0.5" />
              <line x1="-60" y1="0" x2="0" y2="52" stroke="silver" strokeWidth="0.5" />
              {/* 150-degree lines (/) */}
              <line x1="60" y1="0" x2="0" y2="52" stroke="silver" strokeWidth="0.5" />
              <line x1="120" y1="0" x2="60" y2="52" stroke="silver" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Fill canvas with isometric grid */}
          <rect width="800" height="600" fill="url(#bio-iso-grid)" />

          {/* Wireframe block 1 — library volume, upper right */}
          <g stroke="silver" strokeWidth="0.8">
            {/* Top face (parallelogram) */}
            <polygon points="520,80 620,54 680,90 580,116" fill="none" />
            {/* Left face */}
            <polygon points="520,80 580,116 580,220 520,184" fill="none" />
            {/* Right face */}
            <polygon points="620,54 680,90 680,194 620,158" fill="none" />
            {/* Shared edge */}
            <line x1="580" y1="116" x2="680" y2="90" stroke="silver" strokeWidth="0.5" />
            {/* Internal floor division */}
            <line x1="520" y1="132" x2="680" y2="142" strokeWidth="0.4" strokeDasharray="3 8" />
          </g>

          {/* Wireframe block 2 — secondary library wing, left */}
          <g stroke="silver" strokeWidth="0.7">
            <polygon points="110,160 198,136 240,162 152,186" fill="none" />
            <polygon points="110,160 152,186 152,270 110,244" fill="none" />
            <polygon points="198,136 240,162 240,246 198,222" fill="none" />
            {/* Window grid lines on right face */}
            <line x1="198" y1="162" x2="240" y2="186" strokeWidth="0.3" strokeDasharray="2 6" />
            <line x1="198" y1="182" x2="240" y2="206" strokeWidth="0.3" strokeDasharray="2 6" />
            <line x1="198" y1="202" x2="240" y2="226" strokeWidth="0.3" strokeDasharray="2 6" />
            {/* Vertical window dividers */}
            <line x1="210" y1="136" x2="216" y2="246" strokeWidth="0.3" strokeDasharray="2 6" />
            <line x1="224" y1="136" x2="230" y2="246" strokeWidth="0.3" strokeDasharray="2 6" />
          </g>

          {/* Wireframe block 3 — courtyard connector, center */}
          <g stroke="silver" strokeWidth="0.5">
            <polygon points="310,300 390,276 450,308 370,332" fill="none" />
            <polygon points="310,300 370,332 370,380 310,348" fill="none" />
            <polygon points="390,276 450,308 450,356 390,324" fill="none" />
            {/* Roof detail lines */}
            <line x1="330" y1="288" x2="390" y2="304" strokeWidth="0.4" strokeDasharray="4 10" />
            <line x1="350" y1="282" x2="410" y2="298" strokeWidth="0.4" strokeDasharray="4 10" />
          </g>

          {/* Ground plane horizon line */}
          <line x1="0" y1="440" x2="800" y2="440" stroke="silver" strokeWidth="0.4" strokeDasharray="6 18" />
          {/* Converging perspective lines from vanishing point */}
          <line x1="400" y1="440" x2="0" y2="240" stroke="silver" strokeWidth="0.25" />
          <line x1="400" y1="440" x2="800" y2="240" stroke="silver" strokeWidth="0.25" />
          <line x1="400" y1="440" x2="200" y2="200" stroke="silver" strokeWidth="0.2" />
          <line x1="400" y1="440" x2="600" y2="200" stroke="silver" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header — Industrial Bounding Box */}
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
            {/* Pre-label */}
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-600 uppercase mb-3">
              // IDENTITY_PROFILE-GZ // EPK-2026
            </p>
            {/* Main Title */}
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-4xl text-brand-red uppercase tracking-widest leading-tight">
              <span className="animate-neon-flicker">{"// QUIÉN ES PAULGZ"}</span>
              <span className="animate-blink">{" _"}</span>
            </h2>
          </div>
          <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-600 mt-2 md:mt-0 uppercase">ID: PROFILE_01</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6 max-w-xl"
          >
            {/* Bio paragraphs */}
            <div className="space-y-5 border-l border-neutral-800/60 pl-5">
              <p className="text-silver font-mono text-sm leading-relaxed">
                Originario de Medellín pero forjado en la escena de Panamá, Paul GZ lleva 6 años afilando sus barras y estructuras como compositor y freestyler. Hace un año, dio el salto definitivo al front-line soltando su primer arsenal de sencillos: "Problemática", "Nena Gánster" y "Sata".
              </p>
              <p className="text-silver font-mono text-sm leading-relaxed">
                Con una estética que fusiona la ingeniería técnica con lo callejero, su propuesta sonora llamó la atención en el Eje Cafetero. Rompiendo los esquemas tradicionales, firmó una alianza estratégica con Rubio Studio —titanes de la producción visual— convirtiéndose en su primer artista urbano respaldado.
              </p>
              <p className="text-silver font-mono text-sm leading-relaxed">
                Este movimiento táctico detonó el lanzamiento de "Everest", un track respaldado por la icónica discoteca homónima. Desde la comuna para el mundo: cada track es una declaración de intenciones, cada performance una experiencia inmersiva diseñada para el impacto.
              </p>
            </div>

            {/* Spec table */}
            <div className="mt-4 border border-neutral-800/60 p-4 space-y-2 bg-white/[0.01]">
              {[
                ["GÉNERO", "REGGAETÓN / DANCEHALL"],
                ["ORIGEN", "MEDELLÍN -> PANAMÁ"],
                ["CREW / VISUALS", "RUBIO STUDIO"],
                ["BOOKING", "DISPONIBLE // 2026"],
              ].map(([label, val]) => (
                <div key={label} className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[9px] tracking-[0.35em] text-neutral-600 uppercase shrink-0">
                    {label}
                  </span>
                  <div className="flex-1 h-px border-b border-dashed border-neutral-800 mx-2" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-300 uppercase text-right">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CTA — below text, above images on mobile */}
            <div className="pt-2">
              <a
                href="/presskit.zip"
                download
                className="cta-cyber-btn border-silver text-silver hover:bg-silver hover:text-black hover:border-silver inline-flex"
              >
                <ScrambleText text="// DESCARGAR PRESS KIT (ZIP) //" />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: 3-Image Tech Frame Carousel ── */}
          <div className="w-full lg:w-auto lg:max-w-[520px]">
            <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 pt-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {["/gzpic1.png", "/gzpic2.png", "/gzpic3.png"].map((src, i) => (
                <div key={i} className="flex-none w-[85vw] sm:w-[60vw] md:w-[400px] lg:w-[450px] snap-center">
                  <TechFrame
                    src={src}
                    alt={`PaulGZ — Unit ${i + 1}`}
                    spec={FRAME_SPECS[i]}
                    index={i}
                    onClick={() => setSelectedImage(src)}
                  />
                </div>
              ))}
            </div>

            {/* Tactical Navigation HUD */}
            <div className="flex justify-between items-center w-full border-t border-neutral-800/50 pt-4 mt-2">
              <span className="font-mono text-[10px] text-neutral-500 tracking-[0.2em]">// SWIPE_TO_NAVIGATE</span>
              <div className="flex gap-2">
                <div className="w-8 h-1 bg-red-600"></div>
                <div className="w-2 h-1 bg-neutral-700"></div>
                <div className="w-2 h-1 bg-neutral-700"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8 md:p-16"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 z-[110] font-mono text-sm tracking-widest text-white hover:text-[#FF0000] transition-colors duration-300 pointer-events-auto"
            >
              [ X_CLOSE_VIEWER ]
            </button>

            {/* Modal Image Container */}
            <div
              className="relative max-w-5xl max-h-[90vh] border border-neutral-800 bg-black flex items-center justify-center group p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Overlay elements */}
              <div className="absolute top-4 left-4 z-[110] flex items-center gap-2 pointer-events-none">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 animate-ping opacity-80"></span>
                  <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-red-600"></span>
                </span>
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">
                  // IMG_ANALYSIS: ACTIVE
                </span>
              </div>
              
              <div className="absolute bottom-4 right-4 z-[110] pointer-events-none bg-black/60 px-2 py-1 backdrop-blur-md">
                <span className="text-neutral-500 font-mono text-xs tracking-[0.2em] uppercase">
                  SYS_ID: GZ-2026-RAW // UNIT_SPEC: {selectedImage}
                </span>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Expanded Feed"
                className="w-auto h-auto max-h-[80vh] object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

