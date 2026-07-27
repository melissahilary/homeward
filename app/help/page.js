import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FAQ, SUPPORT } from "@/lib/site";

export const metadata = {
  title: "Help Center",
  description:
    "Self-service first: the free tools, the rights, the glossary, and answers to common questions. A real person within one business day.",
};

const LINKS = [
  { href: "/how-it-works", label: "How Daykeep works" },
  { href: "/tools", label: "The free tools" },
  { href: "/rights", label: "What your script allows" },
  { href: "/glossary", label: "Glossary of the paperwork" },
  { href: "/states", label: "Rules by state" },
  { href: "/safety", label: "If you cannot get your medication" },
];

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Help Center
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            {SUPPORT.intro} {SUPPORT.responseTime}
          </p>
        </div>

        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg border border-line bg-white px-4 py-3 text-base text-ink hover:border-ink-faint">
              {l.label}
            </Link>
          ))}
        </div>

        <section className="mt-12 max-w-measure">
          <h2 className="text-xl font-semibold text-ink">Common questions</h2>
          <div className="mt-4 divide-y divide-line rounded-xl border border-line bg-white">
            {FAQ.items.map((item) => (
              <details key={item.q} className="group px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-ink">
                  {item.q}
                  <span className="ml-4 font-mono text-xl text-ink-faint group-open:hidden" aria-hidden="true">+</span>
                  <span className="ml-4 hidden font-mono text-xl text-ink-faint group-open:inline" aria-hidden="true">−</span>
                </summary>
                <p className="pb-5 text-base text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-10 max-w-measure text-lg text-ink-soft">
          Still stuck?{" "}
          <Link href="/contact" className="link">Contact us.</Link> A real person,
          within one business day.
        </p>
      </main>
      <Footer />
    </>
  );
}
