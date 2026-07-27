import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ABOUT, POSITIONING } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Not a founder story. A boundaries page: our credential, our premise, who we serve, and who we do not.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {ABOUT.title}
          </h1>
          <p className="mt-4 text-xl font-medium leading-relaxed text-ink">
            {POSITIONING.person}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{ABOUT.lede}</p>
        </div>
        <div className="mt-10 max-w-measure space-y-10">
          {ABOUT.sections.map((s) => (
            <section key={s.h} className="border-t border-line pt-8">
              <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{s.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 max-w-measure rounded-xl border border-line bg-panel p-6">
          <h2 className="text-lg font-semibold text-ink">
            For prescribers and pharmacists
          </h2>
          <p className="mt-2 text-lg leading-relaxed text-ink-soft">
            {POSITIONING.clinician}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
