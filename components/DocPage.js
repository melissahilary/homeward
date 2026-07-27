import Header from "./Header";
import Footer from "./Footer";

// Standard document page: header, a measured column, footer.
export default function DocPage({ title, updated, intro, sections, children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {title}
          </h1>
          {updated && (
            <p className="mt-2 font-mono text-sm text-ink-faint">
              Last updated {updated}
            </p>
          )}
          {intro && <p className="mt-4 text-lg text-ink-soft">{intro}</p>}
        </div>

        {sections && (
          <div className="mt-10 max-w-measure space-y-8">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
                <p className="mt-2 text-lg leading-relaxed text-ink-soft">{s.body}</p>
              </section>
            ))}
          </div>
        )}

        {children}
      </main>
      <Footer />
    </>
  );
}
