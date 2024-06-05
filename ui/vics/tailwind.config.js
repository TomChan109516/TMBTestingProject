import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      persianGreen: "#00af8f",
      tropicalrainforest: "#00b686",
      lightGreen: "#d8f1f0",
      darkgreen: "#007f62",
      blue: "#1fb6ff",
      white: "#fff",
      greyBorder: "#eedfdf",
      lightGrey: "#f8f8f8",
      red: "#ff0000",
      darkRed: "#e45353",
      lightCyan: "#66ffe0",
      darkred4: "#8b0000",
      green: "#059669",
      darkCyan: "#0891b2",
      darkGrey: "#6b7280",
      textGrey: "#333",
      requiredFieldColor: "red",
      navGrey: "#d4d4d8d9",
      navButton: "#009b77",
      orange: "#e8a23c",
      lightOrange:"#fcd34d",
      insideInput: "#e6e3e3",
      darkwhite: "#f6f6f6",
      lightBlack: "#292f46",
      fadedwhite: "#f9ffff",
      lightblue: "#e7fbf6",
      limeGreen: "#01fa01",
      darkLime:"#16a34a",
      hyperlink: "#4d80f8",
      lightwhite: "#ffffff",
      limeGreen: "#bf0e0b",
      shadeWhite: "#d3dcda",
      lightGreenButton:"#5BFD91",
      darkPink:"#FFDEE8",
      lightGreen2:"#D9FFEA",
    },
    fontFamily: {
      calibri: "Calibri",
      Cambria: "Cambria",
    },
    fontSize: {
      h1Heading: "28px",
      inputTxt: "12px",
      innerInputTxt: "13px",
      popupHeading: "16px",
      navHeading: "14px",
    },
    extend: {
      gridTemplateRows: {
        // Simple 10 row grid
        10: "repeat(10, minmax(0, 1fr))",
      },
    },
  },
  plugins: [nextui()],
};
