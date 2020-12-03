import { apiHelper } from "../utility/helpers.js"

export default {
  signIn({ email, password }) {
    //axios.post('/https://forum-express-api.herokuapp.com/api/signin')

    // 呼叫 axios 之後會回傳一個 Promise 物件，我們再直接把這個物件 return 出去，之後 Vue 元件接到 Promise 物件後，就可以用 then 做後續操作
    return apiHelper.post('/signin', {
      email,
      password
    })

  }
}