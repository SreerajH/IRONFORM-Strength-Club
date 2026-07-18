"use client";

import { useEffect, useRef } from "react";
import DotField from "./reactbits/DotField";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";
import StarBorder from "./reactbits/StarBorder";
import { gym } from "@/lib/gym";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
    }
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* DotField physics background */}
      <div className="absolute inset-0" aria-hidden="true">
        <DotField
          dotRadius={1.2}
          dotSpacing={12}
          bulgeOnly={false}
          cursorForce={0.14}
          sparkle
          gradientFrom="rgba(255,90,45,0.28)"
          gradientTo="rgba(194,62,28,0.12)"
          glowColor="#1A0D08"
        />
        {/* vignette so text stays readable over the field */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(14,14,16,0.55)_75%,#0E0E10_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14 lg:px-8 lg:pb-20">
        {/* text column */}
        <div className="max-w-xl">
          <div className="mb-6 inline-block rounded-full border border-steel-line bg-iron/70 px-4 py-2 backdrop-blur-sm">
            <ShinyText
              text="First session free. No card needed."
              color="#8E8B85"
              shineColor="#FF5A2D"
              speed={2.4}
              className="mono-label"
            />
          </div>

          <h1 className="sr-only">EARN YOUR STRONG. IRONFORM Strength Club, Marathahalli, Bengaluru</h1>
          <BlurText
            text="EARN YOUR STRONG."
            animateBy="letters"
            direction="bottom"
            delay={45}
            stepDuration={0.3}
            className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-chalk"
          />

          <p className="mt-6 max-w-lg text-base text-chalk/80 sm:text-lg">
            Strength training, functional fitness and real coaching in a floor built for
            people who show up. No mirrors culture, no judgement, just work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <StarBorder as="a" href="#visit" color="#FF5A2D" speed="4s" thickness={2}>
              Start Free Session
            </StarBorder>
            <a
              href="#programs"
              className="rounded-full border border-steel-line px-7 py-[15px] text-[15px] font-medium text-smoke transition-colors duration-300 hover:border-ember-deep hover:text-chalk"
            >
              View programs
            </a>
          </div>

          <p className="mono-label mt-12 text-smoke">
            OPEN 5AM TO 11PM · 7 DAYS · {gym.rating.count}+ FIVE STAR REVIEWS
          </p>
        </div>

        {/* video column */}
        <div className="relative mx-auto w-full max-w-[300px] justify-self-end lg:max-w-[340px]">
          {/* ember glow */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(255,90,45,0.22),transparent_70%)] blur-xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-steel-line bg-iron shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
            <video
              ref={videoRef}
              className="aspect-[9/16] h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/floor-1.jpg"
              aria-label="Inside the IRONFORM training floor"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* gradient scrim + live tag */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-coal/20" />
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-steel-line bg-coal/70 px-3 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              <span className="mono-label text-chalk">ON THE FLOOR</span>
            </div>
            <p className="pointer-events-none absolute bottom-4 left-4 right-4 font-display text-sm uppercase tracking-[-0.01em] text-chalk/90">
              Marathahalli · Open 5AM to 11PM
            </p>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block" aria-hidden="true">
        <div className="h-10 w-[1px] animate-pulse bg-gradient-to-b from-transparent via-ember to-transparent" />
      </div>
    </section>
  );
}
