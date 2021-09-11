<template>
    <div v-if="item">
        <nuxt-link to="/">
            <img :data-type="JSON.stringify(item)" v-if="dark" @click="handleClick" :src="`/api${ item.LogoDark }`" :class="['logo', { 'active': active }]" />
            <img data-type="light" v-else @click="handleClick" :src="`/api${ item.LogoLight }`" :class="['logo', { 'active': active }]" />
        </nuxt-link>
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
        },
        item: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    methods: {
        handleClick() {
            window.sessionStorage.setItem('Num', 0)
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