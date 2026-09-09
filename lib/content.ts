// Single source of truth for everything the site displays.
// Update this file, not the components.

export const profile = {
  name: "Zachary Starnes",
  short: "Zack",
  role: "Software Engineer",
  tagline: "I build cross-platform apps and the servers behind them.",
  location: "Clemson, SC",
  summary: `Computer Science student at Clemson University who ships real software. I maintain Yuzic, an open-source music player on the App Store and Google Play with 499 stars and 20 forks on GitHub, and I've built web and mobile products for local businesses since 2023. I work mostly in TypeScript across React, React Native, and Node, and I self-host most of what I run.`,
  email: "zackhhi@gmail.com",
  links: {
    github: "https://github.com/eftpmc",
    linkedin: "https://www.linkedin.com/in/zachary-starnes-810932237/",
    instagram: "https://www.instagram.com/zack_hhi/",
  },
};

// Personal facts, not product metrics. Each is supported by the current resume.
export const stats: { label: string; value: string }[] = [
  { label: "B.S. Computer Science", value: "’28" },
  { label: "Freelance development", value: "Since ’22" },
  { label: "Programming tutorials", value: "1M+ views" },
];

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  period: string;
  blurb: string;
  stack: string[];
  links: Link[]; // may be empty — nothing is forced to have a URL
  highlight?: string; // short proof point shown as a badge
  featured?: boolean;
};

// The first four cards are the homepage highlights. The complete list appears
// on /projects via the existing “View more” link.
export const projects: Project[] = [
  {
    title: "Yuzic",
    period: "2024 — present",
    blurb:
      "Cross-platform open-source music player for Navidrome, Jellyfin, and Emby servers. Published on the App Store and Google Play, with an automated release pipeline that cuts iOS and Android builds on every version bump. Native audio playback, offline downloads, background mode, and lock-screen controls.",
    stack: ["React Native", "Expo", "TypeScript", "Kotlin", "Swift"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/yuzic-navidrome-jellyfin/id6740042497" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.arinora.rawarr" },
      { label: "Web demo", href: "https://yuzicapp.github.io/yuzic-web/" },
      { label: "Source", href: "https://github.com/yuzicapp/yuzic" },
    ],
    highlight: "499 stars · 20 forks · 7 contributors",
  },
  {
    title: "Melodari",
    period: "2024",
    blurb:
      "Playlist syncing between streaming platforms. Matched tracks across Spotify and YouTube Music catalogs and kept playlists mirrored in both directions, with OAuth for both providers and Supabase for auth and storage.",
    stack: ["Next.js", "Supabase", "Spotify API", "YouTube Music API"],
    links: [
      { label: "Live", href: "https://melodari-v2.vercel.app/" },
      { label: "Source", href: "https://github.com/eftpmc/melodari" },
    ],
  },
  {
    title: "HHIPE",
    period: "2024",
    blurb:
      "Client website for a Hilton Head parking enforcement company. Built responsive layouts and contact flows, then delivered deployment handoff to the client.",
    stack: ["Next.js", "TailwindCSS", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/eftpmc/hhip-open-source" }],
    highlight: "Client work",
  },
  {
    title: "Reddibase",
    period: "2026",
    blurb:
      "A source-neutral answer-extraction pipeline that turns solved discussion threads into structured datasets. Built a resolved-thread classifier and semantic identifier backed by a FAISS vector index for ranking likely answers from vague descriptions.",
    stack: ["Python", "PyTorch", "SentenceTransformers", "FAISS", "FastAPI"],
    links: [{ label: "Source", href: "https://github.com/eftpmc/reddibase" }],
    highlight: "ML research project",
  },
  {
    title: "Lowcountry Chorale",
    period: "Client work",
    blurb:
      "Website for Lowcountry Chorale in Lady’s Island. Delivered a responsive public-facing site, contact forms, and deployment handoff as part of freelance work for local organizations.",
    stack: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "WordPress"],
    links: [],
    highlight: "Client work",
  },
];

export type Experience = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "B.S. Computer Science",
    org: "Clemson University",
    period: "Aug 2024 — Present",
    points: [
      "Coursework in data structures, algorithms, software engineering, and systems.",
      "Focus on design and implementation of software systems.",
    ],
  },
  {
    title: "Freelance Developer",
    org: "Local businesses — Hilton Head Island, SC",
    period: "2023 — Present",
    points: [
      "Built and delivered web and mobile applications for small business clients.",
      "Owned projects end to end: scoping, design, build, deployment, and handoff.",
    ],
  },
  {
    title: "Game Developer",
    org: "Atlas",
    period: "Oct 2022 — Jun 2023",
    points: [
      "Collaborated with another student and a Google engineer on an open-world game in Lua.",
      "Designed object-oriented systems to improve runtime performance and team ergonomics.",
    ],
  },
  {
    title: "Content Creator",
    org: "YouTube — Lua & Roblox programming",
    period: "2019 — 2022",
    points: [
      "Grew a programming-tutorial channel to 3,000+ subscribers and over 1M views.",
      "Six years building games in Lua, solo and on teams, before moving to Python, JS, and C++.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C#", "C++", "Swift", "Kotlin", "Lua"] },
  { group: "Frontend", items: ["React", "React Native", "Next.js", "Expo", "TailwindCSS"] },
  { group: "Backend & Data", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"] },
  { group: "Infra", items: ["Docker", "GitHub Actions", "Vercel", "Linux self-hosting"] },
];
