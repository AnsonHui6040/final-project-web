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
        cream: "#fff9f0",
        ink: "#2f2f35",
        rose: "#f6cad6",
        lilac: "#d8cff6",
        gold: "#e8c46b",
        sage: "#bad9c8",
        sky: "#b7d7ef"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(58, 45, 30, 0.10)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
