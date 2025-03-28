/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonEmerald: "var(--neon-Emerald)",
        darkBg: "var(--dark-bg)",
        neonGreen: "var(--neon-green)",
        neonBlue: "var(--neon-blue)",
        neonDarkBlue: "var(--neon-dark-blue)",
        white: "var(--white-00)",
        "brown-700": "#4A2C2A",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
