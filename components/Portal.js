"use client";

import { useState } from "react";
import Link from "next/link";
import { MESSAGES } from "@/lib/site";

const TABS = ["Today", "Messages", "History", "Setup", "Account"];

// The eight states of the cycle. One screen, one sentence, one button; only
// the label changes, and it lives in the same place every time.
const CYCLE_STATES = {
  waiting: { sentence: "Nothing to do today. We are counting the days.", button: null, day: "Day 12 of 30" },
  "request-due": { sentence: "Today: request your next fill, before you run out.", button: "Copy the request", day: "Day 22 of 30" },
  "request-sent": { sentence: "Request sent. We will check it landed.", button: "Mark as confirmed", day: "Day 24 of 30" },
  "verify-stock": { sentence: "Check stock at your pharmacy for the exact strength.", button: "Copy the stock question", day: "Day 26 of 30" },
  "out-of-stock": { sentence: "Out of stock. Move it yourself with a transfer.", button: "Copy the transfer", day: "Day 28 of 30" },
  transfer: { sentence: "Transfer in progress. Confirm when it completes.", button: "Mark as transferred", day: "Day 29 of 30" },
  ready: { sentence: "Ready for pickup. Bring your ID.", button: "Got it", day: "Day 30 of 30" },
  report: { sentence: "You picked up. One tap: how did it go?", button: "Report the outcome", day: "Day 31" },
};

function copy(text) {
  navigator.clipboard?.writeText(text).catch(() => {});
}

export default function Portal() {
  const [tab, setTab] = useState("Today");

  return (
    <div>
      {/* The single menu. Everything else lives behind it. */}
      <nav className="scroll-row mb-10 flex gap-6 overflow-x-auto border-b border-line">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`shrink-0 border-b-2 pb-3 text-base ${
              tab === t ? "border-ink font-medium text-ink" : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </nav>

      {tab === "Today" && <Today />}
      {tab === "Messages" && <Messages />}
      {tab === "History" && <History />}
      {tab === "Setup" && <Setup />}
      {tab === "Account" && <Account />}
    </div>
  );
}

function Today() {
  const state = CYCLE_STATES["request-due"];
  const prescriber = MESSAGES.items.find((m) => m.slug === "prescriber-request").body;
  const [done, setDone] = useState(false);
  return (
    <section className="max-w-measure">
      <span className="inline-flex items-center gap-2 rounded-full bg-panel px-3 py-1 text-sm font-medium text-pending">
        <span className="h-2 w-2 rounded-full bg-pending" aria-hidden="true" /> {state.day}
      </span>
      <p className="mt-6 text-2xl font-semibold leading-snug text-ink md:text-3xl">
        {state.sentence}
      </p>
      {/* The one button, in the same position every state. */}
      <div className="mt-8">
        <button
          onClick={() => { copy(prescriber); setDone(true); }}
          className="btn text-lg"
        >
          {done ? "Copied. Send it from your portal." : state.button}
        </button>
      </div>
      <p className="mt-4 text-sm text-ink-faint">
        The product happens in your texts. On day 29 the transfer wording arrives
        by SMS, inline, with nothing to open while a pharmacist waits.
      </p>
    </section>
  );
}

function Messages() {
  return (
    <section className="space-y-8">
      <p className="max-w-measure text-lg text-ink-soft">
        All four, any time. You will need the transfer wording on a Tuesday for
        reasons the cycle did not predict.
      </p>
      {MESSAGES.items.map((m) => (
        <div key={m.slug} className="max-w-3xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-ink">{m.name}</h3>
            <div className="flex gap-3">
              <button onClick={() => copy(m.body)} className="btn btn-secondary !px-3.5 !py-1.5 text-sm">Copy</button>
              <button onClick={() => window.print()} className="btn btn-secondary !px-3.5 !py-1.5 text-sm no-print">Print</button>
            </div>
          </div>
          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-xl border border-line bg-white px-4 py-4 font-mono text-[0.92rem] leading-relaxed text-ink">
            {m.body}
          </pre>
        </div>
      ))}
    </section>
  );
}

function History() {
  const rows = [
    { date: "Jun 2, 2026", pharmacy: "Elm Street Pharmacy", maker: "Teva", outcome: "Filled" },
    { date: "May 3, 2026", pharmacy: "Bayview Community Rx", maker: "SpecGx", outcome: "Partial fill" },
    { date: "Apr 1, 2026", pharmacy: "Harbor Chain #204", maker: "n/a", outcome: "Out of stock" },
  ];
  return (
    <section className="max-w-3xl">
      <p className="text-lg text-ink-soft">
        Your ledger. It is what makes month twelve easier than month one.
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-base">
          <thead className="bg-panel text-sm text-ink-faint">
            <tr>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Pharmacy</th>
              <th className="px-4 py-3 font-medium">Maker</th>
              <th className="px-4 py-3 font-medium">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.date} className="border-t border-line">
                <td className="px-4 py-3 text-ink">{r.date}</td>
                <td className="px-4 py-3 text-ink-soft">{r.pharmacy}</td>
                <td className="px-4 py-3 text-ink-soft">{r.maker}</td>
                <td className="px-4 py-3 text-ink">{r.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const SETUP_FIELDS = [
  { name: "who", label: "Who this is for", value: "Myself" },
  { name: "med", label: "Medication and strength", value: "amphetamine XR 20mg" },
  { name: "days", label: "Days supply", value: "30" },
  { name: "lastFill", label: "Last fill date", value: "2026-06-02" },
  { name: "state", label: "State", value: "California" },
  { name: "prescriber", label: "Prescriber name", value: "Dr. Chen" },
  { name: "pharmacy", label: "Current pharmacy", value: "Elm Street Pharmacy" },
];

function Setup() {
  const [saved, setSaved] = useState(false);
  return (
    <section className="max-w-measure">
      <p className="text-lg text-ink-soft">
        Everything that drives the cycle. Editable in under thirty seconds, since
        people change pharmacies more often than you would expect.
      </p>
      <form
        onSubmit={(e) => { e.preventDefault(); setSaved(true); }}
        className="mt-6 space-y-4"
      >
        {SETUP_FIELDS.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="mb-1.5 block text-base font-medium text-ink">{f.label}</label>
            <input id={f.name} defaultValue={f.value} className="field" onChange={() => setSaved(false)} />
          </div>
        ))}
        <button type="submit" className="btn text-lg">{saved ? "Saved" : "Save"}</button>
      </form>
    </section>
  );
}

function Account() {
  return (
    <section className="max-w-measure">
      <div className="rounded-xl border border-line bg-white p-6">
        <dl className="divide-y divide-line">
          {[
            ["Plan", "Daykeep, $99 a year"],
            ["Status", "Active"],
            ["Renews", "March 3, 2027"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-3">
              <dt className="text-base text-ink-soft">{k}</dt>
              <dd className="text-base font-medium text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <AccountAction label="Cancel subscription" note="One click. Full refund inside 30 days." />
        <AccountAction label="Download receipt" note="PDF for your records." />
        <AccountAction label="Export my data" note="Everything we hold." />
        <AccountAction label="Delete & withdraw consent" note="Legal right, not a nicety." href="/delete" />
      </div>
    </section>
  );
}

function AccountAction({ label, note, href }) {
  const [done, setDone] = useState(false);
  const body = (
    <>
      <p className="text-base font-medium text-ink">{done ? "Done." : label}</p>
      <p className="mt-1 text-sm text-ink-faint">{note}</p>
    </>
  );
  if (href) {
    return <Link href={href} className="block rounded-xl border border-line bg-white p-4 hover:border-ink-faint">{body}</Link>;
  }
  return (
    <button onClick={() => setDone(true)} className="rounded-xl border border-line bg-white p-4 text-left hover:border-ink-faint">
      {body}
    </button>
  );
}
