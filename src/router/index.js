import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/start/start'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
