import { apiHelper } from "../utility/helpers.js"
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds', { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}