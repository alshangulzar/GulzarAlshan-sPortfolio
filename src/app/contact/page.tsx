import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";

export const metadata: Metadata = {
  title: "Contact — Gulzar Alshan",
  description: "Get in touch with Gulzar Alshan about product design work.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-balance mt-5 max-w-2xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-6xl">
          Have a thoughtful product problem to solve?
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          I&rsquo;m always interested in conversations about product design,
          research, and building more useful digital experiences.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-line pt-10">
          <a
            href="mailto:alshan.gulzr@gmail.com"
            className="font-display text-3xl text-ink underline decoration-line-strong decoration-1 underline-offset-8 transition-colors hover:decoration-accent sm:text-5xl"
          >
            alshan.gulzr@gmail.com
          </a>
          <div className="mt-4">
            <CopyEmail email="alshan.gulzr@gmail.com" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/gulzar-alshan"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-lg text-ink underline decoration-line-strong decoration-1 underline-offset-4 hover:decoration-ink"
            >
              linkedin.com/in/gulzar-alshan
            </a>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Resume
            </p>
            <Link
              href="/resume"
              className="mt-2 inline-block text-lg text-ink underline decoration-line-strong decoration-1 underline-offset-4 hover:decoration-ink"
            >
              Request resume
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
