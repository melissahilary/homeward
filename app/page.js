import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyBlock from "@/components/CopyBlock";
import Timeline from "@/components/Timeline";
import {
  HERO,
  TEMPLATE,
  RIGHTS,
  TIMELINE,
  NOT_FOR,
  CHARTER,
  FAQ,
  PRICING,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Above the fold — the permanent problem, the who-it's-for line, one button. */}
        <section className="mx-auto max-w-content px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-28">
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink md:text-[3.25rem] md:leading-[1.05]">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-measure text-xl text-ink-soft">
            {HERO.subhead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/signup" className="btn text-lg">
              {HERO.cta}
            </Link>
            <Link href="/diagram" className="link text-lg">
              See the loop, drawn
            </Link>
          </div>
        </section>

        {/* The free artifact, immediately. No email required. */}
        <Section id="template" className="border-t border-line bg-panel">
          <SectionHead
            eyebrow="Free, no account"
            title={TEMPLATE.title}
            lede={TEMPLATE.intro}
          />
          <div className="mt-8 max-w-3xl">
            <CopyBlock text={TEMPLATE.body} />
            <p className="mt-3 font-mono text-sm text-ink-faint">
              Basis: {TEMPLATE.citation}
            </p>
            <Link href="/messages" className="link mt-5 inline-block text-lg">
              The full message library — transfer, partial fill, stock inquiry
            </Link>
          </div>
        </Section>

        {/* The three rights. */}
        <Section id="rights">
          <SectionHead title={RIGHTS.title} lede={RIGHTS.intro} />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {RIGHTS.items.map((r) => (
              <div key={r.name} className="rounded-xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold text-ink">{r.name}</h3>
                <p className="mt-2 text-base text-ink-soft">{r.body}</p>
                <p className="mt-4 font-mono text-sm text-focus">{r.cite}</p>
              </div>
            ))}
          </div>
          <Link href="/rights" className="link mt-8 inline-block text-lg">
            Read the three rights in full
          </Link>
        </Section>

        {/* The twelve steps. */}
        <Section id="loop" className="border-t border-line bg-panel">
          <SectionHead title={TIMELINE.title} lede={TIMELINE.intro} />
          <div className="mt-8">
            <Timeline />
          </div>
        </Section>

        {/* Who this is not for. */}
        <Section id="not-for">
          <SectionHead title={NOT_FOR.title} />
          <ul className="mt-6 max-w-measure space-y-3">
            {NOT_FOR.items.map((item) => (
              <li key={item} className="flex gap-3 text-lg text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-measure text-lg text-ink-soft">
            Out of medication right now?{" "}
            <Link href="/safety" className="link">
              Here is the safe path.
            </Link>
          </p>
        </Section>

        {/* What we never do — summary + link to the full charter. */}
        <Section id="charter-summary" className="border-t border-line bg-panel">
          <SectionHead title={CHARTER.title} lede={CHARTER.intro} />
          <ol className="mt-6 max-w-3xl divide-y divide-line rounded-xl border border-line bg-white">
            {CHARTER.rules.map((rule) => (
              <li key={rule.n} className="flex gap-4 px-5 py-4">
                <span className="font-mono text-base text-ink-faint">
                  {rule.n}
                </span>
                <p className="text-lg text-ink">{rule.title}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Link href="/charter" className="link text-lg">
              Read the full charter
            </Link>
          </div>
        </Section>

        {/* Pricing, then FAQ. */}
        <Section id="pricing">
          <SectionHead
            title="One tier. Pay yearly or monthly."
            lede="Same product either way. Yearly is cheaper; monthly is here so an upfront charge never keeps anyone out."
          />
          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-ink bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
                Yearly · best value
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-ink">{PRICING.year}</span>
                <span className="text-lg text-ink-soft">/ year</span>
              </div>
              <p className="mt-1 text-base text-ink-soft">
                {PRICING.perMonth} a month, charged once.
              </p>
              <Link href="/signup" className="btn btn-block mt-5 text-lg">
                {HERO.cta}
              </Link>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
                Monthly
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-ink">{PRICING.monthly}</span>
                <span className="text-lg text-ink-soft">/ month</span>
              </div>
              <p className="mt-1 text-base text-ink-soft">Cancel any time, one click.</p>
              <Link href="/signup" className="btn btn-secondary btn-block mt-5 text-lg">
                Start monthly
              </Link>
            </div>
          </div>
          <ul className="mt-6 max-w-measure space-y-2.5 text-base text-ink">
            <li>We email you 30 days before renewal, and again 7 days before.</li>
            <li>{PRICING.refundDays}-day refund, one click in settings, no conversation.</li>
            <li>One product. No good-better-best.</li>
          </ul>
          <p className="mt-5 max-w-measure text-base text-ink-soft">
            One missed workday costs more than the year.
          </p>
        </Section>

        <Section id="faq" className="border-t border-line bg-panel">
          <SectionHead title={FAQ.title} />
          <div className="mt-6 max-w-3xl divide-y divide-line rounded-xl border border-line bg-white">
            {FAQ.items.map((item) => (
              <details key={item.q} className="group px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-ink">
                  {item.q}
                  <span
                    className="ml-4 font-mono text-xl text-ink-faint group-open:hidden"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span
                    className="ml-4 hidden font-mono text-xl text-ink-faint group-open:inline"
                    aria-hidden="true"
                  >
                    −
                  </span>
                </summary>
                <p className="max-w-measure pb-5 text-base text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        {children}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lede }) {
  return (
    <div className="max-w-measure">
      {eyebrow && (
        <p className="mb-2 font-mono text-sm uppercase tracking-wide text-ink-faint">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
        {title}
      </h2>
      {lede && <p className="mt-3 text-lg text-ink-soft">{lede}</p>}
    </div>
  );
}
