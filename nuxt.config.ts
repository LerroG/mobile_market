// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon', '@pinia/nuxt'],
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
});
