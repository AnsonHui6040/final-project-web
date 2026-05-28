"use client";

import type { Product } from "@/types/product";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { useI18n } from "@/lib/i18n";

const pills = ["limitedPillOne", "limitedPillTwo", "limitedPillThree"] as const;

const infoBlocks = [
  {
    titleKey: "limitedInfoOneTitle",
    textKey: "limitedInfoOneText"
  },
  {
    titleKey: "limitedInfoTwoTitle",
    textKey: "limitedInfoTwoText"
  },
  {
    titleKey: "limitedInfoThreeTitle",
    textKey: "limitedInfoThreeText"
  }
] as const;

export function LimitedPageClient({
  limitedProducts
}: {
  limitedProducts: Product[];
}) {
  const { t } = useI18n();

  return (
    <>
      <section className="bg-white/60 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <SectionTitle eyebrow={t("limited")} title={t("limitedTitle")}>
            {t("limitedBody")}
          </SectionTitle>
          <div className="rounded-2xl border border-stone-200 bg-cream p-6">
            <p className="text-xl font-semibold text-ink">{t("limitedCardTitle")}</p>
            <p className="mt-4 text-base leading-7 text-ink/64">
              {t("limitedCardBody")}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {pills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 bg-white px-4 py-3 text-center text-sm font-semibold text-ink/74"
                >
                  {t(item)}
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
          {infoBlocks.map((item) => (
            <div
              key={item.titleKey}
              className="rounded-2xl border border-white/12 bg-white/8 p-6"
            >
              <h2 className="text-xl font-semibold">{t(item.titleKey)}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{t(item.textKey)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
