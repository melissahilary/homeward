"use client";

import { useState } from "react";

// The free artifact, copyable, no email required. Giving it away is the
// conversion event: it proves competence in ten seconds.
export default function CopyBlock({ text }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / denied permission.
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-2.5">
        <span className="font-mono text-sm text-ink-soft">message.txt</span>
        <button
          onClick={copy}
          className="btn !px-3.5 !py-1.5 text-sm"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-w-full overflow-x-auto whitespace-pre-wrap px-4 py-5 font-mono text-[0.95rem] leading-relaxed text-ink">
        {text}
      </pre>
    </div>
  );
}
