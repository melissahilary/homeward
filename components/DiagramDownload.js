"use client";

import { useRef } from "react";

// Wraps the diagram and offers downloads. Two versions on purpose:
// branded for your own channels, and a clean unbranded one (no logo, no
// link) for the first community post, where any brand can get you banned.
export default function DiagramDownload({ children, unbranded }) {
  const brandedRef = useRef(null);
  const unbrandedRef = useRef(null);

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

  function serialize(ref) {
    const svg = ref.current?.querySelector("svg");
    if (!svg) return null;
    const clone = svg.cloneNode(true);
    const vb = svg.getAttribute("viewBox").split(" ");
    clone.setAttribute("width", vb[2]);
    clone.setAttribute("height", vb[3]);
    return { str: new XMLSerializer().serializeToString(clone), w: Number(vb[2]), h: Number(vb[3]) };
  }

  function downloadSVG(ref, name) {
    const s = serialize(ref);
    if (!s) return;
    download(new Blob([s.str], { type: "image/svg+xml;charset=utf-8" }), name + ".svg");
  }

  function downloadPNG(ref, name) {
    const s = serialize(ref);
    if (!s) return;
    const scale = 2;
    const img = new Image();
    const url = URL.createObjectURL(new Blob([s.str], { type: "image/svg+xml;charset=utf-8" }));
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = s.w * scale;
      canvas.height = s.h * scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#121210";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => blob && download(blob, name + ".png"));
    };
    img.src = url;
  }

  return (
    <div>
      <div ref={brandedRef} className="overflow-x-auto rounded-xl border border-line bg-paper p-4">
        <div className="min-w-[720px]">{children}</div>
      </div>

      {/* Hidden unbranded variant, kept in the DOM for serialization. */}
      <div ref={unbrandedRef} className="sr-only" aria-hidden="true">
        {unbranded}
      </div>

      <div className="mt-5 no-print">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
          For your own channels
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <button onClick={() => downloadPNG(brandedRef, "daykeep-refill-loop")} className="btn !py-2.5 text-base">Download PNG</button>
          <button onClick={() => downloadSVG(brandedRef, "daykeep-refill-loop")} className="btn btn-secondary !py-2.5 text-base">Download SVG</button>
          <button onClick={() => window.print()} className="btn btn-secondary !py-2.5 text-base">Print / Save as PDF</button>
        </div>
      </div>

      <div className="mt-6 no-print">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
          For a community post, no logo, no link
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <button onClick={() => downloadPNG(unbrandedRef, "refill-loop")} className="btn btn-secondary !py-2.5 text-base">Unbranded PNG</button>
          <button onClick={() => downloadSVG(unbrandedRef, "refill-loop")} className="btn btn-secondary !py-2.5 text-base">Unbranded SVG</button>
        </div>
      </div>
    </div>
  );
}
