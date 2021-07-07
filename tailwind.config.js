module.exports = {
  plugins: [require('@tailwindcss/line-clamp')],
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
