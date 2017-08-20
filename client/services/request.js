import Vue from 'vue'
import service from './index.js'
import VueResource from 'vue-resource'
import store from '../store'
Vue.use(VueResource)
export default {
    post(nodeAddress, data, hideLoader) {
        return new Promise((resolve, reject) => {
            let api = service.base + nodeAddress
            var header = 'Bearer ' + store.state.user.token
            if (!hideLoader) { store.commit("loading", true) }
            Vue.http.post(api, data, {
                headers: { "Content-Type": "application/json", "Authorization": header }
            }).then(res => {
                store.commit("loading", false)
                resolve(res)
            }, err => {
                store.commit("loading", false)
                reject(err)
            })
        })
    },
    get(nodeAddress, data, hideLoader) {
        return new Promise((resolve, reject) => {
            let api = service.base + nodeAddress
            var header = 'Bearer ' + store.state.user.token
            if (!hideLoader) { store.commit("loading", true) }
            Vue.http.get(api, {
                headers: {
                    Authorization: header
                }
            }).then(res => {
                resolve(res)
                store.commit("loading", false)
            }, err => {
                reject(err)
                store.commit("loading", false)
            })
        })
    }

}