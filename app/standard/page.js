import WorldHeader from "@/components/WorldHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Standard",
  description:
    "The house standard. No essential oils. Xylitol-free. Zinc-free UV. Formulated for canine physiology.",
};

const PILLARS = [
  {
    title: "No Essential Oils",
    body: [
      "A dog&rsquo;s nose reads the world at a resolution ours cannot approach. What a person finds pleasant, a dog can find overwhelming — and some oils are toxic to them outright.",
      "So the house uses none. Our mists carry hydrosols and canine-safe humectants, never concentrated oils.",
    ],
  },
  {
    title: "Xylitol-Free",
    body: [
      "Xylitol is common in things made for people and dangerous in even small amounts to a dog. It has no place near them.",
      "Every formula that touches the mouth — the gels, the toppers, the minerals — is made without it, and labelled so you never have to wonder.",
    ],
  },
  {
    title: "Zinc-Free UV",
    body: [
      "Sun protection matters for a pale nose and a thin coat. But zinc oxide, swallowed by a grooming dog, can harm them.",
      "Shield protects with non-nano mineral filters and no zinc, formulated to be safe if they lick — because they will.",
    ],
  },
];

export default function StandardPage() {
  return (
    <>
      <WorldHeader />
      <main className="pt-28 md:pt-32">
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <Reveal>
            <p className="eyebrow eyebrow-camel mb-5">The House Standard</p>
            <h1 className="font-serif text-5xl font-light leading-display text-ink md:text-6xl">
              Nothing harmful added.
            </h1>
            <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-body text-soft">
              They cannot read a label. So the label answers to us.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-8 md:px-10">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`px-2 py-10 md:px-10 md:py-6 ${
                  i > 0 ? "border-t hairline md:border-l md:border-t-0" : ""
                }`}
              >
                <h2 className="font-serif text-2xl font-light text-ink">{p.title}</h2>
                <div className="mt-5 space-y-4">
                  {p.body.map((para, j) => (
                    <p
                      key={j}
                      className="font-serif text-lg leading-body text-soft"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-[1.5] text-ink md:text-3xl">
              A dog is not a small person. Their liver, their skin, their sense of
              smell — all of it asks for formulas built from their physiology
              outward, not ours scaled down. That is the whole of our work: to make
              the good thing, and to leave the harmful thing outside the door.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
