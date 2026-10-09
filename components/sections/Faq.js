import { faqs } from '@/data/content';
import Heading from '@/components/ui/Heading';
const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
export default function Faq() {
  return (<section id="faq" className="mx-auto max-w-3xl px-5 py-14"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <Heading title="Questions" sub="Quick answers before we start." />
    <div className="mt-6 grid gap-3">{faqs.map(([q, a], i) => (
      <details key={q} open={i === 0} className="card group open:border-gold/50"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-bold">{q}<span className="text-gold group-open:hidden">+</span><span className="hidden text-gold group-open:inline">−</span></summary>
        <p className="border-t border-line p-4 text-sm leading-relaxed text-white/70">{a}</p></details>))}</div></section>);
}
