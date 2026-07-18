"use client";

import ScrollReveal from "./reactbits/ScrollReveal";

export default function FounderQuote() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-36">
      <p className="eyebrow mb-8 text-center">FROM THE FOUNDER</p>
      <ScrollReveal
        baseOpacity={0.05}
        blurStrength={8}
        baseRotation={3}
        textClassName="font-display text-[clamp(1.5rem,3.6vw,2.6rem)] uppercase leading-[1.25] tracking-[-0.01em] text-chalk text-center"
      >
        We did not build IRONFORM to sell memberships. We built it because every gym
        around us was selling shortcuts, and strength has never been one.
      </ScrollReveal>
      <p className="mono-label mt-10 text-center text-smoke">FOUNDER, IRONFORM STRENGTH CLUB</p>
    </section>
  );
}
