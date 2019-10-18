// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styl/reset.css'
import '@/assets/styl/border.css'
import '@/assets/styl/iconfont.css'
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'






Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
