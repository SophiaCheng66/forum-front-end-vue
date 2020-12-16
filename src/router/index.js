import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'


Vue.use(Router)

const router = new Router({
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
      redirect: '/signin'
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      //動態載入
      component: () => import('../views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      //動態載入
      component: () => import('../views/RestaurantsTop.vue')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      //動態載入
      component: () => import('../views/Restaurant.vue')

    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurants-dashboard',
      //動態載入
      component: () => import('../views/RestaurantDashboard.vue')

    },
    {
      path: '/users/top',
      name: 'users-tops',
      //動態載入
      component: () => import('../views/UsersTop.vue')
    },
    {
      path: '/users/detail/:id',
      name: 'users-detail',
      //動態載入
      component: () => import('../views/User.vue')
    },
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      //動態載入
      component: () => import('../views/UserEdit.vue')
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      //動態載入
      component: () => import('../views/AdminRestaurants.vue')
    },
    //有指定名稱的路由，都需要放在動態路由前
    {
      path: '/admin',
      exact: true,
      //exact: true，代表要完全吻合path: '/admin'，才直接導向'/admin/restaurants'
      redirect: '/admin/restaurants'
    },
    {
      path: '/admin/restaurants/new',
      name: 'admin-restaurant-new',
      //動態載入
      component: () => import('../views/AdminRestaurantNew.vue')
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurantEdit',
      //動態載入
      component: () => import('../views/AdminRestaurantEdit.vue')
    },

    {
      //'admin/restaurants/:id'為動態路由
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      //動態載入
      component: () => import('../views/AdminRestaurant.vue')
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      //動態載入
      component: () => import('../views/AdminCategories.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      //動態載入
      component: () => import('../views/AdminUsers.vue')
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

router.beforeEach(to, from, next => {
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
