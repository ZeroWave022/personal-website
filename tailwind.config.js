/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                "slide-items-5":
                    "slide-items-5 12.5s cubic-bezier(0.85, 0, 0.15, 1) infinite",
                "scroll-icon-bounce": "scroll-icon-bounce 1s infinite",
            },
            keyframes: {
                "slide-items-5": {
                    "0%, 16%": {
                        transform: "translateY(0%)",
                    },
                    "20%, 36%": {
                        transform: "translateY(-16.66%)",
                    },
                    "40%, 56%": {
                        transform: "translateY(-33.33%)",
                    },
                    "60%, 76%": {
                        transform: "translateY(-50%)",
                    },
                    "80%, 96%": {
                        transform: "translateY(-66.66%)",
                    },
                    "100%": {
                        transform: "translateY(-83.33%)",
                    },
                },
                "scroll-icon-bounce": {
                    "0%, 100%": {
                        transform: "translate(-50%, 0%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translate(-50%, 25%)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            screens: {
                mdh: {
                    raw: "(min-height: 700px)",
                },
            },
            boxShadow: {
                footer: "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
            },
        },
    },
    plugins: [require("@headlessui/tailwindcss")],
};
