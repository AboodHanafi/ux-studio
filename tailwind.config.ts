import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs :  ['12px', { lineHeight: '20px' }],
      base: ['14px', { lineHeight: '20px' }],
      sm: ['20px', { lineHeight: '20px' }],
      lg :['24px', { lineHeight: '20px' }],
      xl :['32px', { lineHeight: '20px' }],
      '2xl' :['40px', { lineHeight: '20px' }],
    },
    // fontFamily: {
    //   'ibm-plex-arabic': ['IBM Plex Arabic', 'sans'],
    // },

    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          xxl: '1536px',
        },
     
      },
      boxShadow: {
        button : '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config
