import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.interceptors.request.use(function(config) {
  // Concatenate base path if not an absolute URL
  // const api_key = '4b6541b6cab0a566fc47d56c9cbfcce8';
  config.baseURL = 'https://api.themoviedb.org/3/';
  config.headers = {
    'Content-Type': 'application/json;charset=utf-8',
    // 'Authorization': 'Bearer ' + api_key,
  }
  return config;
});

Vue.use(VueAxios, axios)
