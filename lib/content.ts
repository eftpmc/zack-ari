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

// Headline numbers. Keep these honest and easy to re-check.
export const stats: { label: string; value: string }[] = [
  { label: "GitHub stars on Yuzic", value: "499" },
  { label: "App release downloads", value: "3.2k+" },
  { label: "Shipped on iOS & Android", value: "2 stores" },
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
    featured: true,
  },
  {
    title: "Octo-Fiesta",
    period: "2026",
    blurb:
      "A Subsonic API proxy that makes remote streaming providers look like part of your local library. When a track is missing from Navidrome, it is fetched from a configured provider, tagged with full metadata and cover art, filed into an Artist/Album/Track tree, and served to the client in-flight. Supports hi-res FLAC up to 24-bit/192kHz.",
    stack: ["C#", ".NET", "Subsonic API", "Docker"],
    links: [{ label: "Source", href: "https://github.com/eftpmc/octo-fiesta" }],
    highlight: "Pluggable multi-provider architecture",
    featured: true,
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
      "Marketing and operations site built under contract for a parking enforcement company on Hilton Head Island. Designed around a coastal palette to match the island the business serves. Delivered and handed off to the client.",
    stack: ["Next.js", "TailwindCSS", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/eftpmc/hhip-open-source" }],
    highlight: "Client work",
  },
  {
    title: "Limport",
    period: "2025",
    blurb:
      "A small CLI for installing and managing music libraries on headless servers — the glue tool I kept rewriting by hand until it deserved to be a package.",
    stack: ["TypeScript", "Node.js", "CLI"],
    links: [{ label: "Source", href: "https://github.com/eftpmc/limport" }],
  },
  {
    title: "Marionet",
    period: "2025",
    blurb:
      "Container orchestration helper for self-hosted media infrastructure, published as a public Docker image.",
    stack: ["TypeScript", "Docker"],
    links: [
      { label: "Docker Hub", href: "https://hub.docker.com/r/eftpmc/armer" },
      { label: "Source", href: "https://github.com/eftpmc/marionet" },
    ],
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
