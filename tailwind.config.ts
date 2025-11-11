import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        accent: "var(--accent)",
        muted: "var(--muted)"
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Space Grotesk", ...fontFamily.sans]
      }
    }
  },
  plugins: []
}

export default config
