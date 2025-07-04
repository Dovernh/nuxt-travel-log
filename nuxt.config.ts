import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/icon'],
	devtools: { enabled: true },
	css: ['./assets/css/main.css'],
	compatibilityDate: '2025-05-15',
	vite: {
		plugins: [tailwindcss()],
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
				semi: true,
			},
		},
	},
});
