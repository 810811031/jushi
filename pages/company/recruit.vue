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
                    <div class="tabs">
                        <div @click="handleSelectCompany(1)" ref="tab1" :class="['tab', { 'active': current == 1 }]">UI设计师</div>
                        <div @click="handleSelectCompany(2)" ref="tab2" :class="['tab', { 'active': current == 2 }]">硬件工程师</div>
                        <div @click="handleSelectCompany(3)" ref="tab3" :class="['tab', { 'active': current == 3 }]">总裁助理</div>
                        <div @click="handleSelectCompany(4)" ref="tab4" :class="['tab', { 'active': current == 4 }]">生产经理</div>
                    </div>
                    <div class="contantUs-content">
                        <div class="triangle" :style="{ left: current * 1.63 + (current - 1) * .39 - .9 + 'rem' }"></div>
                        <p> 1、本科以上学历；</p>
                        <p> 2、熟悉3DMAX，AI软件，PS，UE设计，动效设计，平面设计，会用各种工具PS AI UI界面设计，积极完成所有安排的美术相关的工作；</p>
                        <p> 3、熟悉3DMAX，AI软件，PS，UE设计，动效设计，平面设计，会用各种工具PS AI UI界面设计，积极完成所有安排的美术相关的工作。</p>
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
    name: 'PAGE_CPMPANY_INTRODUCTION',
    components: {
		NavDom,
        Logo,
    },
    data() {
        return {
            width: 0,
            height: 0,
            current: 1
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
	},
    methods: {
        /**
         * 选择当前的公司详细信息
         * @param { number } index 当前选中的公司详情下标
         */
        handleSelectCompany(index) {
            this.current = index
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
    width: 100%;
    height: .6rem;
    margin-top: .7rem;
    box-sizing: border-box;
    padding-left: 1rem;
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
    .triangle {
        width: 0;
        height: 0;
        position: absolute;
        top: -.1rem;
        border-top: none;
        border-left: .1rem solid transparent;
        border-right: .1rem solid transparent;
        border-bottom: .1rem solid #E6F5F2;
        transition: left .2s;
    }
    p {
        color: #656E7D;
        font-size: .18rem;
        line-height: .3rem;
    }
}
</style>