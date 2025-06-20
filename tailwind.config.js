export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        "slide-left": "slideLeft 30s linear infinite",
        "slide-right": "slideRight 30s linear infinite",
      },
      fontFamily: {
        serif: ['"Rhymes Display"', "serif"], // Custom heading font
        sans: ["Inter", "sans-serif"], // Body text font
      },
    },
  },
  plugins: [],
};
