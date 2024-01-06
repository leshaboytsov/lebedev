import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d8e33a1 = () => interopDefault(import('..\\pages\\slide.vue' /* webpackChunkName: "pages/slide" */))
const _4c20015c = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _7ce5a642 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _be951f20 = () => interopDefault(import('..\\pages\\_url.vue' /* webpackChunkName: "pages/_url" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/slide",
    component: _7d8e33a1,
    name: "slide"
  }, {
    path: "/test",
    component: _4c20015c,
    name: "test"
  }, {
    path: "/",
    component: _7ce5a642,
    name: "index"
  }, {
    path: "/:url",
    component: _be951f20,
    name: "url"
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