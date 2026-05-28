"use client";

import { Suspense } from "react";
import { FinderForm } from "@/components/FinderForm";
import { SectionTitle } from "@/components/SectionTitle";
import { useI18n } from "@/lib/i18n";

export function FinderPageShell() {
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t("finderEyebrow")} title={t("finderTitle")}>
          {t("finderBody")}
        </SectionTitle>
        <div className="mt-9">
          <Suspense fallback={<div className="bg-porcelain p-8">{t("finderLoading")}</div>}>
            <FinderForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
