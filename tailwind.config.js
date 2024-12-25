const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "appear-from-bottom": "appear-from-bottom 1s ease-in-out",
                "fade-in": "fade-in 1s ease-in",
                squish: "squish 300ms ease-in-out",
            },
            keyframes: {
                "appear-from-bottom": {
                    from: { opacity: "0", transform: "translateY(50px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                squish: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(0.5)" },
                },
            },
            colors: {
                dark_gradient: "#141E30",
                mid_gradient: "#243B55",
                light_gradient: "#2C5364",
                text_primary_color: "#d0ac9d",
                text_secondary_color: "#f0dfd8",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
            textShadow: {
                glow: "0 0 8px rgba(255, 255, 255, 0.8)",
            },
        },

        plugins: [],
    },
};
