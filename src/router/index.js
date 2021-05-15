import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie' /* 引入movie页面 */
import mineRouter from './mine' /* 引入mine页面 */
import cinemaRouter from './cinema' /* 引入cinema页面 */

Vue.use(VueRouter)

const routes = [
  movieRouter,
  mineRouter,
  cinemaRouter,
  {
	  /* 重定向路由，默认指向movie页面 */
	  path:'/*',
	  redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
