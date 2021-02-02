import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  params: {
    api_key: process.env.REACT_APP_API_KEY
  },
  timeout: 4000,
});

export default instance