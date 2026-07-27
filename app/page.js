import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyBlock from "@/components/CopyBlock";
import Choreography from "@/components/Choreography";
import TrustStrip from "@/components/TrustStrip";
import StickyCTA from "@/components/StickyCTA";
import { SignupButton } from "@/components/SignupDrawer";
import PhoneWalkthrough from "@/components/PhoneWalkthrough";
import Comparison from "@/components/Comparison";
import {
  TEMPLATE,
  RIGHTS,
  NOT_FOR,
  NEVER_DO,
  COMPARISON,
  FAQ,
  PRICING,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* The choreography, the whole product in five frames, and the one
            place the motion budget is spent. */}
        <div id="loop">
          <Choreography />
        </div>

        {/* Trust stack, editorial confidence, our currency is neutrality. */}
        <TrustStrip />

        {/* The free artifact, immediately. No email required. */}
        <Section id="template">
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
              The full message library, transfer, partial fill, stock inquiry
            </Link>
          </div>
        </Section>

        {/* Section 4: the message walkthrough. The payoff, right after the
            problem, while recognition is still active. */}
        <PhoneWalkthrough />

        {/* The three rights. */}
        <Section id="rights" className="border-t border-line">
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

        {/* What we never do, five standards, stated as standards. */}
        <Section id="never-do" className="border-t border-line bg-panel">
          <SectionHead title={NEVER_DO.title} />
          <ul className="mt-8 max-w-measure space-y-4">
            {NEVER_DO.items.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-line pb-4 text-xl text-ink">
                <span className="h-2 w-2 shrink-0 translate-y-[-0.15em] rounded-full bg-stock" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/our-rules" className="link text-lg">
              Our Rules, the revenue sources and the offers we turn down
            </Link>
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

        {/* The transfer map, the asset a competitor cannot copy. */}
        <Section id="map" className="border-t border-line">
          <SectionHead
            title="Which counter actually works"
            lede="Not a list of pharmacies. A probability, ranked by recorded completion, with the sample size on every result."
          />
          <div className="mt-6">
            <Link href="/pharmacies" className="btn text-lg">See the prediction map</Link>
          </div>
        </Section>

        {/* Comparison, after the diagram, before pricing. One table, one place. */}
        <Section id="comparison" className="border-t border-line bg-panel">
          <SectionHead title={COMPARISON.title} />
          <div className="mt-8">
            <Comparison />
          </div>
        </Section>

        {/* Pricing, then FAQ. Yearly first and dominant; the gap makes it
            obviously correct without arguing for it. No badges, no shaming. */}
        <Section id="pricing">
          <SectionHead title="The price" />
          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Yearly, visually dominant. */}
            <div className="rounded-xl border-2 border-ink bg-white p-7">
              <div className="flex items-baseline gap-2">
                <span className="text-[2.75rem] font-semibold leading-none text-ink">
                  {PRICING.year}
                </span>
                <span className="text-xl text-ink-soft">a year</span>
              </div>
              <p className="mt-3 text-base text-ink-soft">
                Works out to {PRICING.perMonth} a month.
              </p>
              <p className="mt-3 text-base text-ink-soft">
                We email you 30 days and 7 days before renewal. Thirty-day
                refund, one click.
              </p>
              <SignupButton className="btn btn-block mt-6 text-lg">Get started</SignupButton>
            </div>
            {/* Monthly, plain, no shaming, no badge. */}
            <div className="rounded-xl border border-line bg-white p-7">
              <div className="flex items-baseline gap-2">
                <span className="text-[2.75rem] font-semibold leading-none text-ink">
                  {PRICING.monthly}
                </span>
                <span className="text-xl text-ink-soft">a month</span>
              </div>
              <p className="mt-3 text-base text-ink-soft">
                Cancel anytime, one click.
              </p>
              <SignupButton className="btn btn-secondary btn-block mt-6 text-lg">Start monthly</SignupButton>
            </div>
          </div>
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
      <StickyCTA />
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
