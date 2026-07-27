// The one diagram. Horizontal, days 20–33, twelve nodes, three marked as
// rights the patient already holds, two marked where the loop breaks.
// Static SVG, no animation, legible small. This is the distribution asset.

const NODES = [
  { n: 1, label: "Count down", kind: "step" },
  { n: 2, label: "Check for a script", kind: "right" },
  { n: 3, label: "Visit needed?", kind: "step" },
  { n: 4, label: "Send request", kind: "step" },
  { n: 5, label: "Confirm sent", kind: "step" },
  { n: 6, label: "Check stock", kind: "break" },
  { n: 7, label: "Find stock", kind: "break" },
  { n: 8, label: "Transfer", kind: "right" },
  { n: 9, label: "Clear insurance", kind: "step" },
  { n: 10, label: "Partial fill", kind: "right" },
  { n: 11, label: "Pick up", kind: "step" },
  { n: 12, label: "Log it", kind: "step" },
];

const PHASES = [
  { label: "Anticipate", days: "Days 20–24", from: 1, to: 4 },
  { label: "Acquire", days: "Days 25–30", from: 5, to: 8 },
  { label: "Close", days: "Days 28–33", from: 9, to: 12 },
];

const INK = "#17171A";
const SOFT = "#54544E";
const FAINT = "#84847C";
const LINE = "#E2E2DA";
const STOCK = "#1F7A44";
const EXPIRED = "#B4321F";

const W = 1180;
const H = 470;
const MX = 70;
const AXIS_Y = 250;
const usable = W - MX * 2;
const step = usable / (NODES.length - 1);
const xOf = (i) => MX + i * step;

function colorOf(kind) {
  if (kind === "right") return STOCK;
  if (kind === "break") return EXPIRED;
  return INK;
}

export default function DiagramSVG({ id = "daykeep-diagram", branded = true }) {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label="The twelve-step Schedule II refill loop across days 20 to 33, with three steps marked as rights you already hold and two marked as where the loop breaks."
      style={{ display: "block", background: "#FAFAF7" }}
    >
      <text x={MX} y={44} fontFamily="Inter, sans-serif" fontSize="26" fontWeight="600" fill={INK}>
        The refill loop
      </text>
      <text x={MX} y={72} fontFamily="Inter, sans-serif" fontSize="16" fill={SOFT}>
        Twelve steps, days 20–33. You have run it fifty times. Here it is drawn once.
      </text>
      {branded && (
        <text x={W - MX} y={44} textAnchor="end" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill={INK}>
          Daykeep
        </text>
      )}

      {/* Phase bands */}
      {PHASES.map((p) => {
        const x1 = xOf(p.from - 1) - 26;
        const x2 = xOf(p.to - 1) + 26;
        return (
          <g key={p.label}>
            <rect x={x1} y={120} width={x2 - x1} height={40} rx={8} fill="#F2F2ED" />
            <text x={(x1 + x2) / 2} y={140} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="600" fill={INK}>
              {p.label}
            </text>
            <text x={(x1 + x2) / 2} y={156} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill={FAINT}>
              {p.days}
            </text>
          </g>
        );
      })}

      {/* Axis */}
      <line x1={MX} y1={AXIS_Y} x2={W - MX} y2={AXIS_Y} stroke={LINE} strokeWidth="2" />

      {/* Nodes */}
      {NODES.map((node, i) => {
        const x = xOf(i);
        const c = colorOf(node.kind);
        return (
          <g key={node.n}>
            <line x1={x} y1={170} x2={x} y2={AXIS_Y} stroke={LINE} strokeWidth="1.5" />
            <circle cx={x} cy={AXIS_Y} r="20" fill="#FAFAF7" stroke={c} strokeWidth={node.kind === "step" ? 1.5 : 3} />
            <text x={x} y={AXIS_Y + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="15" fontWeight="500" fill={c}>
              {node.n}
            </text>
            <text x={x} y={AXIS_Y + 46} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12.5" fill={SOFT}>
              {node.label}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform={`translate(${MX}, ${H - 40})`}>
        <circle cx="8" cy="-4" r="8" fill="#FAFAF7" stroke={STOCK} strokeWidth="3" />
        <text x="24" y="0" fontFamily="Inter, sans-serif" fontSize="14" fill={INK}>
          A right you already hold
        </text>
        <circle cx="248" cy="-4" r="8" fill="#FAFAF7" stroke={EXPIRED} strokeWidth="3" />
        <text x="264" y="0" fontFamily="Inter, sans-serif" fontSize="14" fill={INK}>
          Where the loop breaks
        </text>
        <text x={W - MX * 2} y="0" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="13" fill={FAINT}>
          {branded ? "Schedule II has no refills. daykeep.app" : "Schedule II has no refills."}
        </text>
      </g>
    </svg>
  );
}
