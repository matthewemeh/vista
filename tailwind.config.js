/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      'circular-std': ['"Circular Std"', 'sans-serif'],
    },
    extend: {
      colors: {
        alto: '#d9d9d9',
        'light-gray': '#878787',
        gray: '#939393',
        foam: '#e1fcfd',
        silver: '#b9b9b9',
        turquoise: '#0ce6f3',
      },
    },
  },
};
