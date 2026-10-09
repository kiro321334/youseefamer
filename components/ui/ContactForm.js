"use client";
import { wa } from "@/lib/site";
import { eventTypes } from "@/data/content";
import Icon from "@/components/ui/Icon";

const inp =
  "mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-base text-white placeholder:text-white/35 focus:border-gold focus:outline-none";
const lab =
  "block text-[11px] font-bold uppercase tracking-widest text-white/50";
export default function ContactForm() {
  const send = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const t = `Hi, I'm ${d.get("name")}.\nContact: ${d.get("phone")}\nProject: ${d.get("type")}\nDate: ${d.get("date") || "TBD"}\nDetails: ${d.get("details")}`;
    window.open(wa(t), "_blank", "noopener");
  };
  return (
    <form onSubmit={send} className="card mt-6 grid gap-5 p-5">
      <div>
        <label htmlFor="name" className={lab}>
          Your Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Full name"
          className={inp}
        />
      </div>
      <div>
        <label htmlFor="phone" className={lab}>
          WhatsApp / Phone
        </label>
        <input
          id="phone"
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          placeholder="+20 100 000 0000"
          className={inp}
        />
      </div>
      <div>
        <label htmlFor="type" className={lab}>
          Project Type
        </label>
        <select id="type" name="type" className={inp}>
          {eventTypes.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date" className={lab}>
          Shoot Date
        </label>
        <input id="date" name="date" type="date" className={inp} />
      </div>
      <div>
        <label htmlFor="details" className={lab}>
          Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder="Location, duration, deliverables…"
          className={inp}
        />
      </div>
      <button type="submit" className="btn-g w-full">
        <Icon n="send" size={16} />
        Send Request
      </button>
    </form>
  );
}
