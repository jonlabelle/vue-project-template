import { createStore } from 'vuex'

import * as notification from '@/store/modules/notification'

export default createStore({
  // Whenever Vuex state is mutated outside of mutation handlers an error will be thrown.
  // This ensures that all state mutations can be explicitly tracked by debugging tools.
  // Do not enable strict mode when deploying for production.
  // https://vuex.vuejs.org/guide/strict.html#development-vs-production
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notification,
  },
})
