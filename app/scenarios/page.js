import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SCENARIOS } from "@/lib/scenarios";

export const metadata = {
  title: "What to do when the refill goes wrong",
  description:
    "Out of stock, sent to the wrong pharmacy, refused a transfer, traveling. The procedure and rights questions, answered first, no scrolling.",
};

export default function ScenariosPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            When the refill goes wrong
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            The exact questions people ask at the counter, answered in the first
            sentence. Not stock-finding, which changes hourly. The rights and the
            procedure, which do not.
          </p>
        </div>
        <ul className="mt-10 space-y-4">
          {SCENARIOS.map((s) => (
            <li key={s.slug}>
              <Link href={`/scenarios/${s.slug}`} className="block max-w-3xl rounded-xl border border-line bg-white p-5 hover:border-ink-faint">
                <h2 className="text-xl font-semibold text-ink">{s.h1}</h2>
                <p className="mt-2 text-base text-ink-soft">{s.short}</p>
                <span className="link mt-3 inline-block text-base">Read the answer</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
