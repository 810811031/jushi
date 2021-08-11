<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="5" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <p class="active">公司简介<span></span></p>
                    <nuxt-link to="seniority"><p>公司资质<span></span></p></nuxt-link>
                    <nuxt-link to="honor"><p>公司荣誉<span></span></p></nuxt-link>
                    <nuxt-link to="recruit"><p>人才招聘<span></span></p></nuxt-link>
                    <nuxt-link to="contantUs"><p>联系我们<span></span></p></nuxt-link>
                    <nuxt-link to="partner"><p>合作伙伴<span></span></p></nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="title">举视新能源</div>
                <div class="html">
                    <div class="sub-title">公司口号文案巴拉巴拉巴拉巴啦巴拉巴拉</div>
                    <p class="introduction_p">举视（上海）新能源科技有限公司成立于新能源汽车发展元年，是一家集新能源汽车充电设备研发、生产、销售、安装服务为一体的综合性科技企业。</p>

                    <p class="introduction_p">公司秉持“精益求精·敬天爱人”的企业宗旨，坚持在新能源汽车充电领域发展，为客户提供新能源汽车充电设备与充电整体解决方案，服务于充电运营商，为国家新能源新基建计划作服务。迎合党中央新基建号召的发展机遇，迅速成长为新能源汽车充电服务领域的一支生力军。</p>

                    <p class="introduction_p">公司现有专利25项，其中外观专利18项，结构实用新型专利7项，获得CQC检验认证、CE认证，拥有一个控制软件著作权，一个平台服务软件著作权</p>      

                    <p class="introduction_p">公司总部位于素有“东方巴黎”美称的上海市青浦区E通世界园区，地理位置优越，距离上海虹桥国际机场15分钟车程。配套工厂在美丽的园林城市江苏省昆山市，有着占地超过5000平方米，配套设施齐全，设备先进的的生产车间。举视新能源，期待与您共同进步，共享美好！</p>

                    <div class="video"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'

export default {
    name: 'PAGE_CPMPANY_INTRODUCTION',
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
	},
}
</script>

<style lang="scss" scoped>
@import './common.scss';
.title {
    margin-bottom: .1rem !important;
    box-sizing: border-box;
    padding-left: .6rem;
}
.sub-title {
    font-size: .24rem;
    color: #666F7E;
    line-height: .4rem;
    box-sizing: border-box;
    padding-left: .6rem;
}
.introduction_p {
    box-sizing: border-box;
    padding-left: .6rem;
    margin-top: .2rem;
    text-indent: 2em;
}
.video {
    width: 6rem;
    height: 3.6rem;
    margin-top: .3rem;
    background-color: #e8e8e8;
    margin-left: .6rem;
}
</style>