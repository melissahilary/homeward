import Link from "next/link";
import ShopHeader from "@/components/ShopHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProductTile from "@/components/ProductTile";
import Media from "@/components/Media";
import AddToBag from "@/components/AddToBag";
import {
  RITUALS,
  INSTRUMENTS,
  FORMULAS,
  HOME,
  WATER,
  RECOVERY_KIT,
} from "@/lib/products";

export const metadata = {
  title: "The Collection",
  description:
    "Rituals, instruments, formulas, home, water and the Recovery Kit — the full house, in order.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <main>
        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <Reveal>
            <p className="eyebrow eyebrow-camel mb-5">The House</p>
            <h1 className="font-serif text-5xl font-light leading-display text-ink md:text-6xl">
              The Collection
            </h1>
            <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-body text-soft">
              For the hours of their day. Kept simple, kept safe, kept well.
            </p>
          </Reveal>
        </section>

        {/* RITUALS — bundles as tonal panels */}
        <CategorySection id="rituals" eyebrow="The Practices" title="Rituals">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {RITUALS.map((b, i) => (
              <Reveal key={b.slug} style={{ transitionDelay: `${i * 100}ms` }}>
                <Link href={`/shop/${b.slug}`} className="group block">
                  <div className="flex aspect-[4/5] flex-col justify-between bg-charcoal p-8 text-warmwhite transition-colors duration-700 group-hover:bg-[#2f2b24]">
                    <span className="caps text-[0.58rem] text-steel">The Ritual</span>
                    <div>
                      <h3 className="font-serif text-3xl font-light">{b.name}</h3>
                      <p className="mt-2 font-serif text-lg italic text-warmwhite/75">
                        {b.descriptor}
                      </p>
                      <p className="mt-5 font-serif text-xl">{b.price}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </CategorySection>

        {/* INSTRUMENTS */}
        <CategorySection id="instruments" eyebrow="Of the Hand" title="Instruments">
          <ProductGrid products={INSTRUMENTS} />
        </CategorySection>

        {/* FORMULAS */}
        <CategorySection id="formulas" eyebrow="Nothing Harmful Added" title="Formulas">
          <ProductGrid products={FORMULAS} />
        </CategorySection>

        {/* HOME */}
        <CategorySection id="home" eyebrow="The Quiet Objects" title="Home">
          <ProductGrid products={HOME} />
        </CategorySection>

        {/* WATER */}
        <CategorySection id="water" eyebrow="The Bowl & The Door" title="Water">
          <ProductGrid products={WATER} />
        </CategorySection>

        {/* THE RECOVERY KIT — editorial split */}
        <section id="kit" className="scroll-mt-28 bg-ivory-deep py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <Media
                  src={RECOVERY_KIT.image}
                  alt={RECOVERY_KIT.alt}
                  className="aspect-[4/5]"
                  ground="ivory"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>
              <Reveal style={{ transitionDelay: "120ms" }}>
                <p className="eyebrow eyebrow-camel mb-4">For the day they come home</p>
                <h2 className="font-serif text-4xl font-light leading-display text-ink md:text-5xl">
                  The Recovery Kit
                </h2>
                <p className="mt-5 max-w-lg font-serif text-lg leading-body text-soft">
                  {RECOVERY_KIT.body[1]}
                </p>
                <div className="mt-8 border-t hairline pt-6">
                  <p className="caps mb-4 text-[0.6rem] text-soft">Products included</p>
                  <ul className="space-y-2.5">
                    {RECOVERY_KIT.included.map((item) => (
                      <li
                        key={item}
                        className="border-b hairline pb-2.5 font-serif text-lg text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 max-w-sm">
                  <AddToBag
                    label="Add to Bag"
                    price={RECOVERY_KIT.price}
                    className="!bg-[#3b3a2c] hover:!bg-[#45432f]"
                  />
                  <Link
                    href="/shop/the-recovery-kit"
                    className="link-underline mt-6 text-ink"
                  >
                    Read the full account
                  </Link>
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

function CategorySection({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow eyebrow-camel mb-3">{eyebrow}</p>
          <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductTile key={p.slug} product={p} />
      ))}
    </div>
  );
}
