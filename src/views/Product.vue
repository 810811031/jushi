<template>
    <div class="product">
        <NavDom :current="1" white mask />
        <Logo dark />
        <div class="content">
            <div class="nav">
                <div class="inside"></div>
            </div>
            <div class="table">
                <div class="inside">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixins'
import NavDom from '@/components/nav'
import Logo from '@/components/logo'
import Box from '@/components/product-box'

export default {
    name: 'PAGE_PRODUCT',
    mixins: [ mixin ],
    components: {
		NavDom, Logo, Box
	},
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.product {
    width: 100%;
    height: 100%;
    position: relative;
    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        .nav {
            width: 7rem;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid rgba(171, 178, 191, .3);
            display: inline-block;
            vertical-align: top;
            position: relative;
            .inside {
                position: absolute;
                top: 50%;
                
            }
        }
        .table {
            width: calc(100% - 7.8rem);
            height: 100%;
            vertical-align: top;
            display: inline-block;
            .inside {
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
            }
        }
    }
}
</style>