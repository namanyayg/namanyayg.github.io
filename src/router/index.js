import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Physics from '@/components/Physics/Physics'
import LabPage from '@/components/Lab/LabPage'
import MediaGallery from '@/components/Media/MediaGallery'
import PressPage from '@/components/Press/PressPage'
import PressKit from '@/components/Press/PressKit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: '/physics',
      component: Physics
    },
    {
      path: '/lab',
      component: LabPage
    },
    {
      path: '/media',
      component: MediaGallery
    },
    {
      path: '/press',
      component: PressPage
    },
    {
      path: '/press-kit',
      component: PressKit
    }
  ],
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
