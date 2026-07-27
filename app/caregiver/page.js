import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaregiverView from "@/components/CaregiverView";

export const metadata = {
  title: "Caregiver access",
  description:
    "A read-only view for a partner or parent who helps run the loop. A second person we serve, not an afterthought.",
};

export default function CaregiverPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Caregiver access
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Spouses and parents already run this loop by hand. Caregiver access
            gives them a read-only view — where the cycle is, what today needs —
            without any ability to send or change anything. Below is what they
            see.
          </p>
        </div>
        <div className="mt-8">
          <CaregiverView />
        </div>
        <p className="mt-6 max-w-measure text-lg text-ink-soft">
          Invite a caregiver from your{" "}
          <Link href="/account" className="link">account</Link>. They get a link,
          not a login to anything of yours.
        </p>
      </main>
      <Footer />
    </>
  );
}
