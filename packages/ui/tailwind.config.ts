import type { Config } from "tailwindcss";

const config = {
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
        contrast: "hsl(var(--contrast))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scribble: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scribble: "scribble 0.5s ease-out forwards",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [
    // @ts-ignore
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".scribble-underline": {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: "-5px",
            right: "-5px",
            height: "20px",
            background: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 30' preserveAspectRatio='none'%3E%3Cpath d='M0,15 C30,5 50,25 70,15 S100,5 130,15 S150,25 180,15 S210,5 240,15 S270,25 300,15 S330,5 360,15 S390,25 420,15 S450,5 480,15 S510,25 540,15 S570,5 600,15' fill='none' stroke='%23000000' stroke-width='2' style='stroke-dasharray: 1000; stroke-dashoffset: 1000;'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            animation: "scribble 2s ease-out forwards",
          },
        },
      };
      addUtilities(newUtilities, ["hover", "active"]);
    },
  ],
} satisfies Config;

export default config;
