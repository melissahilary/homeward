"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToBag({ label = "Add to Bag", price, className = "" }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const text = price ? `${label} — ${price}` : label;

  return (
    <button
      onClick={() => {
        add(1);
        setAdded(true);
      }}
      className={`btn-solid btn-block ${className}`}
      aria-live="polite"
    >
      {added ? "Added to Bag" : text}
    </button>
  );
}
