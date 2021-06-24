<template>
    <div class="cloudCenter">
        <NavDom :current="4" white />
        <Logo />
    </div>
</template>

<script>
import mixin from '@/mixins'
import NavDom from '@/components/nav'
import Logo from '@/components/logo'

export default {
    name: 'PAGE_CLOUDCENTER',
    mixins: [ mixin ],
    components: {
		NavDom, Logo
	},
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.cloudCenter {
    width: 100%;
    height: 8rem;
    background-color: #abc;
}
</style>