import Vue from 'vue'
import VueRouter from 'vue-router'
import $store from '@/store'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
	},
	{
		path: '/product',
		name: 'Product',
		component: () => import(/* webpackChunkName: "Home" */ '../views/Product.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

/**
 * 跳转时的动画
 * @param { * } to 
 * @param { * } from
 * @param { function } next
 */
router.beforeEach((to, from, next) => {
	$store.commit('setRouteAnimate', true)
	setTimeout(() => {
		next()
	}, 100)
})



export default router
