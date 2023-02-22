/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'IBM Plex Sans, sans-serif',
      serif: 'IBM Plex Serif, serif',
      mono: 'IBM Plex Mono, monospace',
    },
    colors: {
      transparent: "transparent",
      black: "#171332",
      background: "#000",
      "transparent-white": "rgba(255, 255, 255, 0.1)",
      "transparent-black": "rgba(0, 0, 0, 0.08)",
      "off-white": "#EEE",
      "teal": "#2A5D67",
      "mint-green": "#4AE3B5",
      "artic": "#004170 ",
      "grey-dark": "#222326",
      "primary-text": "#EEE",
      "gray-100": "#F7FAFC",
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "5.8rem",
      16: "6.0rem",
      17: "6.4rem",
      18: "6.8rem",
      19: "7.2rem",
      20: "7.4rem",
      "navigation-height": "var(--navigation-height)",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(90deg, rgb(133, 219, 255) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(200, 255, 255 0.3), transparent)",
      "hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(22, 76, 168, 0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(22, 75, 170, 0.15),transparent)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(133, 219, 255) 198.75deg, rgb(66, 176, 221) 251.25deg, rgb(54, 103, 196) 301.88deg, #7ce6f6 360deg)",
      "glow-lines":
        "linear-gradient(var(--direction),#A5FBF8 0.43%,#71DFF5 14.11%,rgba(120,119,198,0) 62.95%)",
      "radial-faded":
        "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
      "glass-gradient":
        "linear-gradient(rgba(0, 255, 255, 0.05) 0%, rgba(36, 0, 255, 0.05) 100%)",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
    transitionDelay: {
      0: "0ms",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "none" },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      "image-glow": {
        "0%": {
          opacity: 0,
          "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
        },
        "10%": {
          opacity: 1,
          "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
        },
        "100%": {
          opacity: 0.2,
        },
      },
      "sketch-lines": {
        "0%": { "stroke-dashoffset": 1 },
        "50%": { "stroke-dashoffset": 0 },
        "99%": { "stroke-dashoffset": 0 },
        "100%": { visiblity: "hidden" },
      },
      "glow-line-horizontal": {
        "0%": { opacity: 0, transform: "translateX(0)" },
        "5%": { opacity: 1, transform: "translateX(0)" },
        "90%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translateX(min(60vw, 45rem))" },
      },
      "glow-line-vertical": {
        "0%": { opacity: 0, transform: "translateY(0)" },
        "5%": { opacity: 1, transform: "translateY(0)" },
        "90%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
      },
      zap: {
        "0%, 9%, 11%, 100% ": {
          fill: "transparent",
        },
        "10%": {
          fill: "white",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      "glow-line-horizontal":
        "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical":
        "glow-line-vertical var(--animation-duration) ease-in forwards",
      zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};