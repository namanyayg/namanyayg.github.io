import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Physics from '@/components/Physics/Physics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: '/physics',
      component: Physics
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
