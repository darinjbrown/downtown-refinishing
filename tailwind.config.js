/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			extend: {
				colors: {
					"brand-50": "#fffbeb",
					"brand-100": "#fef3c7",
					"brand-200": "#fde68a",
					"brand-300": "#fcd34d",
					"brand-400": "#fbbf24",
					"brand-500": "#f59e0b",
					"brand-600": "#d97706",
					"brand-700": "#b45309",
					"brand-800": "#92400e",
					"brand-900": "#78350f",
					"brand-950": "#451a03",
  

				},
			},
		},
	},
	plugins: ["tailwindcss", "prettier-plugin-tailwindcss"],
};
