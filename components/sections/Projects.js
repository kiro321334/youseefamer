"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { projects, filters } from "@/data/content";
import Heading from "@/components/ui/Heading";
import Icon from "@/components/ui/Icon";
const FolderModal = dynamic(() => import("@/components/ui/FolderModal"), {
  ssr: false,
});
const LIMIT = 6;
export default function Projects() {
  const [f, setF] = useState("All");
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);
  const list = projects.filter((p) => f === "All" || p.cat === f);
  const shown = all ? list : list.slice(0, LIMIT);
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-14">
      <Heading
        title="Projects"
        sub="Open a folder to watch the videos and see the full details."
        right={
          <span className="tag mt-1 flex items-center gap-1">
            <Icon n="folder" size={9} />
            {projects.length} Folders
          </span>
        }
      />
      <div
        role="tablist"
        className="noscroll -mx-5 mt-5 flex gap-2 overflow-x-auto px-5"
      >
        {filters.map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={f === k}
            className="chip"
            onClick={() => {
              setF(k);
              setAll(false);
            }}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {shown.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(p)}
            aria-label={`Open folder: ${p.title}`}
            className="card group overflow-hidden text-left transition hover:border-gold/60"
          >
            <span className="relative block aspect-[4/3]">
              <Image
                src={p.cover}
                alt={`${p.title} – ${p.cat} cinematography project`}
                fill
                sizes="(min-width:768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="tag absolute left-2 top-2">{p.cat}</span>
              <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-lg bg-black/60 text-gold">
                <Icon n="play" size={14} fill />
              </span>
            </span>
            <span className="block p-3">
              <span className="block text-sm font-bold leading-snug">
                {p.title}
              </span>
              <span className="mt-2 flex items-center gap-3 text-[11px] text-white/50">
                <span className="flex items-center gap-1">
                  <Icon n="folder" size={12} />
                  {p.media.length} files
                </span>
                <span>{p.year}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
      {list.length > LIMIT && (
        <button
          type="button"
          aria-expanded={all}
          onClick={() => setAll(!all)}
          className="btn-d mt-6 w-full"
        >
          {all ? "Show Less" : `View All Projects (+${list.length - LIMIT})`}
        </button>
      )}
      {open && <FolderModal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
