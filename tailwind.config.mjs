/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: "#071321",
        charcoal: "#151a1f",
        slate: "#6f7c89",
        steel: "#4d83a8",
        silver: "#d8dee5",
        copper: "#c76c2d",
        safety: "#f28735",
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
