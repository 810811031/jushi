<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link to="introduction"><p>公司简介<span></span></p></nuxt-link>
                    <nuxt-link to="seniority"><p>公司资质<span></span></p></nuxt-link>
                    <nuxt-link to="honor"><p>公司荣誉<span></span></p></nuxt-link>
                    <nuxt-link to="recruit"><p>人才招聘<span></span></p></nuxt-link>
                    <nuxt-link to="contantUs"><p>联系我们<span></span></p></nuxt-link>
                    <p class="active">合作伙伴<span></span></p>
                </div>
            </div>
            <div class="right">
                <div class="title">城市运营解决方案6</div>
                <div class="html">
                    <p class="html-title">三. 产品特点</p>
                    <p class="html-content">
                        适用于周围企业班车、旅游班车及物流城等大功率充电年车型，需大功率充电的场合来满足电动车辆的充电需求。
                    </p>
                    <p class="html-title">二. 适用范围</p>
                    <p class="html-content">
                        适用于周围企业班车、旅游班车及物流城等大功率充电年车型，需大功率充电的场合来满足电动车辆的充电需求。
                    </p>
                    <p class="html-title">一. 方案介绍</p>
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
    name: 'PAGE_CPMPANY_SENIORITY',
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
@import './common.scss';
</style>