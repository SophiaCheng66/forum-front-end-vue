//原本axios的寫法 : axios.get('https://forum-express-api.herokuapp.com/api/restaurants').then(data => /*...*/)，在這裡把'https://forum-express-api.herokuapp.com/api'定義成baseURL

import axios from 'axios'
import Swal from 'sweetalert2'
const baseURL = 'https://forum-express-api.herokuapp.com/api'

//axios.create() 方法會回傳一個自訂的 axios 實例，我們把它存到 apiHelper 變數裡，之後我要用的時候就直接寫成apiHelper.get('/restaurants')

const axiosInstance = axios.create({
  baseURL: baseURL
  //也可寫成，baseURL = 'https://forum-express-api.herokuapp.com/api'

})

//原本在apis裡的路由設定每一條都要另外加上token的設定帶入token，現在集中在這裡用interceptors(攔截器)在發出需求前就先載入token，之前的寫法如下:
// const getToken = () => localStorage.getItem('token')
// create({ data1 }) {
//   return apiHelper.post('/comments', data1, { headers: { Authorization: `Bearer ${getToken()}` } })

// },


//變成這樣
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance



// export const apiHelper = axios.create({
//   baseURL: baseURL
//   //也可寫成，baseURL = 'https://forum-express-api.herokuapp.com/api'

// })

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',  //要顯示toast的位置，右上角就輸入top-end
  showConfirmButton: false,  //要不要顯示確認的按鈕
  timer: 3000  // 要在右上角停留多久
})

//要用的時候會用Toast.fire()做引用


