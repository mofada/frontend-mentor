tailwind.config = {
    theme: {
        colors: {
            orange: {
                // Pale orange
                100: 'hsl(25, 100%, 94%)',
                // Orange
                500: 'hsl(26, 100%, 55%)',
                DEFAULT: 'hsl(25, 100%, 50%)',
            },
            blue: {
                // Very dark blue
                900: 'hsl(220, 13%, 13%)',
                // Dark grayish blue
                500: 'hsl(219, 9%, 45%)',
                DEFAULT: 'hsl(219, 9%, 45%)',
                // Grayish blue
                300: 'hsl(220, 14%, 75%)',
                // Light grayish blue
                100: 'hsl(223, 64%, 98%)',
            },
            // White
            white: 'hsl(0, 0%, 100%)',
            // Black
            black: 'hsl(0, 0%, 0%)',
        },
        fontFamily: {
            'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        }
    }
}
