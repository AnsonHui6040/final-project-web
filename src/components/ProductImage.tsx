"use client";

import type { Product } from "@/types/product";
import { useI18n } from "@/lib/i18n";

const imageStyles: Record<string, string> = {
  red: "from-[#efe2d9] via-[#c99a8f] to-[#8b4a3d]",
  pink: "from-[#f4eee9] via-[#d8beb7] to-[#b8837a]",
  yellow: "from-[#f2eadc] via-[#c4a46f] to-[#78624a]",
  green: "from-[#eef0e8] via-[#a8b2a3] to-[#5e6558]",
  blue: "from-[#eef1ef] via-[#a9b8bc] to-[#67777c]",
  purple: "from-[#f0ece8] via-[#cbc4c0] to-[#7c7371]",
  black: "from-[#d8d2c9] via-[#6f625a] to-[#2b2522]",
  white: "from-[#fbf8f3] via-[#e6ddd2] to-[#c8ada5]",
  gray: "from-[#efebe4] via-[#b4a79a] to-[#6f625a]",
  gold: "from-[#f2eadc] via-[#8a735b] to-[#4c4039]"
};

const beadStyles: Record<string, string[]> = {
  red: ["bg-[#8b4a3d]", "bg-[#c99a8f]", "bg-[#efe2d9]", "bg-[#b46b5e]"],
  pink: ["bg-[#d8beb7]", "bg-[#c8ada5]", "bg-[#fbf8f3]", "bg-[#b8837a]"],
  yellow: ["bg-[#c4a46f]", "bg-[#8a735b]", "bg-[#fbf8f3]", "bg-[#e2cfaa]"],
  green: ["bg-[#a8b2a3]", "bg-[#5e6558]", "bg-[#fbf8f3]", "bg-[#c7d0c1]"],
  blue: ["bg-[#a9b8bc]", "bg-[#67777c]", "bg-[#fbf8f3]", "bg-[#cdd7d8]"],
  purple: ["bg-[#cbc4c0]", "bg-[#7c7371]", "bg-[#fbf8f3]", "bg-[#d8c8cc]"],
  black: ["bg-[#2b2522]", "bg-[#6f625a]", "bg-[#e6ddd2]", "bg-[#8a735b]"],
  white: ["bg-[#fbf8f3]", "bg-[#e6ddd2]", "bg-[#c8ada5]", "bg-[#8a735b]"],
  gray: ["bg-[#b4a79a]", "bg-[#e6ddd2]", "bg-[#fbf8f3]", "bg-[#6f625a]"],
  gold: ["bg-[#8a735b]", "bg-[#e6ddd2]", "bg-[#fbf8f3]", "bg-[#c4a46f]"]
};

export function ProductImage({
  product,
  className = "",
  variant = "product"
}: {
  product: Product;
  className?: string;
  variant?: "product" | "editorial";
}) {
  const gradient = imageStyles[product.image] ?? imageStyles.white;
  const beads = beadStyles[product.image] ?? beadStyles.white;
  const { productText, t } = useI18n();
  const copy = productText(product);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      aria-label={`${copy.name} ${t("productImage")}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(251,248,243,0.58),rgba(251,248,243,0)_46%),linear-gradient(0deg,rgba(43,37,34,0.18),rgba(43,37,34,0)_38%)]" />
      <div className="absolute left-[8%] top-[12%] h-[56%] w-[46%] -rotate-6 border border-white/30 bg-white/18 backdrop-blur-[1px]" />
      <div className="absolute bottom-[8%] right-[7%] h-[34%] w-[44%] rotate-3 border border-white/25 bg-ink/8" />
      <div className="absolute inset-x-[14%] top-1/2 h-px bg-white/58" />
      <div className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center ${variant === "editorial" ? "gap-3 sm:gap-4" : "gap-2 sm:gap-3"}`}>
        {[...Array(12)].map((_, index) => (
          <span
            key={index}
            className={`block rounded-full border border-white/70 shadow-[inset_0_2px_7px_rgba(255,255,255,0.72),0_8px_18px_rgba(44,35,31,0.20)] ${
              variant === "editorial" ? "h-8 w-8 sm:h-10 sm:w-10" : "h-6 w-6 sm:h-8 sm:w-8"
            } ${
              beads[index % beads.length]
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 border border-white/60 bg-porcelain/80 px-3 py-1 text-xs font-medium text-ink/68 backdrop-blur">
        {t("handcraftedPiece")}
      </div>
    </div>
  );
}
