import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import city from './views/city'
import detail from'./views/detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
   
  ]
})
