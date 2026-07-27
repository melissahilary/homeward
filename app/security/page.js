import DocPage from "@/components/DocPage";

export const metadata = {
  title: "Security",
  description:
    "How Daykeep protects your data: encryption in transit and at rest, least-privilege access, and no medical-portal credentials.",
};

const SECTIONS = [
  { h: "Encryption", body: "Your data is encrypted in transit with TLS and at rest. Payment card details never touch our servers; Stripe handles them." },
  { h: "We hold no portal login", body: "By design, we never store a credential to your medical portal or your pharmacy. We cannot send on your behalf, so no one who breaks in could either." },
  { h: "Least privilege", body: "Access to production data is limited to the few people who need it, logged, and reviewed. We collect the minimum to run your cycle." },
  { h: "No data sale", body: "We do not sell data and do not share it with data brokers or advertisers. It exists to run your refill and nothing else." },
  { h: "Report an issue", body: "Found a vulnerability? Tell us through support. We read every report and respond quickly." },
];

export default function SecurityPage() {
  return <DocPage title="Security" intro="A short, honest account of how your data is protected." sections={SECTIONS} />;
}
