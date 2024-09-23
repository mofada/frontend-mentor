tailwind.config = {
    theme: {
        colors: {
            cyan: {
                // Very light grayish cyan
                50: 'hsl(189, 41%, 97%)',
                // Light grayish cyan
                200: 'hsl(185, 41%, 84%)',
                // Strong cyan (primary)
                500: 'hsl(172, 67%, 45%)',
                // Grayish cyan
                600: 'hsl(184, 14%, 56%)',
                // Dark grayish cyan
                700: 'hsl(186, 14%, 43%)',
                // Very dark cyan
                900: 'hsl(183, 100%, 15%)',
                // default color no with suffix
                DEFAULT: 'hsl(172, 67%, 45%)',
            },
            // White
            white: 'hsl(0, 0%, 100%)',
        },
        fontFamily: {
            'space-mono': ['Space Mono', 'sans-serif'],
        }
    }
}
