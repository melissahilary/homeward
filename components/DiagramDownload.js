"use client";

import { useRef } from "react";

// Wraps the diagram and offers SVG, PNG, and print (Save as PDF) downloads.
// No email gate — the diagram is the distribution.
export default function DiagramDownload({ children }) {
  const wrapRef = useRef(null);

  function getSvg() {
    return wrapRef.current?.querySelector("svg");
  }

  function download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function serialized() {
    const svg = getSvg();
    if (!svg) return null;
    const clone = svg.cloneNode(true);
    const vb = svg.getAttribute("viewBox").split(" ");
    clone.setAttribute("width", vb[2]);
    clone.setAttribute("height", vb[3]);
    return {
      str: new XMLSerializer().serializeToString(clone),
      w: Number(vb[2]),
      h: Number(vb[3]),
    };
  }

  function downloadSVG() {
    const s = serialized();
    if (!s) return;
    download(new Blob([s.str], { type: "image/svg+xml;charset=utf-8" }), "daykeep-refill-loop.svg");
  }

  function downloadPNG() {
    const s = serialized();
    if (!s) return;
    const scale = 2;
    const img = new Image();
    const svgBlob = new Blob([s.str], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = s.w * scale;
      canvas.height = s.h * scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FAFAF7";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => blob && download(blob, "daykeep-refill-loop.png"));
    };
    img.src = url;
  }

  return (
    <div>
      <div
        ref={wrapRef}
        className="overflow-x-auto rounded-xl border border-line bg-paper p-4"
      >
        <div className="min-w-[720px]">{children}</div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 no-print">
        <button onClick={downloadPNG} className="btn !py-2.5 text-base">
          Download PNG
        </button>
        <button onClick={downloadSVG} className="btn btn-secondary !py-2.5 text-base">
          Download SVG
        </button>
        <button onClick={() => window.print()} className="btn btn-secondary !py-2.5 text-base">
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}
