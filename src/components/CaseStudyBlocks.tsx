import Image from "next/image";
import type { Block } from "@/data/projects";
import Reveal from "./Reveal";

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
      return (
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            {block.heading && (
              <h3 className="font-display text-2xl text-ink lg:col-span-4">
                {block.heading}
              </h3>
            )}
            <div
              className={`space-y-4 text-[15px] leading-relaxed text-ink-soft ${
                block.heading ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-9"
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
            {block.heading && (
              <h3 className="font-display text-2xl text-ink lg:col-span-4">
                {block.heading}
              </h3>
            )}
            <ul
              className={`space-y-4 lg:col-span-7 ${
                block.heading ? "lg:col-start-6" : "lg:col-span-9"
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
        return (
          <Reveal>
            <figure className="mx-auto max-w-[300px] sm:max-w-sm">
              <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.75rem] bg-paper-dim ring-1 ring-line-strong">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 640px) 384px, 300px"
                  className="object-contain"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-3 text-center text-sm text-ink-faint">
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
      return (
        <Reveal>
          <div
            className={`grid gap-4 sm:gap-6 ${
              block.images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            } ${portrait ? "mx-auto max-w-xl sm:max-w-2xl" : ""}`}
          >
            {block.images.map((img, i) => (
              <figure key={i}>
                <div
                  className={`relative w-full overflow-hidden bg-paper-dim ${
                    portrait
                      ? "aspect-[9/19.5] rounded-[1.75rem] ring-1 ring-line-strong"
                      : "aspect-[3/4] rounded-xl"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className={portrait ? "object-contain" : "object-cover"}
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

    default:
      return null;
  }
}
