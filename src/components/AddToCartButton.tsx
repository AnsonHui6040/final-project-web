"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/types/product";

export function AddToCartButton({
  product,
  className = "",
  testId
}: {
  product: Product;
  className?: string;
  testId?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const soldOut = product.stockStatus === "sold-out";

  return (
    <button
      type="button"
      data-testid={testId}
      disabled={soldOut}
      onClick={() => {
        addItem(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
      className={`inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold transition ${
        soldOut
          ? "cursor-not-allowed bg-stone-200 text-stone-500"
          : "bg-ink text-porcelain shadow-soft hover:-translate-y-0.5 hover:bg-brown"
      } ${className}`}
    >
      {soldOut ? "Sold out" : added ? "Added" : "Add"}
    </button>
  );
}
