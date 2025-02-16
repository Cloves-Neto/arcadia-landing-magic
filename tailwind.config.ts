
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        arcadia: {
          primary: "#C70039",
          dark: "#151E47",
          secondary: "#FF696A",
          light: "#FFF5E1",
          white: "#FFFFFF",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      rotate: {
        'y-180': '180deg',
      },
      perspective: {
        '1000': '1000px',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      keyframes: {
        "orbit-1": {
          "0%": { transform: "rotate(0deg) translateX(250px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(250px) rotate(-360deg)" }
        },
        "orbit-2": {
          "0%": { transform: "rotate(90deg) translateX(300px) rotate(-90deg)" },
          "100%": { transform: "rotate(450deg) translateX(300px) rotate(-450deg)" }
        },
        "orbit-3": {
          "0%": { transform: "rotate(180deg) translateX(280px) rotate(-180deg)" },
          "100%": { transform: "rotate(540deg) translateX(280px) rotate(-540deg)" }
        },
        "orbit-4": {
          "0%": { transform: "rotate(270deg) translateX(320px) rotate(-270deg)" },
          "100%": { transform: "rotate(630deg) translateX(320px) rotate(-630deg)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(0, -20px)" },
          "75%": { transform: "translate(-10px, -10px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-15px, 10px)" },
          "50%": { transform: "translate(0, 20px)" },
          "75%": { transform: "translate(15px, 10px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(12px, 15px)" },
          "50%": { transform: "translate(0, 30px)" },
          "75%": { transform: "translate(-12px, 15px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-slow": "fade-in-slow 0.8s ease-out",
        "float-1": "float-1 8s ease-in-out infinite",
        "float-2": "float-2 12s ease-in-out infinite",
        "float-3": "float-3 10s ease-in-out infinite",
        "orbit-1": "orbit-1 20s linear infinite",
        "orbit-2": "orbit-2 25s linear infinite",
        "orbit-3": "orbit-3 30s linear infinite",
        "orbit-4": "orbit-4 35s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
