export default {
    updateCity(state, payload) {
        state.city = payload
    },
    changeThemeBackground(state, payload) {
        state.theme.backgroundColor = payload
    }
}