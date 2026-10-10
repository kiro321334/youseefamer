// import { site, wa } from '@/lib/site';
// import ContactForm from '@/components/ui/ContactForm';
// import Heading from '@/components/ui/Heading';
// import Icon from '@/components/ui/Icon';
// export default function Contact() {
//   return (<section id="contact" className="mx-auto max-w-xl px-5 py-14"><Heading title="Let’s film your next project" sub="Tell me what you’re planning and I’ll reply with a plan and quote." />
//     <ContactForm />
//     <div className="mt-4 grid grid-cols-2 gap-3"><a href={wa('Hi, I’d like to book a shoot.')} target="_blank" rel="noopener noreferrer" className="btn-d gap-2"><Icon n="chat" size={16} className="text-gold" />WhatsApp</a>
//       <a href={`mailto:${site.email}`} className="btn-d gap-2"><Icon n="mail" size={16} className="text-gold" />Email</a></div>
//     <p className="mt-5 text-center text-xs font-semibold text-gold">Available for bookings across Egypt and worldwide.</p></section>);
// }
import { site, wa } from "@/lib/site";
import Heading from "@/components/ui/Heading";
import Icon from "@/components/ui/Icon";

const svg = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const socials = [
  {
    key: "instagram",
    label: "Instagram",
    icon: (
      <svg {...svg}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: (
      <svg {...svg}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: (
      <svg {...svg}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: (
      <svg {...svg}>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];
// نفس رقم الواتساب، بأرقام بس (بدون + أو مسافات)
const waNumber = String(site.whatsapp || site.phone || "").replace(/\D/g, "");
// يعرض الرقم بشكل مقروء، مثال: +20 100 123 4567
const prettyNumber =
  waNumber.startsWith("20") && waNumber.length === 12
    ? `+20 ${waNumber.slice(2, 5)} ${waNumber.slice(5, 8)} ${waNumber.slice(8)}`
    : waNumber
      ? `+${waNumber}`
      : "";
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-xl px-5 py-14 text-center">
      <Heading
        title="Let’s film your next project"
        sub="Your story deserves cinematic. Message me now and get a plan and quote within 24 hours."
      />

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={wa("Hi, I’d like to book a shoot.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-g w-full gap-2"
        >
          <Icon n="chat" size={18} /> Book on WhatsApp{" "}
          <Icon n="arrow" size={18} />
        </a>

        {waNumber && (
          <a href={`tel:+${waNumber}`} className="btn-d w-full gap-2">
            <Icon n="phone" size={18} className="text-gold" />
            <span>Call</span>
            <span dir="ltr" className="font-semibold text-gold">
              {prettyNumber}
            </span>
          </a>
        )}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {socials
          .filter((s) => site[s.key])
          .map((s) => (
            <a
              key={s.key}
              href={site[s.key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-panel2 text-gold transition hover:border-gold/60 hover:bg-gold hover:text-black"
            >
              {s.icon}
            </a>
          ))}
      </div>

      <p className="mt-6 text-xs font-semibold text-gold">
        Available for bookings across Egypt and worldwide.
      </p>
    </section>
  );
}
