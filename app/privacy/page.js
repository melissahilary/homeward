import DocPage from "@/components/DocPage";
import { PRIVACY } from "@/lib/legal";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Daykeep's general privacy policy. Health data has its own, separate policy.",
};

export default function PrivacyPage() {
  return (
    <DocPage
      title={PRIVACY.title}
      updated={PRIVACY.updated}
      intro={PRIVACY.intro}
      sections={PRIVACY.sections}
    />
  );
}
