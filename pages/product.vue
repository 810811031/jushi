<template>
    <div class="container" :style="{ height: height + 'px' }">
        <NavDom :current="1" white mask />
        <Logo dark />
        <div class="content">
            <div class="nav">
                <div class="inside"></div>
            </div>
            <div class="table">
                <div class="inside">
                    <Box animate='1' />
                    <Box bg="#ABB2BF" color="white" />
                    <Box />
                    <Box bg="#656E7D" />
                    <Box bg="#656E7D" animate='2' />
                    <Box />
                    <Box />
                    <Box bg="#ABB2BF" color="white" />
                    <Box />
                    <Box animate />
                    <Box bg="#ABB2BF" color="white" />
                    <Box />
                    <Box bg="#656E7D" />
                    <Box bg="#656E7D" animate />
                    <Box />
                    <Box />
                    <Box bg="#ABB2BF" color="white" />
                    <Box />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import Box from '@/self-components/product-box'

export default {
    name: 'PAGE_PRODUCT',
    components: {
		NavDom,
        Logo,
        Box
    },
    data() {
        return {
            width: 0,
            height: 0
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
	},
}
</script>

<style lang="scss" scoped>
.container {
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
            display: inline-block;
            vertical-align: top;
            position: relative;
            .inside {
                position: absolute;
                top: 50%;
                
            }
        }
        .table {
            width: calc(100% - 7.81rem);
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