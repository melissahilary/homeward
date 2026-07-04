import Link from "next/link";
import WorldHeader from "@/components/WorldHeader";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <WorldHeader />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
        <p className="eyebrow eyebrow-camel mb-6">Off the path</p>
        <h1 className="font-serif text-5xl font-light text-ink md:text-6xl">
          This room is empty.
        </h1>
        <p className="mt-5 max-w-sm font-serif text-lg leading-body text-soft">
          The page you asked for is not part of the house. Let us walk you back.
        </p>
        <Link href="/" className="link-underline mt-8 text-ink">
          Return home
        </Link>
      </main>
      <Footer />
    </>
  );
}
