/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#222",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(0, 0, 0, 0.15)",
          "400": "rgba(0, 0, 0, 0.55)",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(0, 0, 0, 0.7)",
          "700": "rgba(255, 255, 255, 0)",
          "800": "rgba(0, 0, 0, 0.11)",
        },
        gainsboro: "#d9d9d9",
        black1: "#000",
        tomato: {
          "100": "#ff4444",
          "200": "rgba(255, 68, 68, 0.5)",
        },
        darkorange: {
          "100": "#ff7400",
          "200": "rgba(255, 116, 0, 0.5)",
        },
        black: "#030102",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      sm: "14px",
      smi: "13px",
      base: "16px",
      xs: "12px",
      "3xl": "22px",
      "4xs": "9px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
