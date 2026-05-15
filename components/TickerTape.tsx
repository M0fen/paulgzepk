"use client";

export default function TickerTape() {
  const text = "SYS.ONLINE_ // PAULGZ_RELEASES // REGGAETÓN_DANCEHALL_ // BOOKING_AVAILABLE_ // ";

  // Repeat enough times that half the total string exceeds any screen width
  const repeated = text.repeat(12);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-red border-t-2 border-black z-[100] h-6 flex items-center overflow-hidden pointer-events-none">
      <div className="ticker-animate flex whitespace-nowrap transform-gpu">
        {/* Two identical halves — when the first half scrolls off-screen, the second half is in its place → seamless */}
        <span className="font-display text-[9px] sm:text-[10px] text-black font-bold tracking-[0.2em] px-4 shrink-0">
          {repeated}
        </span>
        <span className="font-display text-[9px] sm:text-[10px] text-black font-bold tracking-[0.2em] px-4 shrink-0">
          {repeated}
        </span>
      </div>
    </div>
  );
}
