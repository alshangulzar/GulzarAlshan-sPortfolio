import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyBlocks from "@/components/CaseStudyBlocks";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";
import { dims, safeCapPx } from "@/lib/imageDims";

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Gulzar Alshan`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const meta = project.status
    ? [
        { label: "Role", value: project.role },
        { label: "Team", value: project.team },
        { label: "Timeline", value: project.timeline },
        { label: "Status", value: project.status },
      ]
    : [
        { label: "Client", value: project.client },
        { label: "Role", value: project.role },
        { label: "Team", value: project.team },
        { label: "Timeline", value: project.timeline },
      ];

  return (
    <article>
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 sm:pt-24 lg:px-12">
        <Reveal>
          <Link
            href="/work"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            ← All work
          </Link>

          <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
            {project.category}
          </p>
          <h1 className="text-balance mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.tagline}
          </p>
          {project.hook && (
            <p className="text-balance mt-8 max-w-2xl font-display text-2xl italic leading-snug text-ink sm:text-3xl">
              {project.hook}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                  {m.label}
                </dt>
                <dd className="mt-2 text-[15px] text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {project.stats && (
          <Reveal delay={0.12}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[15px] text-ink">{s.value}</dt>
                  <dd className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>

      <Reveal delay={0.15}>
        {project.coverOrientation === "portrait" ? (
          <div className="mx-auto mt-14 max-w-7xl px-6 sm:px-8 lg:px-12">
            {(() => {
              const d = dims(project.coverImage.src);
              const isWide = d.w > d.h;
              const capPx = safeCapPx(project.coverImage.src, isWide ? 900 : 300);
              return (
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  width={d.w}
                  height={d.h}
                  quality={95}
                  unoptimized
                  priority
                  sizes={`min(90vw, ${capPx}px)`}
                  className="mx-auto h-auto rounded-[28px] shadow-lg"
                  style={{ maxWidth: `min(90vw, ${capPx}px)` }}
                />
              );
            })()}
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-paper-dim sm:aspect-[21/10]">
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <CaseStudyBlocks blocks={project.blocks} />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <Reveal>
          <div className="grid gap-6 border-t border-line pt-12 lg:grid-cols-12">
            <h3 className="font-display text-2xl text-ink lg:col-span-4">
              Results &amp; reflection
            </h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft lg:col-span-7 lg:col-start-6">
              {project.result.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-6 rounded-2xl border border-line p-8 transition-colors hover:border-ink sm:flex-row sm:items-center sm:justify-between sm:p-12"
          >
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                Next project
              </p>
              <p className="mt-3 font-display text-3xl text-ink">
                {next.title}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <ContactCta />
      </div>
    </article>
  );
}
