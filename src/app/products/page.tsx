import type { Metadata } from "next";
import { ProductsBrowser } from "@/components/ProductsBrowser";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "手串商品｜Luma Beads",
  description:
    "瀏覽 Luma Beads 星座月份、幸運色、生日推薦與限量祈福系列手串商品。"
};

export default function ProductsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="PRODUCTS" title="手串商品">
          從星座月份、幸運色、生日推薦與限量祈福系列中，選擇已設計好的日常手串。
        </SectionTitle>
        <div className="mt-9">
          <ProductsBrowser />
        </div>
      </div>
    </section>
  );
}
