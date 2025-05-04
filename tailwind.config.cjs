const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'], // MDX 포함
  theme: {
    extend: {
      colors: { primary: '#f97316' },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.indigo.600'),
              textDecoration: 'underline',
              '&:hover': { color: theme('colors.indigo.800') },
            },
            blockquote: {
              borderLeftColor: theme('colors.indigo.600'),
              backgroundColor: theme('colors.indigo.50'),
              padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: theme('spacing.0.5'),
              borderRadius: theme('borderRadius.sm'),
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
              boxShadow: theme('boxShadow.lg'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            'ol > li::marker, ul > li::marker': {
              color: theme('colors.indigo.600'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
