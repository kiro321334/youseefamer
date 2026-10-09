import { services } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Services() {
  return (<section id="services" className="bg-panel/40 px-5 py-14"><div className="mx-auto max-w-5xl"><Heading title="What I Film" sub="Stabilized, cinematic coverage for every kind of shoot." />
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([ic, t, d, tags]) => (
      <article key={t} className="card reveal p-5"><div className="flex items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold"><Icon n={ic} size={22} /></span><h3 className="font-bold">{t}</h3></div>
        <p className="mt-3 text-sm text-white/60">{d}</p><p className="mt-3 text-xs font-bold text-gold">{tags}</p></article>))}</div>
    <a href="#contact" className="btn-d mt-6 w-full md:mx-auto md:flex md:max-w-xs">Request a custom plan</a></div></section>);
}
