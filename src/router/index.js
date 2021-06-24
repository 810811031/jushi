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
		component: () => import(/* webpackChunkName: "Product" */ '../views/Product.vue')
	},
	{
		path: '/programme',
		name: 'Programme',
		component: () => import(/* webpackChunkName: "Programme" */ '../views/Programme.vue')
	},
	{
		path: '/partner',
		name: 'Partner',
		component: () => import(/* webpackChunkName: "Partner" */ '../views/Partner.vue')
	},
	{
		path: '/cloudCenter',
		name: 'CloudCenter',
		component: () => import(/* webpackChunkName: "CloudCenter" */ '../views/CloudCenter.vue')
	},
	{
		path: '/company',
		name: 'Company',
		component: () => import(/* webpackChunkName: "Company" */ '../views/Company.vue')
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
	next()	
})



export default router
