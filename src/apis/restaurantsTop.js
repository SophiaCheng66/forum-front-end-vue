import { apiHelper } from "../utility/helpers.js"
// const getToken = () => localStorage.getItem('token')

export default {
  getRestaurantsTop() {
    return apiHelper.get('/restaurants/top')
  }

}