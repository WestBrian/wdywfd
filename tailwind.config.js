module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      textColor: {
        header: '#2f3c64',
        primary: '#878fa3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
