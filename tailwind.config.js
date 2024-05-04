/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgCards: "#13171D",
        purple: '#AB23FF',
        blue: "#3D8BFF",
        greyLine: "#13171D"
      },
      fontSize:{
        'subtitle': '38px' ,
        'gradientText': '22px',
        'title': '68px',
        'title': ['68px', {
          lineHeight: '1.1',
        }],
        'badge':'10px',
      },
      fontFamily: {
        "monument": ['var(--font-monument)'],
        "satoshi": ['var(--font-satoshi)'],
      },
      spacing: {
        'icons': '34px'
      }
    },
  },
  plugins: [],
}

