import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyBlock from "@/components/CopyBlock";
import { MESSAGES } from "@/lib/site";

export const metadata = {
  title: "The message library",
  description:
    "Four ready messages that carry the cycle: prescriber request, transfer request, partial fill request, pharmacy stock inquiry. Copy the one you need. No account required.",
};

export default function MessagesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {MESSAGES.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{MESSAGES.intro}</p>
        </div>

        <div className="mt-10 space-y-12">
          {MESSAGES.items.map((m) => (
            <section key={m.slug} id={m.slug} className="scroll-mt-24">
              <div className="max-w-measure">
                <h2 className="text-xl font-semibold text-ink">{m.name}</h2>
                <p className="mt-1 text-base text-ink-soft">{m.when}</p>
              </div>
              <div className="mt-4 max-w-3xl">
                <CopyBlock text={m.body} />
                <p className="mt-3 font-mono text-sm text-ink-faint">
                  Basis: {m.cite}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
