import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { STATES, FEDERAL_NOTE } from "@/lib/states";

export const metadata = {
  title: "State rules",
  description:
    "Schedule II refill rules by state: transfer, expiration, and telemedicine. Verification in progress; nothing is fabricated.",
};

export default function StatesPage() {
  const verified = STATES.filter((s) => s.verified).length;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            State rules
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Rules vary by state and are changing. Each page shows what we have
            and flags what we have not verified. {verified} of {STATES.length}{" "}
            verified so far.
          </p>
          <p className="mt-4 rounded-lg border border-line bg-panel p-4 text-base text-ink">
            {FEDERAL_NOTE}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
          {STATES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/states/${s.slug}`}
                className="flex items-center justify-between border-b border-line py-2.5 text-base text-ink hover:text-ink-soft"
              >
                <span>{s.name}</span>
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${s.verified ? "bg-stock" : "bg-line"}`}
                  aria-label={s.verified ? "verified" : "not yet verified"}
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
