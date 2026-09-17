import { profile, experience } from "@/lib/content";

export default function About() {
  const education = experience[0];

  return (
    <section id="about" className="section scroll-mt-20 border-t border-base-content/10">
      <h2 className="section-title">About</h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-base-content/80">
        {profile.summary}
      </p>
      <div className="mt-8 text-sm">
        <p className="font-medium">{education.title} · {education.org}</p>
        <p className="mt-1 text-base-content/55">{education.period}</p>
      </div>
    </section>
  );
}
