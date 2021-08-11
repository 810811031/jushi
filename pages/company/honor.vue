<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link to="introduction"><p>公司简介<span></span></p></nuxt-link>
                    <nuxt-link to="seniority"><p>公司资质<span></span></p></nuxt-link>
                    <p class="active">公司荣誉<span></span></p>
                    <nuxt-link to="recruit"><p>人才招聘<span></span></p></nuxt-link>
                    <nuxt-link to="contantUs"><p>联系我们<span></span></p></nuxt-link>
                    <nuxt-link to="partner"><p>合作伙伴<span></span></p></nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="title alignCenter">我们有</div>
                <div class="html">
                    <div class="sub-title">公司口号文案巴拉巴拉巴拉巴啦巴拉巴拉</div>
                    <div class="__content__">
                        <TimeLime
                            v-for="(item, index) in contents" @change="handleShow"
                            :key="index" :item="item" :active="index == contents.length - 1"
                            :index="index" />
                    </div>
                </div>
                <div class="mask" v-show="show" @click="show = false">
                    <img alt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import TimeLime from '@/self-components/timeline'
import contents from '@/assets/data/honor'

export default {
    name: 'PAGE_CPMPANY_INTRODUCTION',
    components: {
		NavDom,
        Logo,
        TimeLime,
    },
    data() {
        return {
            width: 0,
            height: 0,
            contents,
            show: false,
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
        this.height = document.documentElement.clientHeight
    },
    methods: {
        handleShow() {
            this.show = true
        }
    }
}
</script>

<style lang="scss" scoped>
@import './common.scss';
.title {
    margin-bottom: .1rem !important;
    box-sizing: border-box;
}
.sub-title {
    font-size: .24rem;
    color: #666F7E;
    line-height: .4rem;
    box-sizing: border-box;
    text-align: center;
}
.__content__ {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .8rem;
    overflow-x: auto;
    white-space: nowrap;
    padding-top: .4rem;
}
.mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: show .2s;
    @keyframes show {
        from { transform: translateY(-30px); opacity: 0; }
        to {}
    }
    img {
        width: 70%;
        min-height: 400px;
        background-color: #e8e8e8;
    }
}
</style>