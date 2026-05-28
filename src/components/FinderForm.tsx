"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, zodiacOptions } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { ProductGrid } from "./ProductGrid";

type FinderTab = "zodiac" | "color" | "birthday";

const tabs: { id: FinderTab; labelKey: "tabZodiac" | "tabAura" | "tabBirthday" }[] = [
  { id: "zodiac", labelKey: "tabZodiac" },
  { id: "color", labelKey: "tabAura" },
  { id: "birthday", labelKey: "tabBirthday" }
];

const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);

export function FinderForm() {
  const { colorLabel, monthLabel, t, zodiacLabel } = useI18n();
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as FinderTab | null) ?? "zodiac";
  const [tab, setTab] = useState<FinderTab>(
    tabs.some((item) => item.id === initialTab) ? initialTab : "zodiac"
  );
  const [zodiac, setZodiac] = useState("Aries");
  const [zodiacMonth, setZodiacMonth] = useState(3);
  const [color, setColor] = useState("blue");
  const [birthdayMonth, setBirthdayMonth] = useState(6);

  const colors = Array.from(new Set(products.map((product) => product.color)));

  const { exact, recommendations } = useMemo(() => {
    if (tab === "zodiac") {
      const matches = products.filter(
        (product) =>
          product.series === "zodiac" &&
          (product.zodiac === zodiac || product.birthMonth === zodiacMonth)
      );
      const fallback = products.filter((product) => product.series === "zodiac").slice(0, 3);
      return { exact: matches.length > 0, recommendations: matches.length ? matches : fallback };
    }

    if (tab === "color") {
      const matches = products.filter((product) => product.color === color);
      const fallback = products
        .filter((product) => product.series === "color")
        .slice(0, 3);
      return { exact: matches.length > 0, recommendations: matches.length ? matches : fallback };
    }

    const matches = products.filter(
      (product) =>
        product.series === "birthday" && product.birthMonth === birthdayMonth
    );
    const fallback = products
      .filter((product) => product.series === "birthday")
      .slice(0, 3);
    return { exact: matches.length > 0, recommendations: matches.length ? matches : fallback };
  }, [birthdayMonth, color, tab, zodiac, zodiacMonth]);

  return (
    <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
      <aside className="self-start border border-ink/10 bg-porcelain p-5 shadow-sm">
        <div className="grid grid-cols-3 bg-cream p-1">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`min-h-10 px-3 text-sm font-semibold transition ${
                tab === item.id ? "bg-ink text-porcelain shadow-sm" : "text-ink/58"
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "zodiac" ? (
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-ink/74">
                {t("chooseZodiac")}
                <select
                  value={zodiac}
                  onChange={(event) => {
                    const next = zodiacOptions.find(
                      (option) => option.value === event.target.value
                    );
                    setZodiac(event.target.value);
                    if (next) setZodiacMonth(next.month);
                  }}
                  className="min-h-11 border border-ink/15 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
                >
                  {zodiacOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {zodiacLabel(option.value)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink/74">
                {t("chooseBirthMonthOptional")}
                <select
                  value={zodiacMonth}
                  onChange={(event) => setZodiacMonth(Number(event.target.value))}
                  className="min-h-11 border border-ink/15 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
                >
                  {monthOptions.map((month) => (
                    <option key={month} value={month}>
                      {monthLabel(month)}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          {tab === "color" ? (
            <div className="grid grid-cols-2 gap-3">
              {colors.map((colorValue) => (
                <button
                  key={colorValue}
                  type="button"
                  onClick={() => setColor(colorValue)}
                  className={`min-h-11 border px-3 text-sm font-semibold transition ${
                    color === colorValue
                      ? "border-ink bg-ink text-porcelain"
                      : "border-ink/15 bg-cream text-ink/72 hover:border-ink"
                  }`}
                >
                  {colorLabel(colorValue)}
                </button>
              ))}
            </div>
          ) : null}

          {tab === "birthday" ? (
            <label className="grid gap-2 text-sm font-semibold text-ink/74">
              {t("birthMonth")}
              <select
                value={birthdayMonth}
                onChange={(event) => setBirthdayMonth(Number(event.target.value))}
                className="min-h-11 border border-ink/15 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
              >
                {monthOptions.map((month) => (
                  <option key={month} value={month}>
                    {monthLabel(month)}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <p className="mt-6 bg-cream p-4 text-sm leading-6 text-ink/62">
          {t("finderHint")}
        </p>
      </aside>

      <section>
        <div className="mb-6 border border-ink/10 bg-porcelain p-5">
          <h2 className="font-serif text-3xl text-ink">{t("recommendedPieces")}</h2>
          <p className="mt-2 text-sm leading-6 text-ink/62">
            {t("finderResultBody")}
          </p>
          {!exact ? (
            <p className="mt-3 bg-bone px-4 py-3 text-sm font-medium text-ink/70">
              {t("finderFallback")}
            </p>
          ) : null}
        </div>
        <ProductGrid products={recommendations} />
      </section>
    </div>
  );
}
