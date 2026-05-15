"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Static feed metadata per image ── */
const FEED_DATA = [
  { id: "DATA_FRM_892", cam: "CAM_01", timestamp: "03:47:12", sector: "MED-BLN" },
  { id: "DATA_FRM_417", cam: "CAM_04", timestamp: "03:47:19", sector: "URB-NTE" },
  { id: "DATA_FRM_031", cam: "CAM_02", timestamp: "03:47:23", sector: "MED-BLN" },
  { id: "DATA_FRM_768", cam: "CAM_07", timestamp: "03:47:31", sector: "STG-INT" },
] as const;

const PRESS_ASSETS = [
  "/gzgaleria1.png",
  "/gzgaleria2.png",
  "/gzgaleria3.png",
  "/gzgaleria4.png",
];

/* ── Corner Bracket overlay ── (pure SVG, no image deps) */
function ViewfinderCorners() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-left */}
      <polyline points="0,10 0,0 10,0" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
      {/* Top-right */}
      <polyline points="90,0 100,0 100,10" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
      {/* Bottom-left */}
      <polyline points="0,90 0,100 10,100" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
      {/* Bottom-right */}
      <polyline points="90,100 100,100 100,90" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />

      {/* Center crosshair tick marks */}
      <line x1="49" y1="50" x2="51" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
      <line x1="50" y1="49" x2="50" y2="51" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
    </svg>
  );
}

export default function GaleriaPrensa() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track which card is centered via IntersectionObserver
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-gallery-card]");
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.galleryCard);
            if (!isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="galeria"
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
          <radialGradient id="gal-topo-fade" cx="40%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="gal-topo-mask">
            <rect width="100%" height="100%" fill="url(#gal-topo-fade)" />
          </mask>
        </defs>
        <g mask="url(#gal-topo-mask)" stroke="white" strokeWidth="0.5">
          {[35, 70, 110, 155, 210, 275, 350, 440].map((r, i) => (
            <ellipse key={i} cx="40%" cy="55%" rx={r} ry={r * 0.55} />
          ))}
          <line x1="0" y1="40%" x2="100%" y2="40%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="0" y1="60%" x2="100%" y2="60%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="40%" y1="0" x2="40%" y2="100%" strokeWidth="0.3" strokeDasharray="3 14" />
        </g>
      </svg>

      {/* Street Waves — Audio Frequency → Medellín Hill Skyline */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/*
            Each path: left half = continuous bezier curves (audio wave)
            right half = sharp steps / blocky polygons (dense hill houses)
            Amplitude decreases from bottom to top (quieter higher up)
          */}

          {/* Wave 1 — bottom, widest amplitude */}
          <path
            d="M 0,500
               C 40,470 80,530 120,500 C 160,470 200,530 240,500
               C 280,470 320,530 360,500 C 400,470 440,530 480,500
               C 510,490 530,480 550,480
               L 550,480 L 580,480 L 580,440 L 620,440 L 620,480
               L 660,480 L 660,420 L 700,420 L 700,480
               L 740,480 L 740,450 L 780,450 L 780,410 L 820,410 L 820,480
               L 860,480 L 860,430 L 900,430 L 900,480
               L 940,480 L 940,460 L 980,460 L 980,420 L 1020,420 L 1020,480
               L 1060,480 L 1060,440 L 1100,440 L 1100,480 L 1140,480 L 1200,480"
            stroke="white" strokeWidth="0.7" fill="none"
          />

          {/* Wave 2 — second from bottom */}
          <path
            d="M 0,420
               C 50,390 90,450 140,420 C 180,390 220,450 270,420
               C 310,390 350,450 400,420 C 440,390 480,440 510,420
               C 530,410 545,400 560,400
               L 590,400 L 590,365 L 630,365 L 630,400
               L 670,400 L 670,340 L 710,340 L 710,400
               L 750,400 L 750,370 L 790,370 L 790,335 L 830,335 L 830,400
               L 870,400 L 870,350 L 910,350 L 910,400
               L 950,400 L 950,375 L 990,375 L 990,340 L 1030,340 L 1030,400
               L 1070,400 L 1070,360 L 1110,360 L 1110,400 L 1200,400"
            stroke="white" strokeWidth="0.6" fill="none"
          />

          {/* Wave 3 — center */}
          <path
            d="M 0,340
               C 60,310 100,370 160,340 C 200,310 240,365 290,340
               C 330,315 370,360 420,340 C 455,324 485,330 510,320
               L 540,320 L 540,285 L 580,285 L 580,320
               L 620,320 L 620,260 L 660,260 L 660,320
               L 700,320 L 700,290 L 740,290 L 740,255 L 780,255 L 780,320
               L 820,320 L 820,270 L 860,270 L 860,320
               L 900,320 L 900,292 L 940,292 L 940,258 L 980,258 L 980,320
               L 1020,320 L 1020,278 L 1060,278 L 1060,320 L 1200,320"
            stroke="white" strokeWidth="0.5" fill="none"
          />

          {/* Wave 4 — upper mid */}
          <path
            d="M 0,255
               C 70,228 110,278 170,255 C 215,235 250,270 300,255
               C 340,240 375,262 420,252 C 452,244 480,248 506,240
               L 535,240 L 535,208 L 572,208 L 572,240
               L 612,240 L 612,180 L 652,180 L 652,240
               L 692,240 L 692,210 L 732,210 L 732,175 L 772,175 L 772,240
               L 812,240 L 812,190 L 852,190 L 852,240
               L 892,240 L 892,215 L 932,215 L 932,178 L 972,178 L 972,240
               L 1012,240 L 1012,200 L 1052,200 L 1052,240 L 1200,240"
            stroke="white" strokeWidth="0.45" fill="none"
          />

          {/* Wave 5 — top, narrowest amplitude */}
          <path
            d="M 0,175
               C 80,155 120,195 185,175 C 230,160 265,180 315,172
               C 355,165 390,175 430,168 C 458,162 484,166 508,160
               L 534,160 L 534,130 L 568,130 L 568,160
               L 606,160 L 606,100 L 644,100 L 644,160
               L 682,160 L 682,128 L 720,128 L 720,95 L 758,95 L 758,160
               L 796,160 L 796,110 L 834,110 L 834,160
               L 872,160 L 872,132 L 910,132 L 910,98 L 948,98 L 948,160
               L 986,160 L 986,120 L 1024,120 L 1024,160 L 1200,160"
            stroke="white" strokeWidth="0.4" fill="none"
          />

          {/* Transition marker — vertical dashed line at x=540 */}
          <line x1="540" y1="60" x2="540" y2="560" stroke="white" strokeWidth="0.3" strokeDasharray="3 12" />
          {/* Audio / Urban zone labels as ticks */}
          <line x1="100" y1="560" x2="100" y2="555" stroke="white" strokeWidth="0.4" />
          <line x1="250" y1="560" x2="250" y2="555" stroke="white" strokeWidth="0.4" />
          <line x1="800" y1="560" x2="800" y2="555" stroke="white" strokeWidth="0.4" />
          <line x1="1000" y1="560" x2="1000" y2="555" stroke="white" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header — Industrial Bounding Box */}
        <div className="relative w-full border border-neutral-800/60 border-l-4 border-l-red-600 bg-neutral-950/80 p-5 md:p-8 mb-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row md:items-center justify-between overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            {/* Pre-label */}
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-600 uppercase mb-3">
            // TACTICAL_FEED — LIVE_ARCHIVE
            </p>
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-4xl text-red-600 uppercase tracking-widest">
              <span className="animate-neon-flicker">{"// GALERÍA DEL ARTISTA"}</span>
              <span className="animate-blink">_</span>
            </h2>
            {/* Rule */}
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-24 bg-gradient-to-r from-red-700/50 to-transparent" />
              <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-700 uppercase">
                {PRESS_ASSETS.length} UNITS // AUTHENTICATED
              </span>
            </div>
          </div>
          <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-600 mt-2 md:mt-0 uppercase">ID: VISUAL_FEED</span>
        </div>

        {/* Infrared Tactical Carousel */}
        <div
          ref={scrollRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 pt-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-8"
        >
          {PRESS_ASSETS.map((src, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setSelectedImage(src)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex-none w-[85vw] sm:w-[60vw] md:w-[400px] lg:w-[450px] snap-center aspect-[4/5] p-[2px] bg-neutral-900 border border-neutral-700/50 shadow-2xl overflow-hidden cursor-crosshair transition-all duration-300 hover:border-neutral-500 block text-left"
              data-gallery-card={i}
            >
              {/* Top-Left: Micro-LED */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-[#FF0000] group-hover:shadow-[0_0_8px_#FF0000] transition-all duration-300 z-20" />

              {/* Bottom-Right: Etched serial text */}
              <span className="absolute bottom-2 right-2 font-mono text-[9px] text-neutral-600 tracking-widest z-20">
                SYS.CAM_0{i + 1}
              </span>

              {/* ── Tactical VIEW_FILE Overlay ── */}
              <div className="absolute inset-[2px] z-30 flex flex-col items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {/* Crosshair visor icon */}
                <svg
                  className="w-12 h-12 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <circle cx="12" cy="12" r="6" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  {/* Center plus */}
                  <line x1="11" y1="12" x2="13" y2="12" strokeWidth={2} />
                  <line x1="12" y1="11" x2="12" y2="13" strokeWidth={2} />
                </svg>
                <span className="font-mono text-[10px] tracking-[0.4em] text-white/80 uppercase">
                  [ VIEW_FILE ]
                </span>
                {/* Bottom metadata */}
                <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.3em] text-neutral-500 uppercase">
                  {FEED_DATA[i]?.cam ?? `CAM_0${i + 1}`} // {FEED_DATA[i]?.sector ?? "UNKNOWN"}
                </span>
              </div>

              {/* Tactical Red Overlay (Infrared lens effect) */}
              <div className="absolute inset-[2px] bg-red-900/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none" />

              {/* Viewfinder Corners */}
              <ViewfinderCorners />

              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`GZ Feed CAM_0${i + 1}`}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </motion.button>
          ))}
        </div>

        {/* Tactical Navigation HUD */}
        <div className="flex justify-between items-center w-full border-t border-neutral-800/50 pt-4 mt-2">
          <span className="font-mono text-[10px] text-neutral-500 tracking-[0.2em]">// DESLIZA PARA VER LAS FOTOS</span>
          <div className="flex gap-2">
            {PRESS_ASSETS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = scrollRef.current;
                  if (!container) return;
                  const cards = container.querySelectorAll<HTMLElement>("[data-gallery-card]");
                  cards[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }}
                className={`h-1 transition-all duration-300 ${i === activeIndex
                    ? "w-8 bg-red-600"
                    : "w-2 bg-neutral-700 hover:bg-neutral-500"
                  }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 z-[110] font-mono text-sm tracking-widest text-neutral-400 hover:text-[#FF0000] transition-colors duration-300 pointer-events-auto"
              >
                [ X_CLOSE_VIEWER ]
              </button>

              {/* Modal Image Container */}
              <div
                className="relative max-w-5xl max-h-[90vh] border border-neutral-800 bg-black flex item-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Overlay elements */}
                <div className="absolute top-4 left-4 z-[110] flex items-center gap-2 pointer-events-none">
                  <span className="relative flex h-[6px] w-[6px]">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 animate-ping opacity-80"></span>
                    <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-red-600"></span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                  // IMG_ANALYSIS: ACTIVE
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-[110] pointer-events-none">
                  <span className="text-neutral-500 font-mono text-xs tracking-[0.2em] uppercase">
                    SYS_ID: GZ-2026-RAW
                  </span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage}
                  alt="Expanded Feed"
                  className="w-auto max-h-[85vh] object-contain opacity-90"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div> {/* close max-w-6xl wrapper */}
    </motion.section>
  );
}
