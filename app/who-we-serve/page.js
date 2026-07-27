import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WHO_WE_SERVE } from "@/lib/site";

export const metadata = {
  title: "Who we serve",
  description:
    "The criterion is a drug schedule, never a condition. Anyone on a chronic Schedule II medication runs this loop. Built on the schedule, not the condition, from day one.",
};

export default function WhoWeServePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {WHO_WE_SERVE.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-ink">{WHO_WE_SERVE.lede}</p>
        </div>

        <div className="mt-10 max-w-measure space-y-10">
          {WHO_WE_SERVE.waves.map((wave) => (
            <section key={wave.label} className="border-t border-line pt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
                {wave.label}
              </p>
              <div className="mt-4 space-y-5">
                {wave.groups.map((g) => (
                  <div key={g.h}>
                    <h2 className="text-lg font-medium text-ink">{g.h}</h2>
                    <p className="mt-1 text-lg text-ink-soft">{g.body}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 max-w-measure rounded-xl border border-line bg-panel p-6">
          <h2 className="text-lg font-semibold text-ink">How the schema holds this</h2>
          <p className="mt-2 text-lg leading-relaxed text-ink-soft">
            {WHO_WE_SERVE.schemaNote}
          </p>
        </section>

        <section className="mt-12 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">Who we never serve</h2>
          <ul className="mt-4 space-y-3">
            {WHO_WE_SERVE.never.map((n) => (
              <li key={n} className="flex gap-3 text-lg text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-expired" aria-hidden="true" />
                {n}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <Link href="/signup" className="btn">Get started</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
