import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#111111',
        graphite: '#1a1a1a',
        silver: '#a0a0a0',
        'soft-white': '#e8e8e8',
        'blue-accent': '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        'section': '10rem',
        'section-inner': '4rem',
      },
    },
  },
  plugins: [],
} satisfies Config
