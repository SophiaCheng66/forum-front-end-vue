import { apiHelper } from "../utility/helpers.js"
const getToken = () => localStorage.getItem('token')


export default {
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, { headers: { Authorization: `Bearer ${getToken()}` } })
  },



  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },

  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },

  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, { headers: { Authorization: `bearer ${getToken()}` } })
  },

  getTopUsers() {
    return apiHelper.get('/users/top', { headers: { Authorization: `bearer ${getToken()}` } })
  },

  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`, { headers: { Authorization: `bearer ${getToken()}` } })
  },

  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, { headers: { Authorization: `bearer ${getToken()}` } })
  }





}







