import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/page/front/firstPage'
import blogPage from '@/page/front/blogPage'
import classPage from '@/page/front/classPage'
import introduction from '@/page/front/introduction'
import contentPage from '@/page/front/contentPage'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/blogPage',
      name: 'blogPage',
      component: blogPage
    },
    {
      path: '/classPage',
      name: 'classPage',
      component: classPage
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/contentPage',
      name: 'contentPaget',
      component: contentPage
    }
  ]
})
