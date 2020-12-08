import { apiHelper } from "../utility/helpers.js"
// const getToken = () => localStorage.getItem('token')

export default {
  create({ data1 }) {
    return apiHelper.post('/signup', data1)
  }
}                              