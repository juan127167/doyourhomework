import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/score',
      component: () => import(/*webpackChunkName:'score' */ '../page/score/score.vue')
    },
    {
      path: '/item',
      component: () => import(/**webpackChunkName:'item' */ '../page/item/item.vue')
    }
  ]

})
export default router
