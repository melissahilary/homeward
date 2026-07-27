import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTool from "@/components/CountdownTool";

export const metadata = {
  title: "Calendar export",
  description:
    "Generate an .ics with the day 22, 27, and 29 alerts and drop it into the calendar you already check. Free, no email.",
};

export default function CalendarPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Calendar export
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Meeting you inside a habit you already have beats any notification we
            could build. Enter your cycle, then add the alerts to your calendar.
          </p>
        </div>
        <div className="mt-8 max-w-2xl">
          <CountdownTool />
        </div>
      </main>
      <Footer />
    </>
  );
}
