import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DATASETS } from "@/lib/predictions";

export const metadata = {
  title: "How the map is built",
  description:
    "Attempt history that exists nowhere else. Built by patients reporting real outcomes, gated by reciprocity, measured by one ratio: contribution rate.",
};

const MECHANICS = [
  { h: "Reciprocity gate", body: "You cannot get a ranked recommendation without reporting the outcome of your last one. Not a penalty — the mechanism. Waze cannot route a driver who is not driving." },
  { h: "Capture at the emotional peak", body: "One text within two hours of pickup, at the moment of relief or fury. Filled, out of stock, wrongly refused. Never a survey, never a scheduled form." },
  { h: "Free tools as a sensor network", body: "The countdown calculator collects drug, strength, fill date, and ZIP from people who never sign up. That is the demand map — it picks the launch metro instead of us guessing." },
  { h: "Visible density", body: "Every recommendation shows its sample size. Forty-seven reports, ninety days. You see the asset growing, and what leaving would cost." },
  { h: "Metro concentration", body: "Four hundred users in one metro beats four thousand scattered. The first is a working prediction engine; the second is a phone book with a good logo." },
];

export default function TheMapPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            How the map is built
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Anyone can copy the charter, the templates, and the diagram. None of
            that is the product. The product is attempt history — and it exists
            nowhere to be scraped or bought.
          </p>
        </div>

        <section className="mt-12 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">Five datasets no one else holds</h2>
          <ol className="mt-5 space-y-3">
            {DATASETS.map((d, i) => (
              <li key={d} className="flex gap-3 text-lg text-ink">
                <span className="font-mono text-base text-ink-faint">{i + 1}</span>
                {d}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">Five mechanics that make it work</h2>
          <div className="mt-5 space-y-6">
            {MECHANICS.map((m) => (
              <div key={m.h} className="border-t border-line pt-5">
                <h3 className="text-lg font-medium text-ink">{m.h}</h3>
                <p className="mt-1 text-base text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 max-w-measure rounded-xl border-2 border-ink bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">The one number that wins</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Not signups. Not revenue. <span className="font-medium text-ink">Contribution rate</span> — the
            share of active cycles that end in a reported outcome. Above 60%, the
            map outpaces anything anyone can buy. Below 40%, it is a phone book,
            and the charter alone will not save it.
          </p>
          <p className="mt-3 text-base text-ink-soft">
            A funded clone can buy ten thousand users. Bought users do not report.
            Twelve hundred organic users reporting at 70% produce a sharper map
            than ten thousand paid users reporting at 12%.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report" className="btn">Report an outcome</Link>
          <Link href="/pharmacies" className="btn btn-secondary">See the ranked map</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
