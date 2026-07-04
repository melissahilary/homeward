import Link from "next/link";
import Image from "next/image";
import WorldHeader from "@/components/WorldHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";

export default function HomePage() {
  return (
    <>
      <WorldHeader overHero />
      <main>
        {/* 1 — HERO */}
        <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-charcoal">
          <div className="hero-zoom absolute inset-0">
            <Image
              src="/images/cooling_slab__dog_lifestyle_shot_.png"
              alt="A dog asleep on The Slab in a shoji-lit room, the garden beyond"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
          <div className="absolute inset-x-0 bottom-[16%] flex flex-col items-center px-6 text-center text-warmwhite">
            <p className="eyebrow mb-6 text-warmwhite/85">The Wellness House for Dogs</p>
            <h1 className="font-serif text-5xl font-light leading-display drop-shadow-sm md:text-7xl lg:text-8xl">
              A day of one&rsquo;s own.
            </h1>
            <Link href="/shop" className="link-underline mt-8 text-warmwhite">
              Enter the house
            </Link>
          </div>
        </section>

        {/* 2 — ASYMMETRIC TWO-UP */}
        <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <Link href="/shop" className="group block">
                <Media
                  src="/images/product_moodboard.png"
                  alt="The collection, laid out on stone — rituals, instruments and formulas"
                  className="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="pt-7">
                  <p className="eyebrow eyebrow-camel mb-3">The Collection</p>
                  <h2 className="max-w-xl font-serif text-3xl font-light leading-display text-ink md:text-4xl">
                    Rituals, instruments and formulas for the hours of their day.
                  </h2>
                  <p className="mt-4 max-w-lg font-serif text-lg leading-body text-soft">
                    Everything the day asks for, and nothing it doesn&rsquo;t. Made
                    for the way a dog moves through a house.
                  </p>
                  <span className="link-underline mt-6 text-ink">Discover more</span>
                </div>
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-2" style={{ transitionDelay: "120ms" }}>
              <Link href="/shop/shield" className="group block">
                <Media
                  src="/images/spf__dog_lifestyle_shot_.png"
                  alt="A dog on a sunlit terrace, Shield misting over the coat"
                  className="aspect-[4/3] lg:aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="pt-7">
                  <p className="eyebrow eyebrow-camel mb-3">New &amp; Noteworthy</p>
                  <h2 className="font-serif text-3xl font-light leading-display text-ink md:text-4xl">
                    Shield — the sun, answered.
                  </h2>
                  <p className="mt-4 max-w-sm font-serif text-lg leading-body text-soft">
                    A light UV mist for the nose and coat. Zinc-free, and safe if
                    they lick.
                  </p>
                  <span className="link-underline mt-6 text-ink">Discover more</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 3 — THE RITUALS OF THE SEASON */}
        <section className="bg-ivory-deep py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
              <Reveal className="lg:col-span-1">
                <p className="eyebrow eyebrow-camel mb-4">The Season</p>
                <h2 className="font-serif text-4xl font-light leading-display text-ink">
                  The rituals of the season.
                </h2>
                <p className="mt-5 max-w-xs font-serif text-lg leading-body text-soft">
                  Across the house, the practices of the season — kept quietly, kept
                  daily.
                </p>
              </Reveal>

              <div className="lg:col-span-3">
                <div className="scroll-row -mx-5 flex gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
                  {SEASON.map((card, i) => (
                    <Reveal
                      key={card.title}
                      className="w-[78vw] shrink-0 sm:w-[52vw] lg:w-[calc((100%-3rem)/3)]"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <Link href={card.href} className="group block">
                        <Media
                          src={card.image}
                          alt={card.alt}
                          className="aspect-[3/4]"
                          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 52vw, 30vw"
                        />
                        <div className="pt-5">
                          <p className="eyebrow mb-2">{card.eyebrow}</p>
                          <h3 className="font-serif text-2xl font-light text-ink">
                            {card.title}
                          </h3>
                          <span className="link-underline mt-4 text-ink">
                            Discover more
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 — DARK INTERLUDE */}
        <section className="bg-charcoal py-32 text-center text-warmwhite md:py-44">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="font-serif text-3xl font-light italic leading-[1.4] md:text-4xl lg:text-[2.75rem]">
                &ldquo;They cannot read a label. So the label answers to us — and
                everything harmful stays outside the house.&rdquo;
              </p>
              <p className="caps mt-10 text-[0.62rem] text-steel">
                The House Standard · No Essential Oils · Xylitol-Free · Zinc-Free
              </p>
            </Reveal>
          </div>
        </section>

        {/* 5 — THREE-UP WORLD ROW */}
        <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Membership — tonal charcoal */}
            <Reveal>
              <div className="flex aspect-[4/3] flex-col items-center justify-center bg-charcoal px-8 text-center">
                <span className="wordmark text-[0.7rem] text-warmwhite">Homeward</span>
                <span className="caps mt-4 text-[0.58rem] text-steel">The House</span>
              </div>
              <div className="pt-6">
                <p className="eyebrow eyebrow-camel mb-2">Membership</p>
                <h3 className="font-serif text-2xl font-light text-ink">
                  You&rsquo;re in the house.
                </h3>
                <p className="mt-3 max-w-sm font-serif text-lg leading-body text-soft">
                  Every order carries a key. Walks at dawn, doors that open.
                </p>
                <Link href="/house" className="link-underline mt-5 text-ink">
                  Learn more
                </Link>
              </div>
            </Reveal>

            {/* Journal */}
            <Reveal style={{ transitionDelay: "100ms" }}>
              <Media
                src="/images/silk_beds__dog_lifestyle_shot_.png"
                alt="A spaniel asleep on Sleep Silk beside a travertine bench"
                className="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="pt-6">
                <p className="eyebrow eyebrow-camel mb-2">The Journal</p>
                <h3 className="font-serif text-2xl font-light text-ink">The Turndown</h3>
                <p className="mt-3 max-w-sm font-serif text-lg leading-body text-soft">
                  A Sunday-evening letter. One essay, one protocol, one image.
                </p>
                <Link href="/journal" className="link-underline mt-5 text-ink">
                  Read &amp; subscribe
                </Link>
              </div>
            </Reveal>

            {/* Recovery Kit */}
            <Reveal style={{ transitionDelay: "200ms" }}>
              <Media
                src="/images/recovery_kit.png"
                alt="The Recovery Kit — the charcoal bag with its contents laid out on stone"
                className="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="pt-6">
                <p className="eyebrow eyebrow-camel mb-2">For the day they come home</p>
                <h3 className="font-serif text-2xl font-light text-ink">
                  The Recovery Kit
                </h3>
                <p className="mt-3 max-w-sm font-serif text-lg leading-body text-soft">
                  Everything the first week asks for, gathered into one charcoal bag.
                </p>
                <Link href="/shop/the-recovery-kit" className="link-underline mt-5 text-ink">
                  Shop now
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const SEASON = [
  {
    eyebrow: "After the Trail",
    title: "The Soak",
    href: "/shop/soak",
    image: "/images/bath_salts.png",
    alt: "The Soak — smoked glass jar of mineral salts on travertine",
  },
  {
    eyebrow: "The Evening Turndown",
    title: "Rest, then Sleep Silk",
    href: "/shop/rest",
    image: "/images/bedtime_spray.png",
    alt: "Rest — an amber mist bottle beside a card reading The Evening Turndown",
  },
  {
    eyebrow: "The Water",
    title: "Still & The Well",
    href: "/shop/still",
    image: "/images/slow_feeder__dog_lifestyle_shot_.png",
    alt: "A dog drinking from Still, the slow feeder, on a stone floor",
  },
];
