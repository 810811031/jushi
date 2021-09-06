<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="4" white mask :menu="menu" />
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
                    <a href="http://ev.sowellchina.com/admin/login" target="view_window" class="slide slide1" ref="slide1" @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave(1)">
                        <div class="mask">
                            <div class="title">举视充电结算系统</div>
                            <div class="discription">举视充电特有的结算系统，管理所属桩群、充电订单、分账申请、结算记录</div>
                        </div>
                        <img src="../assets/images/1.jpg" alt="" />
                    </a>
                    <a href="http://ev.sowellchina.com/admin/login" target="view_window" class="slide slide2" ref="slide2" @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave(2)">
                        <div class="mask">
                            <div class="title">大客户企业管理</div>
                            <div class="discription">企业大客户专属解决方案，在线管理企业员工、统一充值、资金分配、企业订单</div>
                        </div>
                        <img src="../assets/images/2.jpg" alt="" />
                    </a>
                    <a href="http://ev.sowellchina.com/admin/login" target="view_window" class="slide slide3" ref="slide3" @mouseenter="handleMouseEnter(3)" @mouseleave="handleMouseLeave(3)">
                        <div class="mask">
                            <div class="title">举视企业版APP</div>
                            <div class="discription">企业内部使用解决方案，管理充电桩、管理企业用户、管理充电订单、财务自理</div>
                        </div>
                        <img src="../assets/images/3.jpg" alt="" />
                    </a>
                    <a href="http://ev.sowellchina.com/admin/login" target="view_window" class="slide slide4" ref="slide4" @mouseenter="handleMouseEnter(4)" @mouseleave="handleMouseLeave(4)">
                        <div class="mask">
                            <div class="title">平台接入</div>
                            <div class="discription">快速接入举视充电运营平台，为您提供更好更准确的优质服务，欢迎您的加入</div>
                        </div>
                        <img src="../assets/images/4.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <FooterDom :item="result" />
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import FooterDom from '@/self-components/footer'

export default {
    name: 'PAGE_CLOUDCENTER',
    components: {
		NavDom,
        Logo,
        FooterDom
    },
    data() {
        return {
            width: 0,
            height: 0
        }
    },
    async asyncData(app) {
        let result = await app.$axios.get('/init')
        let menu = await app.$axios.get('/menus')
		menu = menu.data.data
        result = result.data.data
		return { result, menu }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
	},
    methods: {
        handleMouseEnter(type) {
            for (let i = 1; i < 5; i++) {
                this.$refs[`slide${ i }`].style.width = '20%'
            }
            this.$refs[`slide${ type }`].style.width = '40%'
        },
        handleMouseLeave(type) {
            for (let i = 1; i < 5; i++) {
                this.$refs[`slide${ i }`].style.width = '25%'
            }
        },
    }
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
                font-size: 0;
                .slide {
                    width: 25%;
                    height: 100%;
                    transition: width .2s linear;
                    float: left;
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    .mask {
                        width: 100%;
                        height: 100%;
                        background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) 0%, rgba(0, 0, 0, .5) 100%,);
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        .title {
                            font-size: 24px;
                            color: #fff;
                            position: absolute;
                            bottom: 1.6rem;
                            left: .2rem;
                        }
                        .discription {
                            width: 90%;
                            font-size: 14px;
                            color: #fff;
                            position: absolute;
                            bottom: 1rem;
                            left: .2rem;
                        }
                    }
                    &:hover .mask{
                        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, .8) 99%,);
                    }
                    img {
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 1;
                    }
                }
                .active {
                    width: 24.44%;
                }
            }
        }
    }
}
</style>