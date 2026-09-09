import { profile, experience, skills } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section scroll-mt-20 border-t border-base-content/10">
      <h2 className="section-title reveal">About</h2>

      <p className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-base-content/80">
        {profile.summary}
      </p>

      <h3 className="reveal mt-14 text-lg font-semibold tracking-tight">Experience</h3>
      <ol className="mt-6 space-y-6">
        {experience.map((job) => (
          <li key={`${job.org}-${job.title}`} className="reveal card-surface p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="font-medium text-base-content">
                {job.title}
                <span className="text-base-content/60"> · {job.org}</span>
              </h4>
              <span className="font-mono text-xs text-base-content/50">{job.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-base-content/75">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="reveal mt-14 text-lg font-semibold tracking-tight">Skills</h3>
      <dl className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group} className="reveal">
            <dt className="text-sm font-medium text-base-content/60">{group.group}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
