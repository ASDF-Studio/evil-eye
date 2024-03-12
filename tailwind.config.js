const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'msm': '360px',
      'lsm': '390px',
      sm: '767px', //mobile
      x: '1009px', //tablet | 1009px is 1024 px in ipad
      xl: '1009px', //laptop | 1009px is 1024 px in ipad
      '1xl': '1230px', //laptop
      '2xl': '1440px', //desktop
      '4xl': '1800px', // for portfolio card
      '5xl': '1920px', // ultra wide
      360: '359px',
      375: '375px',
      390: '390px',
      414: '398px',
      420: '415px',
      430: '430px',
      752: '752px',
    },
    extend: {
      fontFamily: {
        'roman': ['Roman SD'],
        'rosarivo': ['Rosarivo-Regular'],
        'x360': ['X360'],
      },
      colors: {
        main: {
          white: '#FFFFFF',
        },
        border: {
          button: 'rgba(255, 255, 255, 0.14)',
        },
        backgroundColor: {
          'brand-blue': '#090451',
          'brand-blue-80': 'rgba(9, 4, 81, 0.80)', 
          'brand-yellow': '#FFD770',
        },
        color: {
          'brand-yellow': '#FFCE70',
          'brand-yellow2': '#FFD770',
        },
        
        textColor: {
          'brand-yellow': '#FFD770',
          'brand-gold' : '#795700',
        },
      },
      boxShadow: {
        buttonShadow:
          '0px 10px 10px -5px rgba(0, 101, 197, 0.40)',
      },
      backgroundImage: {
        profile: 'linear-gradient(0deg, #011A32 0%, rgba(0, 0, 0, 0.00) 30.79%, #011A32 30.79%), lightgray 0px -1.823px / 100% 136.82% no-repeat, lightgray 50% / cover no-repeat;',
        background: 'linear-gradient(0deg, rgba(0, 126, 245, 0.00) 0%, #007EF5 68.23%);',
        backdroundBio: 'rgba(0, 148, 255, 0.22)',
        headerBackground : "url('/background/headerBackground.png')",
        footerBackground : "url('/background/footerBackground.png')",
      },
    },
  },
  plugins: [],
};
