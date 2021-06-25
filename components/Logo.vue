<template>
    <div>
        <img v-if="dark" :src="require('@/assets/images/logo-grey@2x.png')" :class="['logo', { 'active': active }]" @click="handleBackHome" />
        <img v-else :src="require('@/assets/images/logo@2x.png')" :class="['logo', { 'active': active }]" @click="handleBackHome" />
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_LOGO',
    props: {
        dark: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        /**
		 * 返回首页
		 */
		 handleBackHome() {
			this.$router.push({ name: 'Home' })
		},
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 2.1rem;
    position: fixed;
    top: .2rem;
    left: .4rem;
    z-index: 999;
    transition: transform .2s linear;
    cursor: pointer;
}
.active {
    transform: translateX(-.2rem);
}
</style>