/** @type {import('tailwindcss').Config} */
tailwind.config = {
	theme: {
		colors: {
			white: "hsl(0, 0%, 100%)", // White
			black: "hsl(0, 0%, 0%)", // Black
			gray: {
				900: "hsl(0, 0%, 41%)", // Very Dark Gray
				500: "hsl(0, 0%, 55%)", // Dark Gray
				DEFAULT: "hsl(0, 0%, 55%)", // Light Gray
			},
		},
		fontFamily: {
			alata: ["Alata", "sans-serif"],
			"josefin-sans": ["Josefin Sans", "sans-serif"],
		},
		backgroundImage: (theme) => ({
			mask: "linear-gradient(to right, #00000088, transparent)",
			'md-mask': "linear-gradient(to top, #00000088, transparent)",
		}),
	},
};
