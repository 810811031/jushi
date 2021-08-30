<template>
    <nuxt-link to="/">
        <img v-if="dark" :src="require('@/assets/images/logo-grey@2x.png')" :class="['logo', { 'active': active }]" />
        <img v-else :src="require('@/assets/images/logo@2x.png')" :class="['logo', { 'active': active }]" />
    </nuxt-link>
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