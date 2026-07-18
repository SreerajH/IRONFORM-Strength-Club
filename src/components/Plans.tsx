"use client";

import CardSwap, { Card } from "./reactbits/CardSwap";
import StarBorder from "./reactbits/StarBorder";
import ScrollFloat from "./reactbits/ScrollFloat";
import AnimatedContent from "./reactbits/AnimatedContent";
import { plans } from "@/lib/gym";

export default function Plans() {
  return (
    <section id="plans" className="overflow-hidden border-y border-steel-line bg-iron/40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-32">
        {/* copy left */}
        <div>
          <p className="eyebrow">MEMBERSHIP</p>
          <ScrollFloat
            stagger={0.03}
            ease="back.inOut(2)"
            containerClassName="mt-3"
            textClassName="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.05] tracking-[-0.01em] text-chalk"
          >
            SIMPLE PLANS. NO LOCK-INS.
          </ScrollFloat>
          <AnimatedContent direction="vertical" distance={50} duration={0.8} delay={0.15}>
            <p className="mt-6 max-w-md text-smoke">
              One membership, every program on the floor. Pause it when life happens,
              upgrade it when training becomes the habit. Pricing shared on request,
              because a number without a walkthrough means nothing.
            </p>
            <ul className="mono-label mt-8 flex flex-col gap-3 text-smoke">
              <li className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-ember" /> NO JOINING FEE THIS MONTH
              </li>
              <li className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-ember" /> PAUSE ANYTIME, TWICE A YEAR
              </li>
              <li className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-ember" /> FIRST SESSION ALWAYS FREE
              </li>
            </ul>
          </AnimatedContent>
        </div>

        {/* CardSwap right */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[540px]">
          <CardSwap
            width={420}
            height={340}
            cardDistance={60}
            verticalDistance={70}
            delay={3500}
            pauseOnHover
            easing="linear"
            skewAmount={4}
          >
            {plans.map((plan) => (
              <Card key={plan.name} className="p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl uppercase tracking-[-0.01em] text-chalk">{plan.name}</h3>
                  {plan.tag && (
                    <span className="mono-label rounded-full border border-ember-deep bg-ember/10 px-3 py-1 text-ember">
                      {plan.tag}
                    </span>
                  )}
                </div>
                <ul className="mono-label mt-6 flex flex-col gap-3 text-smoke">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 border-b border-steel-line pb-3">
                      <span className="text-ember">+</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="mono-label text-smoke">PRICING ON REQUEST</span>
                  <StarBorder
                    as="a"
                    href="#visit"
                    speed="4s"
                    thickness={1}
                    innerClassName="!py-[8px] !px-[16px] !text-[12px]"
                  >
                    Enquire
                  </StarBorder>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
