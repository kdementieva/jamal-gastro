import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/hero-image.webp')"
      },
      colors: {
        'laser': '#C4A576',
        'tussock': '#C78B53',
        'shuttle-gray': '#5D656E',
        'abbey': '#444546'
      }
    }
  },
  plugins: [],
} satisfies Config;
