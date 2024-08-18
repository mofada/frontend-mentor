tailwind.config = {
    theme: {
        colors: {
            // Green 200 (lighter)
            green: {
                200: 'hsl(148, 38%, 91%)',
                // Green 600 (medium)
                600: 'hsl(169, 82%, 27%)',
                // Green 900 (darker)
                900: 'hsl(171, 83%, 14%)',
            },
            // Red
            red: 'hsl(0, 66%, 54%)',
            // White
            white: 'hsl(0, 0%, 100%)',
            grey: {
                // Grey 500 (medium)
                500: 'hsl(186, 15%, 59%)',
                // Grey 900 (darker)
                900: 'hsl(187, 24%, 22%)',
            },
        },
        fontFamily: {
            'overpass': ['Overpass', 'sans-serif'],
        }
    }
}
