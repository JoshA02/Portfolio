import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade': "fade 1s ease-in-out forwards",
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      colors: {
        'container': '#111',
        'primary': '#1882FF',
        'danger': '#FF453A',
        'code-a': '#7DDCBF',
        'code-b': '#B2759E',
        'code-c': '#958FE1',
        'lightgray': '#777',
        'darkgray': '#575757',
        'foregroundHover': '#b6b6b6'
      },
      fontWeight: {
        'bolder': '750',
      },
      dropShadow: {
        'lg-white': '0 0px 10px rgb(255,255,255,0.6)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        '250': '2.5',
      },
    },
  },
  plugins: [],
};
export default config;
