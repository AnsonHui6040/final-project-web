import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  products
} from "@/data/products";
import { ProductDetailPageClient } from "@/components/ProductDetailPageClient";

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

  return <ProductDetailPageClient product={product} relatedProducts={relatedProducts} />;
}
