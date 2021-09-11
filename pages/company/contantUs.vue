<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask :menu="menu" />
        <Logo dark :item="result" />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link to="introduction"><p>公司简介<span></span></p></nuxt-link>
                    <nuxt-link to="seniority"><p>公司资质<span></span></p></nuxt-link>
                    <nuxt-link to="honor"><p>公司荣誉<span></span></p></nuxt-link>
                    <nuxt-link to="recruit"><p>人才招聘<span></span></p></nuxt-link>
                    <p class="active">联系我们<span></span></p>
                    <nuxt-link to="partner"><p>合作伙伴<span></span></p></nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="title alignCenter">联系我们</div>
                <div class="html">
                    <div class="companyInfo">
                        <div class="block">
                            <p>公司总部：举视(上海)新能源科技有限公司</p>
                            <p>联  系  人：穆经理</p>
                            <p>联系电话: 19951723459 </p>
                            <p>销售热线: 021-59793951</p>
                            <p>联系地址: 上海市青浦区华新镇华隆路1777号E通世界D幢</p>
                        </div>
                        <div class="block">
                            <p>生产基地：举视(江苏)新能源设备制造有限公司</p>
                            <p>联 系 人：穆先生</p>        
                            <p>联系电话：19951723459</p>
                            <p>服务热线：0512-57920398</p>
                            <p>联系地址：江苏省苏州市昆山市千灯镇季广路188号</p>
                        </div>
                    </div>
                    <div class="tabs">
                        <div @click="handleSelectCompany(1)" ref="tab1" :class="['tab', { 'active': current == 1 }]">武汉分公司</div>
                        <div @click="handleSelectCompany(2)" ref="tab2" :class="['tab', { 'active': current == 2 }]">河北分公司</div>
                        <div @click="handleSelectCompany(3)" ref="tab3" :class="['tab', { 'active': current == 3 }]">兰州分公司</div>
                        <div @click="handleSelectCompany(4)" ref="tab4" :class="['tab', { 'active': current == 4 }]">安徽分公司</div>
                        <div @click="handleSelectCompany(5)" ref="tab5" :class="['tab', { 'active': current == 5 }]">深圳分公司</div>
                    </div>
                    <div class="contantUs-content">
                        <div class="triangle" :style="{ left: current * 1.63 + (current - 1) * .39 - .9 + 'rem' }"></div>
                        <div class="block" style="width: 100%">
                            <p v-for="(item, index) in base[current - 1]" :key="index">{{ item }}</p>
                        </div>
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
    name: 'PAGE_CPMPANY_SENIORITY',
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
            base: [
                [   
                    '武汉分公司',
                    '举视（武汉）新能源科技有限公司',
                    '联系人: 拓经理',
                    '办公电话：027-87002447',
                    '联系地址: 武汉东湖新技术开发区高新大道999号未来科技城海外人才大楼A座5楼521室'
                ],
                [
                    '兰州分公司',
                    '举视（上海）新能源科技有限公司甘肃分公司',
                    '联系人：魏存强',
                    '电话：17789612522',
                    '地址：甘肃省兰州市城关区雁滩路3884号509室'
                ],
                [
                    '深圳分公司',
                    '举视（深圳）新能源科技有限公司',
                    '联系人：周本海',
                    '电话：13266779968',
                    '地址：深证市宝安区沙井大王山广场中心楼6楼'
                ],
                [
                    '安徽分公司',
                    '安徽举视新能源科技有限公司',
                    '联系人：冯军（总经理）',
                    '电话：15375133589',
                    '地址：安徽省阜阳市临沂商城一期A栋501室'
                ],
                [
                    '河北分公司',
                    '举视（上海）新能源科技有限公司河北分公司',
                    '联系人: 陈洋',
                    '电话：13292217796',
                    '地址: 河北省石家庄市长安区长丰街道北二环路保利花园h3-2412室'
                ]
            ]
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
    },
    async asyncData(app) {
        let result = await app.$axios.get('/init')
        let menu = await app.$axios.get('/menus')
		menu = menu.data.data
        result = result.data.data
		return { result, menu }
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
.companyInfo {
    width: calc(100% - 2rem);
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: .3rem;
    display: flex;
    justify-content: space-between;
    .block {
        width: 40%;
        display: inline-block;
        vertical-align: top;
        p {
            color: #656E7D;
            font-size: .18rem;
            line-height: .3rem;
        }
    }
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
    .block {
        width: 49.5%;
        box-sizing: border-box;
        padding-left: .4rem;
        display: inline-block;
        vertical-align: top;
        padding-top: .7rem;
        p {
            color: #656E7D;
            font-size: .18rem;
            line-height: .3rem;
        }
    }
}
</style>