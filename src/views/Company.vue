<template>
    <div class="company">
        <NavDom :current="5" white />
        <Logo />
    </div>
</template>

<script>
import mixin from '@/mixins'
import NavDom from '@/components/nav'
import Logo from '@/components/logo'

export default {
    name: 'PAGE_COMPANY',
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
.company {
    width: 100%;
    height: 8rem;
    background-color: #c70;
}
</style>