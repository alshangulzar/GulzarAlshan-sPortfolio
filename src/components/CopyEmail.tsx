"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link still works.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-3 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
      aria-live="polite"
    >
      <span className="underline decoration-line-strong decoration-1 underline-offset-4 group-hover:decoration-ink">
        {copied ? "Copied to clipboard" : "Copy email address"}
      </span>
    </button>
  );
}
