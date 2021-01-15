// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./plugins')
require('./assets/css/main.css')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    if (!localStorage.getItem('api_key')){
      localStorage.setItem('api_key', '4b6541b6cab0a566fc47d56c9cbfcce8')
    }
  }
})
