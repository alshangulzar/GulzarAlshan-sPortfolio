import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Five projects, five very different kinds of hard."
          description="Beauty AI, healthcare, civic AI, and consumer products — each one grounded in research and shipped with a real team."
        />

        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-paper-dim">
                <Image
                  src="/images/shared/about-photo.jpg"
                  alt="Portrait of Gulzar Alshan"
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              title="Research-informed design, with a computer science foundation."
            />
            <div className="mt-6 max-w-lg space-y-5 text-[15px] leading-relaxed text-ink-soft">
              <p>
                I&rsquo;m Gulzar, a Product Designer with a background in
                computer science and user experience. I enjoy understanding
                how people think, identifying where digital experiences
                create friction, and translating those insights into
                thoughtful, accessible interfaces.
              </p>
              <p>
                My work sits at the intersection of UX research, interaction
                design, product thinking, and emerging AI-powered
                experiences. I care about making technology more
                understandable, useful, and inclusive.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading eyebrow="Toolkit" title="What I bring to a team." />
        <div className="mt-12">
          <Skills />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading eyebrow="Testimonials" title="Some words from people I've worked with." />
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <ContactCta />
      </section>
    </>
  );
}
