module.exports = {
  theme: {
    screens: {
      lg: "960px",
    },
  },
  content: ["./src/**/*.{astro,css}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false
  }
};
