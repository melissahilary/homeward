import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTool from "@/components/CountdownTool";

export const metadata = {
  title: "Refill countdown calculator",
  description:
    "Enter your last fill date and days supply. See when to act, day 22, 27, 29, and export the alerts to your calendar. Free, no email.",
};

export default function CountdownPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Refill countdown calculator
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            The cycle counts down from your last fill, not from an empty bottle.
            Enter two things and see exactly when to move.
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
