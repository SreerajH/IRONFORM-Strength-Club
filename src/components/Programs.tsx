"use client";

import { motion } from "framer-motion";
import AnimatedContent from "./reactbits/AnimatedContent";
import ScrollFloat from "./reactbits/ScrollFloat";
import { programs } from "@/lib/gym";

function ProgramCard({ tag, name, desc }: { tag: string; name: string; desc: string }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      className="group relative h-full rounded-xl bg-iron p-7 sm:p-8"
    >
      {/* ember border that draws around the card on hover */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <motion.rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="12"
          stroke="#FF5A2D"
          strokeWidth="1"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </svg>
      <span className="mono-label text-ember">{tag}</span>
      <h3 className="mt-4 font-display text-xl uppercase leading-tight tracking-[-0.01em] text-chalk sm:text-2xl">
        {name}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-smoke">{desc}</p>
    </motion.article>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <p className="eyebrow">PROGRAMS</p>
      <ScrollFloat
        stagger={0.03}
        ease="back.inOut(2)"
        containerClassName="mt-3"
        textClassName="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.05] tracking-[-0.01em] text-chalk"
      >
        PICK YOUR DISCIPLINE.
      </ScrollFloat>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {programs.map((p, i) => (
          <AnimatedContent
            key={p.tag}
            direction="vertical"
            distance={80}
            duration={0.8}
            delay={i * 0.12}
            className="h-full"
          >
            <ProgramCard {...p} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
