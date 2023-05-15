/** @type {import('tailwindcss').Config} */


const plugin = require('tailwindcss/plugin')

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    screens:{
      mf:'990px'
    },
  fontFamily:{
    display:['Open Sans','sans-serif'],
    body:['Open Sans','sans-serif'],

  },
  keyframes: {
    "slide-in": {
      "0%": {
        "-webkit-transform": "translateX(120%)",
        transform: "translateX(120%)",
      },
      "100%": {
        "-webkit-transform": "translateX(0%)",
        transform: "translateX(0%)",
      },
    },
  },
  animation: {
    "slide-in": "slide-in 0.5s ease-out",
  },   
  },
};
export const plugins = [
  plugin(function({ addUtilities, addComponents, e, config }) {
    // Add your custom styles here
  }),
];