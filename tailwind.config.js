/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'git-dark': '#1a1a1a',
        'git-coral': '#e85a5a',
        'git-cream': '#f5f0e1',
        'git-orange': '#ff6f3c',
        'git-yellow': '#f5a623',
      },
      fontFamily: {
        'display': ['Bangers', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
