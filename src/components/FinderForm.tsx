"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  colorLabels,
  products,
  zodiacOptions
} from "@/data/products";
import { ProductGrid } from "./ProductGrid";

type FinderTab = "zodiac" | "color" | "birthday";

const tabs: { id: FinderTab; label: string }[] = [
  { id: "zodiac", label: "Zodiac" },
  { id: "color", label: "Aura" },
  { id: "birthday", label: "Birthday" }
];

const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);

export function FinderForm() {
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
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "zodiac" ? (
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-ink/74">
                選擇星座
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
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink/74">
                或選擇出生月份
                <select
                  value={zodiacMonth}
                  onChange={(event) => setZodiacMonth(Number(event.target.value))}
                  className="min-h-11 border border-ink/15 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
                >
                  {monthOptions.map((month) => (
                    <option key={month} value={month}>
                      {month} 月
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
                  {colorLabels[colorValue] ?? colorValue}
                </button>
              ))}
            </div>
          ) : null}

          {tab === "birthday" ? (
            <label className="grid gap-2 text-sm font-semibold text-ink/74">
              出生月份
              <select
                value={birthdayMonth}
                onChange={(event) => setBirthdayMonth(Number(event.target.value))}
                className="min-h-11 border border-ink/15 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
              >
                {monthOptions.map((month) => (
                  <option key={month} value={month}>
                    {month} 月
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <p className="mt-6 bg-cream p-4 text-sm leading-6 text-ink/62">
          這是一段 aura guide：用個人線索找到最貼近當下生活狀態的精選款式。
        </p>
      </aside>

      <section>
        <div className="mb-6 border border-ink/10 bg-porcelain p-5">
          <h2 className="font-serif text-3xl text-ink">Recommended pieces</h2>
          <p className="mt-2 text-sm leading-6 text-ink/62">
            以下依照你的線索推薦最接近的情緒配色與佩戴狀態。
          </p>
          {!exact ? (
            <p className="mt-3 bg-bone px-4 py-3 text-sm font-medium text-ink/70">
              目前沒有完全對應的款式，以下是相近風格推薦。
            </p>
          ) : null}
        </div>
        <ProductGrid products={recommendations} />
      </section>
    </div>
  );
}
