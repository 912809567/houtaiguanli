import Vue from 'vue';
import VueRouter from 'vue-router';

const Main = () => import('../views/Main.vue')
const User = () => import('../views/User')
const Home = () => import('../views/Home')
const Mall = () => import('../views/mall')
const pageOne = () => import('../views/other/pageOne.vue')
const pageTwo = () => import('../views/other/pageTwo.vue')
const login = () => import('../views/login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect:'/home',
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: Home
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: User
      // },
      // {
      //   path: '/mall',
      //   name: 'mall',
      //   component: Mall
      // },
      // {
      //   path: '/page1',
      //   name: 'page1',
      //   component: pageOne
      // },
      // {
      //   path: '/page2',
      //   name: 'page2',
      //   component: pageTwo
      // },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


