const { withMT } = require('@material-tailwind/react/utils/withMT')

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        card: 'var(--card)',
        muted: 'var(--muted)'
      },
      borderRadius: {
        lg: 'var(--radius, 12px)'
      },
      fontFamily: {
        sans: ['var(--font-family)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
})
