import { nextui } from "@nextui-org/react";
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      persianGreen: "#00AF8F",
      tropicalRainForest:'#007F62',
      darkGreen: "#009b77",
      lightGreen: "#0a923d",
      blue: '#1fb6ff',
      white: '#ffffff',
      greyBorder: '#eedfdf',
      black:"#333",
    },
    fontFamily: {
      sans: 'sans-serif',
      calibri:'Calibri'
    },
    extend: {
      gridTemplateRows: {
        // Simple 10 row grid
        '10': 'repeat(10, minmax(0, 1fr))',},}
  },
  plugins: [nextui()],
}