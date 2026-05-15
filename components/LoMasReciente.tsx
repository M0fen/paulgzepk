"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YOUTUBE_IDS = [
  "VqIUee3oAX8",
  "tOjheAAzuXY",
  "faRJ1ddGJvE",
  "hXvbQ4AHt9g",
  "bpwmRTf_tXI",
  "Q_zp8aR6STs",
  "530MV4yHVfg"
];

export default function LoMasReciente() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % YOUTUBE_IDS.length);
    setIsPlaying(false);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + YOUTUBE_IDS.length) % YOUTUBE_IDS.length
    );
    setIsPlaying(false);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <motion.section
      id="reciente"
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
          <radialGradient id="rec-topo-fade" cx="55%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="rec-topo-mask">
            <rect width="100%" height="100%" fill="url(#rec-topo-fade)" />
          </mask>
        </defs>
        <g mask="url(#rec-topo-mask)" stroke="white" strokeWidth="0.5">
          {[30, 65, 105, 150, 200, 260, 330, 410].map((r, i) => (
            <ellipse key={i} cx="55%" cy="48%" rx={r} ry={r * 0.58} />
          ))}
          <line x1="0" y1="38%" x2="100%" y2="38%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="0" y1="62%" x2="100%" y2="62%" strokeWidth="0.3" strokeDasharray="4 16" />
          <line x1="55%" y1="0" x2="55%" y2="100%" strokeWidth="0.3" strokeDasharray="3 14" />
        </g>
      </svg>

      {/* Cerro Nutibara — Topographic Elevation Map */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] overflow-hidden flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Outer contour rings — static, very faint */}
          <path
            d="M 400,300 C 540,230 640,260 660,310 C 680,360 610,430 490,450 C 370,470 230,440 190,380 C 150,320 180,230 280,210 C 340,195 380,295 400,300 Z"
            stroke="#ef4444" strokeWidth="0.6" fill="none"
          />
          <path
            d="M 400,300 C 520,240 600,265 618,308 C 636,352 572,414 464,432 C 356,450 232,424 196,370 C 160,316 188,238 278,220 C 348,207 390,297 400,300 Z"
            stroke="#ef4444" strokeWidth="0.6" fill="none"
          />
          {/* Mid contour rings — slow pulse */}
          <path
            className="animate-[pulse_4s_ease-in-out_infinite]"
            d="M 400,300 C 490,256 558,272 572,306 C 586,340 536,392 444,408 C 352,424 248,402 218,356 C 188,310 212,256 294,240 C 358,228 392,298 400,300 Z"
            stroke="#ef4444" strokeWidth="0.7" fill="none"
          />
          <path
            className="animate-[pulse_4s_ease-in-out_infinite]"
            d="M 400,300 C 466,264 526,278 538,306 C 550,334 508,376 426,390 C 344,404 254,384 228,346 C 202,308 222,262 294,248 C 354,236 392,298 400,300 Z"
            stroke="#ef4444" strokeWidth="0.7" fill="none"
          />
          <path
            className="animate-[pulse_4s_ease-in-out_infinite]"
            d="M 400,300 C 444,272 496,284 506,306 C 516,328 482,362 410,374 C 338,386 262,368 240,338 C 218,308 234,270 296,258 C 352,246 394,298 400,300 Z"
            stroke="#ef4444" strokeWidth="0.8" fill="none"
          />
          {/* Inner summit rings — pulsing brighter */}
          <path
            className="animate-[pulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "0.5s" }}
            d="M 400,300 C 424,282 462,290 470,308 C 478,326 456,350 396,360 C 336,370 278,354 262,330 C 246,306 258,280 308,270 C 354,260 394,298 400,300 Z"
            stroke="#ef4444" strokeWidth="0.9" fill="none"
          />
          <path
            className="animate-[pulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "0.8s" }}
            d="M 400,300 C 414,288 440,294 446,308 C 452,322 434,340 388,348 C 342,356 296,342 282,322 C 268,302 278,282 316,274 C 354,266 394,298 400,300 Z"
            stroke="#ef4444" strokeWidth="1.0" fill="none"
          />
          {/* Summit crown — highest elevation */}
          <path
            className="animate-[pulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "1.2s" }}
            d="M 400,300 C 408,294 422,298 426,308 C 430,318 418,328 396,332 C 374,336 352,326 346,312 C 340,298 348,288 368,284 C 388,280 396,298 400,300 Z"
            stroke="#ef4444" strokeWidth="1.1" fill="none"
          />
          {/* Elevation markers — tactical crosshairs */}
          <line x1="400" y1="270" x2="400" y2="295" stroke="#ef4444" strokeWidth="0.4" />
          <line x1="400" y1="305" x2="400" y2="330" stroke="#ef4444" strokeWidth="0.4" />
          <line x1="370" y1="300" x2="394" y2="300" stroke="#ef4444" strokeWidth="0.4" />
          <line x1="406" y1="300" x2="430" y2="300" stroke="#ef4444" strokeWidth="0.4" />
          {/* Tactical grid reference lines */}
          <line x1="0" y1="300" x2="800" y2="300" stroke="#ef4444" strokeWidth="0.2" strokeDasharray="2 20" />
          <line x1="400" y1="0" x2="400" y2="600" stroke="#ef4444" strokeWidth="0.2" strokeDasharray="2 20" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title — Industrial Bounding Box */}
        <div className="relative w-full border border-neutral-800/60 border-l-4 border-l-red-600 bg-neutral-950/80 p-5 md:p-8 mb-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row md:items-center justify-between overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-600 uppercase mb-3">
              // MEDIA_STREAM — LATEST_OUTPUT
            </p>
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-4xl text-brand-red uppercase tracking-widest">
              <span className="animate-neon-flicker">{"// DISPONIBLE AHORA"}</span>
              <span className="animate-blink">_</span>
            </h2>
          </div>
          <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-600 mt-2 md:mt-0 uppercase">ID: MEDIA_OUT</span>
        </div>

        {/* Carousel viewport — Custom Thumbnail Wrapper */}
        <div className="relative border border-neutral-800/60 bg-black overflow-hidden mt-8">
          {/* Counter — integrated in top bar */}
          <div className="absolute top-3 right-4 z-10 font-mono text-[10px] text-silver/40 tracking-[0.25em] uppercase">
            {String(activeIndex + 1).padStart(2, "0")} / {String(YOUTUBE_IDS.length).padStart(2, "0")}
          </div>

          {/* Video / Thumbnail container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-${isPlaying}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full aspect-video relative"
            >
              {isPlaying ? (
                /* ── Actual YouTube iframe — loads only on click ── */
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_IDS[activeIndex]}?rel=0&modestbranding=1&autoplay=1`}
                  title={`Video ${activeIndex + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* ── Custom Thumbnail with Tactical Play Button ── */
                <button
                  type="button"
                  onClick={handlePlay}
                  className="w-full h-full relative group cursor-pointer"
                  aria-label="Play video"
                >
                  {/* YouTube maxresdefault thumbnail */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_IDS[activeIndex]}/maxresdefault.jpg`}
                    alt={`Video thumbnail ${activeIndex + 1}`}
                    className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Tactical Play Button — chamfered style */}
                  <div className="yt-play-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="8,5 19,12 8,19" />
                    </svg>
                  </div>

                  {/* Corner HUD elements */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                    <span className="relative flex h-[5px] w-[5px]">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 animate-ping opacity-60" />
                      <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-red-600" />
                    </span>
                    <span className="font-mono text-[9px] text-white/60 tracking-[0.2em] uppercase">
                      STREAM_READY
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 pointer-events-none">
                    <span className="font-mono text-[9px] text-white/40 tracking-[0.2em] uppercase">
                      {">"} CLICK_TO_PLAY
                    </span>
                  </div>
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation — Enlarged for mobile touch targets (44x44px minimum) */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={goPrev}
            className="font-mono text-[11px] font-bold tracking-[0.2em] text-silver/50 uppercase border border-silver/15 px-5 py-3 min-h-[44px] min-w-[44px] hover:text-brand-red hover:border-brand-red/40 active:bg-brand-red/10 transition-colors duration-200"
          >
            {"◂ PREV"}
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {YOUTUBE_IDS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsPlaying(false);
                }}
                className={`w-2 h-2 transition-all duration-200 ${i === activeIndex
                    ? "bg-brand-red scale-125"
                    : "bg-silver/20 hover:bg-silver/40"
                  }`}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="font-mono text-[11px] font-bold tracking-[0.2em] text-silver/50 uppercase border border-silver/15 px-5 py-3 min-h-[44px] min-w-[44px] hover:text-brand-red hover:border-brand-red/40 active:bg-brand-red/10 transition-colors duration-200"
          >
            {"NEXT ▸"}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
