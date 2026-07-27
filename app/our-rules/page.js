import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Rules",
  description:
    "You pay us $99 a year. That is our only revenue. The sources, the offers we turn down, the five rules, why they exist, and how to hold us to them.",
};

const SOURCES = [
  { label: "Your subscription", value: "100%" },
  { label: "Pharmacies", value: "$0" },
  { label: "PBMs", value: "$0" },
  { label: "Drug manufacturers", value: "$0" },
  { label: "Insurers", value: "$0" },
  { label: "Advertising", value: "$0" },
  { label: "Data sales", value: "$0" },
];

const RULES = [
  "We never touch your prescription.",
  "We take no money from pharmacies, drug companies, or insurers.",
  "We employ no doctors and pay no referral fees.",
  "We bill no insurance.",
  "Nothing sends without your tap.",
];

export default function OurRulesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <h1 className="max-w-measure text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
          Our Rules
        </h1>

        {/* One — the direct answer. */}
        <section className="mt-10 max-w-measure">
          <p className="text-2xl font-semibold text-ink md:text-3xl">
            You pay us $99 a year. That is our only revenue.
          </p>
          <p className="mt-4 text-lg text-ink-soft">
            We have no revenue yet. This is a commitment, not a report — here is
            what we will and will not accept.
          </p>
          <dl className="mt-6 divide-y divide-line rounded-xl border border-line bg-white">
            {SOURCES.map((s) => (
              <div key={s.label} className="flex items-center justify-between px-5 py-3.5">
                <dt className="text-base text-ink">{s.label}</dt>
                <dd className={`font-mono text-base ${s.value === "$0" ? "text-ink-soft" : "font-semibold text-stock"}`}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Two — what we turned down. */}
        <section className="mt-14 max-w-measure border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-ink">What we turned down</h2>
          <p className="mt-3 text-lg text-ink-soft">
            When someone on the supply side offers us money, we log it here —
            dated, with the amount and who made it. The log is empty today. The
            first offer we decline will appear below.
          </p>
          <div className="mt-5 rounded-xl border border-dashed border-line p-5">
            <p className="font-mono text-sm uppercase tracking-wide text-ink-faint">
              Example of an entry
            </p>
            <p className="mt-2 text-lg text-ink">
              March 2027 — a regional pharmacy group offered $4,000 a month for
              preferred placement in search results. Declined.
            </p>
          </div>
          <p className="mt-4 text-base text-ink-faint">
            A company that already takes supply-side money cannot start a log
            like this. That is the point of it.
          </p>
        </section>

        {/* Three — the five rules. */}
        <section className="mt-14 max-w-measure border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-ink">The five rules</h2>
          <ul className="mt-5 space-y-4">
            {RULES.map((r) => (
              <li key={r} className="flex items-baseline gap-4 border-b border-line pb-4 text-xl text-ink">
                <span className="h-2 w-2 shrink-0 translate-y-[-0.15em] rounded-full bg-stock" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Four — why. */}
        <section className="mt-14 max-w-measure border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-ink">Why</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            If a pharmacy paid us, our recommendation would be an advertisement.
            The only reason to trust which pharmacy we send you to is that we have
            no reason to send you anywhere but the one most likely to work.
          </p>
        </section>

        {/* Five — hold us to it. */}
        <section className="mt-14 max-w-measure border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-ink">Hold us to it</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A rule with no enforcement path is marketing. If you believe we have
            broken one of these, tell us at{" "}
            <a href="mailto:rules@daykeep.app" className="link">rules@daykeep.app</a>{" "}
            or through{" "}
            <Link href="/contact" className="link">contact</Link>. We look into
            every report, and if we broke a rule we say so publicly and fix it.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
