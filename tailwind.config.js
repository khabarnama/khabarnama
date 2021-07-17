module.exports = {
  plugins: [require('@tailwindcss/line-clamp')],
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: {
        standard: [/^[\w:]*border-t-/, /^[\w:]*col-span-/, /^[\w:]*w-32/, /^[\w:]*w-24/, /^[\w:]*h-20/, /^[\w:]*h-36/]
      }
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      transitionDuration: {
        4000: '4000ms'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            height: '0',
            transform: 'translateY(-1000px)'
          },
          '100%': {
            opacity: '1',
            height: '100%',
            transform: 'translateY(0)'
          }
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          to: {
            opacity: '0',
            transform: 'translateY(1000px)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            height: '0',
            transform: 'translateY(1000px)'
          },
          '100%': {
            opacity: '1',
            height: '100%',
            transform: 'translateY(0)'
          }
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            height: '100%',
            transform: 'translateY(0px)'
          },
          to: {
            opacity: '0',
            height: '0px',
            transform: 'translateY(-1000px)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .5s ease-out forwards',
        'fade-out-down': 'fade-out-down .5s ease-out forwards',
        'fade-in-up': 'fade-in-up .5s ease-out forwards',
        'fade-out-up': 'fade-out-up .5s ease-out forwards'
      }
    }
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
    extend: {
      margin: ['group-hover'],
      display: ['group-hover'],
      filter: ['hover', 'focus']
    }
  }
}
