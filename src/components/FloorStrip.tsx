"use client";

import { useEffect, useRef, useState } from "react";

const shots = [
  { src: "/floor-2.jpg", alt: "Cardio floor with backlit mirrors at IRONFORM" },
  { src: "/floor-1.jpg", alt: "Strength equipment and circular mirror bay at IRONFORM" },
  { src: "/floor-3.jpg", alt: "Free weights and rig under warm lighting at IRONFORM" },
];

export default function FloorStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const t = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(t * 28);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
        {shots.map((shot, i) => (
          <div
            key={shot.src}
            className="group relative overflow-hidden rounded-xl border border-steel-line"
          >
            <div
              className="aspect-[4/5] will-change-transform"
              style={{ transform: `translateY(${offset * (i === 1 ? -1 : 1) * 0.6}px) scale(1.12)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* coal wash + ember hairline on hover to keep the strip on-brand */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/50 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-ember-deep/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
