"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

/* ── Valle de Aburrá Topographic Overlay ── */
function TopographySVG() {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none opacity-30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 900"
      fill="none"
    >
      {/* Valle de Aburrá topographic contours — converging toward center */}
      <g stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="none">
        {/* Outer mountain ridges — wide irregular contours */}
        <path d="M 80 350 Q 150 280 250 310 Q 350 340 400 290 Q 450 240 520 260 Q 600 280 700 250 Q 780 230 850 280" />
        <path d="M 60 380 Q 140 320 230 345 Q 320 370 390 325 Q 440 290 510 300 Q 590 315 680 290 Q 760 265 870 310" />
        <path d="M 50 420 Q 130 360 220 385 Q 310 405 380 365 Q 430 335 500 345 Q 580 355 670 330 Q 750 310 880 345" />

        {/* Mid-altitude contours — tightening */}
        <path d="M 100 460 Q 180 410 260 430 Q 340 450 400 410 Q 440 385 500 395 Q 560 405 640 385 Q 720 365 830 395" />
        <path d="M 120 490 Q 200 445 280 465 Q 350 480 405 445 Q 445 420 500 430 Q 555 440 625 420 Q 700 400 810 430" />
        <path d="M 140 515 Q 220 475 290 495 Q 360 510 410 480 Q 450 455 500 462 Q 550 470 615 455 Q 680 440 790 465" />

        {/* Valley floor contours — dense, converging to Belén area */}
        <path d="M 170 540 Q 250 510 310 525 Q 370 535 415 510 Q 450 490 500 495 Q 548 500 600 490 Q 660 475 760 500" />
        <path d="M 200 560 Q 275 535 330 548 Q 380 555 420 535 Q 452 520 500 522 Q 545 525 590 518 Q 640 510 730 530" />
        <path d="M 230 575 Q 300 555 350 565 Q 390 572 425 555 Q 455 542 500 545 Q 542 548 580 542 Q 620 535 700 555" />
        <path d="M 270 590 Q 325 575 370 582 Q 400 588 430 575 Q 458 562 500 564 Q 540 566 570 562 Q 600 555 670 575" />

        {/* Inner valley — tightest contours around center */}
        <path d="M 310 605 Q 355 595 385 600 Q 415 605 440 595 Q 462 585 500 586 Q 536 588 560 585 Q 585 580 630 595" />
        <path d="M 350 615 Q 380 610 410 613 Q 435 616 455 608 Q 472 600 500 601 Q 528 602 545 600 Q 565 596 590 610" />
        <path d="M 390 623 Q 415 618 435 621 Q 455 624 470 618 Q 483 612 500 613 Q 517 614 530 612 Q 545 608 560 618" />

        {/* Southern slopes — mirrored contours descending */}
        <path d="M 270 660 Q 325 675 370 668 Q 400 662 430 675 Q 458 688 500 686 Q 540 684 570 688 Q 600 695 670 675" />
        <path d="M 230 680 Q 300 700 350 690 Q 390 683 425 700 Q 455 712 500 710 Q 542 708 580 712 Q 620 720 700 700" />
        <path d="M 200 700 Q 275 725 330 712 Q 380 705 420 725 Q 452 740 500 738 Q 545 735 590 742 Q 640 750 730 725" />
        <path d="M 170 720 Q 250 750 310 735 Q 370 725 415 750 Q 450 770 500 768 Q 548 765 600 770 Q 660 780 760 755" />

        {/* Extended outer southern ridges */}
        <path d="M 140 745 Q 220 780 290 765 Q 360 750 410 780 Q 450 800 500 798 Q 550 795 615 805 Q 680 815 790 790" />
        <path d="M 100 770 Q 180 810 260 795 Q 340 780 400 810 Q 440 835 500 832 Q 555 828 625 840 Q 700 850 810 825" />
        <path d="M 80 800 Q 150 845 250 830 Q 350 815 400 850 Q 450 875 520 870 Q 600 860 700 880 Q 780 890 850 865" />
      </g>

      {/* Tactical grid lines — cardinal axes through center */}
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" strokeDasharray="4 12">
        <line x1="450" y1="100" x2="450" y2="800" />
        <line x1="100" y1="450" x2="800" y2="450" />
        {/* Diagonal tactical paths */}
        <line x1="200" y1="200" x2="700" y2="700" />
        <line x1="700" y1="200" x2="200" y2="700" />
      </g>

      {/* Concentric range rings — targeting reticle */}
      <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none">
        <circle cx="450" cy="450" r="50" />
        <circle cx="450" cy="450" r="100" />
        <circle cx="450" cy="450" r="170" />
        <circle cx="450" cy="450" r="250" />
        <circle cx="450" cy="450" r="340" />
      </g>

      {/* Altitude markers — small ticks along contours */}
      <g fill="rgba(255,255,255,0.08)" fontSize="7" fontFamily="monospace">
        <text x="125" y="465">2400m</text>
        <text x="780" y="400">2200m</text>
        <text x="420" y="625">1495m</text>
        <text x="415" y="595">BELÉN</text>
        <text x="348" y="560">RÍO MEDELLÍN</text>
        <text x="690" y="510">ENVIGADO</text>
        <text x="180" y="550">CERRO NUTIBARA</text>
      </g>

      {/* Center crosshair — precise target on Belén */}
      <g stroke="rgba(255,0,0,0.12)" strokeWidth="0.8">
        <line x1="440" y1="440" x2="460" y2="440" />
        <line x1="450" y1="430" x2="450" y2="450" />
        <circle cx="450" cy="450" r="8" fill="none" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  /* ── Ghost Fade: lightweight scroll-linked transforms ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* ═══ Ghost Fade wrapper — all visible content ═══ */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full h-full transform-gpu will-change-transform"
        style={{ y: yParallax, opacity: opacityFade }}
      >

        {/* Background Kanji Overlay */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0"
        >
          <Image
            src="/paul_bg_kanji.png"
            alt="忠 — Lealtad"
            width={900}
            height={900}
            priority
            className="w-auto h-[120%] lg:h-[150%] max-w-none opacity-[0.18] mix-blend-screen animate-kanji-pulse"
          />
        </div>

        {/* ═══ Content: Title / Subtitle / Teaser ═══ */}
        <div
          className="relative z-10 flex flex-col items-center justify-center px-5 md:px-6 text-center w-full py-24"
        >

          {/* Element 1: Artist Name — Monolithic Block */}
          <h1 className="flex items-center justify-center gap-2 text-5xl sm:text-7xl lg:text-9xl font-black uppercase leading-none tracking-tight">
            <span className="text-white">
              <ScrambleText text="PAUL" autoPlay />
            </span>
            <span className="text-[#FF0000] drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-[pulse_3s_ease-in-out_infinite]">
              <ScrambleText text="GZ" autoPlay />
            </span>
          </h1>

          {/* ── Identity Block with Topography ── */}
          <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center relative mt-10">

            {/* Topographic Valle de Aburrá Overlay */}
            <TopographySVG />

            {/* Main Slogan — BELÉN // MEDELLÍN */}
            <div className="relative z-10 mt-6 mb-4">
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold font-display uppercase text-white tracking-[0.35em]">
                BELÉN // MEDELLÍN
              </p>
            </div>

            {/* Katakana Subtext */}
            <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-neutral-500 mt-2 mb-8">
              [ ベレン - メデジン ]
            </p>

          </div>

        </div>

      </motion.div>

      {/* Noise texture — now handled by global .noise-grain overlay */}

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,0,0,0.08) 0%, transparent 55%)",
        }}
      />

      {/* Scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20"
        style={{
          height: "15%",
          background:
            "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </section>
  );
}
