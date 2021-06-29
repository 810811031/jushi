<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="4" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <div class="title">云管理服务中心</div>
                    <p class="normal">服务运营商·助力新基建·做全球充电服务供应商</p>
                </div>
            </div>
            <div class="right">
                <div class="inside">
                    <div class="slide slide1">
                        <div class="mask"></div>
                    </div>
                    <div class="slide slide2">
                        <div class="mask"></div>
                    </div>
                    <div class="slide slide3">
                        <div class="mask"></div>
                    </div>
                    <div class="slide slide4">
                        <div class="mask"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'

export default {
    name: 'PAGE_CLOUDCENTER',
    components: {
		NavDom,
        Logo,
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
    .content {
        width: 100%;
        height: 100%;
        .left {
            width: 5.5rem;
            height: 100%;
            box-sizing: border-box;
            padding-left: .9rem;
            padding-right: .8rem;
            display: inline-block;
            vertical-align: top;
            position: relative;
            .inside {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                .title {
                    font-size: .4rem;
                    color: #666F7E;
                    line-height: 56px;
                    margin-bottom: .2rem;
                }
                .normal {
                    color: #858C98;
                    font-size: .18rem;
                    line-height: .25rem;
                }
            }
        }
        .right {
            width: calc(100% - 6.31rem);
            height: 100%;
            box-sizing: border-box;
            padding: .55rem 0;
            padding-right: .55rem; 
            display: inline-block;
            vertical-align: top;
            .inside {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border: 1px solid #ccc;
                font-size: 0;
                .slide {
                    width: 25%;
                    height: 100%;
                    float: left;
                    cursor: pointer;
                    .mask {
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0,0,0,.3);
                    }
                }
                .slide1 {
                    background-color: #d23;
                }
                .slide2 {
                    background-color: #764;
                }
                .slide3 {
                    background-color: #69c;
                }
                .slide4 {
                    background-color: #ccc;
                }
                .active {
                    width: 24.44%;
                }
            }
        }
    }
}
</style>