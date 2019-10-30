import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import  fastClick from'fastclick'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
