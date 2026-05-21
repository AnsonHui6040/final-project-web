import Link from "next/link";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductImage } from "@/components/ProductImage";
import { SectionTitle } from "@/components/SectionTitle";

const series = [
  {
    title: "星座月份系列",
    text: "依照星座與出生月份設計的日常手串，適合作為自己的風格象徵，也適合作為生日禮物。",
    href: "/finder?tab=zodiac",
    accent: "bg-rose/45"
  },
  {
    title: "幸運色系列",
    text: "從顏色出發，選擇今天想帶在身上的狀態。紅色代表行動力，藍色代表專注，粉色代表溫柔。",
    href: "/finder?tab=color",
    accent: "bg-sky/45"
  },
  {
    title: "生日推薦系列",
    text: "根據出生月份推薦固定款式，不需要思考搭配，也能快速找到有紀念感的生日手串。",
    href: "/finder?tab=birthday",
    accent: "bg-gold/40"
  },
  {
    title: "限量祈福系列",
    text: "以祝福、紀念與陪伴為設計概念，限量製作，售完不一定補貨。",
    href: "/limited",
    accent: "bg-lilac/55"
  }
];

const featuredProducts = products.filter((product) =>
  ["aries-fire-red-bracelet", "blue-focus-bracelet", "june-moonlight-birthday-bracelet"].includes(
    product.slug
  )
);

export default function HomePage() {
  const heroProduct = products[0];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100svh-132px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white bg-white/70 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              Luma Beads｜日月手串
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
              把今天的顏色、生日與祝福戴在手上
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
              根據星座月份、幸運色與生日推薦，從固定設計款中找到適合你的日常手串。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/finder"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black"
              >
                找我的手串
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 text-base font-semibold text-ink transition hover:border-ink"
              >
                查看全部商品
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[560px]">
            <ProductImage
              product={heroProduct}
              className="absolute inset-x-0 top-8 aspect-[4/5] shadow-soft sm:inset-x-10 lg:inset-x-0"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/80 bg-white/78 p-4 shadow-soft backdrop-blur sm:left-10 sm:right-10 lg:left-8 lg:right-8">
              <p className="text-sm font-semibold text-ink">{heroProduct.name}</p>
              <p className="mt-1 text-sm text-ink/60">{heroProduct.meaning}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="SERIES" title="四個入口，找到剛好適合的款式">
            每一款都是預先設計好的固定款式，讓你不用煩惱搭配，也能快速找到適合自己的風格。
          </SectionTitle>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {series.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className={`mb-5 block h-2 w-16 rounded-full ${item.accent}`} />
                <h3 className="text-xl font-semibold text-ink group-hover:text-rose-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle eyebrow="BEST SELLERS" title="熱賣商品" />
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-stone-300 bg-white px-5 text-sm font-semibold text-ink transition hover:border-ink"
            >
              查看全部商品
            </Link>
          </div>
          <div className="mt-9">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionTitle eyebrow="STORY" title="不是迷信，而是日常裡的小提醒" tone="dark">
            Luma Beads 相信，一件有意義的小物可以成為每天的提醒與陪伴。星座、顏色與生日是選擇的起點，不是承諾效果的答案。
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {["固定設計款", "送禮好選擇", "限量祝福感"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/12 bg-white/8 p-5"
              >
                <p className="text-lg font-semibold">{item}</p>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  乾淨、有質感，適合學生族群與年輕上班族的生活飾品。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            今天想把什麼狀態戴在手上？
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/64">
            從星座月份、幸運色或生日推薦開始，看看目前有哪些現有款式適合你。
          </p>
          <Link
            href="/finder"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black"
          >
            立即找你的手串
          </Link>
        </div>
      </section>
    </>
  );
}
