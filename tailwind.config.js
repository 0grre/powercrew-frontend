const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                open: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    daisyui: {
        themes: [
            {
                herbalife: {
                    "primary": "#78be1c",
                    "secondary": "#80b441",
                    "accent": "#a78bfa",
                    "neutral": "#111827",
                    "base-100": "#ffffff",
                    "info": "#38bdf8",
                    "success": "#a3e635",
                    "warning": "#facc15",
                    "error": "#f87171",
                },
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms'),
        require("daisyui")
    ],
}
