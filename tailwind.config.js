/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        'accent-light': 'var(--accent-light)',
      },
      fontFamily: {
        display: ['var(--font-clash)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        widest: '0.3em',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
