/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                'sm': {'max': '767px'}, // Point de rupture personnalisé pour les écrans en dessous de 768px
            },
        },
    },
    plugins: [],
};
