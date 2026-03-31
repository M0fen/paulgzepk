import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                syncopate: ['var(--font-syncopate)', 'sans-serif'],
                display: ['var(--font-syncopate)', 'sans-serif'],
                oriental: ['var(--font-oriental-display)', 'serif'],
            },
            colors: {
                background: "#000000",
                foreground: "#ffffff",
                primary: "#000000",
                accent: "#FF0000", // Neon Red
                silver: "#C0C0C0", // Technical Silver
            },
        },
    },
    plugins: [],
};
export default config;