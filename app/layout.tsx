import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Reveal from "./components/Reveal";
import AriLogo from "./components/AriLogo";
import { profile } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://aritools.xyz";
const description = `Computer Science student at Clemson who has been shipping software to real users since age twelve. Maintainer of Yuzic, an open-source music player on iOS and Android with 500+ stars and thousands of users. I build cross-platform apps, the servers behind them, and the homelab those servers run on.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Zachary Starnes",
    "Zack Starnes",
    "software engineer",
    "React Native",
    "TypeScript",
    "Clemson",
    "Yuzic",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

// Applied before first paint so the saved theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col bg-base-200 text-base-content`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-content"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-30 border-b border-base-content/10 bg-base-200/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-2" aria-label="Home">
              <AriLogo className="h-8 w-8 fill-primary" />
              <span className="text-base font-semibold tracking-tight">zack/ari</span>
            </Link>

            <div className="flex items-center gap-1 sm:gap-4">
              <nav className="hidden items-center gap-4 text-sm sm:flex" aria-label="Main">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base-content/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-base-content/10">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-base-content/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Built with Next.js &amp; Tailwind</p>
          </div>
        </footer>

        <Reveal />
      </body>
    </html>
  );
}
