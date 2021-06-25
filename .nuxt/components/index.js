import { wrapFunctional } from './utils'

export { default as Loading } from '../../components/loading.vue'
export { default as Logo } from '../../components/logo.vue'
export { default as Nav } from '../../components/nav.vue'
export { default as ProductBox } from '../../components/product-box.vue'

export const LazyLoading = import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyProductBox = import('../../components/product-box.vue' /* webpackChunkName: "components/product-box" */).then(c => wrapFunctional(c.default || c))
