import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from '../store'


Vue.use(Router)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/*')
    return
  }
  next()
}
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
      component: () => import('../views/AdminRestaurants.vue'),
      beforeEnter: authorizeIsAdmin
      // beforeEnter：在進入到路由之前，可先執行function
      //把這個方法抽成一個function
      // beforeEnter: (to, from, next) => {
      //   const currentUser = store.state.currentUser
      //   if (currentUser && !currentUser.isAdmin) {
      //     next('/*')
      //     return
      //   }
      //   next()
      // }

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
      component: () => import('../views/AdminRestaurantNew.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurantEdit',
      //動態載入
      component: () => import('../views/AdminRestaurantEdit.vue'),
      beforeEnter: authorizeIsAdmin
    },

    {
      //'admin/restaurants/:id'為動態路由
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      //動態載入
      component: () => import('../views/AdminRestaurant.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      //動態載入
      component: () => import('../views/AdminCategories.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      //動態載入
      component: () => import('../views/AdminUsers.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

// const router = new Router({
// linkExactActiveClass: 'active',
//   routes

// })

//每次切換路由都會經過這個判斷
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token
  //若有登入成功，isAuthenticated = true
  let isAuthenticated = store.state.isAuthenticated

  // 有token而且token有改變的情況下(store裡的token和localStorage裡的token不一樣)才向後端做驗證這個token是不是有效的
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 如果 token 無效且使用者下一步不是要到sign-in則轉址到登入頁，若沒有&& to.name !== 'sign-in'則會造成無窮迴圈
  // if (!isAuthenticated && to.name !== 'sign-in') {
  //   next('/signin')
  //   return
  // }

  // if (isAuthenticated && to.name === 'sign-in') {
  //   next('/restaurants')
  //   return
  // }


  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  //如果 token 無效而且使用者要去的地方的name不包括'sign-up'和'sign-in'就把它導回'/signin'頁
  //to.name是使用者即將要去的頁面，使用者即將要去的頁面有沒有被包含在 pathsWithoutAuthentication這2頁裡面
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  //如果token有效而且使用者要去的地方的name包括pathsWithoutAuthentication這2頁裡面，就把它導回'/restaurants'
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }


  next()
})


export default router
