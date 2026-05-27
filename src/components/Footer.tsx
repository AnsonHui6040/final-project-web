import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-porcelain">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-[calc(10rem+env(safe-area-inset-bottom))] pt-12 sm:px-6 md:grid-cols-[1.25fr_0.8fr_1fr] md:py-12 lg:px-8">
        <div>
          <p className="font-serif text-4xl text-porcelain">Luma Beads</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-porcelain/62">
            Handcrafted aura jewelry for quiet confidence, emotional comfort and everyday gifting rituals.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-300">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-porcelain/64">
            <Link href="/products">Curated shop</Link>
            <Link href="/finder">Aura Guide</Link>
            <Link href="/limited">Limited pieces</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-300">Note</p>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-porcelain/62">
            <p>星座、幸運色與生日推薦是情緒與風格線索，不代表實際效果保證。</p>
            <p>部分款式為精選現貨，客製需求可作為下一階段品牌功能延伸。</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
