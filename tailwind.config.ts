import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    extend: {
      // ...
      textColor: ['active'],
    }
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'modal-background-image': "url('/images/Mask group.svg')",
      },
      backgroundColor: {
        'indigo': '#5648FF',
        'cyan': '#40D8CF',
      },
      gap: {
        'x-24px': '24px',
      },
      fontFamily: {
        'Krona-One': ['Krona One'],
      },
      fontSize: {
        slg: ['56px', '78.4px'],
        lg1: ['48px', '67.2px'],
        lg2: ['40px', '56px'],
        lg3: ['32px', '44.8px'],
        lg4: ['32px', '32px'],
        md1: ['28px', '39.2px'],
        md2: ['24px', '33.6px'],
        md3: ['24px', '24px'],
        md4: ['20px', '28px'],
        md5: ['20px', '20px'],
        sm1: ['18px', '20px'],
        sm2: ['14px', '21px'],
        sm3: ['14px', '19.6px'],
        sm4: ['13px', '16.9px'],
      },
      textColor: {
        'page-title': '#687893',
        'light': '#687893',
        'blue': '#5648FF',
        active: '#9747FF',
      },
      borderColor: {
        'light': '#D9E0E5',
        'dark': '#161C26',
      },
      screens: {
        'mobile': '300px',

        'phone-sm': '375px',

        'phone-md': '425px',

        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      padding: {
        'body-x-mobile': '10px',
        'body-y': '30px',
        'vh-1': '1vh',
        'vh-5': '5vh',
      },
      height: {
        fit: 'fit-content',
        'fix-145px': '145px',
        'fix-170px': '170px',
        'fix-200px': '200px',
        'fix-250px': '250px',
        'md': '600px',
      },
      minHeight: {
        'lg': '500px',
        'md': '440px',
        'sm': '300px',
      },
      maxWidth: {
        'md': '800px',
      },
      animation: {
        'slide-down-header': 'slide-down-header 1000ms',
        'slide-down-analysis-content': 'slide-down-analysis-content 3000ms',
        'slide-up-finance': 'slide-up-finance 2000ms ',
        'slide-up-sales': 'slide-up-sales 3000ms ',
        'slide-up&down-description-modal': 'slide-up&down-description-modal 17000ms',
      },
      keyframes: {
        'slide-down-header': {
          '0%': {
            transform: 'translateY(-10%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'slide-down-analysis-content': {
          '0%': {
            height: '0',
            opacity: '0',
          },
          '100%': {
            height: '260px',
            opacity: '1',
          },
        },
        'slide-up&down-description-modal': {

          '0%, 10%': {
            transform: 'translateY(10%) scale(1.05)',
            opacity: '0',
          },
          '15%': {
            transform: 'translateY(0%) scale(1.05)',
            opacity: '1',
          },
          '20%, 90%': {
            transform: 'translateY(0%) scale(1)',
            opacity: '1',
          },
          '95%': {
            transform: 'translateY(0%) scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(10%) scale(1.05)',
            opacity: '0',
          },
        },
        'slide-up-finance': {
          '0%, 50%': {
            transform: 'translateY(10%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
        'slide-up-sales': {
          '0%, 66.66%': {
            transform: 'translateY(10%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [

  ],
}
export default config
