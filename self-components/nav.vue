<template>
    <div>
        <div :class="['menu', { 'menu-active': active, 'white': white }]">

            <nuxt-link to="/product" v-if="white">
                <div class="white_product" >
                    <span class="_center">产品中心</span>
                    <span class="_line"></span>
                </div>
            </nuxt-link>

            <div :class="['background']">
                <transition 
                    enter-active-class="animated bounceIn" 
			        leave-active-class="animated bounceOut">
                    <img v-if="active" class="open-menu" style="animation-duration: 200ms" @click="handleTrigger" :src="require('@/assets/images/close@2x.png')" />
                </transition>
                <transition 
                    enter-active-class="animated bounceIn" 
			        leave-active-class="animated bounceOut">
                    <img v-if="!active" class="open-menu" style="animation-duration: 200ms;" @click="handleTrigger" :src="require('@/assets/images/menu@2x.png')" />
                </transition>

                <div class="harf aboutUs" v-show="active" 
                    ref="block"
                    @touchmove="handleTouchMove" 
                    @touchstart="handleTouchStart">
                    <p class="title">关于我们</p>
                    <p class="sub-title">自 2011 年以来</p>
                    <p class="normal">
                        举视（上海）新能源科技有限公司成立于新能源汽车发展元年，是一家集新能源汽车充电设备研发、生产、销售、安装服务为一体的综合性科技企业。
                    </p>
                    <p class="normal indent">
                        公司秉持“精益求精·敬天爱人”的企业宗旨，坚持在新能源汽车充电领域发展，为客户提供新能源汽车充电设备与充电整体解决方案，服务于充电运营商，为国家新能源新基建计划作服务。迎合党中央新基建号召的发展机遇，迅速成长为新能源汽车充电服务领域的一支生力军。
                    </p>
                    <p class="normal indent">
                        公司现有专利25项，其中外观专利18项，结构实用新型专利7项，获得CQC检验认证、CE认证，拥有一个控制软件著作权，一个平台服务软件著作权      
                    </p>
                    <p class="normal">
                        举视新能源，期待与您共同进步，共享美好！
                    </p>
                    <p class="normal call-us">打电话给我们</p>
                    <p class="phoneNo">199-5172-3459</p>

                    <div :class="[{ 'inside-active-left': active }]">
                        <div class="shop-group">
                            <img :src="require('@/assets/images/cat-shop@2x.png')" />
                            <img :src="require('@/assets/images/jushi-shop@2x.png')" />
                        </div>
                    </div>
                    <div :class="[{ 'inside-active-right': active }]">
                        <div class="logo-group">

                        </div>
                    </div>
                </div>

                <div class="harf menu-button" v-if="active">
                    <div class="inside" :style="{ maxHeight: height + 'px' }">
                        <nuxt-link :to="item.routeName" onclick="return false" :class="['block', { 'active': currentNum == index }]" 
                            v-for="(item, index) in menu" :key="index">
                            <div class="title" @click="handleClick(index, $event)">
                                {{ item.Title }}
                                <span></span>
                            </div>
                            <div class="transform">{{ item.TitleEn }}</div>
                        </nuxt-link>
                    </div>
                </div>
            
            
            </div>
            <!-- <ul class="tool" v-if="active || white">
                <li><img :src="require('@/assets/images/QQ-grey@2x.png')" /></li>
                <li><img :src="require('@/assets/images/wechat-grey@2x.png')" /></li>
                <li><img :src="require('@/assets/images/search-grey@2x.png')" /></li>
            </ul>
            <ul class="tool" v-else>
                <li><img :src="require('@/assets/images/QQ@2x.png')" /></li>
                <li><img :src="require('@/assets/images/wechat@2x.png')" /></li>
                <li><img :src="require('@/assets/images/search@2x.png')" /></li>
            </ul> -->
            
        </div>
        <!-- 点击空白处隐藏菜单 -->
        <div class="mask" v-show="active" @click="active = false"></div>
        <div v-show="mask">
            <div class="mask dark"  v-show="showDarkMash" @click="() => { showDarkMash = false; active = false }"></div>
        </div>

        <!-- 产品中心 -->
        <div v-if="!active" @click="handleClick(1)">
            <nuxt-link class="product-center" to="/product" v-if="product">
                <span class="product-center-name">产品中心</span>
                <span class="line"></span>
            </nuxt-link>
        </div>
		
    </div>
</template>

<script>
export default {
    name: 'COMPONENT_NAV',
    props: {
        /* 当前选中的菜单下标 */
        current: {
            type: Number,
            default: 0
        },
        /* 是否开始白底模式 */
        white: {
            type: Boolean,
            default: false
        },
        /* 侧边栏是否开始手动触摸滑动(fullpage 插件影响下自带滑动失效时开启) */
        touch: {
            type: Boolean,
            default: false
        },
        /* 黑色的 mask 遮罩层 */
        mask: {
            type: Boolean,
            default: false
        },
        product: {
            type: Boolean,
            default: false
        },
        menu: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    watch: {
        active(val) {
            this.$emit('change', val)
            this.showDarkMash = val
        }
    },
    mounted() {
		this.height = document.documentElement.clientHeight - 80
    },
    data() {
        return {
            active: false,				// menu state
            showDarkMash: false,
            height: 0,
            menus: [
				{
					title: '首页',
					transform: 'Home',
					routeName: '/'
				},
				{
					title: '产品中心',
					transform: 'Product list',
					routeName: '/product'
				},
				{
					title: '解决方案与应用',
					transform: 'Equipment customization',
					routeName: '/programme/1'
				},
				{
					title: '举视合伙人',
					transform: 'Company profile',
					routeName: '/partner'
				},
				{
					title: '云管理服务中心',
					transform: 'Company profile',
					routeName: '/cloudcenter'
				},
				{
					title: '公司简介',
					transform: 'Company profile',
					routeName: '/company/introduction'
				}
			],
            touchStart: 0,
            currentNum: 0,
            worker: null
        }
    },
    created() {
        try {
            this.currentNum = Number(sessionStorage.getItem('Num')) || 0
        } catch (err) {
            console.log(err)
            this.currentNum = 0
        }
        this.menu.forEach(item => {
            if (item.ID == 1) item.routeName = '/'
            else if (item.ID == 2) item.routeName = '/product'
            else if (item.ID == 3) item.routeName = '/programme/1' 
            else if (item.ID == 4) item.routeName = '/partner'
            else if (item.ID == 5) item.routeName = '/cloudcenter'
            else if (item.ID == 6) item.routeName = '/company/introduction'
            else item.routeName = '/custom?id=' + item.ID + '&title=' + item.Title
        })
    },
    methods: {
        handleClick(index, event) {
                window.sessionStorage.setItem('Num', index)
        },
        /**
		 * 展开 或 收起菜单
		 */
		handleTrigger() {
			this.active = !this.active
		},
        /**
         * 开始触摸
         * @param { object } $event 
         */
        handleTouchStart($event) {
            if (!this.touch) return
            this.touchStart = $event.changedTouches[0].clientY
        },
        /**
         * 触摸滑动
         * @param { object } $event 
         */
        handleTouchMove($event) {
            if (!this.touch) return
            const l = (this.touchStart - $event.changedTouches[0].clientY) / 20
            if (l > 10) {
                this.$refs.block.scrollTop = this.$refs.block.scrollTop + l
            }
        }
        
    }
}
</script>

<style lang="scss" scoped>
.menu {
    width: .8rem;
    height: calc(100% - .3rem);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99999;
    box-sizing: border-box;
    transition: width .3s ease-in-out;
    border-left: 1px solid rgba(255,255,255, .14);
    background-color: rgba(255,255,255, .08);
    .open-menu {
        width: .8rem;
        height: .8rem;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        cursor: pointer;
    }
    .white_product {
        width: .8rem;
        font-size: .22rem;
        color: #656E7D;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 999;
        cursor: pointer;
        transform: translate(-50%, -50%);
        ._center {
            width: 30px;
            text-align: center;
        }
        ._line {
            display: inline-block;
            width: .28rem;
            height: .04rem;
            background-color: #E8EBF0;
            position: absolute;
            left: -.14rem;
            top: 50%;
            transform: translateY(-50%);
            border-radius: .02rem;
            transition: left .1s linear;
        }
        &:hover ._line{
            left: -.2rem
        }
    }
    .background {
        width: 100%;
        height: calc(100% - 3.2rem);
        position: absolute;
        top: .8rem;
        left: 0;
        .harf {
            width: 50%;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            .inside {
                width: 50%;
                padding-bottom: .4rem;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                padding-bottom: 5px;
            }
        }
        .aboutUs {
            width: 50%;
            height: 100%;
            padding-top: 1.3rem;
            padding-left: .47rem;
            padding-right: .73rem;
            padding-bottom: .3rem;
            overflow: auto;
            .title {
                font-size: .24rem;
                color: #656E7D;
                width: .57rem;
            }
            .sub-title {
                font-size: .14rem;
                color: #656E7D;
                font-weight: bold;
                margin-top: .1rem;
                margin-bottom: .2rem;
            }
            .normal {
                font-size: .14rem;
                color: #9BA2AE;
                line-height: .2rem;
                margin-bottom: .2rem;
            }
            .indent {
                text-indent: 2em;
            }
            .call-us {
                margin-top: .2rem;
            }
            .phoneNo {
                font-size: .22rem;
                line-height: .22rem;
                color: #656E7D;
                margin-top: .2rem;
                font-weight: bold;
            }
            .shop-group {
                width: 3.52rem;
                margin-top: .2rem;
                display: flex;
                justify-content: space-between;
                img {
                    width: 1.6rem;
                    height: .48rem;
                    cursor: pointer;
                }
            }
            .logo-group {
                max-width: 4.45rem;
                height: 1.85rem;
                background-color: #ccc;
                margin-top: .35rem;
            }
            .inside-active-right {
                animation: right .6s;
            }
            .inside-active-left {
                animation: left .8s;
            }
            @keyframes right {
                from {
                    transform: translate(-6rem, -3rem) scale(2, 2);
                }
                to {}
            }
            @keyframes left {
                from {
                    transform: translate(6rem, -3rem) scale(2, 2);
                }
                to {}
            }
        }
        .menu-button {
            width: calc(50% - 1rem);
            margin-left: .9rem;
            position: relative;
            overflow-x: hidden;
            animation: showMenu .4s;
            .block {
                cursor: pointer;
                margin-bottom: .4rem;
                display: block;
                color: #656E7D;
                text-decoration: none;
                &:last-child {
                    margin-bottom: 0;
                }
                .title {
                    display: inline-block;
                    font-size: .28rem;
                    color: #656E7D;
                    line-height: .4rem;
                    font-weight: 600;
                    position: relative;
                    padding-left: .1rem;
                    span {
                        width: 110%;
                        height: .12rem;
                        display: block;
                        position: absolute;
                        left: -100%;
                        bottom: .03rem;
                        opacity: .4;
                        transition: left .3s linear;
                    }
                }
                .transform {
                    color: #9BA2AE;
                    font-size: .16rem;
                    margin-top: .11rem;
                    line-height: .14rem;
                }
                &:hover .title span{
                    background-color: #DAE0E9;
                    opacity: .6;
                    left: 0;
                }
            }
            .active {
                span {
                    background-color: #008DDC !important;
                    left: 0 !important;
                    opacity: .6 !important;
                }
            }
        }
        @keyframes showMenu {
            0% { opacity: 0; }
            70% { opacity: 0; }
            100% { opacity: 1; }
        }
    }
    .tool {
        position: fixed;
        bottom: .3rem;
        right: 0;
        li {
            list-style: none;
            img {
                width: .8rem;
                height: .8rem;
                cursor: pointer;
                transition: all .2s linear;
                &:hover {
                    background-color: rgba(255,255,255, .1);
                }
            }
        }
    }
}
.menu-active {
    width: 57.29%;
    .background {
        height: 100%;
        top: 0;
        background-color: #fff;
    }
}
.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99997;
}
.white {
    background-color: #fff;
    border-left: 1px solid #e8e8e8;
}
.dark {
    background-color: rgba(11, 11, 11, 0.41);
}
.product-center {
    width: 1.19rem;
    height: 1.82rem;
    position: fixed;
    right: 0;
    top: 50%;
    margin-top: -.91rem;
    background-color: rgba(35, 52, 77, 0.52);
    border-radius: 1rem 0 0 1rem;
    cursor: pointer;
    z-index: 100000;
    .product-center-name {
        width: .22rem;
        display: inline-block;
        font-size: .22rem;
        word-wrap: break-word;
        color: #fff;
        position: absolute;
        top: 50%;
        right: .26rem;
        transform: translateY(-50%);
        z-index: 99999;
    }
    .line {
        display: block;
        width: .28rem;
        height: .04rem;
        background-color: #fff;
        position: absolute;
        top: 50%;
        margin-top: -.02rem;
        right: .66rem;
    }
}
@media screen and (max-width: 1000px) {
    .aboutUs {
        padding-bottom: .5rem;
    }
}
</style>