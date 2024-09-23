/** @type {import('tailwindcss').Config} */
tailwind.config = {
	theme: {
		colors: {
			white: "hsl(0, 0%, 100%)", // White
			black: "hsl(0, 0%, 0%)", // Black
			gray: {
				100: "hsl(0, 0%, 63%)", // Dark Gray
				300: "hsl(0, 0%, 27%)", // Very Dark Gray
			},
		},
		fontFamily: {
			"league-spartan": ["League Spartan", "sans-serif"],
		},
	},
};
