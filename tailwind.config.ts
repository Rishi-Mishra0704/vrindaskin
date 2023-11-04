import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans'],
        'edu-tas-beginner': ['Edu TAS Beginner', 'sans'],
        'lato': ['Lato', 'sans'],
        'poppins': ['Poppins', 'sans'],
        'roboto-condensed': ['Roboto Condensed', 'sans'],
        'roboto': ['Roboto', 'sans'],
      },
    },
  },
  plugins: [],
}
export default config
