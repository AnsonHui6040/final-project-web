import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-[calc(10rem+env(safe-area-inset-bottom))] pt-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] md:py-10 lg:px-8">
        <div>
          <p className="text-lg font-bold text-ink">Luma Beads｜日月手串</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-ink/62">
            不是迷信，而是把每天的心情、顏色與祝福戴在手上。所有商品皆為固定設計款，適合日常配戴與送禮。
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink">逛逛</p>
          <div className="mt-3 grid gap-2 text-sm text-ink/64">
            <Link href="/products">全部商品</Link>
            <Link href="/finder">找你的手串</Link>
            <Link href="/limited">限量祈福系列</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-ink">提醒</p>
          <div className="mt-3 grid gap-2 text-sm leading-6 text-ink/62">
            <p>本網站產品皆為固定設計款，不提供客製化修改。</p>
            <p>星座、幸運色、生日推薦僅作為風格與送禮參考。</p>
            <p>祈福系列以祝福與紀念為設計概念，不代表任何實際效果保證。</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
