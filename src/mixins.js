export default {
    mounted() {
        setTimeout(() => {
            this.$store.commit('setRouteAnimate',false)
        }, 1000)
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('setRouteAnimate', true)
        setTimeout(() => next(), 1000)
    }
}