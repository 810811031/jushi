import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _621d89d2 = () => interopDefault(import('..\\pages\\cloudcenter.vue' /* webpackChunkName: "pages/cloudcenter" */))
const _72a49a19 = () => interopDefault(import('..\\pages\\custom.vue' /* webpackChunkName: "pages/custom" */))
const _eec9fe60 = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _14ccf512 = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _7461ea04 = () => interopDefault(import('..\\pages\\company\\contantUs.vue' /* webpackChunkName: "pages/company/contantUs" */))
const _7f1e2316 = () => interopDefault(import('..\\pages\\company\\honor.vue' /* webpackChunkName: "pages/company/honor" */))
const _643d7c42 = () => interopDefault(import('..\\pages\\company\\introduction.vue' /* webpackChunkName: "pages/company/introduction" */))
const _d51d21da = () => interopDefault(import('..\\pages\\company\\partner.vue' /* webpackChunkName: "pages/company/partner" */))
const _ec5222ee = () => interopDefault(import('..\\pages\\company\\recruit.vue' /* webpackChunkName: "pages/company/recruit" */))
const _e6ffb9ee = () => interopDefault(import('..\\pages\\company\\seniority.vue' /* webpackChunkName: "pages/company/seniority" */))
const _bded9740 = () => interopDefault(import('..\\pages\\customDetail\\_id.vue' /* webpackChunkName: "pages/customDetail/_id" */))
const _639e2242 = () => interopDefault(import('..\\pages\\productDetail\\_id.vue' /* webpackChunkName: "pages/productDetail/_id" */))
const _747ee00a = () => interopDefault(import('..\\pages\\productDetail\\_id.old.vue' /* webpackChunkName: "pages/productDetail/_id.old" */))
const _7b5cccc6 = () => interopDefault(import('..\\pages\\programme\\_id.vue' /* webpackChunkName: "pages/programme/_id" */))
const _73f2584c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cloudcenter",
    component: _621d89d2,
    name: "cloudcenter"
  }, {
    path: "/custom",
    component: _72a49a19,
    name: "custom"
  }, {
    path: "/partner",
    component: _eec9fe60,
    name: "partner"
  }, {
    path: "/product",
    component: _14ccf512,
    name: "product"
  }, {
    path: "/company/contantUs",
    component: _7461ea04,
    name: "company-contantUs"
  }, {
    path: "/company/honor",
    component: _7f1e2316,
    name: "company-honor"
  }, {
    path: "/company/introduction",
    component: _643d7c42,
    name: "company-introduction"
  }, {
    path: "/company/partner",
    component: _d51d21da,
    name: "company-partner"
  }, {
    path: "/company/recruit",
    component: _ec5222ee,
    name: "company-recruit"
  }, {
    path: "/company/seniority",
    component: _e6ffb9ee,
    name: "company-seniority"
  }, {
    path: "/customDetail/:id?",
    component: _bded9740,
    name: "customDetail-id"
  }, {
    path: "/productDetail/:id?",
    component: _639e2242,
    name: "productDetail-id"
  }, {
    path: "/productDetail/:id.old?",
    component: _747ee00a,
    name: "productDetail-id.old"
  }, {
    path: "/programme/:id?",
    component: _7b5cccc6,
    name: "programme-id"
  }, {
    path: "/",
    component: _73f2584c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
