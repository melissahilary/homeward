import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Methodology",
  description:
    "How Daykeep collects outcomes, what counts as an attempt, how pharmacies are ranked, and the confidence limits on every figure. Written to be trusted, and to be cited.",
};

const SECTIONS = [
  {
    h: "How outcomes are collected",
    body: "Every recommendation rests on reported attempts. After a fill or a transfer, one question arrives by text within two hours of the expected pickup: filled, out of stock, or wrongly refused. One tap. No survey, no scheduled form. Reports are de-identified before they enter the map, and only people who gave a separate opt-in consent contribute.",
  },
  {
    h: "What counts as an attempt",
    body: "An attempt is one person trying one specific action — a fill, or a transfer — for one drug, strength, and manufacturer, at one named pharmacy, on one date. Each attempt has a binary outcome. Browsing, a call to ask about stock, or any report we cannot tie to a specific counter and action does not count.",
  },
  {
    h: "What counts as a completion",
    body: "A completion is an attempt that ended with the medication in hand at that pharmacy. A transfer completion is a transfer that the destination pharmacy actually finished — not one that was merely requested.",
  },
  {
    h: "How pharmacies are ranked",
    body: "Pharmacies are ranked by recorded completion rate over a rolling 90-day window, for the exact drug, strength, and manufacturer you track — never a general “has stock.” Rank one is a probability across recorded attempts, not a phone-book entry.",
  },
  {
    h: "Confidence limits",
    body: "Every recommendation shows its sample size, always. Below a floor of recorded attempts we do not rank a pharmacy at all — we say so rather than guess. A rate from 47 attempts is not a rate from 4, and the count sits on the card so you can weigh it yourself. Small samples, new pharmacies, and rare strengths carry more uncertainty, and recent reports count for more than old ones.",
  },
  {
    h: "What we do not claim",
    body: "A high rate is a probability, not a promise. Stock moves hourly and we cannot see inside a pharmacy. We never claim a fill is assured, and nothing here is medical or legal advice.",
  },
];

const DEFS = [
  { term: "Attempt", body: "One person, one action, one pharmacy, one date, one binary outcome." },
  { term: "Completion", body: "An attempt that ended with the medication in hand." },
  { term: "Transfer completion", body: "A transfer the destination pharmacy actually finished." },
  { term: "Completion rate", body: "Completions divided by attempts, for a specific drug, strength, and maker." },
  { term: "Window", body: "The rolling period, currently 90 days, over which attempts are counted." },
  { term: "Sample size", body: "The number of recorded attempts behind a figure. Shown on every result." },
];

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Methodology
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            How the map is built, in enough detail to trust it — and to cite it.
            Every figure on this site follows the rules below.
          </p>
        </div>

        <div className="mt-10 max-w-measure space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h} className="border-t border-line pt-6">
              <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
              <p className="mt-2 text-lg leading-relaxed text-ink-soft">{s.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">Definitions</h2>
          <dl className="mt-4 divide-y divide-line border-t border-line">
            {DEFS.map((d) => (
              <div key={d.term} className="py-4">
                <dt className="text-lg font-medium text-ink">{d.term}</dt>
                <dd className="mt-1 text-base text-ink-soft">{d.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-10 max-w-measure text-base text-ink-soft">
          See the map this produces:{" "}
          <Link href="/pharmacies" className="link">the prediction engine</Link>, or
          how it holds together at{" "}
          <Link href="/the-map" className="link">how the map is built</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}
