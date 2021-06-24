<template>
    <div class="programme">
        <NavDom :current="2" white />
        <Logo />
    </div>
</template>

<script>
import mixin from '@/mixins'
import NavDom from '@/components/nav'
import Logo from '@/components/logo'

export default {
    name: 'PAGE_PROGRAMME',
    mixins: [ mixin ],
    components: {
		NavDom, Logo
	},
}
</script>

<style lang="scss" scoped>
.programme {
    width: 100%;
    height: 8rem;
    background-color: #dd5;
}
</style>