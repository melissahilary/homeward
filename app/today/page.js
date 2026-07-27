import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyBlock from "@/components/CopyBlock";
import { MESSAGES } from "@/lib/site";

export const metadata = {
  title: "Today",
  description:
    "One screen, one question: what do I do today. A preview of the authenticated view.",
};

// One screen answers one question, what do I do today. Demo state: day 24.
export default function TodayPage() {
  const prescriberMsg = MESSAGES.items.find((m) => m.slug === "prescriber-request");

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <p className="font-mono text-sm uppercase tracking-wide text-ink-faint">
          Preview of your daily view
        </p>

        <div className="mt-4 max-w-measure">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-panel px-3 py-1 text-sm font-medium text-pending">
              <span className="h-2 w-2 rounded-full bg-pending" aria-hidden="true" />
              Day 24 of 30
            </span>
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Today: request your next fill.
          </h1>
          <p className="mt-3 text-lg text-ink-soft">
            You have six days of supply left. This is the day to send the
            prescriber request, so the script is ready before you run out. Copy
            it and send it from your portal.
          </p>
        </div>

        <div className="mt-6 max-w-3xl">
          <CopyBlock text={prescriberMsg.body} />
          <p className="mt-3 font-mono text-sm text-ink-faint">
            Basis: {prescriberMsg.cite}
          </p>
        </div>

        <div className="mt-8 max-w-measure rounded-xl border border-line bg-panel p-5">
          <p className="text-base text-ink-soft">
            The full view tracks all twelve steps, remembers which manufacturer
            worked for you, and moves to the next action on its own.
          </p>
          <Link href="/#loop" className="link mt-3 inline-block text-base">
            See the twelve steps
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
