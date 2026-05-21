import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  colorLabels,
  formatPrice,
  getProductBySlug,
  products,
  seriesLabels,
  stockLabels
} from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductImage } from "@/components/ProductImage";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params
}: ProductDetailPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { title: "商品不存在" };
  }

  return {
    title: `${product.name}｜Luma Beads`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) => item.id !== product.id && item.series === product.series
    )
    .slice(0, 3);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-6 inline-flex min-h-10 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-ink/70 transition hover:border-ink hover:text-ink"
        >
          返回商品列表
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ProductImage product={product} className="aspect-[4/3] shadow-soft lg:aspect-square" />

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-stone-100 px-3 py-1 font-medium text-ink/68">
                {seriesLabels[product.series]}
              </span>
              <span className="rounded-full bg-sage/40 px-3 py-1 font-medium text-emerald-900">
                {stockLabels[product.stockStatus]}
              </span>
              {product.isLimited ? (
                <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-800">
                  限量 {product.limitedQuantity} 件
                </span>
              ) : null}
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl font-semibold text-ink">
              {formatPrice(product.price)}
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream p-4">
                <dt className="text-xs font-semibold text-ink/50">顏色</dt>
                <dd className="mt-1 font-semibold text-ink">
                  {colorLabels[product.color] ?? product.color}
                </dd>
              </div>
              <div className="rounded-2xl bg-cream p-4">
                <dt className="text-xs font-semibold text-ink/50">適合對象</dt>
                <dd className="mt-1 font-semibold text-ink">
                  {product.tags.slice(0, 2).join("、")}
                </dd>
              </div>
              <div className="rounded-2xl bg-cream p-4 sm:col-span-2">
                <dt className="text-xs font-semibold text-ink/50">象徵意義</dt>
                <dd className="mt-1 font-semibold text-ink">{product.meaning}</dd>
              </div>
            </dl>

            <div className="mt-6 space-y-4 text-base leading-7 text-ink/68">
              <p>{product.description}</p>
              {product.isLimited ? (
                <p>
                  此款為限量製作，售完不一定補貨，適合作為送禮祝福或重要時刻的紀念。
                </p>
              ) : null}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton
                product={product}
                className="min-h-12 px-7 text-base"
                testId="add-current-product"
              />
              <Link
                href="/cart"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-7 text-base font-semibold text-ink transition hover:border-ink"
              >
                查看購物車
              </Link>
            </div>

            <div className="mt-7 rounded-2xl border border-stone-200 bg-cream p-4 text-sm leading-6 text-ink/62">
              <p className="font-semibold text-ink">注意事項</p>
              <p className="mt-2">
                本產品為固定設計款，不提供客製化修改。顏色與象徵意義僅作為風格與情感參考，不代表任何實際效果保證。
              </p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="mt-14">
            <h2 className="mb-6 text-2xl font-semibold text-ink">同系列推薦</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
