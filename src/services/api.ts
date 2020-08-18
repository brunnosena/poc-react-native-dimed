import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  proxy: {
    host: 'proxy.dimed.com.br',
    port: 9090,
  },
});

export default api;
