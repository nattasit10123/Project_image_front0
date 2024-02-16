/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Krub", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                "my-Pencils": "url(./images/Pencils.jpg)",
                "my-bubu": "url(./images/bubu.jpg)",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "cupcake", "synthwave"],
    },
};
