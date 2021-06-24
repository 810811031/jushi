<template>
    <img :src="require('@/assets/images/logo@2x.png')" class="logo" @click="handleBackHome" />
</template>

<script>
export default {
    name: 'COMPONENT_LOGO',
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
    cursor: pointer;
}
</style>