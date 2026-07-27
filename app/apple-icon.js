import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// A single node from the loop, with the "act now" dot at the top, the
// instrument mark, not a wellness logo.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#17171A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: 96, height: 96, display: "flex" }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              border: "10px solid #FAFAF7",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -6,
              left: 38,
              width: 20,
              height: 20,
              borderRadius: 10,
              background: "#FAFAF7",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
