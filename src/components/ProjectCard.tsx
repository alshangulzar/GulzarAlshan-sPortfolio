import Link from "next/link";
import type { Project } from "@/data/projects";
import { tagsFor } from "@/data/projects";
import MediaThumb from "./MediaThumb";
import Reveal from "./Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        data-cursor="link"
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper-dim">
          <MediaThumb
            image={project.thumbImage}
            video={project.coverVideo}
            sizes="(min-width: 640px) 45vw, 100vw"
          />
        </div>

        <h3 className="mt-5 font-display text-2xl italic text-ink sm:text-[1.75rem]">
          {project.title}
        </h3>

        <ul className="mt-3 flex flex-wrap gap-2">
          {tagsFor(project).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line-strong px-3 py-1 text-[12px] text-ink-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
          {project.summary}
        </p>
      </Link>
    </Reveal>
  );
}
