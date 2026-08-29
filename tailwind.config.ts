import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9", // off-white
        foreground: "#1C1917", // near-black for text
        brand: {
          navy: "#1E3A8A",
          indigo: "#4338CA",
          gold: "#D97706",
          amber: "#F59E0B",
          teal: "#0F766E",
          emerald: "#059669",
          stone: "#F5F5F4"
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [],
};
export default config;
