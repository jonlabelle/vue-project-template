import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView,
    props: true,
  },
  {
    // Catch all / 404 Not found Route
    // See: https://next.router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundView,
    props: { resource: 'page' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  // Preserve the scrolling position of history entries
  // https://next.router.vuejs.org/guide/advanced/scroll-behavior.html
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        //top: document.querySelector("#app").offsetHeight,
        behavior: 'smooth',
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: routes,
})

export default router
