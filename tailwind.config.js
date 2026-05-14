/** @type {import('tailwindcss').Config} */
/** 3cslab brand colors — see ~/.claude/skills/3cslab-brand/SKILL.md */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#003366',
          soft: '#333333',
          muted: '#666666',
        },
        paper: '#F5F7FA',
        accent: {
          DEFAULT: '#FF5722',
          soft: '#FFF0EB',
        },
        brand: {
          'soft-blue': '#80B0D4',
          salmon: '#FF8A65',
          'cool-gray': '#B0BEC5',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,51,102,0.06), 0 8px 24px rgba(0,51,102,0.08)',
      },
    },
  },
  plugins: [],
}
