"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedContent from "./reactbits/AnimatedContent";
import { stats } from "@/lib/gym";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-steel-line bg-iron/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-3 lg:px-8 lg:py-20">
        {stats.map((s, i) => (
          <AnimatedContent key={s.label} direction="vertical" distance={60} duration={0.8} delay={i * 0.12}>
            <div className="text-center sm:text-left">
              <p className="font-display text-[clamp(2.6rem,6vw,4.2rem)] leading-none tracking-[-0.01em] text-chalk">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="mono-label mt-3 text-ember">{s.label}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
