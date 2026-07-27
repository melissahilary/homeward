import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  STATES,
  STATE_FIELDS,
  FEDERAL_BASELINE,
  FEDERAL_NOTE,
  getState,
  statusOf,
} from "@/lib/states";

export function generateStaticParams() {
  return STATES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getState(params.slug);
  if (!s) return { title: "State not found" };
  return {
    title: `${s.name}, Schedule II refill rules`,
    description: `Schedule II transfer, expiration, and telemedicine rules for ${s.name}, with the federal baseline that applies everywhere.`,
  };
}

const BADGE = {
  verified: { text: "Verified", cls: "text-stock" },
  sourced: { text: "Sourced", cls: "text-pending" },
  review: { text: "In review", cls: "text-ink-faint" },
};

export default function StatePage({ params }) {
  const state = getState(params.slug);
  if (!state) notFound();
  const status = statusOf(state);
  const badge = BADGE[status];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <Link href="/states" className="link mb-8 inline-block text-base text-ink-soft">
          All states
        </Link>

        <div className="max-w-measure">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
              {state.name}
            </h1>
            <span className={`rounded-full bg-panel px-3 py-1 text-sm font-medium ${badge.cls}`}>
              {badge.text}
            </span>
          </div>
          {state.lastReviewed && (
            <p className="mt-2 font-mono text-sm text-ink-faint">
              Last reviewed {state.lastReviewed}
            </p>
          )}
        </div>

        {/* Federal baseline, true in every state. */}
        <section className="mt-8 max-w-measure">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
            Applies in every state
          </h2>
          <dl className="mt-4 divide-y divide-line border-t border-line">
            {FEDERAL_BASELINE.map((f) => (
              <div key={f.label} className="py-4">
                <dt className="flex items-baseline justify-between gap-4">
                  <span className="text-lg font-semibold text-ink">{f.label}</span>
                  <span className="shrink-0 font-mono text-sm text-focus">{f.cite}</span>
                </dt>
                <dd className="mt-1 text-lg text-ink-soft">{f.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* State-specific, the parts that vary. */}
        <section className="mt-10 max-w-measure">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
            Specific to {state.name}
          </h2>
          {status === "review" && (
            <p className="mt-3 rounded-lg border border-line bg-panel p-4 text-base text-ink">
              We have not finished sourcing {state.name}&rsquo;s state-specific
              rules. The federal baseline above still applies. Confirm the rest
              with your prescriber and pharmacist.
            </p>
          )}
          {status === "sourced" && (
            <p className="mt-3 rounded-lg border border-line bg-panel p-4 text-base text-ink">
              These values come from a public legal compilation, not yet
              counsel-reviewed. Confirm with your pharmacist before you rely on
              them.
            </p>
          )}
          <dl className="mt-5 divide-y divide-line border-t border-line">
            {STATE_FIELDS.map((f) => (
              <div key={f.key} className="py-5">
                <dt className="text-lg font-semibold text-ink">{f.label}</dt>
                <dd className="mt-1 text-lg text-ink-soft">
                  {state[f.key] || "Not yet entered."}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {state.sources?.length > 0 && (
          <div className="mt-6 max-w-measure">
            <p className="text-sm font-medium text-ink">Sources</p>
            <ul className="mt-2 space-y-1">
              {state.sources.map((src) => (
                <li key={src}>
                  <a href={src} className="link text-sm" target="_blank" rel="noopener noreferrer">
                    {src}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-8 max-w-measure rounded-lg border border-line bg-panel p-4 text-base text-ink-soft">
          {FEDERAL_NOTE}
        </p>
      </main>
      <Footer />
    </>
  );
}
