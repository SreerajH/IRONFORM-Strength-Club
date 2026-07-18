"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/gym";
import StarBorder from "./reactbits/StarBorder";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-coal/80 backdrop-blur-md border-b border-steel-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="font-display text-xl tracking-tight text-chalk">
          IRON<span className="text-ember">FORM</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="mono-label text-smoke transition-colors hover:text-ember"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <StarBorder
            as="a"
            href="#visit"
            speed="4s"
            thickness={2}
            innerClassName="!py-[10px] !px-[22px] !text-[13px]"
          >
            Start Free Session
          </StarBorder>
        </div>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-6 bg-chalk transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-[2px] w-6 bg-chalk transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2px] w-6 bg-chalk transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-b border-steel-line bg-coal/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="mono-label block py-3 text-smoke transition-colors hover:text-ember"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mono-label block rounded-full border border-ember-deep bg-iron px-6 py-3 text-center text-ember"
            >
              Start Free Session
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
