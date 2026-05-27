"use client";

import { CartPageClient } from "@/components/CartPageClient";
import { SectionTitle } from "@/components/SectionTitle";
import { useI18n } from "@/lib/i18n";

export function CartPageShell() {
  const { t } = useI18n();

  return (
    <>
      <SectionTitle eyebrow={t("cart")} title={t("cartTitle")}>
        {t("cartBody")}
      </SectionTitle>
      <div className="mt-9">
        <CartPageClient />
      </div>
    </>
  );
}
