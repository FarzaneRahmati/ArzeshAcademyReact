/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#eff3f4",
        paragraph: "#5c5f62",
        primary: "#2173a7",
        black: "#000",
        title: "#171a1f",
        silver: "#bcc1ca",
        "primary-orange": "#f8941f",
        subtitle: "#9095a0",
        dimgray: "#565e6c",
        darkseagreen: "#8e9e64",
        gray: {
          "100": "rgba(23, 26, 31, 0.66)",
          "200": "rgba(0, 0, 0, 0.25)",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(0, 0, 0, 0.2)",
          "500": "rgba(255, 255, 255, 0.5)",
        },
        lightblue: "rgba(0, 117, 187, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "h6-bold-16": "'B Yekan+'",
        epilogue: "Epilogue",
        inter: "Inter",
        "h6-16": "Mikhak",
        inherit: "inherit",
        roboto: "Roboto",
      },
      borderRadius: {
        "19xl": "38px",
        "8xs": "5px",
        "42xl": "61px",
        xl: "20px",
        "12xl": "31px",
        "10xs": "3px",
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xs: "0.75rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      "mq<=700px": {
        raw: "screen and (max-width: 700px)",
      },
      sm: {
        max: "420px",
      },
      mq400: {
        raw: "screen and (max-width: 400px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
