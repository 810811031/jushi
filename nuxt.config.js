export default {
	loading: {
		color: 'green',
		height: '2px'
	},
	// loading: '~/components/LoadingBar.vue',
	server: {
		host: '192.168.3.141',
		port: 3000
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
			title: 'office',
			htmlAttrs: {
				lang: ''
			},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '举视新能源官网' },
			{ hid: 'keywords', name: 'keywords', content: '举视新能源'},
			{ name: 'author', content: 'allen' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/normal.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/main.config.js', mode: "client" }
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		proxy: true,
		prefix: '/api',
		credentials: true
	},
	proxy: {
        '/api': {
			target: 'http://test-web.sowellchina.com/api',
			pathRewrite: {
				'^/api': '/',
				changeOrigin: true
			}
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		vendor: ['axios']
	}
}
