import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagramSVG from "@/components/DiagramSVG";
import DiagramDownload from "@/components/DiagramDownload";

export const metadata = {
  title: "The refill loop, drawn",
  description:
    "The twelve-step Schedule II refill loop on one page, with the three rights you already hold marked. Free to download as PNG, SVG, or PDF. No email.",
};

export default function DiagramPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            The refill loop, drawn once
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            You have run this loop fifty times and never seen it depicted. Here
            it is: twelve steps, three of them rights you already hold, two where
            it breaks. It is not you. It is a bureaucratic process no one gave you
            the map for. Take the map. No email required.
          </p>
        </div>

        <div className="mt-10">
          <DiagramDownload unbranded={<DiagramSVG id="daykeep-diagram-unbranded" branded={false} />}>
            <DiagramSVG />
          </DiagramDownload>
        </div>

        <p className="mt-6 max-w-measure text-base text-ink-soft">
          Share it freely. Print it and take it to an appointment. Post it
          wherever it helps. That is the point.
        </p>

        {/* Posting in a community? The rules that keep you from a day-one ban. */}
        <section className="mt-10 max-w-measure rounded-xl border border-line bg-panel p-6">
          <h2 className="text-lg font-semibold text-ink">
            Posting this in a community?
          </h2>
          <p className="mt-2 text-base text-ink-soft">
            Support communities have strict self-promotion rules and active
            moderation. A brand attachment can get you banned on day one, with no
            appeal. Use the unbranded version first, and:
          </p>
          <ol className="mt-4 space-y-2 text-base text-ink">
            {[
              "Read each community's rules in full before posting anything.",
              "Message the moderators first. Say exactly what you are doing and ask.",
              "Post the diagram with no logo, no link, no brand, the unbranded file above.",
              "Build comment history for two weeks before you post anything of your own.",
              "Have a second and third community ready. One ban should not end anything.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-sm text-ink-faint">{i + 1}</span>
                {t}
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
