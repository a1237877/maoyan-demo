import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/start/start'
import Home from '@/pages/home/home'
import Movie from '@/pages/movie/movie'
import Cinema from '@/pages/cinema/cinema'
import Mine from '@/pages/mine/mine'
import cityList from '@/components/city/cityList'

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
    },
    {
      path:'/movie',
      name:'Movie',
      component:Movie
    },
    {
      path:'/cinema',
      name:'Cinema',
      component:Cinema
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      path:'/cityList',
      name:'cityList',
      component:cityList
    }
  ]
})
