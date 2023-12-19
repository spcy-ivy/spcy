/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg': "#59251d",
        'lighter-bg': "#722c21",
        'selection-fg': "#8c3b2e",
        'comment-fg': "#a44b3d",
        'dark-fg': "#b95c4e",
        'fg': "#cb6e60",
        'light-fg': "#db8274",
        'light-bg': "#e89689",
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif']
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.fg'),
            '--tw-prose-headings': theme('colors.fg'),
            '--tw-prose-bullets': theme('colors.fg'),
            '--tw-prose-counters': theme('colors.fg'),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide')
  ],
}

