import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.irunac.gostudion.com/'
});

export default api;
