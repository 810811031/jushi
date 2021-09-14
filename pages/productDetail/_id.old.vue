<template>
    <div class="productDetail" :style="{ height: height + 'px' }">
        <NavDom :current="1" white mask :menu="menu" />
        <div class="left">
            <swiper :options="swiperOptions" class="swiper-container" id="swiper" :style="{ height: height + 'px' }">
                <swiper-slide v-for="(item, index) in product.Imgs" :key="index" style="overflow: hidden">
                    <div class="inside">
                        <img :src="item.Src" :alt="item.Alt" style="width: 100%" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="right">
            <div class="back" @click="handleBack"><img src="../../assets/images/back.png">返回列表</div>
            <div class="title">{{ product.Title }}</div>
            <div class="sub-title">{{ product.SubTitle }}</div>
            <div class="robot-no">{{ product.Model }}</div>
            <p class="discription" v-html="product.Info"></p>
            <div class="buy-wrapper">
                <span class="params" @click="handleShow">产品参数</span>
                <span class="buy"  @mouseenter="show = true">去采购</span>
                <div class="shop" v-if="show" @mouseleave="show = false">
                    <img :src="require('@/assets/images/cat-shop@2x.png')" @click="handleTo(1)" />
                    <img :src="require('@/assets/images/jushi-shop@2x.png')" @click="handleTo(2)" />
                </div>
            </div>
        </div>
        <FooterDom :item="result" />
        <div class="mask" v-if="mask" @click="handleClose"></div>
        <div class="leftBlock" :style="{ right: right ? 0 : '-50%' }">
            <div class="back" @click="handleClose"><img src="../../assets/images/back.png">返回</div>
            <div class="title">产品参数</div>
            <div class="row">
                <span class="_label">产品名称</span>
                <span class="_content">{{ product.Title }}</span>
            </div>
            <div class="row">
                <span class="_label">型号</span>
                <span class="_content">{{ product.Model }}</span>
            </div>
            <div class="row">
                <span class="_label">功率</span>
                <span class="_content">{{ product.Power }}</span>
            </div>
            <div class="row">
                <span class="_label">尺寸</span>
                <span class="_content">{{ product.Size }}</span>
            </div>
            <div class="row">
                <span class="_label">计量精度</span>
                <span class="_content">{{ product.MeasurementAccuracy }}</span>
            </div>
            <div class="row">
                <span class="_label">安装方式</span>
                <span class="_content">{{ product.InstallMethod }}</span>
            </div>
            <div class="row">
                <span class="_label">技术指标</span>
                <span class="_content" v-html="product.TechnicalIndex.replace(/\n/g, '<br />')"></span>
            </div>
            <div class="row">
                <span class="_label">应用场景</span>
                <span class="_content" v-html="product.ApplicationScene.replace(/\n/g, '<br />')">{{ product.ApplicationScene }}</span>
            </div>
            <div class="row">
                <span class="_label">充电场景</span>
                <span class="_content" v-html="product.ChargingScene.replace(/\n/g, '<br />')">{{ product.ChargingScene }}</span>
            </div>
            <span class="buy" @mouseenter="show1 = true">去采购
                <div class="shop" v-if="show1"  @mouseleave="show1 = false">
                    <img :src="require('@/assets/images/cat-shop@2x.png')" @click="handleTo(1)" />
                    <img :src="require('@/assets/images/jushi-shop@2x.png')" @click="handleTo(2)" />
                </div>
            </span>
            
        </div>
        <FooterDom :item="result" />
    </div>    
</template>

<script>
import NavDom from '@/self-components/nav'
import FooterDom from '@/self-components/footer'

export default {
    name: 'PAGE_PRODUCTDETAIl',
    components: {
        NavDom,
        FooterDom
    },
    head () {
        return {
            title: this.product.Title,
            meta: [
                    { hid: 'description', name: 'description', content: this.product.SeoDescription },
                    { hid: 'keywords', name: 'keywords', content: this.product.SeoKeyword },  
                ]
        }
    },
    async asyncData(app) {
        let result = await app.$axios.get('/init')
        let product = await app.$axios.get(`/product/${ app.route.params.id }`)
        let menu = await app.$axios.get('/menus')
		menu = menu.data.data
        result = result.data.data
        product = product.data.data
        product.Imgs.forEach(img => {
            img.Src = '/api' + img.Src
        })
		return { result, product, menu }
    },
    data() {
        return {
            id: '',
            width: 0,
            height: 0,
            show: false,
            show1: false,
            mask: false,
            right: false,
            swiperOptions: {
                initialSlide: 1,
                loop: true,
                autoplay: true,
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
        let that = this
        document.body.click = function () {
            try {
                that.show = false
                that.show1 = false
            } catch(err) {}
        }
    },
    methods: {
        handleBack() {
            this.$router.back()
        },
        handleTo(type) {
            if (this.product.Tmall.indexOf('http:') == -1) {
                return alert('天猫商城地址有误')
            } else if (this.product.Taobao.indexOf('http:') == -1) {
                return alert('举视商城地址有误')
            }

            type == 1 && window.open(this.product.Tmall)
            type == 2 && window.open(this.product.Taobao)
        },
        handleShow() {
            this.mask = true
            this.right = true
        },
        handleClose() {
            this.mask = false
            this.right = false
        }
    }
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
            // display: flex;
            // justify-content: flex-start;
            // align-items: center;
            margin-top: .8rem;
            position: relative;
            .params {
                color: #0B90DA;
                font-size: .15rem;
                line-height: .21rem;
                text-decoration: underline;
                margin-right: .7rem;
                cursor: pointer;
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
            .shop {
                width: 2.26rem;
                height: 1.77rem;
                background: #FFFFFF;
                border-radius: 4px; 
                box-shadow: 0px 2px 12px 0px rgba(40, 48, 81, 0.22);
                position: absolute;
                top: .45rem;
                left: 3rem;
                img {
                    width: 1.6rem;
                    display: block;
                    margin: 0 auto;
                    height: .5rem;
                    cursor: pointer;
                    margin-top: .25rem;
                }
                animation: show .3s;
            }
            @keyframes show {
                from { 
                    opacity: 0;
                    transform: translateX(-30px);
                }
            }
        }
    }
    .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.4);
        z-index: 999998;
        position: fixed;
        top: 0;
        left: 0;
    }
    .leftBlock {
        width: 50%;
        height: 100%;
        background-color: #fff;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999998;
        box-sizing: border-box;
        padding: .4rem;
        overflow: auto;
        transition: all .2s linear;
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
            font-size: .4rem;
            font-weight: 600;
            color: #656E7D;
            line-height: .56rem;
            margin-top: .3rem;
            margin-bottom: .2rem;
        }
        .row {
            width: 100%;
            border-bottom: 1px solid #e8e8e8;
            &:last-child {
                border-bottom: none;
            }
            ._label {
                width: 1rem;
                text-align: center;
                line-height: .5rem;
                font-size: .14rem;
                color: #656E7D;
                height: .5rem;
                vertical-align: top;
                display: inline-block;
            }
            ._content {
                width: calc(100% - 1.1rem);
                display: inline-block;
                vertical-align: top;
                min-height: .5rem;
                font-size: .14rem;
                color: #656E7D;
                box-sizing: border-box;
                border-left: 1px solid #e8e8e8;
                padding: .2rem 0;
                padding-left: .2rem;
            }
        }
        .buy {
            margin-top: .3rem;
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
            position: relative;
            &:hover {
                box-shadow: 0 0 .05rem rgba(0, 0, 0, .15);
            }
            .shop {
                width: 2.26rem;
                height: 1.77rem;
                background: #FFFFFF;
                border-radius: 4px; 
                box-shadow: 0px 2px 12px 0px rgba(40, 48, 81, 0.22);
                position: absolute;
                bottom: .2rem;
                left: 1.8rem;
                animation: show .3s;
                img {
                    width: 1.6rem;
                    display: block;
                    margin: 0 auto;
                    height: .5rem;
                    margin-top: .25rem;
                    cursor: pointer;
                }
            }
            @keyframes show {
                from { 
                    opacity: 0;
                    transform: translateX(-30px);
                }
            }
        }
    }
}
</style>