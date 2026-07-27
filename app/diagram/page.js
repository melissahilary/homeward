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
          <DiagramDownload>
            <DiagramSVG />
          </DiagramDownload>
        </div>

        <p className="mt-6 max-w-measure text-base text-ink-soft">
          Share it freely. Print it and take it to an appointment. Post it
          wherever it helps. That is the point.
        </p>
      </main>
      <Footer />
    </>
  );
}
