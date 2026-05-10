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
        background: "#050505",
        surface: "#0a0a0a",
        "surface-elevated": "#111111",
        "surface-glass": "rgba(255, 255, 255, 0.03)",
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          glow: "#6366f1",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        "general-sans": ["General Sans", "sans-serif"],
        "neue-montreal": ["Neue Montreal", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "noise": "noise 0.5s steps(10) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        noise: {
          "0%, 100%": { backgroundPosition: "0 0" },
          "10%": { backgroundPosition: "-5% -5%" },
          "20%": { backgroundPosition: "-10% 5%" },
          "30%": { backgroundPosition: "5% -10%" },
          "40%": { backgroundPosition: "-5% 15%" },
          "50%": { backgroundPosition: "-10% 5%" },
          "60%": { backgroundPosition: "15% 0" },
          "70%": { backgroundPosition: "0 10%" },
          "80%": { backgroundPosition: "-15% 0" },
          "90%": { backgroundPosition: "10% 5%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;