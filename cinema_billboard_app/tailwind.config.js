/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          primary: '#1a1a2e',
          secondary: '#16213e',
          accent: '#e94560',
          gold: '#f39c12',
          dark: '#0f0f23',
          light: '#eee'
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-cinema': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-card': 'linear-gradient(145deg, #1e1e38 0%, #252545 100%)'
      }
    },
  },
  plugins: [],
}