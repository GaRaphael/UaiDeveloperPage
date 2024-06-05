import axios from 'axios';

const api = axios.create({
  baseURL: ('http://localhost:3002/api'),
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('facitAccessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;