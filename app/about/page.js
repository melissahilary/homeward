import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ABOUT } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Not a founder story. A boundaries page: our credential, our premise, who we serve, and who we do not.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {ABOUT.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-ink">{ABOUT.lede}</p>
        </div>
        <div className="mt-10 max-w-measure space-y-10">
          {ABOUT.sections.map((s) => (
            <section key={s.h} className="border-t border-line pt-8">
              <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
