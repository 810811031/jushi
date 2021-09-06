<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask :menu="menu" />
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
                <div class="title alignCenter">合作伙伴</div>
                <div class="html">
                    <div id="chinaMap" :style="{width: '100%', height: '10rem'}"></div>
                    <div class="partner">
                        <div class="block" v-for="(item, index) in partners" :key="index">
                            <a target="view_window" :href="item.link">
                                <img :src="item.src" alt="" />
                            </a>
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
import china from '@/assets/data/china.json'
import * as echarts from 'echarts'
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
            partners: [
                {
                    src: require('../../assets/partner/1.jpg'),
                    link: 'https://www.bgy.com.cn/'
                },
                {
                    src: require('../../assets/partner/2.jpg'),
                    link: 'http://www.hy-online.com/'
                },
                {
                    src: require('../../assets/partner/3.jpg'),
                    link: 'http://www.potevio.com/'
                },
                {
                    src: require('../../assets/partner/4.jpg'),
                    link: 'http://www.sgcc.com.cn/'
                },
                {
                    src: require('../../assets/partner/5.jpg'),
                    link: 'http://www.whdonde.com/'
                },
                {
                    src: require('../../assets/partner/6.jpg'),
                    link: 'http://www.titan21.com/'
                },
                {
                    src: require('../../assets/partner/7.jpg'),
                    link: 'https://www.cifi.com.cn/'
                },
                {
                    src: require('../../assets/partner/8.jpg'),
                    link: 'https://www.evergrande.com/'
                },
                {
                    src: require('../../assets/partner/9.jpg'),
                    link: 'https://www.audi.cn/cn/web/zh.html'
                },
                {
                    src: require('../../assets/partner/10.jpg'),
                    link: 'https://www.bmw.com.cn/zh/index.html'
                },
                {
                    src: require('../../assets/partner/11.jpg'),
                    link: 'https://www.jaguar.com.cn/index.html'
                },
                {
                    src: require('../../assets/partner/12.jpg'),
                    link: 'https://www.ldjt.com.cn/'
                },
                {
                    src: require('../../assets/partner/13.jpg'),
                    link: 'http://www.timesgroup.cn/'
                },
                {
                    src: require('../../assets/partner/14.jpg'),
                    link: 'https://www.vanke.com/'
                }
            ]
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
        this.drawregionCharts()
    },
    methods: {
        drawregionCharts() {
            const myChartContainer = document.getElementById('chinaMap')
            const myChartChina = echarts.init(myChartContainer)
            echarts.registerMap('china', china)
            var optionMap = {
                color:"#CAE6FF",
                selectedMode: 'single',
                series : [
                    {
                        name: '',
                        type: 'map',
                        mapType: 'china',
                        selectedMode: 'multiple',
                        itemStyle: {
                            normal:{
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth:1,
                                borderColor:'#e1e1e1',
                                areaStyle: {
                                    color: '#red',//默认的地图板块颜色
                                },
                            },
                            emphasis:{
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.15)'
                            },
                        },
                        showLegendSymbol: true,
                        label: {
                            normal: {  
                                show: true,
                                textStyle: {
                                    fontSize: 12,
                                    color: '#666'
                                }
                            },
                            emphasis: {
                                show: true
                            }
                        }, 
                        data:[
                            { name: '河南省', selected: true },
                            { name: '山东省', selected: true },
                            { name: '安徽省', selected: true },
                            { name: '福建省', selected: true },
                            { name: '浙江省', selected: true },
                            { name: '江苏省', selected: true },
                            { name: '上海市', selected: true },
                            { name: '北京市', selected: true },
                        ]
                    }
                ]
            }
            myChartChina.setOption(optionMap);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './common.scss';
#chinaMap {
    transform: translateY(-2rem);
}
.partner {
    width: 12rem;
    margin: 0 auto;
    transform: translateY(-2rem);
    .block {
        width: 2rem;
        display: inline-block;
        vertical-align: top;
        margin-right: .4rem;
        border: 1px solid #e8e8e8;
        margin-bottom: .4rem;
        &:nth-of-type(5n) {
            margin-right: 0;
        }
        img {
            width: 100%;
        }
    }
}
</style>