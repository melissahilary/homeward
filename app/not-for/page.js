import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NOT_FOR } from "@/lib/site";

export const metadata = {
  title: "Who this is not for",
  description:
    "The clearest trust signal we have: what we refuse to do. Not for a clinical assessment, not for finding a prescriber, not for medication without a script.",
};

export default function NotForPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {NOT_FOR.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            In a market where a product that takes anyone&rsquo;s money is a red
            flag, saying who we are not for is the strongest thing we can tell
            you.
          </p>
          <ul className="mt-8 space-y-3">
            {NOT_FOR.items.map((item) => (
              <li key={item} className="flex gap-3 text-lg text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-ink-soft">
            Out of medication right now?{" "}
            <Link href="/safety" className="link">Here is the safe path.</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
