import { apiHelper } from "../utility/helpers.js"
// const getToken = () => localStorage.getItem('token')
// const getToken = localStorage.getItem('token')


export default {
  getRestaurants({ page, categoryId }) {


    //把使用者輸入的引數變成一個queryString
    const searchParams = new URLSearchParams({ page: page, categoryId: categoryId })


    //要帶token進去，依照JWT的規範去寫，在get後面會帶一個headers參數裡面放Authorization: `Bearer ${getToken()}`
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },

  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  }
}


// 關於URLSearchParams，javaScript 裡有提供一個原生的 URLSearchParams() 方法，後面會帶入參數，參數的內容是你想要讓這個網址後面有什麼queryString，它會幫你把一組物件參數直接組成網址上的 queryString。這種原生方法通常都是物件建構子，在使用時要用 new 的方式來產生實例，再透過 URLSearchParams.toString() 來產生 queryString

// const searchParams = new URLSearchParams({ page: 1, categoryId: 2 })
// undefined
// searchParams
// URLSearchParams { }
// searchParams.toString()
// "page=1&categoryId=2"
// searchParams.has('page')
// true
// searchParams.delete('page')
// undefined
// searchParams.has('page')
// false
// searchParams.toString()
// "categoryId=2"



