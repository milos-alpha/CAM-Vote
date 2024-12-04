/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px"
	},
	screen: {
		sm: "640px",
		md: "780px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
			primary: '#5A53EF',
			textDark: '',
			accent: {
				default: '',
				hover: '',
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
