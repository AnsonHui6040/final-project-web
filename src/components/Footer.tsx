"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-ink/10 bg-ink text-porcelain">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-[calc(10rem+env(safe-area-inset-bottom))] pt-12 sm:px-6 md:grid-cols-[1.25fr_0.8fr_1fr] md:py-12 lg:px-8">
        <div>
          <p className="font-serif text-4xl text-porcelain">Luma Beads</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-porcelain/62">
            {t("footerBody")}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-300">{t("explore")}</p>
          <div className="mt-4 grid gap-2 text-sm text-porcelain/64">
            <Link href="/products">{t("curatedShop")}</Link>
            <Link href="/finder">{t("navGuide")}</Link>
            <Link href="/limited">{t("navLimited")}</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-300">{t("note")}</p>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-porcelain/62">
            <p>{t("footerNoteA")}</p>
            <p>{t("footerNoteB")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
