import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "限量祈福手串｜Luma Beads",
  description:
    "Luma Beads 限量祈福系列以祝福、紀念與陪伴為設計概念，限量製作，售完不一定補貨。"
};

const limitedProducts = products.filter((product) => product.series === "limited");

export default function LimitedPage() {
  return (
    <>
      <section className="bg-white/60 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <SectionTitle eyebrow="LIMITED" title="限量祈福系列">
            祈福系列以祝福、紀念與陪伴為設計概念。每一款皆為限量製作，適合送給自己，也適合作為重要時刻的禮物。
          </SectionTitle>
          <div className="rounded-2xl border border-stone-200 bg-cream p-6">
            <p className="text-xl font-semibold text-ink">限量製作，售完不一定補貨</p>
            <p className="mt-4 text-base leading-7 text-ink/64">
              我們不承諾任何實際功效，但相信一件有意義的小物，可以成為每天的提醒與陪伴。這個系列更重視情感價值、收藏感與送禮時的心意。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["象徵祝福", "作為提醒", "重要時刻禮物"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 bg-white px-4 py-3 text-center text-sm font-semibold text-ink/74"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={limitedProducts} />
        </div>
      </section>

      <section className="bg-ink py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            {
              title: "送禮建議",
              text: "適合畢業、考試、旅行、轉職、搬家或生日後的新階段。"
            },
            {
              title: "商品故事",
              text: "每款以一個祝福概念出發，搭配耐看的日常配色。"
            },
            {
              title: "購買提醒",
              text: "限量數量會顯示於商品頁，售完後不一定安排補貨。"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/12 bg-white/8 p-6"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
