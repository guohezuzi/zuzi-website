import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080';
Vue.prototype.$http=axios
//Vue.config.devtools=false;

/*顺序很重要，定义的过滤器应该在new Vue的前面*/
Vue.filter('coverArticleLink',function (value) {
    const result=JSON.stringify(value)
    return '/article?'+result.replace(/:/g,'=').replace(/,/g,'&').replace(/["{}]/g,'')
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    render(c){
        return c("App")
    }
})

