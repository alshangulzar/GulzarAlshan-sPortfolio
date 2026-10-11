import Image from "next/image";
import type { Block } from "@/data/projects";
import { dims, safeCapPx } from "@/lib/imageDims";
import Reveal from "./Reveal";

const stepIcons = {
  camera: (
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7H8l1-2h6l1 2h2.5A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z M12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  ),
  clipboard: (
    <path d="M9 4h6a1 1 0 0 1 1 1v1h1.5A1.5 1.5 0 0 1 19 7.5v11A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6H8V5a1 1 0 0 1 1-1Z M8.5 11h7 M8.5 14.5h7 M8.5 18h4" />
  ),
  swatch: (
    <path d="M6 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z M6 8h5 M14.5 7.5l3.4 3.4a2 2 0 0 1 0 2.83l-4.6 4.6 M9 14h.01" />
  ),
  spark: (
    <path d="M12 4v4 M12 16v4 M4 12h4 M16 12h4 M6.3 6.3l2.1 2.1 M15.6 15.6l2.1 2.1 M6.3 17.7l2.1-2.1 M15.6 8.4l2.1-2.1" />
  ),
};

export default function CaseStudyBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-16 sm:space-y-20">
      {blocks.map((block, i) => (
        <CaseStudyBlock key={i} block={block} />
      ))}
    </div>
  );
}

function CaseStudyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      if (block.paragraphs.length === 0) {
        return (
          <Reveal>
            <div>
              {block.eyebrow && (
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {block.eyebrow}
                </p>
              )}
              {block.heading && (
                <h3
                  className={`font-display text-2xl text-ink ${block.eyebrow ? "mt-3" : ""}`}
                >
                  {block.heading}
                </h3>
              )}
            </div>
          </Reveal>
        );
      }
      return (
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              {block.eyebrow && (
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {block.eyebrow}
                </p>
              )}
              {block.heading && (
                <h3
                  className={`font-display text-2xl text-ink ${block.eyebrow ? "mt-3" : ""}`}
                >
                  {block.heading}
                </h3>
              )}
            </div>
            <div
              className={`space-y-4 text-[15px] leading-relaxed text-ink-soft ${
                block.heading || block.eyebrow
                  ? "lg:col-span-7 lg:col-start-6"
                  : "lg:col-span-9"
              }`}
            >
              {block.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>
      );

    case "list":
      return (
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              {block.eyebrow && (
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {block.eyebrow}
                </p>
              )}
              {block.heading && (
                <h3
                  className={`font-display text-2xl text-ink ${block.eyebrow ? "mt-3" : ""}`}
                >
                  {block.heading}
                </h3>
              )}
            </div>
            <ul
              className={`space-y-4 lg:col-span-7 ${
                block.heading || block.eyebrow ? "lg:col-start-6" : "lg:col-span-9"
              }`}
            >
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="border-t border-line pt-4 text-[15px] leading-relaxed text-ink-soft first:border-t-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      );

    case "quote":
      return (
        <Reveal>
          <blockquote className="border-l-2 border-accent py-1 pl-8">
            {block.eyebrow && (
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                {block.eyebrow}
              </p>
            )}
            <p className="text-balance font-display text-2xl leading-snug text-ink sm:text-3xl">
              &ldquo;{block.quote}&rdquo;
            </p>
            {block.attribution && (
              <cite className="mt-4 block text-sm not-italic text-ink-faint">
                — {block.attribution}
              </cite>
            )}
          </blockquote>
        </Reveal>
      );

    case "image":
      if (block.orientation === "portrait") {
        const d = dims(block.src);
        const capPx = safeCapPx(block.src, 300);
        const isTall = d.h / d.w > 3;
        if (isTall) {
          const displayHeight = Math.min(640, Math.round((capPx * d.h) / d.w));
          return (
            <Reveal>
              <figure
                className="mx-auto overflow-hidden rounded-[28px] shadow-lg"
                style={{ maxWidth: `min(78vw, ${capPx}px)`, height: displayHeight }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={d.w}
                    height={d.h}
                    quality={95}
                    unoptimized
                    sizes={`min(78vw, ${capPx}px)`}
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper to-transparent"
                  />
                </div>
              </figure>
              {block.caption && (
                <figcaption className="mt-3 text-center text-sm text-ink-faint">
                  {block.caption}
                </figcaption>
              )}
            </Reveal>
          );
        }
        return (
          <Reveal>
            <figure
              className="mx-auto"
              style={{ maxWidth: `min(78vw, ${capPx}px)` }}
            >
              <Image
                src={block.src}
                alt={block.alt}
                width={d.w}
                height={d.h}
                quality={95}
                unoptimized
                sizes={`min(78vw, ${capPx}px)`}
                className="h-auto w-full rounded-[28px] shadow-lg"
              />
              {block.caption && (
                <figcaption className="mt-3 text-center text-sm text-ink-faint">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        );
      }
      if (block.fit === "contain") {
        const d = dims(block.src);
        const capPx = Math.min(1100, Math.floor(d.w / 2));
        return (
          <Reveal>
            <figure className="mx-auto" style={{ maxWidth: `${capPx}px` }}>
              <div className="overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={d.w}
                  height={d.h}
                  quality={95}
                  unoptimized
                  sizes={`(min-width: 1024px) ${capPx}px, 100vw`}
                  className="h-auto w-full"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-3 text-sm text-ink-faint">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        );
      }
      return (
        <Reveal>
          <figure>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-paper-dim sm:aspect-[16/9]">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
            {block.caption && (
              <figcaption className="mt-3 text-sm text-ink-faint">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );

    case "image-row": {
      const portrait = block.orientation === "portrait";
      if (portrait) {
        return (
          <Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {block.images.map((img, i) => {
                const d = dims(img.src);
                const capPx = safeCapPx(img.src, 200);
                return (
                  <figure key={i} style={{ width: `min(42vw, ${capPx}px)` }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={d.w}
                      height={d.h}
                      quality={95}
                      unoptimized
                      sizes={`min(42vw, ${capPx}px)`}
                      className="h-auto w-full rounded-[28px] shadow-lg"
                    />
                    {img.caption && (
                      <figcaption className="mt-3 text-center text-sm text-ink-faint">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </Reveal>
        );
      }
      const cols =
        block.images.length === 2
          ? "sm:grid-cols-2"
          : block.images.length >= 4
            ? "sm:grid-cols-2"
            : "sm:grid-cols-3";
      if (block.fit === "contain") {
        return (
          <Reveal>
            <div className={`grid gap-6 sm:gap-8 ${cols}`}>
              {block.images.map((img, i) => {
                const d = dims(img.src);
                return (
                  <figure key={i}>
                    <div className="overflow-hidden rounded-2xl border border-line bg-white">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={d.w}
                        height={d.h}
                        quality={95}
                        unoptimized
                        sizes="(min-width: 640px) 45vw, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-3 text-sm text-ink-faint">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </Reveal>
        );
      }
      return (
        <Reveal>
          <div className={`grid gap-4 sm:gap-6 ${cols}`}>
            {block.images.map((img, i) => (
              <figure key={i}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-paper-dim">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 text-sm text-ink-faint">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </Reveal>
      );
    }

    case "steps":
      return (
        <Reveal>
          <div>
            {block.heading && (
              <h3 className="mb-10 font-display text-2xl text-ink">
                {block.heading}
              </h3>
            )}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-6 hidden h-px bg-line-strong sm:block"
              />
              <ol className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {block.steps.map((step, i) => (
                  <li key={i} className="relative flex flex-col items-start">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper text-ink">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        {stepIcons[step.icon]}
                      </svg>
                    </span>
                    <span className="mt-4 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-[15px] leading-snug text-ink">
                      {step.label}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      );

    case "numbered-grid":
      return (
        <Reveal>
          <div>
            {block.heading && (
              <h3 className="font-display text-2xl text-ink">
                {block.heading}
              </h3>
            )}
            {block.description && (
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                {block.description}
              </p>
            )}
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {block.items.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-paper">
                      {i + 1}
                    </span>
                    <p className="font-medium text-ink">{item.title}</p>
                  </div>
                  <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-xl bg-paper-dim">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      );

    case "funnel":
      return (
        <Reveal>
          <div>
            {block.eyebrow && (
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                {block.eyebrow}
              </p>
            )}
            {block.heading && (
              <h3
                className={`font-display text-2xl text-ink ${block.eyebrow ? "mt-3" : ""}`}
              >
                {block.heading}
              </h3>
            )}
            <div className="mt-8 max-w-xl">
              {block.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between gap-6 border-t border-line py-3 first:border-t-0"
                >
                  <span className="text-[15px] text-ink">{step.label}</span>
                  <span className="font-mono text-[14px] tabular-nums text-ink-faint">
                    {step.value}%
                  </span>
                </div>
              ))}
            </div>
            {block.description && (
              <p className="mt-6 max-w-xl text-sm text-ink-faint">
                {block.description}
              </p>
            )}
          </div>
        </Reveal>
      );

    case "quote-grid":
      return (
        <Reveal>
          <div>
            {block.eyebrow && (
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                {block.eyebrow}
              </p>
            )}
            {block.heading && (
              <h3
                className={`font-display text-2xl text-ink ${block.eyebrow ? "mt-3" : ""}`}
              >
                {block.heading}
              </h3>
            )}
            {block.description && (
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                {block.description}
              </p>
            )}
            <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {block.quotes.map((q, i) => (
                <li
                  key={i}
                  className="border-t border-line pt-4 font-display text-lg leading-snug text-ink"
                >
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      );

    case "decision": {
      const imageFirst = block.imageSide === "left";
      const d = dims(block.image.src);
      const capPx = safeCapPx(block.image.src, 300);
      const Figure = (
        <figure
          className={`mx-auto w-full ${!imageFirst ? "md:order-2" : ""}`}
          style={{ maxWidth: `min(78vw, ${capPx}px)` }}
        >
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={d.w}
            height={d.h}
            quality={95}
            unoptimized
            sizes={`min(78vw, ${capPx}px)`}
            className="h-auto w-full rounded-[28px] shadow-lg"
          />
        </figure>
      );
      const Copy = (
        <div
          className={`w-full max-w-[520px] space-y-4 ${!imageFirst ? "md:order-1" : ""}`}
        >
          <span className="font-mono text-[13px] font-medium text-accent">
            {block.number}
          </span>
          <h3 className="font-display text-2xl text-ink">{block.heading}</h3>
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          {block.result && (
            <p className="text-[15px] font-medium text-accent">
              {block.result}
            </p>
          )}
          {block.note && (
            <div className="border-l-2 border-line-strong pl-4">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                Handoff note
              </p>
              <p className="mt-1.5 text-[13px] italic leading-relaxed text-ink-faint">
                {block.note}
              </p>
            </div>
          )}
        </div>
      );
      return (
        <Reveal>
          <div
            className={`grid gap-10 md:items-center md:gap-16 ${
              imageFirst ? "md:grid-cols-[auto_1fr]" : "md:grid-cols-[1fr_auto]"
            }`}
          >
            {Figure}
            {Copy}
          </div>
        </Reveal>
      );
    }

    default:
      return null;
  }
}
