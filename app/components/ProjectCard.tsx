import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

/**
 * A project card. Every field beyond title/blurb is optional — a project with
 * no live URL simply renders without link buttons instead of showing a dead
 * iframe or a placeholder.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="reveal card-surface group flex h-full flex-col p-6 hover:border-primary/40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span className="text-xs text-base-content/50">{project.period}</span>
      </div>

      {project.highlight ? (
        <p className="mt-2 text-sm font-medium text-primary">{project.highlight}</p>
      ) : null}

      <p className="mt-3 flex-1 text-base-content/75">{project.blurb}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-base-content/10 pt-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-base-content/70 transition-colors hover:text-primary"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
