import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: '#633CFF',
        purpleHover: '#BEADFF', 
        purpleLight: '#EFEBFF',
        darkGrey: '#737373',
        grey: '#D9D9D9',
        lightGrey: '#FAFAFA',
        red: '#FF3939',
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
