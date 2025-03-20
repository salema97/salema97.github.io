import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	site: 'https://salema97.github.io',
	integrations: [tailwind(), react()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en']
	},
	routing: {
		prefixDefaultLocale: false
	}
})
