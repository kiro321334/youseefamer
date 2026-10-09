"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
function Vid({ m, onPlay }) {
  const [wait, setWait] = useState(false);
  return (
    <>
      <video
        controls
        playsInline
        preload="none"
        poster={m.poster}
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onPlay={(e) => {
          onPlay(e);
          if (e.currentTarget.readyState < 3) setWait(true);
        }}
        onWaiting={() => setWait(true)}
        onPlaying={() => setWait(false)}
        onCanPlay={() => setWait(false)}
        onPause={() => setWait(false)}
        onEnded={() => setWait(false)}
        onError={() => setWait(false)}
        className="h-full w-full object-contain"
      >
        <source src={m.src} type="video/mp4" />
      </video>
      {wait && (
        <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/40">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-gold" />
        </span>
      )}
    </>
  );
}
export default function FolderModal({ p, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const close = () => ref.current.close();
  const pauseOthers = (e) =>
    ref.current
      .querySelectorAll("video")
      .forEach((v) => v !== e.currentTarget && v.pause());
  const info = [
    ["Client", p.client],
    ["Location", p.location],
    ["Year", p.year],
    ["Role", p.roles.join(" • ")],
  ];
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()}
      aria-label={`Project folder: ${p.title}`}
      className="m-auto h-svh w-full max-w-3xl overflow-hidden border-line bg-panel p-0 text-white backdrop:bg-black/85 backdrop:backdrop-blur-sm md:h-[92svh] md:rounded-2xl md:border"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
            <Icon n="folder" size={16} />
            {p.cat} • {p.media.length} files
          </p>
          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Close folder"
            className="grid h-10 w-10 place-items-center rounded-lg bg-panel2"
          >
            <Icon n="close" size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight">
            {p.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{p.desc}</p>
          <dl className="mt-5 grid grid-cols-2 gap-3">
            {info.map(([k, v]) => (
              <div
                key={k}
                className="rounded-xl border border-line bg-bg/50 p-3"
              >
                <dt className="text-[10px] font-bold uppercase tracking-widest text-gold">
                  {k}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-gold">
            Gear used
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.gear.map((g) => (
              <li
                key={g}
                className="flex items-center gap-1.5 rounded-lg bg-panel2 px-3 py-2 text-xs font-semibold"
              >
                <Icon n="check" size={13} className="text-gold" />
                {g}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-gold">
            Videos & stills
          </p>
          <div className="mt-3 flex flex-col gap-4">
            {p.media.map((m, i) => {
              const ratio = m.w && m.h ? m.w / m.h : 16 / 9;
              return (
                <div
                  key={m.src}
                  className={`relative mx-auto w-full overflow-hidden rounded-xl border border-line bg-black ${ratio < 1 ? "max-w-[320px]" : ""}`}
                  style={{ aspectRatio: ratio }}
                >
                  {m.t === "video" ? (
                    <Vid m={m} onPlay={pauseOthers} />
                  ) : (
                    <Image
                      src={m.src}
                      alt={`${p.title} ${i + 1}`}
                      fill
                      sizes="(min-width:768px) 700px, 100vw"
                      className="object-contain"
                      loading="lazy"
                    />
                  )}
                  <span className="tag pointer-events-none absolute left-2 top-2">
                    {m.t === "image" ? "PHOTO" : "VIDEO"}
                  </span>
                </div>
              );
            })}
          </div>
          <a href="#contact" onClick={close} className="btn-g mt-6 w-full">
            Book a similar shoot <Icon n="arrow" size={18} />
          </a>
        </div>
      </div>
    </dialog>
  );
}
