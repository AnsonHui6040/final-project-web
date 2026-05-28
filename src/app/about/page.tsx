import type { Metadata } from "next";
import { AboutPageClient } from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "Brand Story｜Luma Beads",
  description:
    "認識 Luma Beads 如何以情緒象徵、手工質感與生活敘事打造 premium indie aura jewelry。"
};

export default function AboutPage() {
  return <AboutPageClient />;
}
