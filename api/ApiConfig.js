import axios from 'axios'

const baseURL = 'http://gn-test.crem.pl'

var axiosInstance = axios.create({
  baseURL: baseURL
})

export default axiosInstance