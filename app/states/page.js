import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { STATES, FEDERAL_NOTE, statusOf } from "@/lib/states";

export const metadata = {
  title: "State rules",
  description:
    "Schedule II refill rules by state: transfer, expiration, and telemedicine. Verification in progress; nothing is fabricated.",
};

export default function StatesPage() {
  const withData = STATES.filter((s) => statusOf(s) !== "review").length;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            State rules
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            The federal baseline, no refills, 90 days at once, transfer, and
            partial fill, applies in every state and is on every page. State
            specific windows are filled in as we source them: {withData} of{" "}
            {STATES.length} so far.
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
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    statusOf(s) === "verified" ? "bg-stock" : statusOf(s) === "sourced" ? "bg-pending" : "bg-line"
                  }`}
                  aria-label={statusOf(s)}
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
