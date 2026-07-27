import { COMPARISON } from "@/lib/site";

// One table, one location. It teaches the reader to judge the category on the
// dimension where we win — recorded transfer completion — without naming a
// competitor, because their real alternative is an afternoon on the phone.
export default function Comparison() {
  return (
    <div className="max-w-3xl overflow-hidden rounded-xl border border-line">
      <div className="grid grid-cols-[1fr_auto_auto] items-stretch">
        {/* Header row */}
        <div className="border-b border-line px-5 py-4" />
        <div className="border-b border-line px-4 py-4 text-center sm:px-6">
          <span className="text-sm font-medium text-ink-faint">{COMPARISON.columns[0]}</span>
        </div>
        <div className="border-b border-l border-line bg-white px-4 py-4 text-center sm:px-6">
          <span className="text-sm font-semibold text-ink">{COMPARISON.columns[1]}</span>
        </div>

        {COMPARISON.rows.map((row, i) => (
          <Row key={row.label} row={row} last={i === COMPARISON.rows.length - 1} />
        ))}
      </div>
    </div>
  );
}

function Row({ row, last }) {
  const border = last ? "" : "border-b border-line";
  const quantified = /^\d/.test(row.us) || /^\d/.test(row.self);
  return (
    <>
      <div className={`${border} px-5 py-4`}>
        <span className="text-base text-ink">{row.label}</span>
      </div>
      <div className={`${border} px-4 py-4 text-center sm:px-6`}>
        <span className={`${quantified ? "text-lg font-semibold" : "text-base"} text-ink-soft`}>
          {row.self}
        </span>
      </div>
      <div className={`${border} border-l border-line bg-white px-4 py-4 text-center sm:px-6`}>
        <span className={`${quantified ? "text-lg font-semibold" : "text-base font-medium"} text-ink`}>
          {row.us}
        </span>
      </div>
    </>
  );
}
