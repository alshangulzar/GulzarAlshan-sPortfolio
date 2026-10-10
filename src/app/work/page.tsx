import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { featuredProjects, secondaryProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Gulzar Alshan",
  description:
    "Selected product design case studies by Gulzar Alshan, spanning healthcare, civic AI, and consumer products.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
      <Reveal>
        <Eyebrow>Work</Eyebrow>
        <h1 className="text-balance mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Case studies in research-led product design.
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Each project below includes the problem, my role, the research
          behind the decisions, and what shipped — not just the final
          screens.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {secondaryProjects.length > 0 && (
        <div className="mt-20 border-t border-line pt-16">
          <Reveal>
            <h2 className="font-display text-2xl text-ink">More work</h2>
          </Reveal>
          <div className="mt-8 grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
