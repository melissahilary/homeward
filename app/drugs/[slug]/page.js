import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DRUGS, getDrug, OUT_OF_STOCK, TRADEMARK_NOTICE } from "@/lib/drugs";

export function generateStaticParams() {
  return DRUGS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = getDrug(params.slug);
  if (!d) return { title: "Not found" };
  return {
    title: `${d.molecule} shortage, what to do when your pharmacy is out`,
    description: `${d.molecule} (also sold as ${d.brands.join(", ")}) has no refills. ${d.summary}`,
  };
}

export default function DrugPage({ params }) {
  const drug = getDrug(params.slug);
  if (!drug) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <Link href="/drugs" className="link mb-8 inline-block text-base text-ink-soft">
          All medications
        </Link>

        <div className="max-w-measure">
          <p className="font-mono text-sm text-ink-faint">{drug.schedule} · no refills</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {drug.molecule}: what to do when your pharmacy is out
          </h1>
          <p className="mt-3 text-base text-ink-soft">
            Also sold as {drug.brands.join(", ")}. {drug.also}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink">{drug.summary}</p>
        </div>

        <section className="mt-10 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">If the counter is out</h2>
          <ol className="mt-4 space-y-3">
            {OUT_OF_STOCK.map((step, i) => (
              <li key={i} className="flex gap-3 text-lg text-ink">
                <span className="font-mono text-base text-ink-faint">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/tools/message" className="btn text-lg">Generate the message</Link>
            <Link href="/pharmacies" className="link text-lg">See which counters complete transfers</Link>
          </div>
        </section>

        <p className="mt-12 max-w-measure border-t border-line pt-6 text-sm text-ink-faint">
          {TRADEMARK_NOTICE}
        </p>
      </main>
      <Footer />
    </>
  );
}
