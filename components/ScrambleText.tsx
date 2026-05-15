"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#@$%&01";

interface ScrambleTextProps {
  text: string;
  /** If true, the scramble animation plays on mount */
  autoPlay?: boolean;
  /** Optional additional className for the wrapper span */
  className?: string;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrambleText({
  text,
  autoPlay = false,
  className,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
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
    if (autoPlay && !prefersReducedMotion()) {
      const timeout = setTimeout(() => scramble(), 300);
      return () => clearTimeout(timeout);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, scramble]);

  return (
    <span className={className} onMouseEnter={scramble}>
      {display}
    </span>
  );
}
