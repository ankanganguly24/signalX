/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./entrypoints/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./entrypoints/popup/components/**/*.{js,ts,jsx,tsx}",
        "./entrypoints/popup/features/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
