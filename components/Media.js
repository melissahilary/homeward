import Image from "next/image";

// next/image in a fill container. The container carries a tonal ground
// (#EDE8DB tile or charcoal) so a not-yet-placed render reads as a
// deliberate Aman-style pause panel rather than a broken image.
export default function Media({
  src,
  alt,
  className = "",
  imgClassName = "",
  ground = "tile",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  zoom = "hover",
}) {
  const groundClass =
    ground === "charcoal"
      ? "bg-charcoal"
      : ground === "ivory"
      ? "bg-ivory-deep"
      : "bg-tile";

  const zoomClass = zoom === "hover" ? "slow-zoom" : zoom === "hero" ? "hero-zoom" : "";

  return (
    <div className={`relative overflow-hidden ${groundClass} ${zoomClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
