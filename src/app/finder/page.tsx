import type { Metadata } from "next";
import { FinderPageShell } from "@/components/FinderPageShell";

export const metadata: Metadata = {
  title: "Aura Guide｜Luma Beads",
  description:
    "依星座、生日、顏色與當下狀態，推薦 Luma Beads 精選 aura jewelry。"
};

export default function FinderPage() {
  return <FinderPageShell />;
}
