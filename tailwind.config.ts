import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00764F",
          light: "#8CC1B0",
          accent: "#01E14",
          soft: "#D9EAE5",
          bg: "#E6F1ED",
        },
      },
    },
  },
  plugins: [],
}

export default config
