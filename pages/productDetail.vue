<template>
    <div class="productDetail" :style="{ height: height + 'px' }">
        <NavDom :current="1" white mask />
        <div class="left">
            <swiper :options="swiperOptions" class="swiper-container" id="swiper" :style="{ height: height + 'px' }">
                <swiper-slide v-for="(item, index) in products" :key="index" style="overflow: hidden">
                    <div class="inside">
                        index
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="right">
            <div class="back"><img src="../assets/images/back.png">返回列表</div>
            <div class="title">120KW落地式直流充电桩</div>
            <div class="sub-title">举视新能源</div>
            <div class="robot-no">JSDC120/750/WA/2/A/IE</div>
            <p class="discription">
                  电动汽车直流充电桩（简称充电桩）是JSOWELL设计的新一代高可靠、高效率的供电系统，该系统采用国际领先的高频开关电源模块并联技术, 监控采用工业级可編程控制器，人机界面采用工业彩色触摸屏.产品具有高可靠性、高安全性，高可用性,外观漂亮，工艺精良，具有重量轻、体积小、 充电稳定，效率高、抗震能力强，安全可靠等特点； 貝有交流输入过压欠压，直流输出过压欠压、短路、过温,直流电压防反接等多种保护功能.
充电机输入与输出电气隔离；输出有防止电池组给充电机输出滤波电容充电的装置，防止充电机输出端在接通电池组时出现瞬间大电流；充电机耐压等级、绝缘等级、EMC 符合国际《GB_T 20234.3-2011 电动汽车传导充电用接装置》相关规定；依据 Q/GDW485-2010《电动汽车直流充电桩技术条件》及 NB/T 33001-2010《电动汽车非车载传导式充电桩 技术条件》的相关要求，并参照《电动汽车充电设施典型设计》的部分功能进行设计。该产品完全符合国 家电网公司电动汽车充电站的建设要求。
            </p>
            <div class="buy-wrapper">
                <span class="params">产品参数</span>
                <span class="buy">去采购</span>
            </div>
        </div>
    </div>    
</template>

<script>
import NavDom from '@/self-components/nav'

export default {
    name: 'PAGE_PRODUCTDETAIl',
    components: {
        NavDom
    },
    data() {
        return {
            id: '',
            width: 0,
            height: 0,
            products: [
                '', '', ''
            ],
            swiperOptions: {
                initialSlide: 1,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 150,
                    modifier: 3,
                    slideShadows : false
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
        this.height = document.documentElement.clientHeight
    },
}
</script>

<style lang="scss" scoped>
.productDetail {
    width: 100%;
    height: 100%;
    .left {
        width: 50%;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        .inside {
            width: 4.6rem;
            margin-top: 1rem;
            height: 80%;
            font-size: .16rem;
            color: #333;
            background-color: #e8e8e8;
        }
        .swiper-container {
            width: 90%;
            margin: 0 auto;
        }
    }
    .right {
        width: 49%;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        padding-top: 1rem;
        .back {
            color: #848B97;
            font-size: .2rem;
            line-height: .2rem;
            img {
                width: .2rem;
                height: .2rem;
                margin-right: .05rem;
            }
            cursor: pointer;
        }
        .title {
            color: #656E7D;
            margin-top: .2rem;
            font-size: .4rem;
            line-height: .56rem;
        }
        .sub-title {
            font-size: .16rem;
            color: #656E7D;
            line-height: .22rem;
        }
        .robot-no {
            font-size: .14rem;
            color: #656E7D;
            line-height: .2rem;
            margin-top: .1rem;
        }
        .discription {
            max-width: 6.6rem;
            color: #656E7D;
            font-size: .14rem;
            line-height: .2rem;
            text-indent: 2em;
            margin-top: .25rem;
        }
        .buy-wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: .8rem;
            .params {
                color: #0B90DA;
                font-size: .15rem;
                line-height: .21rem;
                text-decoration: underline;
                margin-right: .7rem;
            }
            .buy {
                width: 1.56rem;
                height: .61rem;
                color: #fff;
                font-size: .18rem;
                background: #399F62;
                border-radius: .08rem;
                opacity: 0.83;
                text-align: center;
                line-height: .61rem;
                cursor: pointer;
                display: inline-block;
                &:hover {
                    box-shadow: 0 0 .05rem rgba(0, 0, 0, .15);
                }
            }
        }
    }
}
</style>