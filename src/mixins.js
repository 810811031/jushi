export default {
    mounted() {
        setTimeout(() => {
            this.$store.commit('setRouteAnimate',false)
        }, 2000)
    }
}