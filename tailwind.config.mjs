/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'tokyo-outline': ['Tokyo-Outline', 'sans-serif'],
        'tokyo-regular': ['Tokyo-Regular', 'sans-serif'],
        'futura-light': ['Futura-Light', 'sans-serif'],
      },
      colors: {
        'walk-blue': '#204056',
        'walk-red': '#F65a5b',
        'walk-gray': '#9D9F96',
      },
    },
  },
  plugins: [],
};
