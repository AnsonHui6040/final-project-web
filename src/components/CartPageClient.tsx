"use client";

import Link from "next/link";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { ProductImage } from "./ProductImage";

export function CartPageClient() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const { productText, t } = useI18n();

  if (items.length === 0) {
    return (
      <div className="border border-ink/10 bg-porcelain p-8 text-center shadow-sm">
        <h2 className="font-serif text-3xl text-ink">{t("cartEmptyTitle")}</h2>
        <p className="mt-3 text-ink/62">
          {t("cartEmptyBody")}
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex min-h-12 items-center justify-center bg-ink px-6 font-semibold text-porcelain"
        >
          {t("curatedShop")}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-4">
        {items.map((item) => {
          const copy = productText(item.product);
          return (
          <article
            key={item.product.id}
            className="grid gap-4 border border-ink/10 bg-porcelain p-4 shadow-sm sm:grid-cols-[160px_1fr]"
          >
            <ProductImage product={item.product} className="aspect-[4/3]" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link
                  href={`/products/${item.product.slug}`}
                  className="text-lg font-semibold text-ink hover:text-rose-700"
                >
                  {copy.name}
                </Link>
                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {copy.meaning}
                </p>
                <p className="mt-2 text-base font-semibold text-ink">
                  {formatPrice(item.product.price)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <label className="text-sm font-semibold text-ink/70">
                  {t("quantity")}
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={item.quantity}
                    onChange={(event) =>
                      updateQuantity(item.product.id, Number(event.target.value))
                    }
                    className="ml-2 h-11 w-20 border border-ink/15 bg-cream px-3 text-center text-ink outline-none focus:border-ink"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  className="min-h-11 border border-ink/15 px-4 text-sm font-semibold text-ink/68 transition hover:border-rose-400 hover:text-rose-700"
                >
                  {t("remove")}
                </button>
              </div>
            </div>
          </article>
          );
        })}
      </div>

      <aside className="self-start border border-ink/10 bg-porcelain p-6 shadow-sm">
        <h2 className="font-serif text-3xl text-ink">{t("orderSummary")}</h2>
        <div className="mt-5 space-y-3 text-sm text-ink/66">
          <div className="flex justify-between">
            <span>{t("subtotal")}</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>{t("shipping")}</span>
            <span>{t("shippingLater")}</span>
          </div>
        </div>
        <div className="mt-5 border-t border-stone-200 pt-5">
          <div className="flex items-center justify-between text-lg font-semibold text-ink">
            <span>{t("total")}</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-ink px-6 font-semibold text-porcelain shadow-soft transition hover:-translate-y-0.5 hover:bg-brown"
        >
          {t("checkout")}
        </Link>
        <p className="mt-4 text-xs leading-5 text-ink/55">
          {t("preorderNote")}
        </p>
      </aside>
    </div>
  );
}
