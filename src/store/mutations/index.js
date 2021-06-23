export default {
    /**
     * 改变当前 loading 状态
     * @param {*} state 
     * @param {*} payload 
     */
    setRouteAnimate(state, payload) {
        state.loading.show = payload
    }
}