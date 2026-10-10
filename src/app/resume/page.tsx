import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resume — Gulzar Alshan",
  description: "Request Gulzar Alshan's resume.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <Reveal>
        <Eyebrow>Resume</Eyebrow>
        <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          A downloadable PDF is on its way.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
          This page will hold a direct resume download shortly. In the
          meantime, the fastest way to get one is by email.
        </p>
        <a
          href="mailto:alshan.gulzr@gmail.com?subject=Resume%20request"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Request my resume by email
        </a>
      </Reveal>
    </div>
  );
}
