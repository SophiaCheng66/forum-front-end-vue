import { apiHelper } from '../utility/helpers.js'
const getToken = () => localStorage.getItem('token')


export default {

  comments: {
    delete({ commentId }) {
      return apiHelper.delete(`/comments/${commentId}`, { headers: { Authorization: `Bearer ${getToken()}` } })

    },

    create(data) {
      return apiHelper.post('/comments', data, { headers: { Authorization: `Bearer ${getToken()}` } })

    },



  }






}