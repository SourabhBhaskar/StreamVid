/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxs':'320px',
        'xs': '412px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      colors: {
        'primary-color': '#00031c',
        'secondary-color': '#7b61ff',
        'util-color-1': '#6c52ee',
        'util-color-2': '#7b61ff',
        'util-color-3': '#1877f2',
        'util-light': '#fff1'
      },

      borderColor:{
        'primary-color': '#ffffff',
        'primary-hover-color': '#7b61ff',
        'secondary-color': '#7b61ff',
        'secondary-hover-color': '#ffffff',
        'light-color': '#ebebeb55',
        'light-hover-color': '#ffffff',
        'lighter-color': '#ebebeb11'
      },

      outlineColor: {
        'primary-color': '#ffffff',
        'primary-hover-color': '#7b61ff',
        'secondary-color': '#7b61ff',
        'secondary-hover-color': '#ffffff',
        'light-color': '#7b61ff',
        'light-hover-color': '#ffffff'
      },
    
      textColor: {
        'primary-color': '#ffffff',
        'primary-hover-color': '#7b61ff',
        'secondary-color': '#7b61ff',
        'secondary-hover-color': '#ffffff',
        'light-color': '#cccdd2',
        'light-hover-color': '#ffffff'
      },

      backgroundColor: {
        'primary-color': '#00031c',
        'primary-hover-color': '#191c33',
        'secondary-color': '#7b61ff',
        'footer-color': '#161934',
        'sub-footer-color': '#161934',
      },

      fontFamily: {
        'primary-font-regular': ['Metropolitano-Regular', 'sans-serif'],
        'primary-font-light': ['Metropolitano-Light', 'sans-serif'],
        'primary-font-bold': ['Metropolitano-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};