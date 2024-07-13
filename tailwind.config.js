/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      colors: {
        black: "#0A0A0B",
      },
      boxShadow: {
        shadow100: "4px 3px 11.2px rgba(0, 0, 0, 0.25)",
        shadow200: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

