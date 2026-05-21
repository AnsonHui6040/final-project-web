"use client";

import { useMemo, useState } from "react";
import {
  colorLabels,
  products,
  seriesLabels
} from "@/data/products";
import type { ProductSeries } from "@/types/product";
import { ProductGrid } from "./ProductGrid";

const allSeries = "all";
const allColors = "all";

export function ProductsBrowser() {
  const [series, setSeries] = useState<ProductSeries | typeof allSeries>(
    allSeries
  );
  const [color, setColor] = useState(allColors);
  const [sort, setSort] = useState("featured");

  const colors = Array.from(new Set(products.map((product) => product.color)));

  const filteredProducts = useMemo(() => {
    const nextProducts = products
      .filter((product) => series === allSeries || product.series === series)
      .filter((product) => color === allColors || product.color === color);

    return nextProducts.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return Number(b.isLimited) - Number(a.isLimited);
    });
  }, [color, series, sort]);

  return (
    <div>
      <div className="mb-8 grid gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:grid-cols-3">
        <label className="grid gap-2 text-sm font-semibold text-ink/74">
          系列篩選
          <select
            value={series}
            onChange={(event) =>
              setSeries(event.target.value as ProductSeries | typeof allSeries)
            }
            className="min-h-11 rounded-xl border border-stone-300 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
          >
            <option value={allSeries}>全部系列</option>
            {Object.entries(seriesLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink/74">
          顏色篩選
          <select
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className="min-h-11 rounded-xl border border-stone-300 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
          >
            <option value={allColors}>全部顏色</option>
            {colors.map((colorValue) => (
              <option key={colorValue} value={colorValue}>
                {colorLabels[colorValue] ?? colorValue}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink/74">
          價格排序
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="min-h-11 rounded-xl border border-stone-300 bg-cream px-3 text-sm text-ink outline-none focus:border-ink"
          >
            <option value="featured">推薦排序</option>
            <option value="price-asc">價格由低到高</option>
            <option value="price-desc">價格由高到低</option>
          </select>
        </label>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
