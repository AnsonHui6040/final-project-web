import type { Metadata } from "next";
import { ProductCatalogPageClient } from "@/components/ProductCatalogPageClient";

export const metadata: Metadata = {
  title: "Curated Shop｜Luma Beads",
  description:
    "瀏覽 Luma Beads 以情緒狀態、個人特質與送禮儀式設計的精選手串。"
};

export default function ProductsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductCatalogPageClient />
      </div>
    </section>
  );
}
