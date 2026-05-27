import type { Metadata } from "next";
import { Suspense } from "react";
import { FinderForm } from "@/components/FinderForm";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Aura Guide｜Luma Beads",
  description:
    "依星座、生日、顏色與當下狀態，推薦 Luma Beads 精選 aura jewelry。"
};

export default function FinderPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="AURA GUIDE" title="Choose the state you want to carry">
          從個人線索開始，找到適合通勤、考試、送禮或新階段的情緒象徵。
        </SectionTitle>
        <div className="mt-9">
          <Suspense fallback={<div className="bg-porcelain p-8">載入推薦中...</div>}>
            <FinderForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
