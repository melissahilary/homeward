import DocPage from "@/components/DocPage";
import { TERMS } from "@/lib/legal";

export const metadata = {
  title: "Terms of Service",
  description:
    "Daykeep is a logistics and paperwork tool, not a clinical service. The full terms.",
};

export default function TermsPage() {
  return (
    <DocPage title={TERMS.title} updated={TERMS.updated} sections={TERMS.sections} />
  );
}
