import { site } from "@/lib/site";
import { nav } from "@/data/content";
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a
          href="#top"
          className="text-sm font-extrabold uppercase tracking-[.2em] text-gold"
        >
          {site.name}
        </a>
        <nav
          aria-label="Main"
          className="hidden gap-7 text-sm text-white/80 md:flex"
        >
          {nav.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="hover:text-gold">
              {l}
            </a>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary
            aria-label="Menu"
            className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-lg bg-panel2 text-lg"
          >
            ☰
          </summary>
          <div className="absolute right-0 mt-2 grid w-48 gap-1 rounded-xl border border-line bg-panel p-2 text-sm shadow-xl">
            {nav.map(([id, l]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-3 py-2 hover:bg-panel2"
              >
                {l}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
