import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StateRulesTool from "@/components/StateRulesTool";

export const metadata = {
  title: "State rules lookup",
  description:
    "Pick your state to see Schedule II transfer, expiration, and telemedicine rules. Honestly flagged as verified or not yet verified. Free, no email.",
};

export default function StateRulesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            State rules lookup
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Rules vary by state and are changing. We show what we have and flag
            what we have not verified yet. We never fabricate law.
          </p>
        </div>
        <div className="mt-8 max-w-2xl">
          <StateRulesTool />
        </div>
      </main>
      <Footer />
    </>
  );
}
