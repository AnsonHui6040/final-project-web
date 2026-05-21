import type { Metadata } from "next";
import { Suspense } from "react";
import { FinderForm } from "@/components/FinderForm";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "找你的手串｜星座、幸運色與生日推薦",
  description:
    "依星座月份、幸運色或生日月份，推薦 Luma Beads 現有固定設計款手串。"
};

export default function FinderPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FINDER" title="找你的手串">
          選擇星座月份、幸運色或生日月份，從現有固定款式中找到適合日常配戴或送禮的手串。
        </SectionTitle>
        <div className="mt-9">
          <Suspense fallback={<div className="rounded-2xl bg-white p-8">載入推薦中...</div>}>
            <FinderForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
