import type { Metadata } from "next";
import { CartPageClient } from "@/components/CartPageClient";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "購物車｜Luma Beads",
  description: "確認 Luma Beads 手串購物車商品、數量與小計。"
};

export default function CartPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="CART" title="購物車">
          確認商品、數量與金額。正式金流開放前，可先透過社群或表單完成預購。
        </SectionTitle>
        <div className="mt-9">
          <CartPageClient />
        </div>
      </div>
    </section>
  );
}
