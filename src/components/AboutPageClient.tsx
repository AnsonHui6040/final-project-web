"use client";

import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { useI18n } from "@/lib/i18n";

const storyBlocks = [
  {
    titleKey: "aboutBlockOneTitle",
    textKey: "aboutBlockOneText"
  },
  {
    titleKey: "aboutBlockTwoTitle",
    textKey: "aboutBlockTwoText"
  },
  {
    titleKey: "aboutBlockThreeTitle",
    textKey: "aboutBlockThreeText"
  }
] as const;

export function AboutPageClient() {
  const { t } = useI18n();

  return (
    <>
      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle eyebrow={t("aboutEyebrow")} title={t("aboutTitle")}>
            {t("aboutIntro")}
          </SectionTitle>
          <div className="space-y-5 text-base leading-8 text-ink/66">
            <p>{t("aboutBodyA")}</p>
            <p>{t("aboutBodyB")}</p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {storyBlocks.map((block) => (
            <article
              key={block.titleKey}
              className="border border-ink/10 bg-porcelain p-6 shadow-sm"
            >
              <h2 className="font-serif text-3xl text-ink">{t(block.titleKey)}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/62">{t(block.textKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            {t("aboutCtaTitle")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/64 sm:mt-4 sm:text-base sm:leading-7">
            {t("aboutCtaBody")}
          </p>
          <Link
            href="/finder"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 font-semibold text-white shadow-soft"
          >
            {t("findYourPiece")}
          </Link>
        </div>
      </section>
    </>
  );
}
