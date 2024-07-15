/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2B8AF8",
        blueHovered: "#559BED",
        blueDark: "#0F172A",
        light: "#E2E8F0",
        grayBlue: "#F1F5F9",
        disabledGray: "#CBD5E1",
        darkGray: "#334155",
        mainBg: "#F8FAFC",
        textGray: "#94A3B8",
      },
    },
  },
  plugins: [],
};
