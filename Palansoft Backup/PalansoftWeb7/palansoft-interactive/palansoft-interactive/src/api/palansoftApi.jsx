import axios from 'axios'
const instance = axios.create({
  baseURL:
    'http://www.hereinoman.com:3000/api/v1/palansoftInteractive/activity/activityListing',
})
export default instance
