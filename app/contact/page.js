import DocPage from "@/components/DocPage";
import ContactForm from "@/components/ContactForm";
import { SUPPORT } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "One form. A real person within one business day. No chatbot.",
};

export default function ContactPage() {
  return (
    <DocPage title="Contact" intro={SUPPORT.responseTime}>
      <div className="mt-4 max-w-measure">
        <p className="text-base text-ink-soft">
          <span className="font-medium text-ink">Data freshness. </span>
          {SUPPORT.freshness}
        </p>
      </div>
      <div className="mt-8 max-w-measure">
        <ContactForm />
      </div>
    </DocPage>
  );
}
