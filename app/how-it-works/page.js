import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagramSVG from "@/components/DiagramSVG";
import { HOWITWORKS } from "@/lib/site";

export const metadata = {
  title: "How It Works",
  description:
    "You already run this loop. Daykeep instruments it — day 22 to close — so timing stops being your job to remember.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {HOWITWORKS.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-ink">{HOWITWORKS.lede}</p>
        </div>

        <ol className="mt-10 max-w-measure space-y-8">
          {HOWITWORKS.steps.map((s, i) => (
            <li key={s.h} className="flex gap-4 border-t border-line pt-6">
              <span className="font-mono text-lg text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
                <p className="mt-2 text-lg text-ink-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* The diagram, embedded. */}
        <section className="mt-16 scroll-mt-24">
          <div className="overflow-x-auto rounded-xl border border-line bg-paper p-4">
            <div className="min-w-[720px]">
              <DiagramSVG />
            </div>
          </div>
          <Link href="/diagram" className="link mt-4 inline-block text-lg">
            Download the diagram — PNG, SVG, or print
          </Link>
        </section>

        <section className="mt-16 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">What comes with it</h2>
          <div className="mt-5 space-y-5">
            {HOWITWORKS.extras.map((e) => (
              <div key={e.h} className="border-t border-line pt-4">
                <h3 className="text-lg font-medium text-ink">{e.h}</h3>
                <p className="mt-1 text-base text-ink-soft">{e.body}</p>
              </div>
            ))}
          </div>
          <Link href="/signup" className="btn mt-8">Get started</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
