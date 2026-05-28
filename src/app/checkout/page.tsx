import type { Metadata } from "next";
import { CheckoutPageClient } from "@/components/CheckoutPageClient";

export const metadata: Metadata = {
  title: "預購下單｜Luma Beads",
  description: "Luma Beads MVP 預購下單入口。"
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
