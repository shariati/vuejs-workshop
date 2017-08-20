import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store