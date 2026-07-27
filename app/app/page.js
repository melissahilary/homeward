import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portal from "@/components/Portal";

export const metadata = {
  title: "Your portal",
  description:
    "Setup, history, and your account. The product happens in your texts and calendar; this is the quiet part.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
        <Portal />
      </main>
      <Footer />
    </>
  );
}
