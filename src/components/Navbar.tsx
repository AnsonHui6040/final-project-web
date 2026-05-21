"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/products", label: "商品" },
  { href: "/finder", label: "找手串" },
  { href: "/limited", label: "限量祈福" },
  { href: "/about", label: "關於" }
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-normal text-ink sm:text-lg">
            Luma Beads
          </span>
          <span className="mt-1 text-[11px] font-medium text-ink/55 sm:text-xs">
            日月手串
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-ink shadow-sm"
                    : "text-ink/62 hover:bg-white/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="relative inline-flex min-h-10 items-center justify-center rounded-full border border-stone-300 bg-white px-3 text-xs font-semibold text-ink shadow-sm transition hover:border-ink sm:min-h-11 sm:px-4 sm:text-sm"
          >
            購物車
            {itemCount > 0 ? (
              <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ink px-2 text-xs text-white">
                {itemCount}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-stone-300 bg-white px-3 text-xs font-semibold text-ink md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
          >
            選單
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-stone-200 bg-cream px-4 py-3 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink/75"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
