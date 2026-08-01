/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        char: "#121110",
        ember: "#ff5a1f",
        amber: "#ffb454",
        smoke: "#1a1614",
        bone: "#f3efe9",
        dim: "#8a8580",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        script: ["var(--font-script)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "ember-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,90,31,0.35), transparent 60%)",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(-6%, -4%) scale(1) rotate(0deg)" },
          "50%": { transform: "translate(4%, 6%) scale(1.15) rotate(8deg)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(5%, 3%) scale(1.05) rotate(0deg)" },
          "50%": { transform: "translate(-6%, -5%) scale(1.2) rotate(-10deg)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1) rotate(0deg)" },
          "50%": { transform: "translate(3%, -6%) scale(1.1) rotate(6deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: 0.9 },
          "45%": { opacity: 0.6 },
          "55%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        drift1: "drift1 18s ease-in-out infinite",
        drift2: "drift2 22s ease-in-out infinite",
        drift3: "drift3 26s ease-in-out infinite",
        flicker: "flicker 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
