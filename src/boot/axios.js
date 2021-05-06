import Vue from 'vue';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

Vue.prototype.$axios = api;
