import DocPage from "@/components/DocPage";
import { HEALTH_DATA } from "@/lib/legal";

export const metadata = {
  title: "Consumer Health Data Privacy Policy",
  description:
    "How Daykeep collects, uses, shares, and lets you take back your consumer health data. A standalone policy, as Washington's My Health My Data Act requires.",
};

export default function HealthDataPage() {
  return (
    <DocPage
      title={HEALTH_DATA.title}
      updated={HEALTH_DATA.updated}
      intro={HEALTH_DATA.intro}
      sections={HEALTH_DATA.sections}
    >
      <p className="mt-10 max-w-measure text-base text-ink-soft">
        {HEALTH_DATA.contact}
      </p>
    </DocPage>
  );
}
