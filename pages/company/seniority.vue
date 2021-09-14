<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask :menu="menu" />
        <Logo dark :item="result" />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link to="introduction"><p>公司简介<span></span></p></nuxt-link>
                    <p class="active">公司荣誉<span></span></p>
                    <nuxt-link to="honor"><p>发展历程<span></span></p></nuxt-link>
                    <nuxt-link to="recruit"><p>人才招聘<span></span></p></nuxt-link>
                    <nuxt-link to="contantUs"><p>联系我们<span></span></p></nuxt-link>
                    <nuxt-link to="partner"><p>合作伙伴<span></span></p></nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="title alignCenter">公司荣誉</div>
                <div class="html">
                    <div class="sub-title">举视新能源·电动汽车充电服务全球供应商</div>
                    <div class="__swiper__wrapper__">
                        <swiper class="swiper-container" id="swiper" :options="swiperOptions" ref="mySwiper">
                            <swiper-slide v-for="(item, index) in files" :key="index">
                                <div class="block"  @click="handleClick(item)">
                                    <img :src="item.src" style="width: 100%; height: 100%;" />
                                </div>
                            </swiper-slide>
                        </swiper>
                        
                    </div>
                    <div class="title alignCenter">资质文件</div>
                    <div class="image-wrapper">
                        <div class="block" v-for="(item, index) in files" :key="index" @click="handleClick(item)">
                            <img :src="item.src" alt="" />
                            <div class="detail">
                                <div class="detail-title">{{ item.title }}</div>
                                <div class="detail-description">{{ item.description }}</div>
                                <div class="detail-date" v-if="item.date">{{ item.date }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="big" v-if="big.show" @click="big.show = false">
            <img :src="big.src" height="80%" />
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
            swiperOptions: {
                loop : true,
                autoplay: true,
                initialSlide: 4,
                effect : 'coverflow',
                slidesPerView: 5,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 60,
                    modifier: 3,
                    slideShadows : false
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            },
            files: [
                {
                    title:'计算机软件著作权登记证书',
                    description: '根据《计算机软件保护条例》和《计算机软件著作权登记办法》的规定，经中国版权保护中心审核，对以上事项予以登记。登记号：2020SR0681337',
                    date: '2020年06月28日',
                    src: require('../../assets/company/1.jpg')
                },
                {
                    title:'计算机软件著作权登记证书',
                    description: '根据《计算机软件保护条例》和《计算机软件著作权登记办法》的规定，经中国版权保护中心审核，对以上事项予以登记。登记号：2020SR0681337',
                    date: '2021年06月28日',
                    src: require('../../assets/company/2.jpg')
                },
                {
                    title:'CRETIFICATE OF CONFORMITY',
                    description: 'The EUT described above has been tested by us with the listed standards according to the Council Directive 2014/30/EU ...',
                    date: '2019年09月17日',
                    src: require('../../assets/company/3.jpg')
                },
                {
                    title:'CRETIFICATE OF CONFORMITY',
                    description: 'The EUT described above has been tested by us with the listed standards according to the Council Directive 2014/30/EU ...',
                    date: '2019年09月17日',
                    src: require('../../assets/company/4.jpg')
                },
                {
                    title:'外观设计专利证书',
                    description: '本外观设计经过本局依照中华人民共和国专利法进行初步审查，决定授予专利权，颁发证书并在专利登记簿上予以登记...',
                    date: '2017年05月24日',
                    src: require('../../assets/company/5.png')
                },
                {
                    title:'实用新型专利证书',
                    description: '专利号：ZL 2018 2 1298091.1 国家只是产权局依照中华人民共和国专利法经过初步审查，决定授予专利权，颁发实用新型专利证书并在专利登记簿上予以登记...',
                    date: '2019年04月02日',
                    src: require('../../assets/company/6.png')
                },
                {
                    title:'实用新型专利证书',
                    description: '专利号：ZL 2018 2 1263502.3 国家只是产权局依照中华人民共和国专利法经过初步审查，决定授予专利权，颁发实用新型专利证书并在专利登记簿上予以登记...',
                    date: '2019年01月25日',
                    src: require('../../assets/company/7.png')
                },
                {
                    title:'实用新型专利证书',
                    description: '专利号：ZL 2018 2 1376780.X 国家只是产权局依照中华人民共和国专利法经过初步审查，决定授予专利权，颁发实用新型专利证书并在专利登记簿上予以登记...',
                    date: '2019年04月02日',
                    src: require('../../assets/company/8.png')
                },
                {
                    title:'外观设计专利证书',
                    description: '专利号：ZL 2016 3 0630308.4 本外观设计经过本局依照中华人民共和国专利法进行初步审查，决定授予专利权，颁发证书并在专利登记簿上予以登记...',
                    date: '2017年05月24日',
                    src: require('../../assets/company/9.png')
                },
                {
                    title:'检验报告',
                    description: '电动汽车交流充电桩',
                    src: require('../../assets/company/10.png')
                },
                {
                    title:'外观设计专利证书',
                    description: '专利号：ZL 2018 3 0408491.2 本外观设计经过本局依照中华人民共和国专利法进行初步审查，决定授予专利权，颁发证书并在专利登记簿上予以登记...',
                    date: '2018年07月27日',
                    src: require('../../assets/company/11.png')
                },
                {
                    title:'外观设计专利证书',
                    description: '专利号：ZL 2016 3 0630307.X 本外观设计经过本局依照中华人民共和国专利法进行初步审查，决定授予专利权，颁发证书并在专利登记簿上予以登记...',
                    date: '2017年07月28日',
                    src: require('../../assets/company/12.png')
                },
                {
                    title:'检验报告',
                    description: '电动汽车交流充电桩',
                    src: require('../../assets/company/13.png')
                },
                {
                    title:'检验报告',
                    description: 'IDS60K500 直流充电机',
                    src: require('../../assets/company/14.png')
                },
            ],
            big: {
                show: false,
                src: ''
            }
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
    },
    methods: {
        /**
         * 点击放大
         */
        handleClick(item) {
            this.big.src = item.src
            this.big.show = true
        }
    }
}
</script>

<style lang="scss" scoped>
@import './common.scss';
.title {
    margin-bottom: 0 !important;
    box-sizing: border-box;
    padding-left: .6rem;
}
.sub-title {
    font-size: .24rem;
    color: #666F7E;
    line-height: .4rem;
    box-sizing: border-box;
    padding-left: .6rem;
    text-align: center;
}
.__swiper__wrapper__ {
    width: calc(100% - 1.5rem);
    margin: .2rem auto;
    height: 3.5rem;
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .block {
        color: #fff;
        text-align: center;
        line-height: 3.5rem;
    }
}
.image-wrapper {
    width: calc(100% - 1rem);
    margin: .2rem auto;
    display: flex;
    flex-wrap: wrap;
    .block {
        width: 30%;
        margin-right: 5%;
        height: 2rem;
        margin-bottom: .4rem;
        background-color: #fff;
        border-radius: .12rem;
        box-shadow: 0px 2px 21px 0px rgba(64, 70, 80, 0.25);
        transition: all .2s linear;
        cursor: pointer;
        box-sizing: border-box;
        padding: .1rem;
        &:nth-of-type(3n) {
            margin-right: 0;
        }
        &:hover {
            box-shadow: 0px 2px 21px 0px rgba(64, 70, 80, 0.5);
        }
        img {
            width: 1.4rem;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            background-color: #e8e8e8;
            border: none;
        }
        .detail {
            width: calc(100% - 1.5rem);
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            padding-left: .05rem;
            color: #666F7E;
            .detail-title {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: .2rem;
            }
            .detail-description {
                height: 1.22rem;
                margin-top: .15rem;
                font-size: .14rem;
                line-height: .2rem;
            }
            .detail-date {
                font-size: .12rem;
                color: #A6AFBF;
            }
        }
    }
}
.big {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: show .3s;
}
@keyframes big {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {}
}
</style>