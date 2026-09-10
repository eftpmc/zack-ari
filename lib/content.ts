// Single source of truth for everything the site displays.
// Update this file, not the components.

export const profile = {
  name: "Zachary Starnes",
  short: "Zack",
  role: "CS student who ships real software",
  tagline:
    "I build cross-platform apps, the servers behind them, and the machines those servers run on.",
  location: "Clemson, SC",
  summary: `I have been shipping software to real users since I was twelve, and I have never really stopped. It started with Roblox games in Lua — I built and sold a homestore for 35,000 Robux before I could drive — and turned into a YouTube channel that reached 3,000+ subscribers and over a million views teaching other people to do the same. Since then it has been freelance work for local businesses, a volunteer engineering role where I pair-programmed with a Google engineer, and now Yuzic: an open-source music player on the App Store and Google Play that I maintain for thousands of users and seven contributors. I am a Computer Science student at Clemson, I work mostly in TypeScript across React, React Native, and Node, and I run a small Proxmox and Docker fleet at home because I would rather operate the infrastructure than rent it.`,
  email: "zackhhi@gmail.com",
  resume: "/zachary-starnes-resume.pdf",
  links: {
    github: "https://github.com/eftpmc",
    linkedin: "https://www.linkedin.com/in/zachary-starnes-810932237/",
    instagram: "https://www.instagram.com/zack_hhi/",
  },
};

// Proof points, not dates. Each is verifiable from a link elsewhere on the page.
export const stats: { label: string; value: string }[] = [
  { label: "Yuzic, open source", value: "500+ stars" },
  { label: "Answer-pair dataset built", value: "174K pairs" },
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
      "Cross-platform open-source music player for Navidrome, Jellyfin, and Emby servers, used by thousands of people and published on both the App Store and Google Play. I maintain it: reviewing contributions from seven other developers, triaging issues, and running an automated pipeline that cuts and ships signed iOS and Android builds on every version bump. Native audio playback, offline downloads, background mode, and lock-screen controls.",
    stack: ["React Native", "Expo", "TypeScript", "Kotlin", "Swift"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/yuzic-navidrome-jellyfin/id6740042497" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.arinora.rawarr" },
      { label: "Web demo", href: "https://yuzicapp.github.io/yuzic-web/" },
      { label: "Source", href: "https://github.com/yuzicapp/yuzic" },
    ],
    highlight: "500+ stars · thousands of users · 7 contributors",
  },
  {
    title: "Reddibase",
    period: "2026",
    blurb:
      "A source-neutral pipeline that turns human-solved discussion threads into answer-extraction datasets. A DistilBERT classifier finds the message in a thread that actually contains the resolved answer, a canonicalization pass extracts the answer itself, and a fine-tuned MiniLM encoder plus a FAISS index retrieves ranked matches from vague, half-remembered descriptions. Built the full path end to end — scraper, training scripts, evaluation harness, FastAPI service, and web UI — and produced a 174,094-pair dataset with both models published to Hugging Face.",
    stack: ["Python", "PyTorch", "SentenceTransformers", "FAISS", "FastAPI", "Next.js"],
    links: [
      { label: "Source", href: "https://github.com/eftpmc/reddibase" },
      {
        label: "Identification model",
        href: "https://huggingface.co/eftpmc/tipofmyjoystick-identification",
      },
      { label: "Classifier", href: "https://huggingface.co/eftpmc/reddibase-classifier" },
    ],
    highlight: "174K confirmed pairs · 2 models on Hugging Face",
  },
  {
    title: "Homelab & self-hosted infrastructure",
    period: "Ongoing",
    blurb:
      "A small production environment I run myself, mostly so that nothing I build has to depend on somebody else's free tier. A Proxmox hypervisor hosts virtualized guests alongside roughly 4TB of storage; about thirty Docker services run on top of it, including the Navidrome and Jellyfin servers that Yuzic connects to. Everything is joined by a private Tailscale mesh across a Mac mini, a Linux box with an RTX 3060 Ti for GPU work, the Proxmox server, and laptop and phone clients — no ports open to the internet.",
    stack: ["Proxmox", "Docker", "Tailscale", "Linux", "Nginx", "GitHub Actions"],
    links: [],
    highlight: "~30 services · Proxmox + Tailscale · self-operated",
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
    title: "Lowcountry Chorale",
    period: "Client work",
    blurb:
      "Website for Lowcountry Chorale in Lady’s Island. Delivered a responsive public-facing site, contact forms, and deployment handoff as part of freelance work for local organizations.",
    stack: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "WordPress"],
    links: [],
    highlight: "Client work · site no longer public",
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
  { group: "Infra & self-hosting", items: ["Docker", "Proxmox", "Tailscale", "Linux", "GitHub Actions", "Vercel"] },
  { group: "ML & data", items: ["PyTorch", "SentenceTransformers", "FAISS", "Hugging Face"] },
];
