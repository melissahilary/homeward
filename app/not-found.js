import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

// A 404 that routes to the twelve steps, not a dead end.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            That page is not here. Here is the loop instead.
          </h1>
          <p className="mt-3 text-lg text-ink-soft">
            The link is broken or the page moved. Wherever you are in the cycle,
            the twelve steps still apply.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="btn">
              Back to start
            </Link>
            <Link href="/messages" className="btn btn-secondary">
              The message library
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Timeline />
        </div>
      </main>
      <Footer />
    </>
  );
}
