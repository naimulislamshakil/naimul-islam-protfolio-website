module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FBD062",
          secondary: "#80d4ff",
          accent: "#40bf40",
          neutral: "#ffe6e6",
          "base-100": "#ffffff",
        },
      },

      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
