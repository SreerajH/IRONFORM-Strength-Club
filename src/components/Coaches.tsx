"use client";

import AnimatedContent from "./reactbits/AnimatedContent";
import ScrollFloat from "./reactbits/ScrollFloat";
import { coaches } from "@/lib/gym";

/* Stylized duotone placeholder portrait: silhouette bust over an ember wash.
   Rendered in color, pulled to grayscale by CSS, warms back up on hover. */
function Portrait({ initials, seed }: { initials: string; seed: number }) {
  const hue = [14, 20, 9][seed % 3];
  return (
    <svg viewBox="0 0 400 500" className="portrait h-full w-full" role="img" aria-label={`Portrait placeholder ${initials}`}>
      <rect width="400" height="500" fill="#1A1B1E" />
      <circle cx={120 + seed * 60} cy={90} r="140" fill={`hsl(${hue} 85% 55% / 0.16)`} />
      <circle cx={300 - seed * 40} cy={420} r="180" fill={`hsl(${hue} 70% 45% / 0.12)`} />
      {/* bust silhouette */}
      <g fill={`hsl(${hue} 12% 72%)`}>
        <circle cx="200" cy="185" r="72" />
        <path d="M 70 500 C 70 380 130 330 200 330 C 270 330 330 380 330 500 Z" />
      </g>
      {/* shoulder highlight */}
      <path d="M 70 500 C 70 380 130 330 200 330 L 200 500 Z" fill={`hsl(${hue} 80% 55% / 0.35)`} />
      <text
        x="200"
        y="472"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="64"
        fill="#0E0E10"
        opacity="0.55"
      >
        {initials}
      </text>
    </svg>
  );
}

export default function Coaches() {
  return (
    <section id="coaches" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <p className="eyebrow">COACHES</p>
      <ScrollFloat
        stagger={0.03}
        ease="back.inOut(2)"
        containerClassName="mt-3"
        textClassName="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.05] tracking-[-0.01em] text-chalk"
      >
        COACHED, NOT WATCHED.
      </ScrollFloat>
      <p className="mt-5 max-w-xl text-smoke">
        Every program at IRONFORM is run by a certified coach who knows your name,
        your numbers and your last session.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coaches.map((c, i) => (
          <AnimatedContent key={c.name} direction="vertical" distance={80} duration={0.8} delay={i * 0.12}>
            <article className="portrait-card group overflow-hidden rounded-xl border border-steel-line bg-iron transition-colors duration-300 hover:border-ember-deep">
              <div className="aspect-[4/5] overflow-hidden">
                <Portrait initials={c.initials} seed={i} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg uppercase tracking-[-0.01em] text-chalk">{c.name}</h3>
                <p className="mt-1 text-[15px] text-smoke">{c.role}</p>
                <p className="mono-label mt-4 text-ember">{c.cred}</p>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
