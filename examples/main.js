import Vue from 'vue'
import App from './App'
import router from './router'
import VueClipboards from 'vue-clipboards'
import FreeView from '../src/index'
import 'src/styl/index.styl'
import 'github-markdown-css'
import './assets/stylus/styzy-markdown.styl'
import DemoBox from './components/demo-box.vue'

Vue.config.productionTip = false
Vue.use(FreeView)
Vue.use(VueClipboards)
Vue.component(DemoBox.name, DemoBox)

//实例化vue对象
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')