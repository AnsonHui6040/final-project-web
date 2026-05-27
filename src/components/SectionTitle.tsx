import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-rose-300" : "text-rose-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl ${
          dark ? "text-porcelain" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-3 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7 ${
            dark ? "text-porcelain/66" : "text-ink/68"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
