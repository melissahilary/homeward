import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

// Shop tile: image fills a pale tile, thin "+" bottom-right, serif name,
// italic descriptor, serif price. Hover deepens the tile and slow-zooms.
export default function ProductTile({ product }) {
  return (
    <Reveal>
      <Link href={`/shop/${product.slug}`} className="group block">
        <div className="slow-zoom relative aspect-[4/5] overflow-hidden bg-tile transition-colors duration-700 ease-house group-hover:bg-tile-hover">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.alt || product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-charcoal">
              <span className="wordmark text-[0.62rem] text-warmwhite/80">
                {product.name}
              </span>
            </div>
          )}
          <span
            className="absolute bottom-4 right-4 font-serif text-2xl leading-none text-ink/70 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          >
            +
          </span>
        </div>
        <div className="pt-4">
          <h3 className="font-serif text-xl font-light text-ink">{product.name}</h3>
          <p className="mt-0.5 font-serif text-base italic text-soft">
            {product.descriptor}
          </p>
          <p className="mt-1.5 font-serif text-lg text-ink">{product.price}</p>
        </div>
      </Link>
    </Reveal>
  );
}
