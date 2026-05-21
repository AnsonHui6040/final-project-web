import Link from "next/link";
import { formatPrice, seriesLabels, stockLabels } from "@/data/products";
import type { Product } from "@/types/product";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/products/${product.slug}`} className="block p-3">
        <ProductImage product={product} className="aspect-[4/3]" />
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-stone-100 px-2.5 py-1 font-medium text-ink/70">
            {seriesLabels[product.series]}
          </span>
          {product.isLimited ? (
            <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-800">
              限量
            </span>
          ) : null}
          <span className="rounded-full bg-sage/40 px-2.5 py-1 font-medium text-emerald-900">
            {stockLabels[product.stockStatus]}
          </span>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold leading-snug text-ink group-hover:text-rose-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/62">
          {product.meaning}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-200 px-2.5 py-1 text-xs text-ink/58"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="text-xl font-semibold text-ink">
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-stone-300 px-4 text-sm font-semibold text-ink/75 transition hover:border-ink hover:text-ink"
            >
              詳情
            </Link>
            <AddToCartButton
              product={product}
              className="px-4"
              testId={`add-to-cart-${product.slug}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
