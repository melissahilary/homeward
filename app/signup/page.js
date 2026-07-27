import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import { SIGNUP } from "@/lib/site";

export const metadata = {
  title: "Get started",
  description:
    "Four fields, under ninety seconds. Set up the monthly Schedule II cycle. Cash only, no insurance, no clinical relationship.",
};

export default function SignupPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            {SIGNUP.title}
          </h1>
          <p className="mt-3 text-lg text-ink-soft">{SIGNUP.intro}</p>
        </div>
        <div className="mt-8 max-w-measure">
          <SignupForm />
          <p className="mt-4 text-sm text-ink-faint">
            We are a logistics and paperwork tool, not a clinical service. Your
            info coordinates your refill and nothing else.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
