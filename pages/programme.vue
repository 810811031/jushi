<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="2" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <p>企事业单位<span></span></p>
                    <p>客运快充<span></span></p>
                    <p>家庭用户<span></span></p>
                    <p>社区运营<span></span></p>
                    <p class="active">城市运营<span></span></p>
                    <p>物流车<span></span></p>
                </div>
            </div>
            <div class="right">
                <div class="title">城市运营解决方案</div>
                <div class="html">
                    <p class="html-title">一. 方案介绍</p>
                    <p class="html-content">
                        适用于周围企业班车、旅游班车及物流城等大功率充电年车型，需大功率充电的场合来满足电动车辆的充电需求。
                    </p>
                    <p class="html-title">二. 适用范围</p>
                    <p class="html-content">
                        适用于周围企业班车、旅游班车及物流城等大功率充电年车型，需大功率充电的场合来满足电动车辆的充电需求。
                    </p>
                    <p class="html-title">三. 产品特点</p>
                    <p class="html-content">
                        适用于周围企业班车、旅游班车及物流城等大功率充电年车型，需大功率充电的场合来满足电动车辆的充电需求。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'

export default {
    name: 'PAGE_PROGRAMME',
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
    position: relative;
    .content {
        width: 100%;
        height: 100%;
        .left {
            width: 4.84rem;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid rgba(171, 178, 191, 0.3);
            position: relative;
            display: inline-block;
            vertical-align: top;
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
                    cursor: pointer;
                    font-weight: bold;
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
        .right {
            width: calc(100% - 4.85rem);
            height: 100%;
            overflow: auto;
            box-sizing: border-box;
            padding-left: 1.15rem;
            display: inline-block;
            vertical-align: top;
            padding-top: 1.1rem;
            .title {
                font-size: .4rem;
                line-height: .56rem;
                color: #666F7E;
                margin-bottom: .7rem;
            }
            .html {
                font-size: .16rem;
                line-height: .22rem;
                color: #666F7E;
                .html-title {
                    margin-bottom: .2rem;
                }
                .html-content {
                    margin-bottom: .6rem;
                }
            }
        }
    }
}
</style>