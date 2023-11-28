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
      screens: {
        'tall': { 'min': '(min-height: 1300px)', 'max': '(max-width: 1100px)' },
      }
    },
  },
  plugins: [],
}
export default config
