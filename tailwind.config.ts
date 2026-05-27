import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0EA",
        porcelain: "#FBF8F3",
        bone: "#E6DDD2",
        taupe: "#B4A79A",
        ink: "#2B2522",
        brown: "#6F625A",
        rose: {
          DEFAULT: "#C8ADA5",
          300: "#DBC8C1",
          400: "#BE9890",
          500: "#A77F77",
          700: "#7A544F"
        },
        gold: "#8A735B",
        sage: "#A8B2A3",
        olive: "#5E5A53",
        sky: "#A9B8BC",
        lilac: "#CBC4C0"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(43, 37, 34, 0.10)",
        editorial: "0 28px 80px rgba(43, 37, 34, 0.16)"
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "SUIT",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Instrument Serif",
          "Cormorant Garamond",
          "Noto Serif TC",
          "ui-serif",
          "Georgia",
          "serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
