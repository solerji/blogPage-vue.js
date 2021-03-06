// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import animated from 'animate.css'
// import * as d3 from 'd3'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import './mock'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
// import baseAxios from './utils/api.js'

Vue.use(iView)
Vue.use(animated)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(vueParticleLine)
Vue.prototype.$http = axios
// Vue.prototype.baseAxios = baseAxios

// Vue.prototype.$d3 = d3;
// window.d3 = d3;


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
