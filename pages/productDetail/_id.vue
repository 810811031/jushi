<template>
    <div class="productDetail">
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
            <div class="tabs" v-if="product.Series.length > 1">
                <div class="tabs-inside" ref="outside">
                    <div @click="current = index"
                        :class="['_block', { _active: current == index }]" 
                        v-for="(item, index) in product.Series" :key="index">
                        {{ item.SeriesName }}
                    </div>
                </div>
                <span class="btn _left" @click="handleMove(1)">
                    <img src="../../assets/images/left_green.png" />
                </span>
                <span class="btn _right" @click="handleMove(2)">
                    <img src="../../assets/images/right_green.png" />
                </span>
            </div>
            <div class="title">{{ product.Title }}</div>
            <div class="sub-title">{{ product.Series[current].SeriesName }}</div>
            <p class="discription" v-html="product.Series[current].Info"></p>
            <div class="buy-wrapper">
                <span class="params" @click="handleShow">产品参数</span>
                <span class="buy"  @mouseenter="show = true">去采购</span>
                <div class="shop" v-if="show" @mouseleave="show = false">
                    <img :src="require('@/assets/images/cat-shop@2x.png')" @click="handleTo(1)" />
                    <img :src="require('@/assets/images/jushi-shop@2x.png')" @click="handleTo(2)" />
                </div>
            </div>
        </div>
        <div class="mask" v-if="mask" @click="handleClose"></div>
        <div class="leftBlock" :style="{ right: right ? 0 : '-50%' }">
            <div class="back" @click="handleClose"><img src="../../assets/images/back.png">返回</div>
            <div class="title">产品参数</div>
            <div class="row" v-for="(item, index) in product.Series[current].Param" :key="index">
                <span class="_label">{{ item.Key }}</span>
                <span class="_content">{{ item.Val }}</span>
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
    data() {
        return {
            width: 0,
            height: 0,
            current: 0,
            show: false,
            mask: false,
            show: false,
            show1: false,
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
        /**
         * 点击滚动条
         * @param { number } type
         */
        handleMove(type) {
            if (type == 1) {
                this.$refs.outside.scrollTo(this.$refs.outside.scrollLeft - 150, 0)
            } else {
                this.$refs.outside.scrollTo(this.$refs.outside.scrollLeft + 150, 0)
            }
        },
        handleBack() {
            this.$router.back()
        },
        handleShow() {
            this.mask = true
            this.right = true
        },
        handleClose() {
            this.mask = false
            this.right = false
            this.show = false
            this.show1 = false
        },
        handleTo(type) {
            if (this.product.Series[this.current].Tmall.indexOf('http:') == -1) {
                return alert('天猫商城地址有误')
            } else if (this.product.Series[this.current].Taobao.indexOf('http:') == -1) {
                return alert('举视商城地址有误')
            }

            type == 1 && window.open(this.product.Series[this.current].Tmall)
            type == 2 && window.open(this.product.Series[this.current].Taobao)
        },
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
        .tabs {
            width: calc(100% - 1rem);
            height: .4rem;
            margin-top: .2rem;
            background-color: #fff;
            box-sizing: border-box;
            position: relative;
            .tabs-inside {
                width: calc(100% - .8rem);
                height: .39rem;
                margin: 0 auto;
                overflow-x: auto;
                white-space: nowrap;
                scroll-behavior:smooth;
                ._block {
                    vertical-align: top;
                    display: inline-block;
                    box-sizing: border-box;
                    padding: .08rem .1rem;
                    background-color: #F1FDF6;
                    color: #5AAF7C;
                    font-size: .14rem;
                    line-height: .2rem;
                    border: 1px solid #5AAF7C;
                    border-radius: .05rem;
                    margin-right: .2rem;
                    cursor: pointer;
                }
                ._active {
                    background-color: #399F62;
                    border: none;
                    color: #fff;
                }
        }
            .btn {
                position: absolute;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: .2rem;
                height: .4rem;
                background-color: #F1FDF6;
                box-sizing: border-box;
                border: 1px solid #5AAF7C;
                border-radius: .04rem;
                cursor: pointer;
                img {
                    width: .2rem;
                }
                &:active {
                    opacity: .8;
                }
            }
            ._left {
                top: 0;
                left: 0;
            }
            ._right {
                top: 0;
                right: 0;
            }
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
            margin-top: .1rem;
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