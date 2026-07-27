"use client";

import { useState } from "react";
import { MESSAGES, MESSAGE_TOKENS } from "@/lib/site";

// Free, ungated. Fill the fields → a ready message with your details in it.
// Copy it and send it yourself. We never send for you.
export default function MessageGenerator() {
  const [pick, setPick] = useState(MESSAGES.items[0].slug);
  const [vals, setVals] = useState({});
  const [copied, setCopied] = useState(false);

  const template = MESSAGES.items.find((m) => m.slug === pick);

  // Replace [name], [medication], etc. with entered values where present.
  function filled() {
    let out = template.body;
    MESSAGE_TOKENS.forEach((t) => {
      if (vals[t.key]) {
        const re = new RegExp(`\\[${t.key}\\]`, "gi");
        out = out.replace(re, vals[t.key]);
      }
    });
    return out;
  }

  async function copy() {
    const text = filled();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-line bg-white p-6">
        <label htmlFor="tpl" className="mb-1.5 block text-base font-medium text-ink">
          Which message?
        </label>
        <select id="tpl" value={pick} onChange={(e) => setPick(e.target.value)} className="field">
          {MESSAGES.items.map((m) => (
            <option key={m.slug} value={m.slug}>{m.name}</option>
          ))}
        </select>

        <div className="mt-5 space-y-4">
          {MESSAGE_TOKENS.map((t) => (
            <div key={t.key}>
              <label htmlFor={t.key} className="mb-1.5 block text-base font-medium text-ink">
                {t.label}
              </label>
              <input
                id={t.key}
                type="text"
                placeholder={t.placeholder}
                value={vals[t.key] || ""}
                onChange={(e) => setVals({ ...vals, [t.key]: e.target.value })}
                className="field"
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-faint">
          Leave a field blank to keep its [placeholder]. Basis: {template.cite}.
          Fixed templates, filled in from your entries, nothing here is
          AI-generated.
        </p>
      </div>

      <div className="rounded-xl border border-line bg-white">
        <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-2.5">
          <span className="font-mono text-sm text-ink-soft">message.txt</span>
          <button onClick={copy} className="btn !px-3.5 !py-1.5 text-sm" aria-live="polite">
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="max-w-full overflow-x-auto whitespace-pre-wrap px-4 py-5 font-mono text-[0.95rem] leading-relaxed text-ink">
          {filled()}
        </pre>
      </div>
    </div>
  );
}
