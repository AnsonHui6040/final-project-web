"use client";

import Link from "next/link";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { ProductImage } from "./ProductImage";

export function CartPageClient() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">購物車目前是空的</h2>
        <p className="mt-3 text-ink/62">
          先逛逛星座月份、幸運色或生日推薦系列，找到今天想戴上的那一款。
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-white"
        >
          查看商品
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-4">
        {items.map((item) => (
          <article
            key={item.product.id}
            className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:grid-cols-[160px_1fr]"
          >
            <ProductImage product={item.product} className="aspect-[4/3]" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link
                  href={`/products/${item.product.slug}`}
                  className="text-lg font-semibold text-ink hover:text-rose-700"
                >
                  {item.product.name}
                </Link>
                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {item.product.meaning}
                </p>
                <p className="mt-2 text-base font-semibold text-ink">
                  {formatPrice(item.product.price)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <label className="text-sm font-semibold text-ink/70">
                  數量
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={item.quantity}
                    onChange={(event) =>
                      updateQuantity(item.product.id, Number(event.target.value))
                    }
                    className="ml-2 h-11 w-20 rounded-xl border border-stone-300 bg-cream px-3 text-center text-ink outline-none focus:border-ink"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  className="min-h-11 rounded-full border border-stone-300 px-4 text-sm font-semibold text-ink/68 transition hover:border-rose-400 hover:text-rose-700"
                >
                  刪除
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="self-start rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">訂單摘要</h2>
        <div className="mt-5 space-y-3 text-sm text-ink/66">
          <div className="flex justify-between">
            <span>商品小計</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>運費</span>
            <span>下單時確認</span>
          </div>
        </div>
        <div className="mt-5 border-t border-stone-200 pt-5">
          <div className="flex items-center justify-between text-lg font-semibold text-ink">
            <span>總金額</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black"
        >
          前往下單
        </Link>
        <p className="mt-4 text-xs leading-5 text-ink/55">
          目前為預購測試階段，點擊後會看到 Instagram、LINE 與 Google Form 下單入口佔位。
        </p>
      </aside>
    </div>
  );
}
