"use client";

import type { Product } from "@/types/product";
import { useI18n } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  const { t } = useI18n();

  if (products.length === 0) {
    return (
      <div className="border border-dashed border-ink/20 bg-porcelain/70 p-8 text-center text-ink/62">
        {t("noProducts")}
      </div>
    );
  }

  return (
    <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
