import { ArrowUpRight } from "lucide-react";
import { timeline } from "@/lib/content";

export default function Projects({ showAll = false }: { showAll?: boolean }) {
  return (
    <section id="work" className="section scroll-mt-20">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title">{showAll ? "Work & experience" : "Selected work & experience"}</h2>
        </div>
      </div>
      <ol className="project-timeline">
        {timeline.map((project, index) => (
          <li key={project.title} className="timeline-entry">
            <div className="timeline-date">
              <span className="timeline-dot" aria-hidden="true" />
              <p>{project.period}</p>
            </div>
            <article aria-labelledby={`project-${index}`} className="min-w-0 pb-14 md:pb-20">
              <p className="mb-2 text-xs text-base-content/50">{project.kind}</p>
              <h3 id={`project-${index}`} className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-base-content/75 md:text-lg">{project.blurb}</p>
              {project.clients && (
                <div className="mt-8 space-y-8">
                  {project.clients.map(client => (
                    <section key={client.title}>
                      <h4 className="text-xl font-semibold tracking-tight">{client.title}</h4>
                      <p className="mt-2 leading-relaxed text-base-content/75">{client.blurb}</p>
                      <p className="mt-3 text-xs text-base-content/50">{client.stack.join(" · ")}</p>
                    </section>
                  ))}
                </div>
              )}
              {project.highlight && <p className="mt-5 text-sm font-medium text-primary">{project.highlight}</p>}
              {project.stack.length > 0 && <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-base-content/50" aria-label={`${project.title} technologies`}>
                {project.stack.map(tech => <li key={tech}>{tech}</li>)}
              </ul>}
              {project.links.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {project.links.map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm font-medium">
                      {link.label}<ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
