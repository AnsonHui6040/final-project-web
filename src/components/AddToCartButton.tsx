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
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${
        soldOut
          ? "cursor-not-allowed bg-stone-200 text-stone-500"
          : "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black"
      } ${className}`}
    >
      {soldOut ? "已售完" : added ? "已加入購物車" : "加入購物車"}
    </button>
  );
}
