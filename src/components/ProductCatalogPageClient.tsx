"use client";

import { ProductsBrowser } from "@/components/ProductsBrowser";
import { SectionTitle } from "@/components/SectionTitle";
import { useI18n } from "@/lib/i18n";

export function ProductCatalogPageClient() {
  const { t } = useI18n();

  return (
    <>
      <SectionTitle eyebrow={t("curatedShop")} title={t("productPageTitle")}>
        {t("productPageBody")}
      </SectionTitle>
      <div className="mt-9">
        <ProductsBrowser />
      </div>
    </>
  );
}
