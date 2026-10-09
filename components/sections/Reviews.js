import { reviews } from '@/data/content';
import Heading from '@/components/ui/Heading';
export default function Reviews() {
  return (<section className="py-14"><div className="mx-auto max-w-5xl px-5"><Heading title="Kind Words" /></div>
    <ul className="noscroll mx-auto mt-6 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">{reviews.map(([q, r, c]) => (
      <li key={q} className="card w-[82%] shrink-0 snap-start p-5 md:w-[340px]"><span className="text-gold" aria-label="5 stars">★★★★★</span><blockquote className="mt-3 text-sm leading-relaxed text-white/80">“{q}”</blockquote>
        <p className="mt-4 text-sm font-bold">{r}</p><p className="text-xs text-gold">{c}</p></li>))}</ul></section>);
}
