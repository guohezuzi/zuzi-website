import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import store from './store/index'

if (process.env.NODE_ENV === 'development') {
  Vue.config.productionTip = true
  axios.defaults.baseURL = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false
  axios.defaults.baseURL = 'https://www.guohezuzi.cn'
}
Vue.prototype.$http = axios

/*顺序很重要，定义的过滤器应该在new Vue的前面*/
Vue.filter('coverArticleLink', function (value) {
  let params = Object.keys(value).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(value[key]);
  }).join("&");
  return '/article?'+params
})

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  render(c) {
    return c("App")
  }
})