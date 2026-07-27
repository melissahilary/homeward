import { ImageResponse } from "next/og";

export const alt =
  "The twelve-step Schedule II refill loop, with the three rights you already hold marked.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#17171A";
const SOFT = "#54544E";
const FAINT = "#84847C";
const PAPER = "#FAFAF7";
const LINE = "#E2E2DA";
const STOCK = "#1F7A44";
const EXPIRED = "#B4321F";

// Kinds mirror the on-site diagram: rights (green) at 2, 8, 10; breaks
// (red) at 6, 7. Everything else is a plain step.
const NODES = [
  "step", "right", "step", "step", "step", "break",
  "break", "right", "step", "right", "step", "step",
];

function color(kind) {
  if (kind === "right") return STOCK;
  if (kind === "break") return EXPIRED;
  return INK;
}

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 70px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 58, fontWeight: 700, color: INK, letterSpacing: -1 }}>
            Schedule II has no refills.
          </div>
          <div style={{ fontSize: 34, color: SOFT, marginTop: 8 }}>
            You restart this twelve times a year.
          </div>
        </div>

        {/* The twelve nodes on a line. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ position: "absolute", left: 28, right: 28, top: 33, height: 2, background: LINE }} />
            {NODES.map((kind, i) => (
              <div
                key={i}
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 33,
                  background: PAPER,
                  border: `${kind === "step" ? 2 : 5}px solid ${color(kind)}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  fontWeight: 600,
                  color: color(kind),
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Legend + mark. */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `5px solid ${STOCK}` }} />
              <div style={{ fontSize: 24, color: INK }}>a right you hold</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `5px solid ${EXPIRED}` }} />
              <div style={{ fontSize: 24, color: INK }}>where it breaks</div>
            </div>
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: FAINT }}>daykeep.app</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
