"use client";

import AnimatedContent from "./reactbits/AnimatedContent";
import { schedule } from "@/lib/gym";

export default function Schedule() {
  return (
    <section id="schedule" className="bg-chalk text-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <p className="mono-label text-ember-deep">SCHEDULE</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.05] tracking-[-0.01em]">
          THE WEEK, ON THE BOARD.
        </h2>

        <AnimatedContent direction="vertical" distance={60} duration={0.8}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse font-mono text-[13px] uppercase tracking-[0.08em]">
              <thead>
                <tr className="border-b-2 border-coal text-left">
                  <th className="py-4 pr-6 font-medium tracking-label text-coal/60">TIME</th>
                  <th className="py-4 pr-6 font-medium tracking-label text-coal/60">CLASS</th>
                  <th className="py-4 font-medium tracking-label text-coal/60">DAYS</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr
                    key={row.time + row.cls}
                    className="border-b border-coal/15 transition-colors hover:bg-coal/5"
                  >
                    <td className="py-4 pr-6 font-medium text-ember-deep">{row.time}</td>
                    <td className="py-4 pr-6 font-medium">{row.cls}</td>
                    <td className="py-4 text-coal/60">{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedContent>

        <p className="mt-8 font-mono text-[12px] uppercase tracking-label text-coal/60">
          Walk-ins welcome for your first free session.
        </p>
      </div>
    </section>
  );
}
