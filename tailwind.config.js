module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': {
          300: '#272C2F',
          600: '#2A2F32',
          900: '#212629'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
