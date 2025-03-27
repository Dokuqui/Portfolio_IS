/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "var(--dark-bg)",
        neonGreen: "var(--neon-green)",
        neonBlue: "var(--neon-blue)",
        white: "var(--white)",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)"],
        americana: ["var(--font-americana)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
