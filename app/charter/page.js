import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CHARTER } from "@/lib/site";

export const metadata = {
  title: "What we never do",
  description:
    "The charter. No clinician payments, no pharmacy money, no insurance billing, nothing sends without your tap. Rules, not preferences.",
};

export default function CharterPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {CHARTER.title}
          </h1>
          <p className="mt-3 text-lg text-ink-soft">{CHARTER.intro}</p>
        </div>

        <ol className="mt-10 max-w-3xl space-y-8">
          {CHARTER.rules.map((rule) => (
            <li key={rule.n} className="border-t border-line pt-6">
              <div className="flex gap-4">
                <span className="font-mono text-lg text-ink-faint">
                  {String(rule.n).padStart(2, "0")}
                </span>
                <div className="max-w-measure">
                  <h2 className="text-xl font-semibold text-ink">{rule.title}</h2>
                  <p className="mt-2 text-lg text-ink-soft">{rule.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </>
  );
}
