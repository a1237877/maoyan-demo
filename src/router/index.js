import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/start/start'
import Home from '@/pages/home/home'
import Movie from '@/pages/movie/movie'
import Cinema from '@/pages/cinema/cinema'
import Mine from '@/pages/mine/mine'
import cityList from '@/components/city/cityList'
import MoviesInTheater from '@/pages/movie/MoviesInTheater'
import MoviesComing from '@/pages/movie/MoviesComing'
import recommand from '@/pages/home/recommand'
import TV from '@/pages/home/TV'
import show from '@/pages/home/show'
import book from '@/pages/home/book'

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
      component:Home,
      // redirect:'/home/recommand',
      children:[
        {
          name:'recommand',
          path:'/',
          redirect:'/home/recommand',
          component:recommand
        },
        {
          name:'recommand',
          path:'recommand',
          component:recommand
        },
        {
          name:'TV',
          path:'TV',
          component:TV
        },
        {
          path:'show',
          name:'show',
          component:show
        },
        {
          path:'book',
          name:'book',
          component:book
        }
      ]
    },
    {
      path:'/movie',
      name:'Movie',
      component:Movie,
      redirect: '/movie/intheater',
      children: [
        {
          name: 'intheater',
          path: 'intheater',
          component: MoviesInTheater
        },
        {
          name: 'coming',
          path: 'coming',
          component: MoviesComing
        }
      ]
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
