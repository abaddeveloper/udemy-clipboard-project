module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px', 
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(202, 80.3%, 23.9%)',
        grayishBlue: 'hsl(191.60000000000002, 91.4%, 36.5%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
