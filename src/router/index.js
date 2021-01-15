import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Popular from '@/components/Popular'
import Detail from '@/components/Detail'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    }
  ]
})
