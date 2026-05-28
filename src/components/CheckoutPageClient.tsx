"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function CheckoutPageClient() {
  const { t } = useI18n();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-rose-500">
            {t("preorder")}
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-ink sm:text-4xl">
            {t("checkoutThanks")}
          </h1>
          <p className="mt-3 text-sm leading-6 text-ink/64 sm:mt-4 sm:text-base sm:leading-7">
            {t("checkoutBody")}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href="https://www.instagram.com/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 font-semibold text-white"
            >
              {t("instagramOrder")}
            </a>
            <a
              href="https://line.me/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-5 font-semibold text-ink"
            >
              {t("lineOrder")}
            </a>
            <a
              href="https://forms.google.com/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-5 font-semibold text-ink"
            >
              {t("googleFormOrder")}
            </a>
          </div>
          <Link
            href="/products"
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-ink/68 hover:text-ink"
          >
            {t("continueShopping")}
          </Link>
        </div>
      </div>
    </section>
  );
}
