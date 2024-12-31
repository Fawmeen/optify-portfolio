/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
   borderColor :{
    'primary':'rgb(85,81, 226)',
    'secondary':'#2b2d77'
}
  },
  fontFamily:{
    'hero-font':'Sriracha'
  }
};
export const plugins = [];

