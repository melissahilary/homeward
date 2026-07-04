import WorldHeader from "@/components/WorldHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import SignUpForm from "@/components/SignUpForm";

export const metadata = {
  title: "The Exhibition",
  description:
    "A Day of One's Own — an exhibition by HOMEWARD. New York, September 18–20, 2026.",
};

export default function ExhibitionPage() {
  return (
    <>
      <WorldHeader />
      <main className="pt-28 md:pt-32">
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <Reveal>
            <p className="caps text-[0.66rem] text-camel">
              New York — September 18–20, 2026
            </p>
            <h1 className="mt-8 font-serif text-4xl font-light leading-display text-ink md:text-6xl">
              A Day of One&rsquo;s Own — an exhibition by HOMEWARD.
            </h1>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-xl space-y-6">
            <p className="font-serif text-xl leading-body text-ink/90">
              For three days, a gallery becomes a house. Each room holds an hour of
              a dog&rsquo;s day — the waking, the walk, the water, the long
              afternoon on cool stone, the turndown. Nothing to buy in the rooms.
              Only the day, arranged.
            </p>
            <p className="font-serif text-xl leading-body text-ink/90">
              The doors open by key. Members first, then the waitlist. On the
              Sunday, the exhibition closes the way the house always does — with
              Silent Walk No. 1, at dawn, from the gallery door.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-10 flex max-w-md flex-col items-center">
            <p className="eyebrow mb-4">Request an invitation</p>
            <SignUpForm placeholder="Email address" button="RSVP" />
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 pb-24 md:px-10 md:pb-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal>
              <Media
                src="/images/product_moodboard.png"
                alt="The collection arranged on stone, as it appears in the exhibition"
                className="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal style={{ transitionDelay: "120ms" }}>
              <Media
                src="/images/spf__dog_lifestyle_shot_.png"
                alt="A dog on a sunlit terrace — the afternoon room of the exhibition"
                className="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
