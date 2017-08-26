import service from '../services';
import request from '../services/request.js';


export default {
    getCityInformation({ commit, dispatch }, payload) {
        request.get(service.getCity + payload).then((response) => {
            commit('updateCity', response.body.current)
        }, (err) => {
            console.log(err)
        })
    }
}