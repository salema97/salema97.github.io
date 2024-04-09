/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-1': '#032030',
				'dark-2': '#022B42',
				'dark-3': '#003554',
				'dark-4': '#004D74',
				'dark-5': '#006494',
				'dark-6': '#006DA4',
				'light-1': '#F0F3FA',
				'light-2': '#D5DEEF',
				'light-3': '#B1C9EF',
				'light-4': '#8AAEE0',
				'light-5': '#638ECB',
				'light-6': '#395886'
			}
		}
	},
	plugins: []
}
