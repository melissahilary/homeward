import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DRUGS } from "@/lib/drugs";

export const metadata = {
  title: "By medication",
  description:
    "Prescription stimulants have no refills. Pages by molecule and brand — amphetamine, lisdexamfetamine, methylphenidate, and more — with what to do when your pharmacy is out.",
};

export default function DrugsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            By medication
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Prescription stimulants have no refills, whatever the molecule or the
            brand. Find yours for what to do when the counter is out.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DRUGS.map((d) => (
            <li key={d.slug}>
              <Link href={`/drugs/${d.slug}`} className="block rounded-xl border border-line bg-white p-5 hover:border-ink-faint">
                <p className="text-xl font-semibold text-ink">{d.molecule}</p>
                <p className="mt-1 text-base text-ink-soft">
                  Also sold as {d.brands.join(", ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
