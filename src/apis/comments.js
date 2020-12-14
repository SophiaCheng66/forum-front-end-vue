import { apiHelper } from '../utility/helpers.js'
const getToken = () => localStorage.getItem('token')


export default {

  comments: {
    delete({ commentId }) {
      return apiHelper.delete(`/comments/${commentId}`, { headers: { Authorization: `Bearer ${getToken()}` } })

    },

    create({ data1 }) {
      return apiHelper.post('/comments', data1, { headers: { Authorization: `Bearer ${getToken()}` } })

    },



  }






}