import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SAFETY } from "@/lib/legal";

export const metadata = {
  title: "If you cannot get your medication",
  description:
    "The safe path when you are out or running low. Through your prescriber and pharmacist, never around them. Crisis line 988.",
};

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {SAFETY.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{SAFETY.intro}</p>
        </div>

        {/* Crisis — plain and first. */}
        <div className="mt-8 max-w-measure rounded-xl border-2 border-expired bg-white p-6">
          <p className="text-base font-semibold uppercase tracking-wide text-expired">
            {SAFETY.crisis.label}
          </p>
          <p className="mt-2 text-lg text-ink">{SAFETY.crisis.body}</p>
          <a
            href="tel:988"
            className="mt-4 inline-flex items-center gap-2 text-2xl font-semibold text-ink underline underline-offset-4"
          >
            Call or text {SAFETY.crisis.number}
          </a>
        </div>

        <ol className="mt-12 max-w-measure space-y-8">
          {SAFETY.steps.map((s, i) => (
            <li key={s.h} className="border-t border-line pt-6">
              <div className="flex gap-4">
                <span className="font-mono text-lg text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
                  <p className="mt-2 text-lg text-ink-soft">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-measure rounded-xl border border-line bg-panel p-6">
          <h2 className="text-xl font-semibold text-ink">{SAFETY.refusals.h}</h2>
          <ul className="mt-4 space-y-2.5">
            {SAFETY.refusals.items.map((item) => (
              <li key={item} className="flex gap-3 text-lg text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-expired" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
