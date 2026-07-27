import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Free tools",
  description:
    "Free, ungated tools: a refill countdown, a state-rules lookup, a message generator, and calendar export. No login, no email.",
};

const TOOLS = [
  { href: "/tools/countdown", name: "Refill countdown calculator", body: "Enter your last fill date and days supply. See exactly when to act, day 22, 27, 29, and how many days are left." },
  { href: "/tools/state-rules", name: "State rules lookup", body: "Pick your state to see transfer, expiration, and telemedicine rules, honestly flagged as verified or not." },
  { href: "/tools/message", name: "Message generator", body: "Fill four fields and get a ready-to-send message: prescriber request, transfer, partial fill, or stock inquiry." },
  { href: "/tools/calendar", name: "Calendar export", body: "Drop the day 22, 27, and 29 alerts into the calendar you already check, as a plain .ics file." },
  { href: "/report", name: "Report an outcome", body: "One tap after a fill or transfer, filled, out of stock, or wrongly refused. It builds the map of which counter works." },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Free tools
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            No login. No email. No account. These work whether or not you ever
            sign up, that is the point.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="rounded-xl border border-line bg-white p-6 hover:border-ink-faint">
              <h2 className="text-xl font-semibold text-ink">{t.name}</h2>
              <p className="mt-2 text-base text-ink-soft">{t.body}</p>
              <span className="link mt-4 inline-block text-base">Open the tool</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
