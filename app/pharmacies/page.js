import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pharmacies from "@/components/Pharmacies";

export const metadata = {
  title: "The prediction engine",
  description:
    "Not a list of pharmacies — a probability. Ranked by recorded completion, with sample size shown on every result. Report to unlock.",
};

export default function PharmaciesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Which counter actually works
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Rank one is not &ldquo;has stock.&rdquo; It is &ldquo;89% completion
            across 47 recorded attempts in 90 days.&rdquo; A demo is below — real
            data is generated only by patients reporting real outcomes.
          </p>
        </div>
        <div className="mt-8">
          <Pharmacies />
        </div>
      </main>
      <Footer />
    </>
  );
}
