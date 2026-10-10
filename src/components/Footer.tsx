import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-ink">Gulzar Alshan</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Product Designer &amp; UX Researcher based in the U.S., currently
              open to Product Designer roles.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Site
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/work" className="hover:text-ink">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <a
                  href="mailto:alshan.gulzr@gmail.com"
                  className="hover:text-ink"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gulzar-alshan"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-ink">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Gulzar Alshan. All rights reserved.</p>
          <p>Designed and built by Gulzar Alshan.</p>
        </div>
      </div>
    </footer>
  );
}
