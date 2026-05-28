"use client";

import Link from "next/link";
import { formatPrice } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import type { Product } from "@/types/product";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductImage } from "@/components/ProductImage";

export function ProductDetailPageClient({
  product,
  relatedProducts
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const {
    colorLabel,
    locale,
    productText,
    seriesLabel,
    stockLabel,
    t
  } = useI18n();
  const copy = productText(product);
  const tagSeparator = locale === "zh" ? "、" : ", ";

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-6 inline-flex min-h-10 items-center border border-ink/15 bg-porcelain px-4 text-sm font-semibold text-ink/70 transition hover:border-ink hover:text-ink"
        >
          {t("backToShop")}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ProductImage product={product} className="aspect-[4/3] shadow-editorial lg:aspect-square" variant="editorial" />

          <div className="border border-ink/10 bg-porcelain p-6 shadow-sm sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-ink/50">
              <span className="border border-ink/10 px-3 py-1 font-medium">
                {seriesLabel(product.series)}
              </span>
              <span className="border border-ink/10 px-3 py-1 font-medium">
                {stockLabel(product.stockStatus)}
              </span>
              {product.isLimited ? (
                <span className="border border-rose-300 px-3 py-1 font-semibold text-rose-700">
                  {t("limitedPieces").replace("{count}", String(product.limitedQuantity))}
                </span>
              ) : null}
            </div>

            <h1 className="font-serif text-4xl leading-tight text-ink sm:text-6xl">
              {copy.name}
            </h1>
            <p className="mt-4 text-base font-semibold text-ink/58">
              {formatPrice(product.price)}
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="bg-cream p-4">
                <dt className="text-xs font-semibold text-ink/50">{t("color")}</dt>
                <dd className="mt-1 font-semibold text-ink">
                  {colorLabel(product.color)}
                </dd>
              </div>
              <div className="bg-cream p-4">
                <dt className="text-xs font-semibold text-ink/50">{t("lifestyleCues")}</dt>
                <dd className="mt-1 font-semibold text-ink">
                  {copy.tags.slice(0, 2).join(tagSeparator)}
                </dd>
              </div>
              <div className="bg-cream p-4 sm:col-span-2">
                <dt className="text-xs font-semibold text-ink/50">{t("meaning")}</dt>
                <dd className="mt-1 font-semibold text-ink">{copy.meaning}</dd>
              </div>
            </dl>

            <div className="mt-6 space-y-4 text-base leading-7 text-ink/68">
              <p>{copy.description}</p>
              {product.isLimited ? <p>{t("limitedProductNote")}</p> : null}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton
                product={product}
                className="min-h-12 px-7 text-base"
                testId="add-current-product"
              />
              <Link
                href="/cart"
                className="inline-flex min-h-12 items-center justify-center border border-ink/15 px-7 text-base font-semibold text-ink transition hover:border-ink"
              >
                {t("viewCart")}
              </Link>
            </div>

            <div className="mt-7 border border-ink/10 bg-cream p-4 text-sm leading-6 text-ink/62">
              <p className="font-semibold text-ink">{t("auraNote")}</p>
              <p className="mt-2">{t("productAuraNote")}</p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="mt-14">
            <h2 className="mb-6 text-2xl font-semibold text-ink">
              {t("relatedPieces")}
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
