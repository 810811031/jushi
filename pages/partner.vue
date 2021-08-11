<template>
    <div class="container" :style="{ height: height + 'px' }">
        <NavDom :current="3" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <div class="title">举视合伙人</div>
                    <p class="normal">与渠道商共同创业·与客户共同进步·与合伙人共享美好</p>
                    <p class="normal">举视充电作为著名充电桩品牌，目前平台上共有自建充电设备终端10万余个，覆盖全国200多个城市，日充电量约300万度。作为持续经营的充电运营服务商，举视充电诚邀您加入，将举视的充电桩带给更多人，进入更多的社区，共建“平安充电”的目标。</p>
                </div>
            </div>
            <div class="right">
                <div class="title">充电站城市合伙人</div>
                <div class="subtitle">通过成本运算，模拟后期收益，其他描述文案</div>
                <div class="input-group">
                    <div class="input" @click="handleSelectInput(index)" v-for="(item, index) in inputGroups" :key="index">
                        <div class="tip">{{ item.title }}</div>
                        <input type="text" v-model="item.value" :ref="`input${ index }`" placeholder="请输入" />
                        <div class="unit">{{ item.unit }}</div>
                    </div>
                    <div class="input last">
                        <p class="descript">* 这是建议说明</p>
                    </div>
                </div>
                <div class="start">模拟收益</div>
                <div class="charts">
                    <div id="charts" ref="charts"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import * as echarts from 'echarts'

export default {
    name: 'PAGE_PARTNER',
    components: {
		NavDom,
        Logo,
    },
    data() {
        return {
            width: 0,
            height: 0,
            inputGroups: [
                {
                    title: '场地费用(月租)',
                    value: '',
                    unit: '元'
                },
                {
                    title: '人工费用(月支出)',
                    value: '',
                    unit: '元'
                },
                {
                    title: '运营时长',
                    value: '',
                    unit: '小时/天'
                },
                {
                    title: '充电桩数量(直流)',
                    value: '',
                    unit: '个'
                },
                {
                    title: '充电桩数量(交流)',
                    value: '',
                    unit: '个'
                }
            ]
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
        this.initCharts()
    },
    methods: {
        /**
         * 点击方块获取输入框光标
         * @param { number } index 当前点击的下角标
         */
        handleSelectInput(index) {
            this.$refs[`input${ index }`][0].focus()
        },
        /**
         * 初始化图标       
         */
        initCharts() {
            const element = this.$refs.charts
            const charts = echarts.init(element)
            const option = {
                title: {
                    text: '模拟收益'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { 
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['成本费用', '收入'],
                    right: 20
                },
                grid: {
                    bottom: 10,
                    left: 40,
                    right: 40,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    // boundaryGap: false,
                    data: ['第一个月','第二个月','第三个月','第四个月','第五个月','第六个月','第七个月','第八个月','第九个月','第十个月','第十一个月','第十二个月']
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '金额（元）',
                        max: 10000,
                        min: 0,
                    },
                    {
                        type: 'value',
                        name: '收益率（%）',
                        min: 0,
                        max: 100
                    }
                ],
                series: [
                    {
                        name: '收益率（%）',
                        data: [32, 40, 43, 46, 60, 68, 74, 73, 80, 85, 87, 90],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        yAxisIndex: 1,
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0 , 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(255,131,110, .02)'
                                },
                                {
                                    offset: 1,
                                    color: '#fff'
                                }
                            ])
                        },
                        itemStyle: {
                            normal: {
                                color: '#FF6F68',
                                lineStyle: {
                                    color: '#FF6F68'
                                }
                            }
                        }
                    },
                    {
                        name: '成本费用',
                        type: 'bar',
                        barWidth: '15%',
                        barGap: '20%',
                        yAxisIndex: 0,
                        data: [4000, 4000, 4000, 4000, 6200, 6200, 5000, 5000, 6200, 6000, 5800, 5600],
                        itemStyle: {
                            normal: {
                                barBorderRadius:[15, 15, 0, 0],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#4188F3'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(77,170,247, .2)'
                                    }
                                ])
                            }
                        }
                    },
                    {
                        name: '收入',
                        type: 'bar',
                        barWidth: '15%',
                        barGap: '20%',
                        yAxisIndex: 0,
                        data: [3600, 3600, 3600, 3600, 5200, 5200, 5000, 5000, 7200, 8000, 8000, 8400],
                        itemStyle: {
                            normal: {
                                barBorderRadius:[15, 15, 0, 0],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#FDB32A'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255,218,106, .2)'
                                    }
                                ])
                            }
                        }
                    }
                ]
            }
            charts.setOption(option)
        }
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
            border-right: 1px solid #e8e8e8;
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
                    width: 3.3rem;
                    color: #858C98;
                    margin-bottom: .22rem;
                    font-size: .16rem;
                    line-height: .25rem;
                    display: block;
                }
            }
        }
        .right {
            width: calc(100% - 6.31rem);
            height: 100%;
            box-sizing: border-box;
            padding: .55rem;
            padding-right: .55rem; 
            display: inline-block;
            vertical-align: top;
            .title {
                font-size: .3rem;
                color: #666F7E;
            }
            .subtitle {
                margin-top: .1rem;
                color: #666F7E;
                font-size: .16rem;
            }
            .input-group {
                width: 100%;
                padding-top: .25rem;
                .input {
                    width: 3.6rem;
                    height: .50rem;
                    line-height: .50rem;
                    border-radius: .25rem;
                    margin-right: .15rem;
                    display: inline-block;
                    box-sizing: border-box;
                    padding: 0 .2rem;
                    background-color: #EDEFF1;
                    margin-bottom: .2rem;
                    transition: all .2s linear;
                    &:hover {
                        box-shadow: 0 0 8px rgba(0,0,0,.3);
                    }
                    .tip {
                        width: 1.25rem;
                        color: #303133;
                        font-size: .16rem;
                        display: inline-block;
                    }
                    input {
                        width: 1.2rem;
                        font-size: .18rem;
                        color: #56AB79;
                        text-align: right;
                        margin-right: .1rem;
                        background-color: #EDEFF1;
                        border: none;
                        outline: none;
                        &::placeholder {
                            color: #56AB79;
                            font-size: .14rem;
                        }
                    }
                    .unit {
                        width: .55rem;
                        color: #303133;
                        font-size: .16rem;
                        display: inline-block;
                        text-align: center;
                    }
                    .descript {
                        font-size: .14rem;
                        color: #858C98;
                    }
                }
                .last {
                    background-color: rgba(0,0,0,0);
                    &:hover {
                        box-shadow: none;
                    }
                }
            }
            .start {
                width: 1.56rem;
                height: .56rem;
                background: linear-gradient(260deg, #6ACD79 0%, #399F62 100%);
                border-radius: .28rem;
                opacity: 0.83;
                margin: 0 auto;
                color: #fff;
                font-size: .20rem;
                text-align: center;
                line-height: .56rem;
                cursor: pointer;
                &:hover {
                    box-shadow: 0 0 8px rgba(0,0,0,.4);
                }
            }
            .charts {
                width: 100%;
                height: 4.8rem;
                margin-top: .5rem;
                background: #FBFDFF;
                box-shadow: 5px 5px 0px 0px #E2EDFF;
                border-radius: 8px;
                border: 1px solid #E7ECEE;
                box-sizing: border-box;
                padding: .1rem;
                #charts {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>