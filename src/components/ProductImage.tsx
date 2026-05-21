import type { Product } from "@/types/product";

const imageStyles: Record<string, string> = {
  red: "from-rose-100 via-red-200 to-amber-100",
  pink: "from-pink-100 via-rose to-white",
  yellow: "from-yellow-100 via-gold to-white",
  green: "from-emerald-100 via-sage to-white",
  blue: "from-sky-100 via-sky to-white",
  purple: "from-violet-100 via-lilac to-white",
  black: "from-zinc-200 via-zinc-500 to-stone-100",
  white: "from-white via-stone-100 to-lilac",
  gray: "from-slate-100 via-slate-300 to-white",
  gold: "from-yellow-50 via-gold to-white"
};

const beadStyles: Record<string, string[]> = {
  red: ["bg-red-500", "bg-rose-300", "bg-amber-200", "bg-red-700"],
  pink: ["bg-pink-300", "bg-rose", "bg-white", "bg-pink-200"],
  yellow: ["bg-yellow-300", "bg-gold", "bg-white", "bg-amber-200"],
  green: ["bg-emerald-400", "bg-sage", "bg-white", "bg-green-700"],
  blue: ["bg-sky-300", "bg-blue-500", "bg-white", "bg-sky"],
  purple: ["bg-violet-300", "bg-purple-700", "bg-white", "bg-lilac"],
  black: ["bg-zinc-900", "bg-zinc-500", "bg-stone-200", "bg-gold"],
  white: ["bg-white", "bg-stone-100", "bg-lilac", "bg-gold"],
  gray: ["bg-slate-400", "bg-slate-200", "bg-white", "bg-zinc-500"],
  gold: ["bg-gold", "bg-yellow-100", "bg-white", "bg-amber-500"]
};

export function ProductImage({
  product,
  className = ""
}: {
  product: Product;
  className?: string;
}) {
  const gradient = imageStyles[product.image] ?? imageStyles.white;
  const beads = beadStyles[product.image] ?? beadStyles.white;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${gradient} ${className}`}
      aria-label={`${product.name} 商品圖片佔位圖`}
    >
      <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-white/45 blur-xl" />
      <div className="absolute bottom-5 right-5 h-24 w-24 rounded-full bg-white/35 blur-2xl" />
      <div className="absolute inset-x-6 top-1/2 h-px bg-white/65" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:gap-3">
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className={`block h-7 w-7 rounded-full border border-white/70 shadow-[inset_0_2px_7px_rgba(255,255,255,0.75),0_8px_18px_rgba(44,35,31,0.16)] sm:h-9 sm:w-9 ${
              beads[index % beads.length]
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur">
        Luma Beads
      </div>
    </div>
  );
}
