import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SCENARIOS, getScenario } from "@/lib/scenarios";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getScenario(params.slug);
  if (!s) return { title: "Not found" };
  return { title: s.title, description: s.description };
}

export default function ScenarioPage({ params }) {
  const s = getScenario(params.slug);
  if (!s) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <Link href="/scenarios" className="link mb-8 inline-block text-base text-ink-soft">
          All scenarios
        </Link>

        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2.4rem] md:leading-[1.1]">
            {s.h1}
          </h1>

          {/* The answer, first. No scrolling to find out. */}
          <div className="mt-6 rounded-xl border-l-2 border-stock bg-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              Short answer
            </p>
            <p className="mt-2 text-xl leading-relaxed text-ink">{s.short}</p>
          </div>

          <h2 className="mt-12 text-xl font-semibold text-ink">What to do</h2>
          <ol className="mt-4 space-y-3">
            {s.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-lg text-ink">
                <span className="font-mono text-base text-ink-faint">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <p className="mt-6 font-mono text-sm text-focus">{s.cite}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={s.cta.href} className="btn text-lg">{s.cta.label}</Link>
            <Link href="/safety" className="link text-lg">Out of medication right now?</Link>
          </div>

          <p className="mt-10 border-t border-line pt-6 text-sm text-ink-faint">
            This is a logistics and paperwork guide, not medical or legal advice.
            Confirm with your prescriber and pharmacist.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
