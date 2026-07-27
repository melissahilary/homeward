import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OutcomeTap from "@/components/OutcomeTap";

export const metadata = {
  title: "Report an outcome",
  description:
    "One tap after your fill attempt: filled, out of stock, or wrongly refused. It builds the map of which counter actually works. Free, no account.",
};

export default function ReportPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Report an outcome
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            You just tried to fill or transfer somewhere. One tap records what
            happened. No one else holds this, it exists only because patients
            report back. It is what turns a phone book into a probability.
          </p>
        </div>
        <div className="mt-8 max-w-measure">
          <OutcomeTap />
        </div>
        <p className="mt-6 max-w-measure text-lg text-ink-soft">
          See how the reports become a ranked list:{" "}
          <Link href="/pharmacies" className="link">which counter actually works</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}
