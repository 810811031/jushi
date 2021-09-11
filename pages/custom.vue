<template>
    <div class="container" :style="{ height: height + 'px' }">
        <NavDom :current="3" white mask :menu="menu" />
        <Logo dark  :item="result" />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <div class="title">{{ $route.query.title }}</div>
                    <div class="descript">{{ txt }}</div>
                </div>
            </div>
            <div class="right">
                <nuxt-link :to="`/customDetail/${ item.ID }?menuId=${ $route.query.id }&title=${ $route.query.title }`" class="block" @click="handleTo(item)" v-for="(item, index) in news" :key="index">
                    <div class="img">
                        <img :src="item.Cover" alt="" />
                    </div>
                    <div class="p">
                        <p>{{ item.Title }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <FooterDom :item="result" />
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import FooterDom from '@/self-components/footer'

export default {
    name: 'PAGE_CUSTOM',
    components: {
		NavDom,
        Logo,
        FooterDom
    },
    data() {
        return {
            width: 0,
            height: 0,
        }
    },
    async asyncData(app) {
		let result = await app.$axios.get('/init')
        let news = await app.$axios.get('/cases?menuID=' + app.route.query.id)
        let menu = await app.$axios.get('/menus')
        let txt = ''
		menu = menu.data.data
		result = result.data.data
        news = news.data.data
        news.forEach(item => {
            item.Cover = '/api' + item.Cover
        })
        menu.forEach(item => {
            if (item.ID == app.route.query.id) txt = item.Txt
        })
		return { result, news, menu, txt }
	},
    head () {
        return {
            title: this.$route.query.title,
            meta: [
                    { hid: 'description', name: 'description', content: this.$route.query.title + '列表' },
                    { hid: 'keywords', name: 'keywords', content: this.$route.query.title },  
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
                .descript {
                    font-size: .18rem;
                    color: #666F7E;
                }
            }
        }
        .right {
            width: calc(100% - 6.31rem);
            height: 100%;
            box-sizing: border-box;
            padding: .3rem;
            display: inline-block;
            vertical-align: top;
            overflow-y: auto;
            animation: show .3s;
            .block {
                width: 3.2rem;
                height: 3.25rem;
                background: #FFFFFF;
                border-radius: .08rem;
                display: inline-block;
                padding: .1rem;
                margin-right: 1.2rem;
                margin-bottom: .7rem;
                cursor: pointer;
                text-decoration: none;
                transition: all .2s linear;
                border: 1px solid #e8e8e8;
                vertical-align: top;
                &:nth-of-type(3n) {
                    margin-right: 0;
                }
                &:hover {
                    box-shadow: 0px .02rem .21rem 0px rgba(64, 70, 80, 0.25);
                    border: none;
                }
                .img {
                    width: 100%;
                    height: 2.3rem;
                    background-color: #f2f3f4;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                .p {
                    width: 100%;
                    height: .7rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    p {
                        padding-top: .2rem;
                        font-size: .18rem;
                        color: #3E4045;
                        text-align: center;
                        line-height: .24rem;
                        text-decoration: none;
                    }
                }
            }
            @keyframes show {
                from {
                    transform: translateY(-30px);
                    opacity: 0;
                }
                to {}
            }
        }
    }
}
</style>
