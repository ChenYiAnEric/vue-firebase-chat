import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index.js'
import Home from '../views/Home.vue'
import login from '../views/login'
import singup from '../views/singIn'
import chat from '../views/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/singup',
    name: 'singup',
    component: singup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: chat
  }
]

const router = new VueRouter({
  routes
})

export default router
