import Link from "next/link";
import Reveal from "./Reveal";

export default function ContactCta() {
  return (
    <Reveal>
      <div className="rounded-2xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-24">
        <h2 className="text-balance mx-auto max-w-xl font-display text-3xl leading-tight tracking-tight text-paper sm:text-5xl">
          Have a thoughtful product problem to solve?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-paper/70">
          I&rsquo;m always interested in conversations about product design,
          research, and building more useful digital experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
          >
            Get in touch
          </Link>
          <a
            href="mailto:alshan.gulzr@gmail.com"
            className="text-sm font-medium text-paper/80 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
          >
            alshan.gulzr@gmail.com
          </a>
        </div>
      </div>
    </Reveal>
  );
}
