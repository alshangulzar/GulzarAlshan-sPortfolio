"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type Message = { from: "me" | "you"; text: string };

const conversation: Message[] = [
  { from: "me", text: "Hey — I'm Gulzar." },
  { from: "me", text: "I design digital products that make complex things feel simple." },
  { from: "you", text: "What kind of projects?" },
  {
    from: "me",
    text: "Healthcare, civic AI, and consumer apps — research-led, shipped with real teams.",
  },
  { from: "me", text: "Scroll down, I'll show you ↓" },
];

const collaborators = [
  "Arizona State University",
  "Mayo Clinic",
  "ASU Learning Enterprise",
];

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-ink-faint"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

function Avatar({ size = 24 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent/10 ring-2 ring-paper"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 32 32" className="h-[78%] w-[78%]" aria-hidden="true">
        <path
          d="M16 5.5c-4.4 0-7 3.1-7.3 6.9-.2 2.2.3 3.6-1 5.2-1 1.2-.2 2.3 1.2 2.3h14.2c1.4 0 2.2-1.1 1.2-2.3-1.3-1.6-.8-3-1-5.2-.3-3.8-2.9-6.9-7.3-6.9Z"
          fill="var(--color-ink)"
        />
        <circle cx="16" cy="15.3" r="5.1" fill="var(--color-paper)" />
        <path
          d="M16 25.6c-3.5 0-6.3 1.7-6.3 3.9v.5h12.6v-.5c0-2.2-2.8-3.9-6.3-3.9Z"
          fill="var(--color-ink)"
        />
      </svg>
    </span>
  );
}

function ChatIntro() {
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const start = setTimeout(() => setTyping(false), 850);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (typing) return;
    if (visible >= conversation.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [typing, visible]);

  return (
    <div className="relative w-full max-w-sm">
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -inset-y-14 -z-10 rounded-[3rem] bg-accent-soft/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full border border-line-strong/60"
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rotate-[-1.5deg] rounded-2xl border border-line-strong/70 bg-paper p-5 shadow-[0_40px_80px_-30px_rgba(22,21,18,0.35)] sm:p-6"
      >
        <div className="mb-5 flex items-center gap-2.5 border-b border-line pb-4">
          <Avatar size={30} />
          <div>
            <p className="text-[12px] font-medium text-ink">Gulzar Alshan</p>
            <p className="flex items-center gap-1.5 text-[11px] text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/70" />
              Usually replies with a case study
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {conversation.slice(0, visible).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-end gap-2 ${
                m.from === "you" ? "flex-row-reverse" : ""
              }`}
            >
              {m.from === "me" && <Avatar size={22} />}
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug ${
                  m.from === "me"
                    ? "rounded-bl-sm bg-paper-dim text-ink"
                    : "rounded-br-sm bg-ink text-paper"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
          {(typing || (visible < conversation.length && visible > 0)) && (
            <div className="flex items-end gap-2">
              <Avatar size={22} />
              <div className="rounded-2xl rounded-bl-sm bg-paper-dim px-4 py-3">
                <TypingDots />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pt-16">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-accent"
          >
            <span className="h-px w-6 bg-accent" />
            Product Designer · UX Researcher
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            I&rsquo;m{" "}
            <span className="italic text-accent">Gulzar Alshan</span> — I
            design digital experiences that make complex things feel simple.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-md text-balance text-lg leading-relaxed text-ink-soft"
          >
            I combine user research, thoughtful interaction design, and
            product thinking to create intuitive digital experiences for real
            people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/work"
              data-cursor="link"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Explore my work
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/about"
              data-cursor="link"
              className="text-sm font-medium text-ink-soft underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              About me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 border-t border-line pt-6"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Research &amp; design collaborators
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {collaborators.map((c) => (
                <li
                  key={c}
                  className="font-display text-base text-ink-soft sm:text-lg"
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <ChatIntro />
        </motion.div>
      </div>
    </section>
  );
}
