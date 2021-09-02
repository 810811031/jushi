<template>
    <div class="container" :style="{ height: height + 'px' }">
        <NavDom :current="3" white mask />
        <Logo dark />
        <div class="content">
            <div class="left">
                <div class="inside">
                    <div class="title">{{ $route.query.title }}</div>
                </div>
            </div>
            <div class="right">
                <div class="back" @click="handleBack"><img src="../../assets/images/back.png">返回列表</div>
                <div class="title">{{ current.Title }}</div>
                <img class="Cover" :src="current.Cover" />
                <div class="html" v-html="current.Txt"></div>
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
    name: 'PAGE_NEWS_DETAIL',
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
        let news = await app.$axios.get('/cases?menuID=' + app.route.query.menuId)
        let current = null
		result = result.data.data
        news = news.data.data
        news.forEach(item => {
            if (process.env.NODE_ENV == 'development') item.Cover = '/api' + item.Cover
            if (item.ID == app.route.params.id) current = item
        })
		return { result, news, current }
	},
    head () {
        return {
            title: this.current.Title,
            meta: [
                    { hid: 'description', name: 'description', content: this.current.SeoDescription },
                    { hid: 'keywords', name: 'keywords', content: this.current.SeoKeyword },  
                ]
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
    },
    methods: {
        handleBack() {
            this.$router.back()
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
            padding-bottom: 1rem;
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
                line-height: .56rem;
                color: #666F7E;
                margin-bottom: .2rem;
                margin-top: .3rem;
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
            }
        }
    }
}
</style>
