module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  // use  darkMode: 'media' to leave it
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
