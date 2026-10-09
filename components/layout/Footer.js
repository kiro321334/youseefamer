import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="px-5 pb-12 pt-8 text-center">
      <p className="text-sm font-extrabold uppercase tracking-[.2em] text-gold">
        {site.name}
      </p>
      <p className="mt-2 text-xs text-white/50">
        {site.role} • Cairo, Egypt • Worldwide
      </p>
      <p lang="ar" dir="rtl" className="mt-2 text-xs text-white/50">
        مصور فيديو سينمائي — تصوير فعاليات وإعلانات
      </p>
      <p className="mt-3 text-[11px] text-white/40">
        © 2026 {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
