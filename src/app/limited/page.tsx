import type { Metadata } from "next";
import { products } from "@/data/products";
import { LimitedPageClient } from "@/components/LimitedPageClient";

export const metadata: Metadata = {
  title: "限量祈福手串｜Luma Beads",
  description:
    "Luma Beads 限量祈福系列以祝福、紀念與陪伴為設計概念，限量製作，售完不一定補貨。"
};

const limitedProducts = products.filter((product) => product.series === "limited");

export default function LimitedPage() {
  return <LimitedPageClient limitedProducts={limitedProducts} />;
}
