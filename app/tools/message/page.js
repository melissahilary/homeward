import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessageGenerator from "@/components/MessageGenerator";

export const metadata = {
  title: "Message generator",
  description:
    "Fill four fields and get a ready-to-send message: prescriber request, transfer, partial fill, or stock inquiry. You send it yourself. Free, no email.",
};

export default function MessagePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Message generator
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Put your details in once. Get a clean message you can send from your
            own portal. We never send anything for you.
          </p>
        </div>
        <div className="mt-8">
          <MessageGenerator />
        </div>
      </main>
      <Footer />
    </>
  );
}
