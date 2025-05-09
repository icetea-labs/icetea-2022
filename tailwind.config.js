/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "900px",
      lg: "1200px",
      xl: "1368px",
      "2xl": "1536px",
      main: "1440px"
    },
    colors: {
      main: "#9241FE",
      teaGray: "#ffffffb3",
      teaBlue: "#00C7F4",
      teaBlack: "#1A1F27",
      ...colors
    },
    fontSize: {
      "10/14": ["10px", { lineHeight: "14px" }],
      "10/32": ["10px", { lineHeight: "32px" }],
      "12/16": ["12px", { lineHeight: "16px" }],
      "12/18": ["12px", { lineHeight: "18px" }],
      "12/20": ["12px", { lineHeight: "20px" }],
      "14/18": ["14px", { lineHeight: "18px" }],
      "14/20": ["14px", { lineHeight: "20px" }],
      "14/24": ["14px", { lineHeight: "24px" }],
      "14/32": ["14px", { lineHeight: "32px" }],
      "16/20": ["16px", { lineHeight: "20px" }],
      "16/24": ["16px", { lineHeight: "24px" }],
      "16/28": ["16px", { lineHeight: "28px" }],
      "18/24": ["18px", { lineHeight: "24px" }],
      "18/32": ["18px", { lineHeight: "32px" }],
      "20/28": ["20px", { lineHeight: "28px" }],
      "20/32": ["20px", { lineHeight: "32px" }],
      "22/32": ["22px", { lineHeight: "32px" }],
      "24/32": ["24px", { lineHeight: "32px" }],
      "26/32": ["26px", { lineHeight: "32px" }],
      "28/36": ["28px", { lineHeight: "36px" }],
      "28/40": ["28px", { lineHeight: "40px" }],
      "32/40": ["32px", { lineHeight: "40px" }],
      "32/60": ["32px", { lineHeight: "60px" }],
      "36/40": ["36px", { lineHeight: "40px" }],
      "36/48": ["36px", { lineHeight: "48px" }],
      "48/60": ["48px", { lineHeight: "60px" }],
      "40/32": ["40px", { lineHeight: "32px" }],
      "40/52": ["40px", { lineHeight: "52px" }],
      "54/54": ["54px", { lineHeight: "54px" }],
      "56/60": ["56px", { lineHeight: "60px" }],
      "60/72": ["60px", { lineHeight: "72px" }],
      "64/48": ["64px", { lineHeight: "48px" }],
      "80/80": ["80px", { lineHeight: "80px" }]
    },
    extend: {}
  },
  plugins: []
}
