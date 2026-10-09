const d = {
  check: 'M20 6L9 17l-5-5', play: 'M8 5v14l11-7z', close: 'M6 6l12 12M18 6L6 18', arrow: 'M5 12h14M13 6l6 6-6 6', back: 'M15 6l-6 6 6 6', folder: 'M3 6h6l2 2h10v11H3z', info: 'M12 8h.01M11 12h1v5h1|M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  stage: 'M3 20h18M5 20V9l7-5 7 5v11|M9 20v-6h6v6', brand: 'M4 5h16v14H4z|M4 9h16M9 5v4', ball: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z|M12 8l4 3-1.5 4h-5L8 11z', rings: 'M9 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10z|M15 6a5 5 0 1 0 0 10',
  mic: 'M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z|M5 11a7 7 0 0 0 14 0M12 18v3', star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  chat: 'M21 12a8 8 0 0 1-11.6 7L4 20l1.1-4.8A8 8 0 1 1 21 12z', mail: 'M3 5h18v14H3z|M3 7l9 7 9-7', send: 'M3 11l18-8-8 18-2-8z', cam: 'M3 7h13v10H3z|M16 10l5-3v10l-5-3', img: 'M3 5h18v14H3z|M3 16l5-5 4 4 3-3 6 6',
};
export default function Icon({ n, size = 20, className = '', fill = false }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{d[n].split('|').map((p, i) => <path key={i} d={p} />)}</svg>;
}
