import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:3366',
    timeout: 1000,
  });


export default api