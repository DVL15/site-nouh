import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        sage: {
          50: "#f2f7f4",
          100: "#deeee6",
          200: "#bddccc",
          300: "#93c4ab",
          400: "#65a788",
          500: "#458c6e",
          600: "#347158",
        },
        cream: {
          50: "#fdfcf9",
          100: "#faf7f2",
          200: "#f5efe6",
          300: "#ede3d4",
        },
        soft: {
          purple: "#b8a9d9",
          lavender: "#c8bfe7",
          sage: "#a8c5b5",
          rose: "#e8c4c4",
        },
        "soft-purple": "#b8a9d9",
        "soft-lavender": "#c8bfe7",
        "soft-sage": "#a8c5b5",
        "soft-rose": "#e8c4c4",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
