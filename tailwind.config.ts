import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '50': '#fcfde8',
          '100': '#f7f9ce',
          '200': '#edf4a2',
          '300': '#deea6c',
          '400': '#cadc3f',
          '500': '#adc121',
          '600': '#9ab019',
          '700': '#667615',
          '800': '#515d17',
          '900': '#454f18',
          '950': '#242c07',
          DEFAULT: "#9ab019",
          foreground: "#fff"
        },
        secondary: {
          50: "#f5f1f1",
          100: "#e5dddc",
          200: "#cdbdbb",
          300: "#af9795",
          400: "#987977",
          500: "#8a6868",
          600: "#76585b",
          700: "#5f494d",
          800: "#524145",
          900: "#493a3e",
          950: "#131b16",
          DEFAULT: "#76585b",
          foreground: "#fff"
        }
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
export default config
