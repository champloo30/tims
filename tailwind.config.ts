import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        lineDown: 'lineDown 150ms ease-in-out',
        grow: 'grow 300ms ease-in'
      },
      colors: {
        'fade': '#F5EAF5',
        'fade-dark': '#302C30',
        'danger': '#A91212',
        'danger-dark': '#D31111',
        'dark-armor': '#1D1C1C',
        'old-lace': '#FFFAFA',
        'purple': '#622C62',
        'purple-dark': '#371737',
        'raisin': '#242124',
        'violet': '#A949A9'
      },
      fontFamily: {
        libre: ['var(--font-libre)']
      },
      keyframes: {
        lineDown: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
          '0': { height: '0%' }
        },
        grow: {
          '0%': { width: '0%', opacity: '0%' },
          '100%': { width: '100%', opacity: '100%' }
        }
      },
      screens: {
        'tall': { 'min': '(min-height: 1300px)', 'max': '(max-width: 1100px)' },
      }
    },
  },
  plugins: [],
}
export default config
