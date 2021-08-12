import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _621d89d2 = () => interopDefault(import('..\\pages\\cloudcenter.vue' /* webpackChunkName: "pages/cloudcenter" */))
const _eec9fe60 = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _14ccf512 = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _76270628 = () => interopDefault(import('..\\pages\\productDetail.vue' /* webpackChunkName: "pages/productDetail" */))
const _3dc0d924 = () => interopDefault(import('..\\pages\\programme.vue' /* webpackChunkName: "pages/programme" */))
const _7461ea04 = () => interopDefault(import('..\\pages\\company\\contantUs.vue' /* webpackChunkName: "pages/company/contantUs" */))
const _7f1e2316 = () => interopDefault(import('..\\pages\\company\\honor.vue' /* webpackChunkName: "pages/company/honor" */))
const _643d7c42 = () => interopDefault(import('..\\pages\\company\\introduction.vue' /* webpackChunkName: "pages/company/introduction" */))
const _d51d21da = () => interopDefault(import('..\\pages\\company\\partner.vue' /* webpackChunkName: "pages/company/partner" */))
const _ec5222ee = () => interopDefault(import('..\\pages\\company\\recruit.vue' /* webpackChunkName: "pages/company/recruit" */))
const _e6ffb9ee = () => interopDefault(import('..\\pages\\company\\seniority.vue' /* webpackChunkName: "pages/company/seniority" */))
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
    path: "/partner",
    component: _eec9fe60,
    name: "partner"
  }, {
    path: "/product",
    component: _14ccf512,
    name: "product"
  }, {
    path: "/productDetail",
    component: _76270628,
    name: "productDetail"
  }, {
    path: "/programme",
    component: _3dc0d924,
    name: "programme"
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
