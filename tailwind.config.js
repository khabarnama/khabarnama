module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: {
        standard: [
          /^[\w:]*grid-cols-/,
          /^[\w:]*place-content-/,
          /^[\w:]*my-/,
          /^[\w:]*h-/,
          /^[\w:]*flex-/
        ]
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
    extend: {
      margin: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
