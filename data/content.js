import mediaJson from "./media.json";
export const nav = [
  ["services", "What I Film"],
  ["projects", "Projects"],
  ["rig", "The Rig"],
  ["process", "How It Works"],
  ["contact", "Contact"],
];
export const heroStats = [
  ["8+", "Years"],
  ["300+", "Shoots"],
  ["4K", "60 FPS"],
];

const f = (id, title, cat, year, location, client, desc, roles, gear) => ({
  id,
  title,
  cat,
  year,
  location,
  client,
  desc,
  roles,
  gear,
  cover: `/projects/${id}/cover.jpg`,
  media: mediaJson[id] ?? [],
});
const gear = [
  "Easyrig + RS3 Pro Gimbal",
  "Cinema Lens Kit",
  "SmallRig Monitor",
  "Wireless Audio & Comms",
];
export const projects = [
  f(
    "clinics",
    "Clinics Coverage",
    "Clinics",
    "2025",
    "Cairo",
    "Medical Center",
    "Professional clinical and medical shoot highlighting modern facilities and healthcare services.",
    ["Camera Operator", "Cinematographer"],
    gear,
  ),
  f(
    "events",
    "Events Coverage",
    "Events",
    "2025",
    "Cairo",
    "Event Planner",
    "Professional events shoot highlighting modern facilities and corporate environments.",
    ["Camera Operator", "Cinematographer"],
    gear,
  ),
  f(
    "clip",
    "Music & Promo Clip",
    "Clip",
    "2025",
    "Cairo",
    "Entertainment Client",
    "Dynamic and fast-paced clip with artistic camera movements and stabilized tracking shots.",
    ["Camera Operator", "Gimbal / Easyrig"],
    gear,
  ),
  f(
    "media",
    "Media Production",
    "Media",
    "2025",
    "Cairo",
    "Media Agency",
    "High-quality media production covering key interviews, presentations, and behind-the-scenes moments.",
    ["Cinematographer"],
    gear,
  ),
  f(
    "podcast",
    "Podcast Studio Session",
    "Podcast",
    "2025",
    "Cairo",
    "Media Network",
    "Multi-camera studio setup with crisp framing and clean wireless audio for full podcast episodes.",
    ["Director of Photography", "Camera Operator"],
    gear,
  ),

  f(
    "reel-content",
    "Reel Content",
    "Reel Content",
    "2025",
    "Cairo",
    "Social Media Client",
    "Engaging vertical content tailored for Instagram Reels and TikTok with seamless transitions.",
    ["Camera Operator"],
    gear,
  ),
  f(
    "social-ads",
    "Social Media Ads",
    "Social Ads",
    "2025",
    "Cairo",
    "Commercial Client",
    "Commercial-grade social media advertising designed to maximize audience engagement.",
    ["Director of Photography"],
    gear,
  ),
  f(
    "store",
    "Store & Retail Shoot",
    "Store",
    "2025",
    "Cairo",
    "Retail Brand",
    "Sleek visual coverage showing store layout, customer experience, and premium product displays.",
    ["Camera Operator", "Gimbal"],
    gear,
  ),
];
export const filters = ["All", ...new Set(projects.map((p) => p.cat))];
export const services = [
  [
    "stage",
    "Live Events & Concerts",
    "Multi-camera ready, stage-front movement and crowd energy.",
    "Easyrig • Gimbal • Wireless comms",
  ],
  [
    "brand",
    "Brand & Commercial Films",
    "Cinematic launch films and product stories for your campaign.",
    "DOP • Lighting • Grading-ready",
  ],
  [
    "ball",
    "Sports Coverage",
    "Steady, fast pitch-level shots for matches and tournaments.",
    "Long takes • Sideline • Highlights",
  ],
  [
    "rings",
    "Weddings & Private Events",
    "Emotional highlights shot smooth and natural.",
    "Highlight film • Same-day teaser",
  ],
  [
    "mic",
    "Corporate & Conferences",
    "Keynotes, panels and interviews with clean audio.",
    "Interviews • Recaps • Social cuts",
  ],
  [
    "star",
    "Custom Productions",
    "Have something different in mind? Let’s build the plan.",
    "Scouting • Crew • Post",
  ],
];
export const rig = [
  [
    "Easyrig support arm",
    "Carries the camera weight so I can shoot long takes smoothly and stay stable all day.",
  ],
  [
    "RS3 Pro gimbal",
    "Silky, stabilized movement for tracking shots, reveals and fast-paced action.",
  ],
  [
    "SmallRig field monitor",
    "Large on-board monitor for precise framing, focus and exposure in bright daylight.",
  ],
  [
    "Wireless audio & comms",
    "Headset and mic keep me in sync with the director and crew in real time.",
  ],
];
export const steps = [
  [
    "Brief",
    "Tell me about the event or brand, date, location and the look you want.",
  ],
  [
    "Plan",
    "I scout, build the shot list and prepare the gear and crew for your day.",
  ],
  [
    "Shoot",
    "On the day, I film with stabilized rigs and stay in sync with your team.",
  ],
  [
    "Deliver",
    "You receive color-ready footage or an edited film on a clear timeline.",
  ],
];
export const reviews = [
  [
    "Smooth shots, great communication, and the footage was ready exactly when promised.",
    "Event Producer",
    "Cairo",
  ],
  [
    "He moved through a packed venue without missing a moment. The results looked cinematic.",
    "Brand Manager",
    "Giza",
  ],
  [
    "Professional on set and easy to work with. We booked him again for the next campaign.",
    "Marketing Lead",
    "Alexandria",
  ],
];
export const faqs = [
  [
    "What gear do you bring?",
    "A full Easyrig and RS3 Pro gimbal setup, cinema lenses, a SmallRig monitor and wireless audio and comms. Extra gear and crew are available on request.",
  ],
  [
    "Do you travel outside Cairo?",
    "Yes. I film across Egypt and abroad. Travel and accommodation are quoted separately.",
  ],
  [
    "How fast do I get the footage?",
    "Highlights can be delivered the same day for events. Full edits usually take 3–7 days depending on length.",
  ],
  [
    "Can you edit the final film?",
    "Yes. I can deliver raw color-ready footage or a fully edited film with music and grading.",
  ],
];
export const eventTypes = [
  "Live Event / Concert",
  "Brand / Commercial Film",
  "Sports Coverage",
  "Wedding / Private Event",
  "Corporate / Conference",
  "Something else",
];
