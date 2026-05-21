"use client";

import Link from "next/link";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { itemCount, subtotal } = useCart();

  if (itemCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white/92 p-3 shadow-soft backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">購物車已有 {itemCount} 件</p>
          <p className="text-xs text-ink/58">小計 {formatPrice(subtotal)}</p>
        </div>
        <Link
          href="/cart"
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white"
        >
          查看
        </Link>
      </div>
    </div>
  );
}
