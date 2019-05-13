import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'http://www.qunzq.com:7070';
Vue.prototype.$imageUrl = 'http://www.qunzq.com:6060';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()