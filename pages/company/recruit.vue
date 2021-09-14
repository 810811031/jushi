<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask :menu="menu" />
        <Logo dark :item="result" />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link to="introduction"><p>公司简介<span></span></p></nuxt-link>
                    <nuxt-link to="seniority"><p>公司荣誉<span></span></p></nuxt-link>
                    <nuxt-link to="honor"><p>发展历程<span></span></p></nuxt-link>
                    <p class="active">人才招聘<span></span></p>
                    <nuxt-link to="contantUs"><p>联系我们<span></span></p></nuxt-link>
                    <nuxt-link to="partner"><p>合作伙伴<span></span></p></nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="title alignCenter">举视新能源 2021 年度招贤令</div>
                <div class="html">
                    <p class="detail">举视新能源坚持“以人为本”的人才发展思路，注重人才培养，拥有完善的人才培育体系，实现员工和企业的共同发展。
                    举视新能源在全国设有八家分公司，拥有一家研发公司，一家工程公司，一家运营公司，为成为“充电服务运营商”全局谋划，重点布局。
                    在人才的选拔上，企业搭建人才流动的内部平台，营造内部人才市场，为员工畅通职业发展渠道。</p>
                    <span class="_btn" @click="handleLeft"><img src="../../assets/images/left.png" /></span>
                    <span class="_btn" @click="handleRight"><img src="../../assets/images/right.png" /></span>
                    <div class="tabs" >
                        <div class="tabs_wrapper" ref="tabs">
                             <div @click="handleSelectCompany(index + 1)"
                                v-for="(item, index) in list" :key="index" 
                                :ref="`tab${ index + 1 }`" :class="['tab', { 'active': current == index + 1 }]">{{ item.Title }}</div>
                        </div>
                    </div>
                    <div class="contantUs-content">
                        <div class="triangle" :style="{ left: current * 1.63 + (current - 1) * .39 - .9 + 'rem' }"></div>
                        <div class="v-content" ref="content" v-if="list.length !== 0" v-html="list[current - 1].Txt"></div>
                    </div>
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
    name: 'PAGE_CPMPANY_INTRODUCTION',
    components: {
		NavDom,
        Logo,
        FooterDom
    },
    data() {
        return {
            width: 0,
            height: 0,
            current: 1,
            list: []
        }
    },
    async asyncData(app) {
        let result = await app.$axios.get('/init')
        let menu = await app.$axios.get('/menus')
		menu = menu.data.data
        result = result.data.data
		return { result, menu }
    },
    created() {
        this.getList()
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
	},
    methods: {
        handleLeft() {
            this.$refs.tabs.scrollTo(this.$refs.tabs.scrollLeft - 150, 0)
        },
        handleRight() {
            this.$refs.tabs.scrollTo(this.$refs.tabs.scrollLeft + 150, 0)
        },
        /**
         * 选择当前的公司详细信息
         * @param { number } index 当前选中的公司详情下标
         */
        handleSelectCompany(index) {
            this.current = index
        },
        /**
         * 获取招聘列表
         */
        getList() {
            this.$axios.get('/offers')
                .then(res => {
                    const result = res.data.data
                    this.list = result
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import './common.scss';
.detail {
    font-size: .18rem;
    line-height: .3rem;
    color: #656E7D;
    width: calc(100% - 1.5rem);
    margin: 0 auto;
}
.tabs {
    width: calc(100% - 3rem);
    height: .6rem;
    margin: 0 auto;
    margin-top: .7rem;
    box-sizing: border-box;
    position: relative;
    .tabs_wrapper {
        width: auto;
        overflow-x: auto;
        white-space: nowrap;
        overflow-y: hidden;
        scroll-behavior:smooth;
    }
    .tab {
        width: 1.6rem;
        height: .6rem;
        display: inline-block;
        margin-right: .38rem;
        border-radius: .08rem;
        background: #399F62;
        opacity: 0.29;
        font-size: .18rem;
        text-align: center;
        line-height: .6rem;
        color: #fff;
        transition: all .2s linear;
        cursor: pointer;
        margin-bottom: .2rem;
        &:hover {
            background: #399F62;
            opacity: 0.83;
        }
    }
    .active {
        background: #399F62;
        opacity: 0.83;
    }
}
.html {
    position: relative;
    ._btn {
        width: .3rem;
        height: .6rem;
        background: #399F62;
        position: absolute;
        display: inline-block;
        top: 1.58rem;
        opacity: 0.29;
        border-radius: .04rem;
        cursor: pointer;
        &:hover {
            opacity: .5;
        }
        &:nth-of-type(1) {
            left: 1rem;
        }
        &:nth-of-type(2) {
            right: 1rem;
        }
        img {
            width: .3rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
.contantUs-content {
    width: calc(100% - 2rem);
    margin: 0 auto;
    margin-top: .3rem;
    box-sizing: border-box;
    height: 3.3rem;
    background-color: #E6F5F2;
    position: relative;
    border-radius: .04rem;
    padding: 0 .5rem;
    padding-top: .5rem;
    // .triangle {
    //     width: 0;
    //     height: 0;
    //     position: absolute;
    //     top: -.1rem;
    //     border-top: none;
    //     border-left: .1rem solid transparent;
    //     border-right: .1rem solid transparent;
    //     border-bottom: .1rem solid #E6F5F2;
    //     transition: left .2s;
    // }
    p {
        color: #656E7D;
        font-size: .18rem;
        line-height: .3rem;
    }
    .v-content {
        position: relative;
    }
}
</style>