import { testimonials } from "@/data/testimonials";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08}>
          <figure className="flex h-full flex-col">
            <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium text-ink">{t.name}</span>
              <span className="text-ink-faint"> — {t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
