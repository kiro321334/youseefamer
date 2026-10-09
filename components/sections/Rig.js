import Image from "next/image";
import { rig } from "@/data/content";
import Heading from "@/components/ui/Heading";
export default function Rig() {
  return (
    <section id="rig" className="mx-auto max-w-5xl px-5 py-14">
      <Heading
        title="The Rig"
        sub="Gear built for smooth, all-day, run-and-gun cinematography."
      />
      <div className="card reveal mt-6 grid gap-5 p-4 md:grid-cols-2 md:p-5">
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
          <Image
            src="/rig.jpg"
            alt="Easyrig, RS3 Pro gimbal and SmallRig monitor camera setup"
            fill
            sizes="(min-width:768px) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="grid content-center gap-4">
          {rig.map(([t, d], i) => (
            <li key={t} className="flex gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/10 text-xs font-extrabold text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-bold">{t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {d}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
