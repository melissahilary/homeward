import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[50vh] max-w-content flex-col justify-center px-5 py-20 md:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
          That page is not here.
        </h1>
        <p className="mt-3 max-w-measure text-lg text-ink-soft">
          The link is broken or the page moved. Head back and start again.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn">
            Back to start
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
