import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RIGHTS_LONG } from "@/lib/site";

export const metadata = {
  title: "What your script already allows",
  description:
    "Three rights, in plain language, with citations: dated fills from one visit, patient-initiated transfer, and partial fill.",
};

export default function RightsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {RIGHTS_LONG.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{RIGHTS_LONG.intro}</p>
        </div>

        <div className="mt-10 max-w-measure space-y-10">
          {RIGHTS_LONG.items.map((r, i) => (
            <section key={r.slug} id={r.slug} className="scroll-mt-24 border-t border-line pt-8">
              <p className="font-mono text-sm text-focus">{r.cite}</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">{r.name}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink">{r.plain}</p>
              <p className="mt-4 text-base text-ink-soft">
                <span className="font-medium text-ink">Why it matters. </span>
                {r.why}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
