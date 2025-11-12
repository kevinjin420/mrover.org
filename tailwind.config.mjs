/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'mrover-blue': '#0F3377',
        'mrover-dark-blue': '#0F1D35',
        'mrover-yellow': '#FBC421',
        'brand': '#2a7ae2',
        'text': '#111',
        'background': '#fdfdfd',
        'grey': {
          DEFAULT: '#828282',
          light: '#d3d3d3',
          dark: '#3f3f3f'
        }
      },
      fontFamily: {
        lato: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
        'rovers': '1600px',
      },
      spacing: {
        'unit': '30px',
      },
      screens: {
        'palm': '910px',
        'rovers-max': '1050px',
        'touchscreen': '500px',
      }
    },
  },
  plugins: [],
}
