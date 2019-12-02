import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: resolve => require(['@/page/front/firstPage.vue'], resolve)
    },
    {
      path: '/blogPage',
      name: 'blogPage',
      component: resolve => require(['@/page/front/blogPage.vue'], resolve)
    },
    {
      path: '/classPage',
      name: 'classPage',
      component: resolve => require(['@/page/front/classPage.vue'], resolve)
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: resolve => require(['@/page/front/introduction.vue'], resolve)
    },
    {
      path: '/contentPage/:aid',
      name: 'contentPage',
      component: resolve => require(['@/page/front/contentPage.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/page/back/login.vue'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/page/back/index.vue'], resolve)
    },
    {
      path: '/editArticle/:aid',
      name: 'editArticle',
      component: resolve => require(['@/page/back/editArticle.vue'], resolve)
    }
  ]
})
