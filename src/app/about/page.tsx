import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Brand Story｜Luma Beads",
  description:
    "認識 Luma Beads 如何以情緒象徵、手工質感與生活敘事打造 premium indie aura jewelry。"
};

const storyBlocks = [
  {
    title: "Emotional comfort",
    text: "手串小、輕、好搭配，卻能在每天出門時給自己一個清楚的狀態提醒。它不需要很盛大，也能有一點儀式感。"
  },
  {
    title: "Personal aura symbolism",
    text: "星座、顏色與生日是可被理解的個人線索，也很適合作為送禮起點。它們提供的是情緒方向，不是效果承諾。"
  },
  {
    title: "Handcrafted curation",
    text: "精選款式讓每一款能保持完整配色、比例與佩戴氣質。客製化會作為品牌下一階段的高觸感服務延伸。"
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle eyebrow="BRAND STORY" title="Quiet symbols for everyday wear">
            不是迷信，也不是大量複製的飾品，而是把每天的心情、顏色與祝福整理成可佩戴的存在感。
          </SectionTitle>
          <div className="space-y-5 text-base leading-8 text-ink/66">
            <p>
              Luma Beads 是一個以情緒象徵與日常穿搭為核心的年輕飾品品牌。我們希望手串不只是搭配衣服的小物，也能成為生日禮物、生活轉換期的紀念，或某一天出門前給自己的提醒。
            </p>
            <p>
              每一款手串都從顏色、珠材比例、佩戴情境與送禮儀式出發。你可以透過星座、幸運色或生日月份找到推薦款式，讓選擇從個人線索開始，回到真實生活。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {storyBlocks.map((block) => (
            <article
              key={block.title}
              className="border border-ink/10 bg-porcelain p-6 shadow-sm"
            >
              <h2 className="font-serif text-3xl text-ink">{block.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/62">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            讓選擇變安靜，讓禮物更有感
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
