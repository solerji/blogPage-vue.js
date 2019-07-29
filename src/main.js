// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import axios from 'axios'
// import './mock'

Vue.use(iView)
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// var url = "http://localhost:3001"
// axios.get(url+'/product').then(function(response){
//   console.log(response)
// }).catch(function(error){
//   console.log(error)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
