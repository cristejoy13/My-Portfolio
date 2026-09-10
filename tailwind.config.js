/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf2f6',
          100: '#fce7f3',
          200: '#fbd0e7',
          300: '#f9a8ce',
          DEFAULT: '#f9d4e2',
          light: '#fef0f5',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          DEFAULT: '#f9d57b',
          light: '#fef9ee',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #fdf2f6 0%, #fef9ee 50%, #fff1f3 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(244, 63, 94, 0.1)',
        'glass-md': '0 12px 40px rgba(244, 63, 94, 0.18)',
        gold: '0 4px 20px rgba(245, 158, 11, 0.25)',
      },
    },
  },
}
