import Image from "next/image";
import WorldHeader from "@/components/WorldHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SignUpForm from "@/components/SignUpForm";

export const metadata = {
  title: "The Turndown",
  description:
    "A Sunday-evening letter from the wellness house for dogs. One essay, one protocol, one image.",
};

export default function JournalPage() {
  return (
    <>
      <WorldHeader />
      <main className="pt-28 md:pt-32">
        {/* Masthead */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <Reveal>
            <p className="caps text-[0.7rem] text-camel">The Turndown</p>
            <h1 className="mt-6 font-serif text-4xl font-light italic leading-display text-ink md:text-5xl">
              A Sunday-evening letter from the wellness house for dogs.
            </h1>
            <p className="caps mt-8 text-[0.58rem] text-soft">
              Issue No. 07 · The Decompression
            </p>
          </Reveal>
        </section>

        {/* Essay */}
        <article className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="eyebrow eyebrow-camel mb-4">The Essay</p>
            <h2 className="font-serif text-4xl font-light leading-display text-ink md:text-5xl">
              The dog park is over.
            </h2>
          </Reveal>
          <Reveal className="mt-8 space-y-6">
            <p className="font-serif text-xl leading-body text-ink/90">
              For a decade we were told the dog park was the answer. A patch of
              churned grass, a gate that never quite latched, and inside it every
              temperament at once — the bully, the bolter, the one whose owner is
              on the phone. We called it socialisation. It was rarely that.
            </p>
            <p className="font-serif text-xl leading-body text-ink/90">
              A dog does not need forty strangers. They need a route they know, a
              nose given time to work, and a person at the other end of the lead
              who is not hurrying them home. Arousal is not the same as joy. A dog
              who comes back vibrating is not a fulfilled dog; they are a flooded
              one, and the flood takes two days to drain while we wonder why they
              cannot settle.
            </p>
            <p className="font-serif text-xl leading-body text-ink/90">
              The house has a different idea of a good walk. It is quieter than
              you expect and slower than feels productive. It ends with a dog who
              is tired in the body and calm in the mind — the two things the park
              so rarely delivered together.
            </p>
            <p className="font-serif text-xl leading-body text-ink/90">
              We are not against other dogs. We are against the crowd. Meet one
              friend on a long lead, on neutral ground, and let them decide the
              pace of the greeting. Then walk on. That is a social life. The rest
              was noise we mistook for enrichment.
            </p>
            <p className="font-serif text-xl leading-body text-ink/90">
              Close the gate behind you. There is a better walk waiting, and it
              begins with doing less.
            </p>
          </Reveal>
        </article>

        {/* Protocol */}
        <section className="mx-auto mt-20 max-w-2xl px-6">
          <Reveal className="border-t hairline pt-12">
            <p className="eyebrow eyebrow-camel mb-6">The Protocol</p>
            <h3 className="font-serif text-3xl font-light text-ink">
              The Decompression Walk, properly.
            </h3>
            <ol className="mt-8">
              {PROTOCOL.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-6 border-b hairline py-5 last:border-b-0"
                >
                  <span className="font-serif text-2xl font-light text-camel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-lg leading-body text-ink/85">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* In / Out ledger */}
        <section className="mx-auto mt-20 max-w-2xl px-6">
          <Reveal className="border-t hairline pt-12">
            <p className="eyebrow eyebrow-camel mb-8">The Ledger</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="caps mb-5 text-[0.62rem] text-ink">In</p>
                <ul className="space-y-3.5">
                  {LEDGER.map((pair) => (
                    <li
                      key={pair[0]}
                      className="border-b hairline pb-3.5 font-serif text-lg text-ink"
                    >
                      {pair[0]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="caps mb-5 text-[0.62rem] text-soft">Out</p>
                <ul className="space-y-3.5">
                  {LEDGER.map((pair) => (
                    <li
                      key={pair[1]}
                      className="border-b hairline pb-3.5 font-serif text-lg text-soft line-through decoration-[0.5px]"
                    >
                      {pair[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* The Consult */}
        <section className="mx-auto mt-20 max-w-2xl px-6">
          <Reveal className="border-t hairline pt-12">
            <p className="eyebrow eyebrow-camel mb-6">The Consult</p>
            <p className="font-serif text-xl italic leading-body text-ink">
              &ldquo;My dog is calm at home but frantic the moment the lead comes
              out. Where do I start?&rdquo;
            </p>
            <p className="mt-6 font-serif text-lg leading-body text-ink/85">
              Start before the lead. The lead has become a starting gun — it
              predicts the flood, so the arousal begins at the sight of it. For a
              week, pick it up and put it down again with no walk attached. Let it
              stop meaning anything. Then clip it on and stand still by the door
              for a full minute before you open it. You are teaching a pause into
              the one place there wasn&rsquo;t one. The walk can wait sixty seconds.
              It will be a better walk for the wait.
            </p>
            <p className="caps mt-6 text-[0.58rem] text-soft">
              — Dr. E. Vance, veterinary behaviourist, in residence
            </p>
          </Reveal>
        </section>

        {/* Closing image */}
        <section className="relative mt-24 h-[60vh] min-h-[420px] w-full overflow-hidden bg-charcoal">
          <Image
            src="/images/cooling_slab__dog_lifestyle_shot_.png"
            alt="A dog asleep on The Slab as the evening light falls through the shoji"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black/25 pb-16">
            <p className="font-serif text-2xl font-light italic text-warmwhite">
              Turn down the lights. — H.
            </p>
          </div>
        </section>

        {/* Subscribe band */}
        <section className="bg-ivory-deep py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal className="mb-14 text-center">
              <p className="eyebrow eyebrow-camel mb-4">Subscribe</p>
              <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
                The letter, and the house behind it.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Reveal className="flex flex-col justify-between bg-ivory p-10">
                <div>
                  <p className="caps text-[0.6rem] text-soft">The Turndown</p>
                  <p className="mt-4 font-serif text-3xl font-light text-ink">Free</p>
                  <p className="mt-4 max-w-sm font-serif text-lg leading-body text-soft">
                    The Sunday letter, delivered. One essay, one protocol, one
                    image, each week.
                  </p>
                </div>
                <div className="mt-10">
                  <SignUpForm placeholder="Email address" button="Subscribe" />
                </div>
              </Reveal>

              <Reveal
                style={{ transitionDelay: "120ms" }}
                className="flex flex-col justify-between bg-charcoal p-10 text-warmwhite"
              >
                <div>
                  <p className="caps text-[0.6rem] text-steel">The House</p>
                  <p className="mt-4 font-serif text-3xl font-light">
                    $7 <span className="text-xl text-steel">/ month</span>
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {[
                      "The full archive",
                      "The Consult — ask the behaviourist",
                      "Seasonal issues, sent early",
                      "The members' thread",
                    ].map((f) => (
                      <li
                        key={f}
                        className="border-b hairline-light pb-2.5 font-serif text-lg text-warmwhite/85"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <SignUpForm
                    variant="dark"
                    placeholder="Email address"
                    button="Join the House"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const PROTOCOL = [
  "Choose a route they already know. Novelty is stimulation; familiarity is where the mind can rest.",
  "Use a long line, five metres, not a retractable. Let the lead go slack and keep it that way.",
  "Walk to their nose, not your watch. When they stop to sniff, you stop. The sniffing is the walk.",
  "Say almost nothing. No stream of cues, no cheerful narration. Let the quiet do the settling.",
  "End before they are tired of it. Home while it is still good, so the good is what they remember.",
];

const LEDGER = [
  ["Sniffari walks", "Dog parks"],
  ["Food toppers", "Retractable leads"],
  ["Cooperative care", '"He’s fine"'],
  ["Doing nothing together", "Constant enrichment"],
  ["Long lines", "Ball launchers"],
  ["The evening turndown", "The late-night scroll for advice"],
];
