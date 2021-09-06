<template>
    <div class="container"  :style="{ height: height + 'px' }">
        <NavDom :current="2" white mask :menu="menu" />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <nuxt-link class="p" :to="`/programme/${ index + 1 }`" :class="[{ 'active': $route.params.id - 1 == index }]"
                        v-for="(item, index) in resultList" 
                        :key="index" ><span></span>{{ item.Title }}</nuxt-link>
                </div>
            </div>
            <div class="right">
                <template>
                    <div class="title">{{ result.Title }}</div>
                    <div class="SubTitle">{{ result.SubTitle }}</div>
                    <img :src="result.Cover" class="Cover" />
                    <div class="html" v-html="result.Txt">
                    </div>
                </template>
            </div>
        </div>
        <FooterDom :item="init" />
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import FooterDom from '@/self-components/footer'


export default {
    name: 'PAGE_PROGRAMME',
    components: {
		NavDom,
        Logo,
        FooterDom
    },
    async asyncData(app) {
        // 获取解决方案 并 获取图片
        let result = await app.$axios.get('/program')
        let init = await app.$axios.get('/init')
        let menu = await app.$axios.get('/menus')
		menu = menu.data.data
        init = init.data.data
        result = result.data.data
        result.forEach(r => {
            r.Cover = '/api' + r.Cover
        })
        const page = result[app.route.params.id - 1]

        // 设置头部信息
        app.app.head.title = page.Title
        return { resultList: result, result: page, init, menu }
    },
    head () {
        return {
            title: this.result.title,
            meta: [
                    { hid: 'description', name: 'description', content: this.result.SeoDescription },
                    { hid: 'keywords', name: 'keywords', content: this.result.SeoKeyword },  
                ]
        }
    },
    data() {
        return {
            width: 0,
            height: 0,
            current: 0,
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
        this.height = document.documentElement.clientHeight
        this.currentMenu = 1
    },
    methods: {
        /**
         * 选择文章
         */
        handleSelectPage(index) {
            this.current = index
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
    .content {
        width: 100%;
        height: 100%;
        .left {
            width: 4.84rem;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid rgba(171, 178, 191, 0.3);
            position: relative;
            display: inline-block;
            vertical-align: top;
            .inside {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                box-sizing: border-box;
                padding-left: .95rem;
                .p {
                    display: block;
                    text-decoration: none;
                    font-size: .18rem;
                    color: #3E4045;
                    line-height: .25rem;
                    transition: all .2s linear;
                    position: relative;
                    margin-bottom: .36rem;
                    box-sizing: border-box;
                    padding-left: .2rem;
                    cursor: pointer;
                    font-weight: bold;
                    span {
                        display: inline-block;
                        width: 0;
                        height: .15rem;
                        opacity: .4;
                        position: absolute;
                        bottom: -.1rem;
                        left: 0;
                        transition: width .4s linear;
                    }
                    &:hover {
                        span {
                            width: 1.2rem;
                            background-color: #DAE0E9;
                            height: .15rem;
                            opacity: .6;
                            bottom: -.05rem;
                        }
                    }
                }
                .active {
                    font-size: .28rem;
                    span {
                        width: 1.2rem;
                        background-color: #008DDC;
                    }
                }
            }
        }
        .right {
            width: calc(100% - 4.85rem);
            height: 100%;
            overflow: auto;
            box-sizing: border-box;
            padding-left: 1.15rem;
            display: inline-block;
            vertical-align: top;
            padding-top: 1.1rem;
            padding-bottom: 1rem;
            animation: show .3s;
            .title {
                font-size: .4rem;
                line-height: .56rem;
                color: #666F7E;
                margin-bottom: .2rem;
            }
            .SubTitle {
                font-size: .2rem;
                line-height: .3rem;
                color: #666F7E;
                margin-bottom: .3rem;
            }
            .Cover {
                width: 8rem;
                margin-bottom: .4rem;
            }
            .html {
                width: calc(100% - 1.5rem);
                font-size: .16rem;
                line-height: .22rem;
                color: #666F7E;
                .html-title {
                    margin-bottom: .2rem;
                }
                .html-content {
                    margin-bottom: .6rem;
                }
            }
            @keyframes show {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {}
            }
        }
    }
}
</style>