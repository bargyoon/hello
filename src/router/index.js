import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Root', redirect: '/login'
  },
  {
    path: '/home', name: 'home', component: HomeView
  },
  {
    path: '/login', name: 'login', component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about', name: 'about', component: AboutView
  },
  {
    path: '/chart', name: 'chart', component: () => import('../views/ChartView.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
