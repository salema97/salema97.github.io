/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-primary': '#0f2e43',
				'dark-secondary': '#124256',
				'dark-tertiary': '#185d6d',
				'dark-quaternary': '#1d7e86',
				'dark-quinary': '#23aca1',
				'light-primary': '#005e9f',
				'light-secondary': '#0c91c5',
				'light-tertiary': '#78d0f3',
				'light-quaternary': '#ccffff',
				'light-quinary': '#ffffff'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
}
