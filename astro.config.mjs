import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://salema97.github.io',
	integrations: [tailwind()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en']
	},
	routing: {
		prefixDefaultLocale: false
	}
})
