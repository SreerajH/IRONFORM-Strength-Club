"use client";

import AnimatedContent from "./reactbits/AnimatedContent";
import ScrollFloat from "./reactbits/ScrollFloat";
import StarBorder from "./reactbits/StarBorder";
import { gym } from "@/lib/gym";

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <p className="eyebrow">VISIT US</p>
      <ScrollFloat
        stagger={0.03}
        ease="back.inOut(2)"
        containerClassName="mt-3"
        textClassName="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.05] tracking-[-0.01em] text-chalk"
      >
        COME SEE THE FLOOR.
      </ScrollFloat>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <AnimatedContent direction="vertical" distance={60} duration={0.8}>
          <div className="map-frame overflow-hidden rounded-xl border border-steel-line">
            <iframe
              title="IRONFORM Strength Club on Google Maps"
              src="https://www.google.com/maps?q=Trident+Towers+Outer+Ring+Road+Marathahalli+Bengaluru&output=embed"
              className="h-[320px] w-full sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedContent>

        <AnimatedContent direction="vertical" distance={60} duration={0.8} delay={0.12}>
          <div className="flex h-full flex-col justify-center gap-8 rounded-xl border border-steel-line bg-iron p-8 lg:p-10">
            <div>
              <p className="mono-label text-ember">ADDRESS</p>
              <p className="mt-2 text-chalk/90">
                {gym.address.street},
                <br />
                {gym.address.locality} {gym.address.postalCode}
              </p>
            </div>
            <div>
              <p className="mono-label text-ember">HOURS</p>
              <p className="mt-2 text-chalk/90">{gym.hours.label}</p>
            </div>
            <div>
              <p className="mono-label text-ember">PHONE</p>
              <a href={gym.phoneHref} className="mt-2 block text-chalk/90 transition-colors hover:text-ember">
                {gym.phone}
              </a>
            </div>
            <div className="pt-2">
              <StarBorder
                as="a"
                href={gym.phoneHref}
                color="#FF5A2D"
                speed="4s"
                thickness={2}
              >
                Book Your Free Session
              </StarBorder>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
