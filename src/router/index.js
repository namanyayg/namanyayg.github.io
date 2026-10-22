import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Physics from '@/components/Physics/Physics'
import LabPage from '@/components/Lab/LabPage'
import ArchiveArticle from '@/components/Archive/ArchiveArticle'
import records from '@/components/Archive/records.json'
import { setPageMeta } from '@/components/Archive/meta'
import MediaGallery from '@/components/Media/MediaGallery'
import PressPage from '@/components/Press/PressPage'
import PressKit from '@/components/Press/PressKit'

Vue.use(Router)

const router = new Router({
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
      path: '/lab/:slug',
      component: ArchiveArticle
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

router.afterEach(to => {
  const record = records.find(item => item.slug === to.params.slug)
  if (to.path === '/lab' || to.path === '/lab/') setPageMeta('The Lab | Namanyay Goel', 'A chronological archive of Namanyay Goel’s design, code and experiments, from 2012 onward.', '/lab/', '/static/archive/portfolio-2018.webp')
  else if (to.path.startsWith('/lab/') && record) setPageMeta(record.title + ' | The Lab', record.summary, '/lab/' + record.slug + '/', record.textOnly ? '/static/archive/portfolio-2018.webp' : record.image)
  else if (!to.path.startsWith('/lab/')) setPageMeta(null, null, to.path, null)
})

export default router
