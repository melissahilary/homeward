import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { STATES, STATE_FIELDS, FEDERAL_NOTE, getState } from "@/lib/states";

export function generateStaticParams() {
  return STATES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getState(params.slug);
  if (!s) return { title: "State not found" };
  return {
    title: `${s.name} — Schedule II refill rules`,
    description: `Schedule II transfer, expiration, and telemedicine rules for ${s.name}. ${s.verified ? "Verified." : "Verification in progress."}`,
  };
}

export default function StatePage({ params }) {
  const state = getState(params.slug);
  if (!state) notFound();

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
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                state.verified ? "bg-panel text-stock" : "bg-panel text-pending"
              }`}
            >
              {state.verified ? "Verified" : "Not yet verified"}
            </span>
          </div>

          {!state.verified && (
            <p className="mt-4 rounded-lg border border-line bg-panel p-4 text-base text-ink">
              We have not finished verifying {state.name}&rsquo;s rules against
              primary sources. Do not rely on anything here yet. Confirm with your
              prescriber and pharmacist. This is not legal or medical advice.
            </p>
          )}
        </div>

        <dl className="mt-8 max-w-measure divide-y divide-line border-t border-line">
          {STATE_FIELDS.map((f) => (
            <div key={f.key} className="py-5">
              <dt className="text-lg font-semibold text-ink">{f.label}</dt>
              <dd className="mt-2 text-lg text-ink-soft">
                {state[f.key] || "Not yet entered."}
              </dd>
            </div>
          ))}
        </dl>

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
