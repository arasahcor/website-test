/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgCards: "#13171D",
        purple: '#AB23FF',
        blue: "#3D8BFF"
      },
      fontSize:{
        'subtitle': '38px' ,
        'gradientText': '22px',
        'title': '68px'
      },
      fontFamily: {
        "monument": ['var(--font-monument)'],
        "satoshi": ['var(--font-satoshi)'],
      },
    },
  },
  plugins: [],
}

