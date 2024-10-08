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
        textGray2: "#64748B",
        overlay: "rgba(0, 0, 0, 0.6)",
        Black: "#111111",
        redish: "#F25959",
        warning: "#ffc107",
      },
      keyframes: {
        growShrink: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-80px)" },
        },
        spinLeftRight: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(45deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-45deg)" },
        },
      },
      animation: {
        growShrink: "growShrink 2s ease-in-out infinite",
        upDown: "upDown 3s ease-in-out infinite",
        spinLeftRight: "spinLeftRight 2s ease-in-out infinite",
      },
      width: {
        outlet: "calc(100dvw - 240px)",
      },
    },
  },
  plugins: [],
};
