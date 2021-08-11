<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <!-- <NavDom :current="5" white mask /> -->
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link to="introduction"><p>公司简介<span></span></p></nuxt-link>
                    <p class="active">公司资质<span></span></p>
                    <nuxt-link to="honor"><p>公司荣誉<span></span></p></nuxt-link>
                    <nuxt-link to="recruit"><p>人才招聘<span></span></p></nuxt-link>
                    <nuxt-link to="contantUs"><p>联系我们<span></span></p></nuxt-link>
                    <nuxt-link to="partner"><p>合作伙伴<span></span></p></nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="title alignCenter">公司资质</div>
                <div class="html">
                    <div class="sub-title">公司口号文案巴拉巴拉巴拉巴啦巴拉巴拉</div>
                    <div class="__swiper__wrapper__">
                        <swiper class="swiper-container" id="swiper" :options="swiperOptions" ref="mySwiper">
                            <swiper-slide>
                                <div class="block">
                                    1
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    2
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    3
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    4
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    5
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    6
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    7
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    8
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    9
                                </div>
                            </swiper-slide>
                        </swiper>
                        
                    </div>
                    <div class="title alignCenter">资质文件</div>
                    <div class="image-wrapper">
                        <div class="block" v-for="(item, index) in files" :key="index">
                            <img alt="" />
                            <div class="detail">
                                <div class="detail-title">{{ item.title }}</div>
                                <div class="detail-description">{{ item.description }}</div>
                                <div class="detail-date">登记日期：2020年06月28日</div>
                            </div>
                        </div>
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
    name: 'PAGE_CPMPANY_SENIORITY',
    components: {
		NavDom,
        Logo,
    },
    data() {
        return {
            width: 0,
            height: 0,
            current: 1,
            swiperOptions: {
                initialSlide: 4,
                effect : 'coverflow',
                slidesPerView: 5,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 60,
                    modifier: 3,
                    slideShadows : true
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            },
            files: [
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                },
                {
                    title:'资质文件名称',
                    description: '打我打发大水克利夫兰撒旦教安东老街安物流快递见风使舵大武当阿斯利康的紧凑型车V型连裤袜到家啦我就打阿瓦漏打卡',
                    date: '2021年01月05日'
                }
            ]
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
        this.height = document.documentElement.clientHeight
	},
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
        background-color: #ccc;
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
</style>