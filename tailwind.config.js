/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm neutral base
        paper: {
          DEFAULT: '#F6F4EF',
          deep: '#EDEAE3',
        },
        // Ink — derived from the original Credo dark (#22282B)
        ink: {
          DEFAULT: '#15181A',
          soft: '#22282B',
          muted: '#585E61', // body copy on paper (≈5.9:1)
          faint: '#8A9094', // decorative only
        },
        // Credo blue, used as punctuation
        credo: {
          DEFAULT: '#54B4E3', // brand blue — marks, and text on ink
          deep: '#1C6A93', // text/links on light surfaces (≈5.3:1 on paper)
          wash: '#DDEDF5', // full-width colour chapter
          mist: '#EEF5F8',
        },
        line: {
          DEFAULT: 'rgba(21, 24, 26, 0.12)',
          strong: 'rgba(21, 24, 26, 0.22)',
          dark: 'rgba(246, 244, 239, 0.14)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Editorial display scale — fluid between mobile and wide desktop
        'display-xl': ['clamp(3rem, 8.4vw, 8.25rem)', { lineHeight: '0.94', letterSpacing: '-0.045em' }],
        'display': ['clamp(2.5rem, 6vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        'heading': ['clamp(2rem, 3.9vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        'title': ['clamp(1.5rem, 2.3vw, 2.125rem)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'lede': ['clamp(1.125rem, 1.5vw, 1.3125rem)', { lineHeight: '1.55', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        site: '84rem',
        prose: '36rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
