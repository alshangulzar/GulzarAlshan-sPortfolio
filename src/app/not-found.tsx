import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 py-24 sm:px-8 lg:px-12">
      <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
        <span className="h-px w-6 bg-accent" />
        404
      </p>
      <h1 className="text-balance mt-6 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        This page{" "}
        <span className="italic text-accent">wandered off.</span>
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
        Whatever you were looking for isn&rsquo;t here. It might have moved,
        or the link might just be wrong.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Back to home
        </Link>
        <Link
          href="/work"
          className="text-sm font-medium text-ink-soft underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
        >
          See my work
        </Link>
      </div>
    </div>
  );
}
