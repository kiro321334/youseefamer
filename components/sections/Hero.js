import Image from "next/image";
import { heroStats } from "@/data/content";
export default function Hero() {
  return (
    <section className="flex h-svh min-h-[620px] flex-col px-4 pb-4 pt-[72px] md:px-8">
      <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col">
        <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl border border-line">
          <Image
            src="/hero.jpg"
            alt="Cinematographer operating an Easyrig and gimbal camera rig on set"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width:1024px) 1024px, 100vw"
            className="hero-img object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/20" />
          <span className="fade-up absolute left-3 top-3 flex items-center gap-2 rounded-md bg-black/60 px-3 py-1.5 text-[11px] font-bold tracking-wider backdrop-blur">
            <i className="blink h-2 w-2 rounded-full bg-red-500" />
            ON SET
          </span>
          <span className="fade-up absolute right-3 top-3 rounded-md bg-black/60 px-3 py-1.5 text-[11px] font-bold tracking-wider backdrop-blur">
            CAIRO • EG
          </span>
        </div>
        <div className="pt-5 text-center">
          <h1 className="fade-up text-[1.9rem] font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            Cinematic video for{" "}
            <span className="text-gold">events and brands.</span>
          </h1>
          <dl className="fade-up d1 mt-4 grid grid-cols-3 divide-x divide-line">
            {heroStats.map(([v, l]) => (
              <div key={l}>
                <dt className="text-xl font-extrabold text-gold">{v}</dt>
                <dd className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
          <div className="fade-up d2 mt-4 grid grid-cols-2 gap-3 md:mx-auto md:max-w-md">
            <a href="#contact" className="btn-g glow">
              Get a Quote
            </a>
            <a href="#projects" className="btn-d">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
