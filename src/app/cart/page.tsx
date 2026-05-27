import type { Metadata } from "next";
import { CartPageShell } from "@/components/CartPageShell";

export const metadata: Metadata = {
  title: "購物車｜Luma Beads",
  description: "確認 Luma Beads 手串購物車商品、數量與小計。"
};

export default function CartPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CartPageShell />
      </div>
    </section>
  );
}
