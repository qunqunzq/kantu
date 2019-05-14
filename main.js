import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://www.yushuangsheng.com:7070';
Vue.prototype.$imageUrl = 'https://www.yushuangsheng.com:6060';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()