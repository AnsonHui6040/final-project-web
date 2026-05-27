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
      <div className="mb-10 grid gap-3 border border-ink/10 bg-porcelain p-4 md:grid-cols-3">
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/56">
          Collection
          <select
            value={series}
            onChange={(event) =>
              setSeries(event.target.value as ProductSeries | typeof allSeries)
            }
            className="min-h-11 border border-ink/15 bg-cream px-3 text-sm normal-case tracking-normal text-ink outline-none focus:border-ink"
          >
            <option value={allSeries}>All collections</option>
            {Object.entries(seriesLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/56">
          Aura tone
          <select
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className="min-h-11 border border-ink/15 bg-cream px-3 text-sm normal-case tracking-normal text-ink outline-none focus:border-ink"
          >
            <option value={allColors}>All tones</option>
            {colors.map((colorValue) => (
              <option key={colorValue} value={colorValue}>
                {colorLabels[colorValue] ?? colorValue}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/56">
          Curation
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="min-h-11 border border-ink/15 bg-cream px-3 text-sm normal-case tracking-normal text-ink outline-none focus:border-ink"
          >
            <option value="featured">Editorial first</option>
            <option value="price-asc">Everyday entry</option>
            <option value="price-desc">Gift pieces</option>
          </select>
        </label>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
