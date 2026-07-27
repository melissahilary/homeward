import DocPage from "@/components/DocPage";
import { CHANGELOG } from "@/lib/site";

export const metadata = {
  title: "Changelog",
  description: "What we have shipped, newest first.",
};

export default function ChangelogPage() {
  return (
    <DocPage title={CHANGELOG.title} intro="What we have shipped, newest first.">
      <div className="mt-10 max-w-measure space-y-8">
        {CHANGELOG.entries.map((e) => (
          <section key={e.date} className="border-t border-line pt-6">
            <h2 className="font-mono text-base text-ink-faint">{e.date}</h2>
            <ul className="mt-3 space-y-2">
              {e.items.map((it) => (
                <li key={it} className="flex gap-3 text-lg text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </DocPage>
  );
}
