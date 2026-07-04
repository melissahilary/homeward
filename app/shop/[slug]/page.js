import Link from "next/link";
import { notFound } from "next/navigation";
import ShopHeader from "@/components/ShopHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import ProductTile from "@/components/ProductTile";
import AddToBag from "@/components/AddToBag";
import { ALL_PRODUCTS, getProduct, completesTheRitual } from "@/lib/products";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return { title: "Not found" };
  return {
    title: p.name,
    description: `${p.descriptor} ${p.body?.[0] || ""}`.trim(),
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const crossSell = completesTheRitual(product.slug);
  const accordions = [
    { title: "The ritual", body: product.ritual },
    { title: "What's inside · What's not", body: product.inside },
    { title: "Care & safety", body: product.care },
  ].filter((a) => a.body);

  return (
    <>
      <ShopHeader />
      <main>
        <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-10 md:py-20">
          <Link href="/shop" className="link-underline mb-10 inline-block text-soft">
            Back to the collection
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Sticky gallery */}
            <div className="lg:sticky lg:top-40 lg:self-start">
              {product.image ? (
                <Media
                  src={product.image}
                  alt={product.alt || product.name}
                  className="aspect-[4/5]"
                  priority
                  zoom="none"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="flex aspect-[4/5] flex-col items-center justify-center bg-charcoal">
                  <span className="wordmark text-[0.7rem] text-warmwhite">Homeward</span>
                  <span className="caps mt-3 text-[0.58rem] text-steel">
                    {product.name}
                  </span>
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="lg:py-6">
              <Reveal>
                <h1 className="font-serif text-5xl font-light leading-display text-ink md:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-3 font-serif text-xl italic text-soft">
                  {product.descriptor}
                </p>
                <p className="mt-5 font-serif text-2xl text-ink">{product.price}</p>

                <div className="mt-9 max-w-prose space-y-5">
                  {product.body?.map((para, i) => (
                    <p key={i} className="font-serif text-lg leading-body text-ink/85">
                      {para}
                    </p>
                  ))}
                </div>

                {product.contents && (
                  <div className="mt-8 border-t hairline pt-6">
                    <p className="caps mb-4 text-[0.6rem] text-soft">
                      {product.tonal ? "The ritual gathers" : "Products included"}
                    </p>
                    <ul className="space-y-2.5">
                      {product.contents.map((c) => (
                        <li
                          key={c}
                          className="border-b hairline pb-2.5 font-serif text-lg text-ink"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-9 max-w-sm">
                  <AddToBag label="Add to Bag" price={product.price} />
                </div>

                {/* Accordions */}
                <div className="mt-12 border-t hairline">
                  {accordions.map((a) => (
                    <details key={a.title} className="group border-b hairline">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-5">
                        <span className="caps text-[0.68rem] text-ink">{a.title}</span>
                        <span className="font-serif text-2xl leading-none text-soft transition-transform duration-500 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="max-w-prose pb-6 font-serif text-lg leading-body text-soft">
                        {a.body}
                      </p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Completes the ritual */}
        {crossSell.length > 0 && (
          <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
            <Reveal className="mb-12 text-center">
              <p className="eyebrow eyebrow-camel mb-3">Completes the ritual</p>
              <h2 className="font-serif text-3xl font-light text-ink md:text-4xl">
                Kept alongside.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
              {crossSell.map((p) => (
                <ProductTile key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
