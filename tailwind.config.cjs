module.exports = {
  theme: {
    screens: {
      lg: "960px",
    },
  },
  content: ["./src/**/*.{astro,css}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false
  }
};
