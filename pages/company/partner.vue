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
                <div class="title alignCenter">合作伙伴</div>
                <div class="html">
                    <div id="chinaMap" :style="{width: '100%', height: '15rem'}"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import china from '@/assets/data/china.json'
import * as echarts from 'echarts'

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
                        data:[]
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
</style>