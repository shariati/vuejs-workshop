import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
//import VueI18n from 'vue-i18n'
//import vueConfig from 'vue-config'
import VueResource from 'vue-resource'



const options = {

}

import './static/css/bootstrap.css'
import './static/scss/app.scss'
import './static/css/animated.css'



// import 'jquery'
// import 'signalr'

const configs = {

}

//Vue.use(vueConfig, configs)


sync(store, router)
const app = new Vue({
    router,
    store,
    VueResource,
    ...App
})




export { app, router, store }