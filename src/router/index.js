import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'App',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('@/views/Register.vue')
  },
  {
    path: '/mylogin',
    name: 'mylogin',
    component: ()=>import('@/views/Mylogin.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: ()=>import('@/views/Help.vue')
  },
  {
    path: '/kindMoudle',
    name: 'kindMoudle',
    component: ()=>import('@/views/Kind-moudle.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: ()=>import('@/views/Search.vue')
  },
  {
    path: '/detailPage',
    name: 'detailPage',
    component: ()=>import('@/views/Detail-page.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: ()=>import('@/views/Buy.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: ()=>import('@/views/Comment.vue'),
    redirect:'/comment/comm-tags',
    children:[
      {
        path:'comm-tags',
        component: ()=>import('@/views/Comm-tags.vue'),
      },
      {
        path:'comm-pic',
        component: ()=>import('@/views/Comm-pic.vue'),
      }
    ]
  },
  {
    path: '/deal',
    name: 'deal',
    component: ()=>import('@/views/Deal.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: ()=>import('@/views/Privacy.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
})

export default router
