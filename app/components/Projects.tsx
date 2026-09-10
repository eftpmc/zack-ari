import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/content";

export default function Projects({ showAll = false }: { showAll?: boolean }) {
  const list = showAll ? projects : projects.slice(0, 5);

  return (
    <section id="work" className="section scroll-mt-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title reveal">
          {showAll ? "All projects" : "Selected work"}
        </h2>
        {!showAll && projects.length > list.length ? (
          <Link
            href="/projects"
            className="reveal inline-flex items-center gap-1 text-sm font-medium text-base-content/70 transition-colors hover:text-primary"
          >
            View all {projects.length}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
