import WorldHeader from "@/components/WorldHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HouseGate from "@/components/HouseGate";

export const metadata = {
  title: "The House",
  description:
    "You're in the house. Every order carries a key — walks at dawn, doors that open, the only visible brand is the calm.",
};

export default function HousePage() {
  return (
    <>
      <WorldHeader />
      <main>
        {/* Hero */}
        <section className="flex min-h-[80vh] items-center justify-center bg-charcoal px-6 pt-28 text-center text-warmwhite">
          <Reveal>
            <p className="eyebrow eyebrow-camel mb-8">Membership</p>
            <h1 className="font-serif text-5xl font-light leading-display md:text-7xl lg:text-8xl">
              You&rsquo;re in the house.
            </h1>
            <p className="mx-auto mt-8 max-w-lg font-serif text-xl leading-body text-steel">
              Not a loyalty scheme. A key. Every order opens a door, and behind it
              the walks, the letter, and the quiet the brand is really made of.
            </p>
          </Reveal>
        </section>

        <HouseGate />
      </main>
      <Footer />
    </>
  );
}
