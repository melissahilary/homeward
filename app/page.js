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

        {/* Pricing, then FAQ. One number, one payment. The whole promise of
            the product, don't think about it for a year, is also the way you
            pay for it. No monthly drip, no badges, no shaming. */}
        <Section id="pricing">
          <SectionHead
            title="The price"
            lede="You pay once, up front, and you are set for the year. The same thing the product does for your refills, it does for your bill."
          />
          <div className="mt-8 max-w-xl">
            <div className="rounded-xl border-2 border-ink bg-white p-8">
              <div className="flex items-baseline gap-2">
                <span className="text-[3.25rem] font-semibold leading-none text-ink">
                  {PRICING.year}
                </span>
                <span className="text-xl text-ink-soft">for the year</span>
              </div>
              <p className="mt-4 text-lg text-ink">
                Paid one time. Not billed monthly, not billed again until you
                choose to renew.
              </p>

              {/* The money, marketed plainly. The cheap anchor and the pay-once
                  fact, side by side, so both land. */}
              <dl className="mt-6 space-y-3 border-t border-line pt-6 text-base">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-soft">What it works out to</dt>
                  <dd className="font-mono text-ink">{PRICING.perMonth} a month</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-soft">What you actually pay</dt>
                  <dd className="font-mono text-ink">{PRICING.year}, one time</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-soft">Times you get billed a year</dt>
                  <dd className="font-mono text-ink">Once</dd>
                </div>
              </dl>

              <p className="mt-6 text-base text-ink-soft">
                We email you 30 days and 7 days before it renews, so the charge
                never surprises you. Thirty-day refund, one click, no
                conversation.
              </p>
              <SignupButton className="btn btn-block mt-6 text-lg">Get started</SignupButton>
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
