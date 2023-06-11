/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "gray-100": "#E1E1E6",
      "gray-200": "#8D8D99",
      "gray-300": "#7C7C8A",
      "gray-400": "#323238",
    
      "purple-500": "#633BBC",
      "purple-300": "#8257E5",
      
      "green-500": "#1D8841",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
