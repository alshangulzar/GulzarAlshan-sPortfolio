import type { Metadata } from "next";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactCta from "@/components/ContactCta";
import { education, process } from "@/data/about";

export const metadata: Metadata = {
  title: "About — Gulzar Alshan",
  description:
    "Gulzar Alshan is a Product Designer with a background in computer science and user experience, based between research and interface design.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 sm:pt-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h1 className="text-balance mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
                I design with intention, and I like showing my work.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-relaxed text-ink-soft">
                <p>
                  I&rsquo;m Gulzar, a Product Designer with a background in
                  computer science and user experience. I enjoy understanding
                  how people think, identifying where digital experiences
                  create friction, and translating those insights into
                  thoughtful, accessible interfaces.
                </p>
                <p>
                  My work sits at the intersection of UX research,
                  interaction design, product thinking, and emerging
                  AI-powered experiences. I care about making technology more
                  understandable, useful, and inclusive.
                </p>
                <p>
                  I bring a research-informed perspective to design and enjoy
                  collaborating across disciplines to move from ambiguous
                  problems to clear, considered solutions. I&rsquo;ve worked
                  across health, education, and civic technology, which has
                  taught me that the hardest part of design is rarely the
                  interface — it&rsquo;s understanding the problem well
                  enough to simplify it responsibly.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-sm lg:mx-0 lg:ml-auto">
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-8 -inset-y-10 -z-10 rounded-[3rem] bg-accent-soft/35 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -left-5 -bottom-5 -z-10 h-20 w-20 rounded-full border border-line-strong/60"
                />
                <div className="relative aspect-[4/5] w-full rotate-[1.5deg] overflow-hidden rounded-2xl bg-paper-dim shadow-[0_40px_80px_-30px_rgba(22,21,18,0.35)]">
                  <Image
                    src="/images/shared/about-photo.jpg"
                    alt="Gulzar Alshan"
                    fill
                    sizes="(min-width: 1024px) 35vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading eyebrow="Education" title="Foundations in both research and craft." />
        <div className="mt-10 divide-y divide-line border-t border-line">
          {education.map((e) => (
            <Reveal key={e.degree}>
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-display text-xl text-ink">{e.degree}</p>
                  <p className="mt-1 text-sm text-ink-soft">{e.school}</p>
                </div>
                <p className="text-sm text-ink-faint">{e.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionHeading
          eyebrow="Process"
          title="If you are going to do it, let's do it right."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal key={step.phase} delay={(i % 3) * 0.08}>
              <div className="border-t border-line pt-5">
                <span className="font-display text-sm text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {step.phase}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <ContactCta />
      </div>
    </div>
  );
}
