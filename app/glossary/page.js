import DocPage from "@/components/DocPage";
import { GLOSSARY } from "@/lib/site";

export const metadata = {
  title: "Glossary",
  description:
    "Plain words for the paperwork: EPCS, APQ, PDMP, days supply, too-soon-to-fill.",
};

export default function GlossaryPage() {
  return (
    <DocPage title={GLOSSARY.title}>
      <dl className="mt-10 max-w-measure divide-y divide-line border-t border-line">
        {GLOSSARY.terms.map((t) => (
          <div key={t.term} className="py-6">
            <dt className="text-xl font-semibold text-ink">{t.term}</dt>
            <dd className="mt-2 text-lg text-ink-soft">{t.body}</dd>
          </div>
        ))}
      </dl>
    </DocPage>
  );
}
