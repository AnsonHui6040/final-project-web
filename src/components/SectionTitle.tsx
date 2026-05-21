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
          className={`mb-3 text-sm font-semibold tracking-[0.18em] ${
            dark ? "text-rose" : "text-rose-500"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-normal sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p className={`mt-4 text-base leading-7 ${dark ? "text-white/66" : "text-ink/68"}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}
