import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "關於我們｜Luma Beads",
  description:
    "認識 Luma Beads 日月手串的品牌故事，以及星座、幸運色與生日推薦背後的日常配戴概念。"
};

const storyBlocks = [
  {
    title: "為什麼做手串",
    text: "手串小、輕、好搭配，卻能在每天出門時給自己一個清楚的狀態提醒。它不需要很盛大，也能有一點儀式感。"
  },
  {
    title: "為什麼用星座、顏色、生日",
    text: "星座月份、幸運色與生日都容易被理解，也很適合作為送禮線索。它們提供的是選款方向，不是效果承諾。"
  },
  {
    title: "為什麼是固定設計款",
    text: "固定款式讓選擇更簡單，也讓每一款能保持完整配色與比例。你只需要挑選最適合自己或朋友的款式。"
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle eyebrow="ABOUT" title="關於 Luma Beads">
            不是迷信，而是把每天的心情、顏色與祝福戴在手上。
          </SectionTitle>
          <div className="space-y-5 text-base leading-8 text-ink/66">
            <p>
              Luma Beads｜日月手串是一個以日常飾品為核心的年輕品牌。我們希望手串不只是搭配衣服的小物，也能成為生日禮物、生活轉換期的紀念，或某一天出門前給自己的提醒。
            </p>
            <p>
              每一款手串都是預先設計好的固定款式，從顏色、珠材比例到整體氣質都已完成搭配。你可以透過星座月份、幸運色或生日月份找到推薦款式，但不需要自行選珠或調整設計。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {storyBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-ink">{block.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/62">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            讓選擇變簡單，讓禮物更有感
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/64 sm:mt-4 sm:text-base sm:leading-7">
            我們不承諾任何實際功效，但相信一件有意義的小物，可以陪你記得今天想成為什麼樣子。
          </p>
          <Link
            href="/finder"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 font-semibold text-white shadow-soft"
          >
            找你的手串
          </Link>
        </div>
      </section>
    </>
  );
}
