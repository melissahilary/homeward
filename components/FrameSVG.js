// One SVG, five states. The loop the user has run fifty times, revealed as a
// system — not a personal failing. Days 20–33, twelve nodes, three that break,
// three that are rights, collapsing to three taps. Dark palette.

const BASE = "#121210";
const INK = "#F4F1E8";
const SOFT = "#B7B3A8";
const FAINT = "#8A857A";
const LINE = "#34312B";
const STOCK = "#5FBE86";
const EXPIRED = "#E77E63";

const LABELS = [
  "Request", "Check", "Assess", "Send", "Transmit", "Stock",
  "Locate", "Transfer", "Adjudicate", "Partial", "Collect", "Log",
];
const BREAKS = [6, 7, 8]; // Stock unknown · script stranded · rights unused
const RIGHTS = {
  2: "Sequential scripts",
  8: "Patient-initiated transfer",
  10: "Partial fill",
};

const W = 1180;
const H = 300;
const MX = 70;
const AXIS_Y = 150;
const usable = W - MX * 2;
const stepX = usable / (LABELS.length - 1);
const xOf = (i) => MX + i * stepX;

function Axis() {
  return (
    <>
      <line x1={MX} y1={AXIS_Y} x2={W - MX} y2={AXIS_Y} stroke={LINE} strokeWidth="2" />
      <text x={MX} y={AXIS_Y + 54} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fill={FAINT}>Day 20</text>
      <text x={W - MX} y={AXIS_Y + 54} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fill={FAINT}>Day 33</text>
    </>
  );
}

function Node({ i, kind, animate }) {
  const x = xOf(i);
  const n = i + 1;
  const isBreak = kind === "break";
  const c = isBreak ? EXPIRED : INK;
  return (
    <g className={animate ? "choreo-node" : undefined}>
      <circle cx={x} cy={AXIS_Y} r="17" fill={BASE} stroke={c} strokeWidth={isBreak ? 3 : 1.5} />
      <text x={x} y={AXIS_Y + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={c}>{n}</text>
      <text x={x} y={AXIS_Y - 30} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill={SOFT}>{LABELS[i]}</text>
    </g>
  );
}

export default function FrameSVG({ frame = 5, id }) {
  const box = (children, h = H) => (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${W} ${h}`} width="100%" role="img"
      aria-label="The twelve-step Schedule II refill loop across days 20 to 33."
      style={{ display: "block" }}>
      {children}
    </svg>
  );

  if (frame === 1) {
    return box(<Axis />);
  }

  if (frame === 5) {
    // Collapsed: three taps.
    const labels = ["Tap", "Tap", "Done"];
    const xs = [W * 0.3, W * 0.5, W * 0.7];
    return box(
      <>
        <line x1={xs[0]} y1={AXIS_Y} x2={xs[2]} y2={AXIS_Y} stroke={LINE} strokeWidth="2" />
        {xs.map((x, k) => (
          <g key={k}>
            <circle cx={x} cy={AXIS_Y} r="24" fill={BASE} stroke={STOCK} strokeWidth="3" />
            <text x={x} y={AXIS_Y + 52} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="500" fill={INK}>{labels[k]}</text>
          </g>
        ))}
      </>
    );
  }

  // Frames 2, 3, 4 share the twelve nodes.
  const nodes = LABELS.map((_, i) => {
    const kind = frame >= 3 && BREAKS.includes(i + 1) ? "break" : "step";
    return <Node key={i} i={i} kind={kind} animate={frame === 2} />;
  });

  const rights =
    frame === 4
      ? Object.entries(RIGHTS).map(([n, label]) => {
          const i = Number(n) - 1;
          const x = xOf(i);
          return (
            <g key={n} className="choreo-right">
              <line x1={x - 26} y1={AXIS_Y + 30} x2={x + 26} y2={AXIS_Y + 30} stroke={STOCK} strokeWidth="3" />
              <text x={x} y={AXIS_Y + 50} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12.5" fontWeight="500" fill={STOCK}>{label}</text>
            </g>
          );
        })
      : null;

  return box(
    <>
      <Axis />
      {nodes}
      {rights}
    </>,
    frame === 4 ? 320 : H
  );
}
