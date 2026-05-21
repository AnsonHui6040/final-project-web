import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "預購下單｜Luma Beads",
  description: "Luma Beads MVP 預購下單入口。"
};

export default function CheckoutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-rose-500">
            PRE-ORDER
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-ink sm:text-4xl">
            感謝你的喜歡
          </h1>
          <p className="mt-3 text-sm leading-6 text-ink/64 sm:mt-4 sm:text-base sm:leading-7">
            正式金流開放前，請透過以下方式完成預購。目前為預購測試階段，請透過 Instagram / LINE / Google Form 完成下單。
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href="https://www.instagram.com/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 font-semibold text-white"
            >
              Instagram 私訊下單
            </a>
            <a
              href="https://line.me/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-5 font-semibold text-ink"
            >
              LINE 下單
            </a>
            <a
              href="https://forms.google.com/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-5 font-semibold text-ink"
            >
              Google Form 預購
            </a>
          </div>
          <Link
            href="/products"
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-ink/68 hover:text-ink"
          >
            繼續逛商品
          </Link>
        </div>
      </div>
    </section>
  );
}
