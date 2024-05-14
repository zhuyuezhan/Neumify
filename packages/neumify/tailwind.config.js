/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/App.tsx',
    './src/main.tsx'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        base: {
          DEFAULT: 'var(--base)',
          light: 'var(--base-light)',
          dark: 'var(--base-dark)'
        },
        default: 'var(--gray)',
        success: 'var(--green)',
        info: 'var(--cyan)',
        warning: 'var(--blue)',
        danger: 'var(--red)',
        hint: 'var(--light-gray)'
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)'
      },
      borderWidth: {
        DEFAULT: 'var(--border-width)'
      },
      borderColor: {
        dark: 'var(--border-dark)',
        light: 'var(--border-light)'
      },
      divideWidth: {
        DEFAULT: 'var(--border-width)'
      },
      divideColor: {
        dark: 'var(--border-dark)',
        light: 'var(--border-light)'
      },
      spacing: {
        default: '2px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      boxShadow: {
        'outset-3':
          '3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light)',
        'outset-6':
          '6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light)',
        'inset-2':
          'inset 2px 2px 5px var(--shadow-dark),inset -3px -3px 7px var(--shadow-light)'
      }
    }
  },
  // plugins: [require('tailwindcss-animate')],
  // corePlugins: {
  //   preflight: false
  // }
}
