/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "exo-2": ['"Exo 2"', "sans-serif"],
                "open-sans": ['"Open Sans"', "sans-serif"],
            },
            colors: {
                orange: {
                    500: "#FE9A00",
                    600: "#E17100",
                },
                purple: {
                    600: "#372AAC",
                    700: "#312C85",
                },
                gray: {
                    200: "#D9D9D9",
                    300: "#D1D5DC",
                },
                slate: {
                    700: "#3629ab",
                    800: "#1e2939",
                },
                dark: {
                    800: "#0f172b",
                    900: "#020618",
                },
            },

            fontSize: {
                "4xl-custom": "4rem", // 64px
                "2xl-custom": "2.5rem", // 40px
                "xl-custom": "1.25rem", // 20px
            },
            boxShadow: {
                avatar: "0px 0px 1.875rem 0.3125rem rgba(225, 113, 0, 0.80)",
            },
            order: {
                1: "1",
                2: "2",
                3: "3",
            },
        },
    },
    plugins: [],
};
