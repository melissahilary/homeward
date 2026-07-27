import Link from "next/link";

// The research is blunt: in health DTC, the gap between sites that convert and
// those that do not is a first-scroll trust stack presented with editorial
// confidence. Our trust currency is not clinician badges (we have none by
// rule). It is neutrality and evidence. So we lead with that, in numbers.
const SIGNALS = [
  { stat: "$99 / year", body: "Our only revenue. Nothing from pharmacies, PBMs, or makers." },
  { stat: "Cited", body: "Every right and figure carries its source and its sample size." },
  { stat: "Your tap", body: "Nothing sends without it. We hold no login to anything of yours." },
  { stat: "Cash only", body: "No insurance, no claims, no clinical relationship." },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {SIGNALS.map((s) => (
            <div key={s.stat}>
              <p className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {s.stat}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          <Link href="/our-rules" className="link text-base">Our Rules, in full</Link>
          <Link href="/methodology" className="link text-base">How we measure</Link>
        </div>
      </div>
    </section>
  );
}
