import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import Home from 'views/Home'
import About from 'views/About'



Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        component: Login,
        name: 'login',
        meta: {
            showSideMenu: false
        }
    }, {
        path: '/home/',
        component: Home,
        name: 'home',
        meta: {
            showSideMenu: true
        }
    }, {
        path: '/about/',
        component: About,
        name: 'about',
        meta: {
            auth: true,
            showSideMenu: true
        }
    }]
})