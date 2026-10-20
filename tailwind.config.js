import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0b0f17",
        roast: "#120d0a",
        espresso: "#1a1410",
        slate2: "#1e293b",
        jungle: { DEFAULT: "#22e58b", deep: "#0f7a4d", soft: "#7dffc0" },
        amber2: { DEFAULT: "#f5a524", soft: "#ffd27a" },
        copper: "#b87333",
        kraft: "#f5f0eb",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(34,229,139,.55), 0 0 28px -4px rgba(34,229,139,.45)",
        gold: "0 0 0 1px rgba(245,165,36,.6), 0 0 28px -4px rgba(245,165,36,.45)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pulseRing: { "0%": { transform: "scale(1)", opacity: ".7" }, "100%": { transform: "scale(2.6)", opacity: "0" } },
        float: { "0%,100%": { transform: "translateY(0) rotate(-2deg)" }, "50%": { transform: "translateY(-14px) rotate(2deg)" } },
        shimmer: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [animate],
};
