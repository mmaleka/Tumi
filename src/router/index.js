import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donate',
    name: 'Donate',
    // meta: {
    //   requiresAuth: true
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/Donate.vue')
  },
  {
    path: '/receive',
    name: 'Receive',
    // meta: {
    //   requiresAuth: true
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/Receive.vue')
  },
  {
    path: '/testimony',
    name: 'Testimony',
    // meta: {
    //   requiresAuth: true
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/Testimony.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // meta: {
    //   requiresAuth: true
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/bank',
    name: 'Bank',
    // meta: {
    //   requiresAuth: true
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/Bank.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },


]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
