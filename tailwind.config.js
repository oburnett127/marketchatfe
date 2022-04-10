module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  // use  darkMode: 'media' to leave it
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
