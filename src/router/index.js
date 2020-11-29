import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'


Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/SignUp.vue')
    },
    //根目錄轉址，也就是當使用者直接到網站的 / 位置時，還是可以轉到 /restaurants，看到餐廳列表。
    {
      path: '/',
      name: 'root',
      redirect: '/restaurants'
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/RestaurantsTop.vue')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/Restaurant.vue')

    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurants-dashboard',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/RestaurantDashboard.vue')

    },
    {
      path: '/users/top',
      name: 'users-tops',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/UsersTop.vue')
    },
    {
      path: '/users/detail',
      name: 'users-detail',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/User.vue')
    },
    {
      path: '/*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

// const router = new Router({
//linkExactActiveClass: 'active',
//   routes
// })

// export default router
