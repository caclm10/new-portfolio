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
          50: "#f8f7f8",
          100: "#f2f1f2",
          200: "#e6e4e5",
          300: "#d3ced1",
          400: "#b7afb2",
          500: "#9f9599",
          600: "#877c80",
          700: "#706669",
          800: "#5e5658",
          900: "#514a4c",
          950: "#2e292b",
          DEFAULT: "#877c80",
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
