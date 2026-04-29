import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        mist: "#f6f8ff"
      },
      boxShadow: {
        glow: "0 0 34px rgba(79, 70, 229, 0.24)",
        card: "0 24px 70px rgba(15, 23, 42, 0.10)"
      },
      backgroundImage: {
        "premium-gradient":
          "radial-gradient(circle at 18% 18%, rgba(37, 99, 235, 0.16), transparent 26%), radial-gradient(circle at 82% 12%, rgba(20, 184, 166, 0.12), transparent 24%), linear-gradient(135deg, #f8fbff 0%, #eef4ff 48%, #f7fbff 100%)",
        "premium-gradient-dark":
          "radial-gradient(circle at 18% 18%, rgba(59, 130, 246, 0.20), transparent 28%), radial-gradient(circle at 82% 14%, rgba(45, 212, 191, 0.12), transparent 24%), linear-gradient(135deg, #050816 0%, #0b1224 52%, #08111f 100%)"
      }
    }
  },
  plugins: []
};

export default config;
