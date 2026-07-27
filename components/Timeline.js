import { TIMELINE } from "@/lib/site";

// One horizontal diagram, days 20–33. Status color carries meaning:
// red where the loop breaks, green where a right can be used.
function Tag({ kind }) {
  if (kind === "breaks") {
    return (
      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-expired">
        <Dot className="bg-expired" /> where it breaks
      </span>
    );
  }
  if (kind === "right") {
    return (
      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-stock">
        <Dot className="bg-stock" /> a right you hold
      </span>
    );
  }
  return null;
}

function Dot({ className }) {
  return <span className={`h-2 w-2 rounded-full ${className}`} aria-hidden="true" />;
}

export default function Timeline() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {TIMELINE.phases.map((phase) => (
        <div key={phase.key} className="rounded-xl border border-line bg-white p-5">
          <div className="mb-4 flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="text-lg font-semibold text-ink">{phase.label}</h3>
            <span className="font-mono text-sm text-ink-faint">{phase.days}</span>
          </div>
          <ol className="space-y-4">
            {phase.steps.map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="mt-0.5 font-mono text-sm text-ink-faint">
                  {String(step.n).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base text-ink">{step.text}</p>
                  {step.breaks && <Tag kind="breaks" />}
                  {step.right && <Tag kind="right" />}
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
