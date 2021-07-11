module.exports = {
  plugins: [require('@tailwindcss/line-clamp')],
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: {
        standard: [/^[\w:]*border-t-/, /^[\w:]*col-span-/]
      }
    }
  },
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
      margin: ['group-hover'],
      display: ['group-hover']
    }
  }
}
