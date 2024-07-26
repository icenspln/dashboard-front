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
        overlay: "rgba(0, 0, 0, 0.8)",
        Black: "#111111",
      },
      keyframes: {
        growShrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-80px)' },
        },
      },
      animation: {
        growShrink: 'growShrink 2s ease-in-out infinite',
        upDown: 'upDown 1.5s ease-in-out infinite',
      },
      width: {
        outlet: "calc(100dvw - 240px)",
      },
    },
  },
  plugins: [],
};
