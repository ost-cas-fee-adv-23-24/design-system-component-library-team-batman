import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      error: '#FF0000',
      primary: colors.violet,
      accent: colors.pink,
      base: colors.slate,
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px
    },
    lineHeight: {
      none: '1',
      s: '1.25',
      m: '1.4',
      l: '1.45',
    },
    fontWeight: {
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    spacing: {
      0: '0px',
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px',
    },
    borderRadius: {
      none: '0px',
      s: '0.5rem', // 8px
      m: '1rem', // 16px
      full: '100%',
    },
    extend: {},
  },
  plugins: [
    /**
     * @description custom utilities for mumble
     */
    plugin(function ({ addUtilities, theme }) {
      const mumbleUtilities: CSSRuleObject | CSSRuleObject[] = {
        '.mumble-gradient': {
          background: `linear-gradient(90deg, ${theme('colors.accent.600')} 0%, ${theme('colors.primary.500')} 100%)`,
        },
        '.mumble-gradient-hover': {
          background: `linear-gradient(90deg, ${theme('colors.accent.600')} -12.56%, ${theme(
            'colors.primary.500',
          )} 62.92%)`,
        },
        '.mumble-gradient-focus': {
          background: `linear-gradient(90deg, ${theme('colors.accent.600')} -15.33%, ${theme(
            'colors.primary.500',
          )} 38.87%)`,
        },
        '.mumble-font-label-s': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.none'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.mumble-font-label-m': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.none'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.mumble-font-label-l': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.none'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.mumble-font-label-xl': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.none'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.mumble-font-placeholder': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.none'),
          fontWeight: theme('fontWeight.medium'),
        },
        '.mumble-font-paragraph-m': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.m'),
          fontWeight: theme('fontWeight.medium'),
        },
        '.mumble-font-paragraph-l': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.l'),
          fontWeight: theme('fontWeight.medium'),
        },
        '.mumble-font-h4': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.s'),
          fontWeight: theme('fontWeight.bold'),
        },
        '.mumble-font-h3': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.s'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.mumble-font-h2': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.s'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.mumble-font-h1': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: theme('fontSize.5xl'),
          lineHeight: theme('lineHeight.s'),
          fontWeight: theme('fontWeight.bold'),
        },
      };

      addUtilities(mumbleUtilities);
    }),
  ],
};

export default config;
