// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

let baseUrl = '//serve.nmn.gl'
if (process.env.NODE_ENV === 'development') {
  baseUrl = '//localhost:4242'
}

Vue.axios.defaults.baseURL = baseUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
