import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default boot(({ app }) =>
{
  app.config.globalProperties.$axios = api;
});

export { api };
