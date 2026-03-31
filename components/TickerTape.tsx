"use client";

import { motion } from "framer-motion";

export default function TickerTape() {
  const text = "SYS.ONLINE_ // PAULGZ_RELEASES // REGGAETÓN_DANCEHALL_ // BOOKING_AVAILABLE_ // ";
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-red border-t-2 border-black z-[100] h-6 flex items-center overflow-hidden pointer-events-none">
      <div className="flex w-fit whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap"
        >
          {/* We repeat the string enough times to ensure seamless infinite scroll on wide screens */}
          <span className="font-display text-[9px] sm:text-[10px] text-black font-bold tracking-[0.2em] px-4">
            {text.repeat(10)}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
