<template>
    <div class="container" :style="{ height: height + 'px' }">
        <NavDom :current="1" white mask />
        <Logo dark />
        <div class="content">
            <div class="nav">
                <div class="inside">
                    <p class="active">AC快充系列<span></span></p>
                    <p>电单车系列<span></span></p>
                    <p>欧标充电桩<span></span></p>
                    <p>DC快充系列<span></span></p>
                    <p>美标充电桩<span></span></p>
                    <p>便携式系列<span></span></p>
                    <p>所有分类<span></span></p>
                </div>
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
    created() {
        this.getProducts()
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
    },
    methods: {
        getProducts() {
            this.$axios.get('/program')
                .then(res => {
                    console.log(res)
                })
        }
    }
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
        padding-left: 6.2rem;
        .nav {
            width: 7rem;
            height: 100%;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: top;
            position: fixed;
            top: 0;
            left: 0;
            .inside {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                box-sizing: border-box;
                padding-left: .95rem;
                p {
                    font-size: .18rem;
                    color: #3E4045;
                    line-height: .25rem;
                    transition: all .2s linear;
                    position: relative;
                    margin-bottom: .36rem;
                    box-sizing: border-box;
                    padding-left: .2rem;
                    font-weight: bold;
                    cursor: pointer;
                    span {
                        display: inline-block;
                        width: 0;
                        height: .15rem;
                        opacity: .4;
                        position: absolute;
                        bottom: -.1rem;
                        left: 0;
                        transition: width .4s linear;
                    }
                    &:hover {
                        span {
                            width: 1.2rem;
                            background-color: #DAE0E9;
                            height: .15rem;
                            opacity: .6;
                            bottom: -.05rem;
                        }
                    }
                }
                .active {
                    font-size: .28rem;
                    span {
                        width: 1.2rem;
                        background-color: #008DDC;
                    }
                }
            }
        }
        .table {
            width: calc(100% - .81rem);
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