/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F1115",
        card: "#1C1F26",
        text: "#E5E7EB",
        copper1: "#D97706",
        copper2: "#F59E0B",
        border: "rgba(255,255,255,0.06)",
      },
      boxShadow: { glass: "0 10px 30px rgba(0,0,0,0.35)" },
      borderRadius: { "2xl": "1rem", "3xl": "1.25rem" },
    },
  },
  plugins: [],
};