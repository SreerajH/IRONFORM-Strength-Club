"use client";

import { useEffect, useRef, useState } from "react";

const SETS = ["programs", "coaches", "schedule", "plans", "visit"];

export default function RepCounter() {
  const [progress, setProgress] = useState(0);
  const [setIdx, setSetIdx] = useState(0);
  const [complete, setComplete] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const update = () => {
      ticking.current = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);

      // which set are we in: last section whose top passed mid-viewport
      let idx = 0;
      for (let i = 0; i < SETS.length; i++) {
        const el = document.getElementById(SETS[i]);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.55) idx = i;
      }
      setSetIdx(idx);

      const footer = document.getElementById("site-footer");
      if (footer) {
        setComplete(footer.getBoundingClientRect().top < window.innerHeight * 0.9);
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
      aria-hidden="true"
    >
      <span
        className={`mono-label whitespace-nowrap [writing-mode:vertical-rl] ${
          complete ? "rep-complete" : "text-smoke"
        }`}
      >
        {complete
          ? "SESSION COMPLETE"
          : reduced
            ? "IN SESSION"
            : `SET 0${setIdx + 1} / 05`}
      </span>
      <div className="relative h-44 w-[2px] overflow-hidden rounded-full bg-steel-line">
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-ember"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
