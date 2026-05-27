"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductImage } from "@/components/ProductImage";
import { SectionTitle } from "@/components/SectionTitle";
import { useI18n } from "@/lib/i18n";

const states = [
  {
    titleKey: "calm",
    textKey: "calmText",
    href: "/products/cancer-moon-pearl-bracelet"
  },
  {
    titleKey: "boundary",
    textKey: "boundaryText",
    href: "/products/black-boundary-bracelet"
  },
  {
    titleKey: "tenderness",
    textKey: "tendernessText",
    href: "/products/pink-kindness-bracelet"
  },
  {
    titleKey: "newLight",
    textKey: "newLightText",
    href: "/products/new-start-limited-bracelet"
  }
 ] as const;

const rituals = [
  "依照生日、星座、顏色與當下狀態找出象徵線索",
  "在既有精選款中選擇最貼近生活場景的配色",
  "以束口袋、描圖紙與 aura card 完成送禮儀式"
];

const editorialMoments = [
  "上課前的冷白晨光",
  "通勤包裡的柔軟布料",
  "咖啡店窗邊的安靜休息",
  "送出前最後一次整理卡片"
];

const featuredProducts = products.filter((product) =>
  [
    "cancer-moon-pearl-bracelet",
    "pink-kindness-bracelet",
    "black-boundary-bracelet"
  ].includes(product.slug)
);

export default function HomePage() {
  const { t } = useI18n();
  const heroProduct = products.find(
    (product) => product.slug === "pink-kindness-bracelet"
  ) ?? products[0];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-porcelain">
        <Image
          src="/images/luma-editorial-hero.png"
          alt="配戴 Luma Beads 手串的晨光生活情境"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.78]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,37,34,0.82),rgba(43,37,34,0.36)_48%,rgba(43,37,34,0.08))]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-118px)] max-w-7xl items-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-bone/80">
              {t("homeEyebrow")}
            </p>
            <h1 className="font-serif text-6xl leading-[0.95] text-porcelain sm:text-7xl lg:text-8xl">
              {t("homeTitle")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-porcelain/78 sm:text-xl">
              {t("homeIntro")}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/finder"
                className="inline-flex min-h-12 items-center justify-center bg-porcelain px-7 text-sm font-semibold text-ink transition hover:bg-white"
              >
                {t("startGuide")}
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center border border-porcelain/55 px-7 text-sm font-semibold text-porcelain transition hover:border-porcelain hover:bg-porcelain/10"
              >
                {t("curatedShop")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-porcelain py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle eyebrow={t("philosophy")} title={t("philosophyTitle")}>
            {t("philosophyBody")}
          </SectionTitle>
          <div className="grid gap-6 text-base leading-8 text-ink/68 sm:grid-cols-2">
            <p>
              我們不把手串做成誇張的開運物，也不把它變成大量複製的飾品。每一款都從可搭配、可送禮、可被記住的生活場景出發。
            </p>
            <p>
              你選的不是一串珠子，而是今天想帶出門的狀態：安定、界線、溫柔、新開始，或一個只想送給對方的祝福。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow={t("states")} title={t("statesTitle")}>
            {t("statesBody")}
          </SectionTitle>
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-4">
            {states.map((state) => (
              <Link
                key={state.titleKey}
                href={state.href}
                className="group bg-porcelain p-6 transition hover:bg-bone sm:p-7"
              >
                <p className="font-serif text-4xl text-ink sm:text-5xl">
                  {t(state.titleKey)}
                </p>
                <p className="mt-5 min-h-[4.5rem] text-sm leading-6 text-ink/64">
                  {t(state.textKey)}
                </p>
                <span className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
                  {t("enterMood")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow={t("signatures")} title={t("signaturesTitle")}>
              {t("signaturesBody")}
            </SectionTitle>
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center justify-center border border-ink/20 px-5 text-sm font-semibold text-ink transition hover:border-ink"
            >
              {t("viewAll")}
            </Link>
          </div>
          <div className="mt-10">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-porcelain sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden">
            <Image
              src="/images/luma-unboxing-ritual.png"
              alt="Luma Beads 手串開箱、束口袋與 aura card"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-rose-300">
              {t("unboxing")}
            </p>
            <h2 className="font-serif text-5xl leading-tight text-porcelain sm:text-6xl">
              {t("unboxingTitle")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-porcelain/70">
              {t("unboxingBody")}
            </p>
            <ol className="mt-9 grid gap-4">
              {rituals.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/14 pt-4">
                  <span className="font-serif text-3xl text-rose-300">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6 text-porcelain/72">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex flex-col justify-between gap-10">
            <SectionTitle eyebrow={t("lifestyle")} title={t("lifestyleTitle")}>
              {t("lifestyleBody")}
            </SectionTitle>
            <div className="grid gap-px border border-ink/10 bg-ink/10">
              {editorialMoments.map((moment) => (
                <p key={moment} className="bg-porcelain px-5 py-4 text-sm text-ink/68">
                  {moment}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-[0.82fr_1fr]">
            <div className="relative min-h-[520px] overflow-hidden">
              <Image
                src="/images/luma-lifestyle-editorial.png"
                alt="咖啡店窗邊配戴 Luma Beads 手串的生活情境"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end gap-5">
              <ProductImage
                product={heroProduct}
                className="aspect-[4/5] shadow-editorial"
                variant="editorial"
              />
              <div className="bg-porcelain p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">
                  {t("auraNote")}
                </p>
                <p className="mt-4 font-serif text-3xl leading-tight text-ink">
                  A quiet symbol for days when softness still needs structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-700">{t("navGuide")}</p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-ink sm:text-7xl">
            {t("guideTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/64">
            {t("guideBody")}
          </p>
          <Link
            href="/finder"
            className="mt-9 inline-flex min-h-12 items-center justify-center bg-ink px-8 text-sm font-semibold text-porcelain shadow-soft transition hover:bg-brown"
          >
            {t("startGuide")}
          </Link>
        </div>
      </section>
    </>
  );
}
