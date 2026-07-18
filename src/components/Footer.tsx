import { navLinks } from "@/lib/gym";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-steel-line bg-iron/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-14 text-center lg:px-8">
        <p className="font-display text-2xl tracking-tight text-chalk">
          IRON<span className="text-ember">FORM</span>
        </p>
        <p className="mono-label text-smoke">SHOW UP. LIFT. REPEAT.</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="mono-label text-smoke transition-colors hover:text-ember">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[13px] text-smoke/70">
          © {new Date().getFullYear()} IRONFORM Strength Club · Website by Sreeraj H
        </p>
      </div>
    </footer>
  );
}
