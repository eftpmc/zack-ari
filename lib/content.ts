// Single source of truth for everything the site displays.
// Update this file, not the components.

export const profile = {
  name: "Zachary Starnes",
  short: "Zack",
  role: "CS student at Clemson",
  tagline: "I make apps and run the servers behind them.",
  location: "Clemson, SC",
  summary: `I'm Zack, a computer science student at Clemson from Hilton Head Island, SC. I build mobile and web apps. I started programming at twelve, making Roblox games and later teaching Lua on YouTube.`,
  email: "zackhhi@gmail.com",
  resume: "/zachary-starnes-resume.pdf",
  links: {
    github: "https://github.com/eftpmc",
    linkedin: "https://www.linkedin.com/in/zachary-starnes-810932237/",
    instagram: "https://www.instagram.com/zack_hhi/",
  },
};

// Small, factual, and verifiable from a link on the page.
export const stats: { label: string; value: string }[] = [
  { label: "Yuzic on GitHub", value: "500+ stars" },
  { label: "Answer pairs in Reddibase", value: "174K" },
  { label: "Lua tutorials on YouTube", value: "1M+ views" },
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
  clients?: { title: string; blurb: string; stack: string[] }[];
};

// Curated work, ordered with ongoing projects first, then dated projects.
export const projects: Project[] = [
  {
    title: "Yuzic",
    period: "2024 — present",
    blurb:
      "Open-source music player for Navidrome, Jellyfin, and Emby servers. On the App Store and Google Play. I maintain it and review contributions.",
    stack: ["React Native", "Expo", "TypeScript", "Kotlin", "Swift"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/yuzic-navidrome-jellyfin/id6740042497" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.arinora.rawarr" },
      { label: "Web demo", href: "https://yuzicapp.github.io/yuzic-web/" },
      { label: "Source", href: "https://github.com/yuzicapp/yuzic" },
    ],
    highlight: "500+ stars · 7 contributors",
  },
  {
    title: "Reddibase",
    period: "2026",
    blurb:
      "Finds the answer buried in a solved forum thread and makes it searchable from a vague description — the kind where you only half-remember the thing you're looking for.",
    stack: ["Python", "PyTorch", "FAISS", "FastAPI"],
    links: [
      { label: "Source", href: "https://github.com/eftpmc/reddibase" },
      {
        label: "Identification model",
        href: "https://huggingface.co/eftpmc/tipofmyjoystick-identification",
      },
      { label: "Classifier", href: "https://huggingface.co/eftpmc/reddibase-classifier" },
    ],
    highlight: "174K pairs · 2 models on Hugging Face",
  },
  {
    title: "Melodari",
    period: "2024",
    blurb:
      "Keeps playlists mirrored between Spotify and YouTube Music. Matching songs across two catalogs turned out to be the hard part.",
    stack: ["Next.js", "Supabase", "Spotify API", "YouTube Music API"],
    links: [
      { label: "Live", href: "https://melodari-v2.vercel.app/" },
      { label: "Source", href: "https://github.com/eftpmc/melodari" },
    ],
  },
  {
    title: "Client work",
    period: "Freelance",
    blurb: "Websites for local businesses and community organizations.",
    stack: [],
    links: [],
    clients: [
      {
        title: "HHIPE",
        blurb: "Site for a parking enforcement company on Hilton Head Island. Built and handed off to the client in 2024.",
        stack: ["Next.js", "TailwindCSS", "TypeScript"],
      },
      {
        title: "Lowcountry Chorale",
        blurb: "Site for a community choir in Lady's Island.",
        stack: ["WordPress"],
      },
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
    points: ["Data structures, algorithms, software engineering, and systems."],
  },
  {
    title: "Freelance Developer",
    org: "Local businesses — Hilton Head Island, SC",
    period: "2023 — Present",
    points: ["Websites and apps for small businesses, start to handoff."],
  },
  {
    title: "Game Developer",
    org: "Atlas",
    period: "Oct 2022 — Jun 2023",
    points: ["Worked on an open-world Roblox game in Lua with another student and a Google engineer."],
  },
  {
    title: "Content Creator",
    org: "YouTube — Lua & Roblox programming",
    period: "2019 — 2022",
    points: ["Lua and Roblox tutorials. 3,000+ subscribers, over 1M views."],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C#", "C++", "Swift", "Kotlin", "Lua"] },
  { group: "Frontend", items: ["React", "React Native", "Next.js", "Expo", "TailwindCSS"] },
  { group: "Backend & Data", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"] },
  { group: "Infra & self-hosting", items: ["Docker", "Proxmox", "Tailscale", "Linux", "GitHub Actions", "Vercel"] },
  { group: "ML & data", items: ["PyTorch", "SentenceTransformers", "FAISS", "Hugging Face"] },
];


// Selected work and experience, with Yuzic's ongoing development leading.
export const timeline: (Project & { kind: string })[] = [
  { ...projects[0], kind: "Open-source project" },
  { ...projects[1], kind: "Independent project" },
  { ...projects[2], kind: "Independent project" },
  { ...projects[3], period: "2023 — present", kind: "Freelance" },
  {
    title: "Atlas",
    period: "2022 — 2023",
    kind: "Game developer",
    blurb: experience[2].points[0],
    stack: ["Lua", "Roblox"],
    links: [],
  },
  {
    title: "Programming tutorials",
    period: "2019 — 2022",
    kind: "Content creator",
    blurb: "Lua and Roblox programming tutorials on YouTube.",
    highlight: "3,000+ subscribers · 1M+ views",
    stack: ["Lua", "Roblox"],
    links: [],
  },
];
