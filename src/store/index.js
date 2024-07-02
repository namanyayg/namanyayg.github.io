import Vue from 'vue'
import Vuex from 'vuex'

import viewType from './modules/viewType'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    viewType
  },
  strict: debug
})
