/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Kustomisasi palet warna
        wedding: "#A02020",
        krem: "#F5DEB3",
        primary: "#4A90E2",
        secondary: "#50E3C2",
        accent: "#F5A623",
        dark: "#111827",
        light: "#F9FAFB",
      },
      fontFamily: {
        // Kustomisasi font
        satisfy: ["Satisfy"],
        poppins: ["Poppins"],
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        // Kustomisasi spacing (padding/margin)
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        // Kustomisasi border-radius
        "4xl": "2rem",
      },
      screens: {
        // Kustomisasi breakpoints
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode dengan menggunakan class 'dark'
};
