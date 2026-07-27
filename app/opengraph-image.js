import { ImageResponse } from "next/og";

export const alt =
  "We run the other nine. The twelve-step Schedule II refill loop, collapsed to three taps.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BASE = "#121210";
const INK = "#F4F1E8";
const SOFT = "#B7B3A8";
const FAINT = "#8A857A";
const LINE = "#34312B";
const STOCK = "#5FBE86";

// Frame five: the collapsed three-node version with the headline. This is
// what renders on every Reddit and Discord share, so it is the advertisement.
export default function OG() {
  const labels = ["Tap", "Tap", "Done"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BASE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, color: FAINT, textTransform: "uppercase" }}>
            Schedule II has no refills
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, color: INK, letterSpacing: -2, marginTop: 14 }}>
            We run the other nine.
          </div>
        </div>

        {/* Three collapsed nodes. */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 120, position: "relative" }}>
          <div style={{ position: "absolute", left: 360, right: 360, top: 47, height: 3, background: LINE }} />
          {labels.map((l, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 96, height: 96, borderRadius: 48, background: BASE, border: `6px solid ${STOCK}` }} />
              <div style={{ fontSize: 28, color: INK, marginTop: 18 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 30, color: SOFT }}>
            We run the operational layer of your medication.
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: FAINT }}>daykeep.app</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
