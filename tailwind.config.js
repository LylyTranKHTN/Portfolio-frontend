/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        success: {
          light: 'var(--color-success-light)',
          DEFAULT: 'var(--color-success)',
          dark: 'var(--color-success-dark)',
        },
        error: {
          light: 'var(--color-error-light)',
          DEFAULT: 'var(--color-error)',
          dark: 'var(--color-error-dark)',
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.lg'),
          color: theme('colors.primary.DEFAULT'),
          paddingBottom: theme('spacing.2'),
        },
        h2: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          paddingBottom: theme('spacing.2'),
        },
        h3: {
          fontSize: theme('fontSize.md'),
          fontWeight: theme('fontWeight.bold'),
          fontStyle: 'italic',
          paddingBottom: theme('spacing.1'),
        },
      });
    },
  ],
};
