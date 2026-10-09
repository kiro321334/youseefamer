import { steps } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Process() {
  return (<section id="process" className="mx-auto max-w-3xl px-5 py-14"><Heading title="How It Works" sub="From first message to final footage in four steps." />
    <ol className="relative mt-8 grid gap-4"><span aria-hidden="true" className="absolute bottom-6 left-[15px] top-6 w-0.5 bg-gold/60" />
      {steps.map(([t, d], i) => <li key={t} className="reveal relative flex gap-4"><span className="z-10 mt-4 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-sm font-extrabold text-bg ring-4 ring-bg">{i + 1}</span>
        <div className="card flex-1 p-4"><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-white/60">{d}</p></div></li>)}</ol>
    <p className="card mt-6 flex items-center gap-3 p-4 text-sm text-white/70"><Icon n="info" size={18} className="shrink-0 text-gold" />You’ll get a clear quote within 24 hours of sending your brief.</p></section>);
}
