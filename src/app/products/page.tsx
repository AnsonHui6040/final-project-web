import type { Metadata } from "next";
import { ProductsBrowser } from "@/components/ProductsBrowser";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Curated Shop｜Luma Beads",
  description:
    "瀏覽 Luma Beads 以情緒狀態、個人特質與送禮儀式設計的精選手串。"
};

export default function ProductsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="CURATED SHOP" title="Pieces for the state you want to carry">
          從生日、星座、顏色與當下心情開始，選擇一件能進入日常穿搭的情緒護符。
        </SectionTitle>
        <div className="mt-9">
          <ProductsBrowser />
        </div>
      </div>
    </section>
  );
}
