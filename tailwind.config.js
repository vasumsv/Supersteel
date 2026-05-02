/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'ss-navy': '#0A0E1A',
        'ss-charcoal': '#161B2E',
        'ss-steel': '#1E293B',
        'ss-gold': '#B8860B',
        'ss-gold-light': '#DAA520',
        'ss-light': '#F9FAFB',
        'ss-white': '#FFFFFF',
        'ss-text-muted': '#9CA3AF',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};
