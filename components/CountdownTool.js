"use client";

import { useState } from "react";
import { buildICS, cycleAlerts } from "@/lib/ics";

// Free, ungated. Enter last fill date + days supply → the countdown, the
// three alert days, and a one-click calendar export. No login, no email.
export default function CountdownTool() {
  const [lastFill, setLastFill] = useState("");
  const [days, setDays] = useState("30");
  const [med, setMed] = useState("");
  const [result, setResult] = useState(null);

  function fmt(d) {
    return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  }

  function compute(e) {
    e.preventDefault();
    const base = new Date(lastFill + "T00:00:00");
    if (isNaN(base)) return;
    const supply = Math.max(1, parseInt(days, 10) || 30);
    const alerts = cycleAlerts(base, supply, med.trim());
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const out = alerts[3].date;
    const daysLeft = Math.round((out - today) / 86400000);
    setResult({ alerts, daysLeft, base, supply });
  }

  function exportICS() {
    if (!result) return;
    const ics = buildICS(result.alerts, new Date());
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "daykeep-cycle.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <form onSubmit={compute} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <label htmlFor="lf" className="mb-1.5 block text-base font-medium text-ink">Last fill date</label>
          <input id="lf" type="date" required value={lastFill} onChange={(e) => setLastFill(e.target.value)} className="field" />
        </div>
        <div>
          <label htmlFor="ds" className="mb-1.5 block text-base font-medium text-ink">Days supply</label>
          <input id="ds" type="number" min="1" max="90" required value={days} onChange={(e) => setDays(e.target.value)} className="field" />
        </div>
        <div>
          <label htmlFor="md" className="mb-1.5 block text-base font-medium text-ink">Medication (optional)</label>
          <input id="md" type="text" value={med} onChange={(e) => setMed(e.target.value)} placeholder="amphetamine XR 20mg" className="field" />
        </div>
        <div className="sm:col-span-3">
          <button type="submit" className="btn">Show my cycle</button>
        </div>
      </form>

      {result && (
        <div className="mt-8 border-t border-line pt-6">
          <p className="text-lg text-ink">
            {result.daysLeft > 0 ? (
              <><span className="text-2xl font-semibold">{result.daysLeft} days</span> of supply left.</>
            ) : (
              <span className="text-2xl font-semibold text-expired">You are past zero.</span>
            )}
          </p>
          <ul className="mt-5 divide-y divide-line rounded-lg border border-line">
            {result.alerts.map((a, i) => (
              <li key={i} className="flex items-baseline justify-between gap-4 px-4 py-3">
                <span className="text-base text-ink">{a.title}</span>
                <span className="shrink-0 font-mono text-sm text-ink-soft">{fmt(a.date)}</span>
              </li>
            ))}
          </ul>
          <button onClick={exportICS} className="btn btn-secondary mt-5 !py-2.5 text-base">
            Add to calendar (.ics)
          </button>
          <p className="mt-3 text-sm text-ink-faint">
            Drops the day 22, 27, and 29 alerts into the calendar you already
            check. Not medical advice — a countdown you can run yourself.
          </p>
        </div>
      )}
    </div>
  );
}
