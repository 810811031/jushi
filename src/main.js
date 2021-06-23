import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// fullpage
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)

// aniamte
import animated from 'animate.css'
Vue.use(animated)

// Rem
import Rem from 'rem_ease'
new Rem(1920, 100)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
