/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#011221',
          light: '#011627',
          dark: '#01080E',
        },
        secondary: {
          grey: '#607B96',
          green: '#3C9D93',
          blue: '#4D5BCE'
        },
        accent: {
          orange: '#FEA55F',
          green: '#43D9AD',
          red: '#E99287',
          purple: '#C98BDF'
        },
        lines: {
          default: '#1E2D3D'
        },
        gradients: {
          blue: '#4D5BCE',
          green: '#43D9AD' 
        }
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      }
    }
  },
  plugins: [],
}

