import DocPage from "@/components/DocPage";
import ContactForm from "@/components/ContactForm";
import { SUPPORT } from "@/lib/site";

export const metadata = {
  title: "Support",
  description:
    "Self-service first, a real person within one business day, no chatbot.",
};

export default function SupportPage() {
  return (
    <DocPage title={SUPPORT.title} intro={SUPPORT.intro}>
      <div className="mt-8 max-w-measure space-y-3">
        <p className="text-base text-ink">
          <span className="font-medium">Response time. </span>
          {SUPPORT.responseTime}
        </p>
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
