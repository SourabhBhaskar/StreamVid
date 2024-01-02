/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary-color': '#00031c',
        'secondary-color': '#7b61ff',
        'util-color-1': '#6c52ee',
        'util-color-2': '#7b61ff',
        'util-color-3': '#1877f2',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
      },

      borderColor:{
        'primary-color': '#fff5',
        'secondary-color': '#7b61ff',
      },

      outlineColor: {
        'primary-color': '#ffffff',
        'secondary-color': '#7b61ff',
      },
    
      textColor: {
        'primary-color': '#ffffff',
        'primary-hover-color': '#7b61ff',
        'secondary-color': '#7b61ff',
        'secondary-hover-color': '',
      },

      backgroundColor: {
        'primary-color': '#00031c',
        'primary-hover-color': '#fff1',
        'secondary-color': '#7b61ff',
        'secondary-hover-color': '',
      },

      fontFamily: {
        'primary-font-regular': ['Metropolitano-Regular', 'sans-serif'],
        'primary-font-light': ['Metropolitano-Light', 'sans-serif'],
        'primary-font-bold': ['Metropolitano-Bold', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
};