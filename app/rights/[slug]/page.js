import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RIGHTS_LONG } from "@/lib/site";

export function generateStaticParams() {
  return RIGHTS_LONG.items.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }) {
  const r = RIGHTS_LONG.items.find((x) => x.slug === params.slug);
  if (!r) return { title: "Not found" };
  return { title: r.name, description: r.plain.slice(0, 155) };
}

export default function RightPage({ params }) {
  const right = RIGHTS_LONG.items.find((x) => x.slug === params.slug);
  if (!right) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <Link href="/rights" className="link mb-8 inline-block text-base text-ink-soft">
          All three rights
        </Link>
        <div className="max-w-measure">
          <p className="font-mono text-sm text-focus">{right.cite}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {right.name}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-ink">{right.plain}</p>
          <p className="mt-6 text-lg text-ink-soft">
            <span className="font-medium text-ink">Why it matters. </span>
            {right.why}
          </p>
          <Link href="/tools/message" className="btn mt-8">
            Generate the message
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
