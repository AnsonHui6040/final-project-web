import Link from "next/link";
import { formatPrice, seriesLabels } from "@/data/products";
import type { Product } from "@/types/product";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-porcelain transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <Link href={`/products/${product.slug}`} className="block p-3">
        <ProductImage product={product} className="aspect-[4/5]" />
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-ink/46">
          <span>{seriesLabels[product.series]}</span>
          {product.isLimited ? (
            <span className="font-semibold text-rose-700">
              Limited
            </span>
          ) : null}
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-2xl leading-tight text-ink group-hover:text-rose-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink/62">
          {product.meaning}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-ink/10 px-2.5 py-1 text-xs text-ink/52"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-7">
          <p className="text-sm font-semibold text-ink/58">
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex min-h-10 items-center justify-center border border-ink/20 px-4 text-sm font-semibold text-ink/72 transition hover:border-ink hover:text-ink"
            >
              View
            </Link>
            <AddToCartButton
              product={product}
              className="min-h-10 px-4 text-sm"
              testId={`add-to-cart-${product.slug}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
