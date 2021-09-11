import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _113babf0 = () => interopDefault(import('..\\pages\\cloudcenter.vue' /* webpackChunkName: "pages/cloudcenter" */))
const _20651d3b = () => interopDefault(import('..\\pages\\custom.vue' /* webpackChunkName: "pages/custom" */))
const _da2a3c24 = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _002d32d6 = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _5375ce74 = () => interopDefault(import('..\\pages\\productDetail.vue' /* webpackChunkName: "pages/productDetail" */))
const _e56c29c0 = () => interopDefault(import('..\\pages\\company\\contantUs.vue' /* webpackChunkName: "pages/company/contantUs" */))
const _64152f97 = () => interopDefault(import('..\\pages\\company\\honor.vue' /* webpackChunkName: "pages/company/honor" */))
const _fbec5306 = () => interopDefault(import('..\\pages\\company\\introduction.vue' /* webpackChunkName: "pages/company/introduction" */))
const _3dec2096 = () => interopDefault(import('..\\pages\\company\\partner.vue' /* webpackChunkName: "pages/company/partner" */))
const _552121aa = () => interopDefault(import('..\\pages\\company\\recruit.vue' /* webpackChunkName: "pages/company/recruit" */))
const _53fb032b = () => interopDefault(import('..\\pages\\company\\seniority.vue' /* webpackChunkName: "pages/company/seniority" */))
const _cb90246c = () => interopDefault(import('..\\pages\\programme\\programme.vue' /* webpackChunkName: "pages/programme/programme" */))
const _6efe7004 = () => interopDefault(import('..\\pages\\customDetail\\_id.vue' /* webpackChunkName: "pages/customDetail/_id" */))
const _1f010de8 = () => interopDefault(import('..\\pages\\programme\\_id.vue' /* webpackChunkName: "pages/programme/_id" */))
const _26786478 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
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
const _7b5cccc6 = () => interopDefault(import('..\\pages\\programme\\_id.vue' /* webpackChunkName: "pages/programme/_id" */))
const _73f2584c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> aec8caa4d726576970c0ae81360af3fe33f27e46

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
    component: _113babf0,
    name: "cloudcenter"
  }, {
    path: "/custom",
<<<<<<< HEAD
    component: _20651d3b,
=======
    component: _72a49a19,
>>>>>>> aec8caa4d726576970c0ae81360af3fe33f27e46
    name: "custom"
  }, {
    path: "/partner",
    component: _da2a3c24,
    name: "partner"
  }, {
    path: "/product",
    component: _002d32d6,
    name: "product"
  }, {
<<<<<<< HEAD
    path: "/productDetail",
    component: _5375ce74,
    name: "productDetail"
  }, {
=======
>>>>>>> aec8caa4d726576970c0ae81360af3fe33f27e46
    path: "/company/contantUs",
    component: _e56c29c0,
    name: "company-contantUs"
  }, {
    path: "/company/honor",
    component: _64152f97,
    name: "company-honor"
  }, {
    path: "/company/introduction",
    component: _fbec5306,
    name: "company-introduction"
  }, {
    path: "/company/partner",
    component: _3dec2096,
    name: "company-partner"
  }, {
    path: "/company/recruit",
    component: _552121aa,
    name: "company-recruit"
  }, {
    path: "/company/seniority",
    component: _53fb032b,
    name: "company-seniority"
  }, {
<<<<<<< HEAD
    path: "/programme/programme",
    component: _cb90246c,
    name: "programme-programme"
=======
    path: "/customDetail/:id?",
    component: _bded9740,
    name: "customDetail-id"
  }, {
    path: "/productDetail/:id?",
    component: _639e2242,
    name: "productDetail-id"
>>>>>>> aec8caa4d726576970c0ae81360af3fe33f27e46
  }, {
    path: "/customDetail/:id?",
    component: _6efe7004,
    name: "customDetail-id"
  }, {
    path: "/programme/:id?",
    component: _1f010de8,
    name: "programme-id"
  }, {
    path: "/",
    component: _26786478,
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
