import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAILS } from "@/lib/emails";

export const metadata = {
  title: "Email previews",
  description:
    "The lifecycle emails, plain text and no tracking. Read the day-22 trigger and the rest.",
};

export default function EmailIndex() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            The emails
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Email is the product; the website is the wrapper. If the day-22 email
            is good, nothing else has to be. All plain text, no images, no
            tracking pixels — so they land in the inbox, not spam.
          </p>
        </div>

        <ul className="mt-10 max-w-2xl divide-y divide-line rounded-xl border border-line bg-white">
          {EMAILS.map((e) => (
            <li key={e.slug}>
              <Link href={`/email/${e.slug}`} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-panel">
                <span>
                  <span className="block text-lg font-medium text-ink">{e.name}</span>
                  <span className="block text-base text-ink-soft">{e.when}</span>
                </span>
                <span className="link shrink-0 text-base">Read</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
