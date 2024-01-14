/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: "Oswald, ui-serif",
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
    },
    screens: {
      // From XXX => @media (min-width: XXXpx) { ... }
      fsm: "640px",
      fmd: "768px",
      flg: "1024px",
      fxl: "1280px",
      f2xl: "1536px",
      // To XXX => @media (max-width: XXX-1px) { ... }
      tsm: { max: "639px" },
      tmd: { max: "767px" },
      tlg: { max: "1023px" },
      txl: { max: "1279px" },
      t2xl: { max: "1535px" },
    },
    extend: {
      animation: {
        spin: "spin 0.7s linear infinite",
        wiggle: "wiggle 0.7s linear infinite",
        "dot-1": "wink 1.5s linear infinite",
        "dot-2": "wink 1.5s linear 0.3s infinite",
        "dot-3": "wink 1.5s linear 0.6s infinite",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      height: {
        screen: ["100dvh", "100vh"],
      },
      colors: {
        primary: {
          100: "#d5fcff",
          200: "#ace1e5",
          300: "#83c5cb",
          400: "#56abb2",
          500: "#17919A",
          600: "#1e7f8d",
          700: "#256c7d",
          800: "#29596b",
          900: "#2a4858",
        },
      },
    },
  },
  plugins: [],
};
