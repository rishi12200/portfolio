// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        darkBg: "#1a202c",
        darkText: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
