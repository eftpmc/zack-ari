import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/lib/content";

export default function Hero() {
  return (
    <section className="section pt-16 md:pt-24">
      <p className="reveal text-sm font-medium text-primary">Hi, I&apos;m Zack</p>

      <h1 className="reveal mt-3 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        {profile.name}
      </h1>

      <p className="reveal mt-2 text-3xl font-medium tracking-tight text-primary md:text-4xl">
        {profile.role}
      </p>

      <p className="reveal mt-6 max-w-2xl text-lg text-base-content/80 md:text-xl">
        {profile.tagline}
      </p>

      <div className="reveal mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-content transition-opacity hover:opacity-90"
        >
          See my work
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-base-content/20 px-5 py-2.5 font-medium transition-colors hover:border-primary hover:text-primary"
        >
          <Mail className="h-4 w-4" />
          Get in touch
        </a>
        <a
          href={profile.resume}
          className="inline-flex items-center gap-2 rounded-lg border border-base-content/20 px-5 py-2.5 font-medium transition-colors hover:border-primary hover:text-primary"
        >
          <FileText className="h-4 w-4" />
          Résumé
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="rounded-lg border border-base-content/20 p-2.5 transition-colors hover:border-primary hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="rounded-lg border border-base-content/20 p-2.5 transition-colors hover:border-primary hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>

      <dl className="reveal mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="card-surface p-5">
            <dt className="text-sm text-base-content/60">{s.label}</dt>
            <dd className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-primary">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
