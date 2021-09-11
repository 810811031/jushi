<template>
    <div class="container" :style="{ height: height + 'px' }">
        <NavDom :current="1" white mask :menu="menu" />
        <Logo dark  :item="result" />
        <div class="content">
            <div class="nav">
                <div class="inside">
                    <p v-for="(item, index) in list" 
                        :key="index" 
                        :class="[{ 'active': current === index }]"
                        @click.stop="handleChange(index)"
                        >
                        {{ item.Name }}
                        <span></span>
                        <section class="_list" v-if="item.Children.length > 0 && showChildren == index">
                            <section @click.stop="handleSelectChildren(i)" :class="['_list_box', { active: current2 == i }]" v-for="(c, i) in item.Children" :key="i">
                                {{ c.Name }}
                            </section>
                        </section>
                    </p>
                </div>
            </div>
            <div class="table">
                <div class="inside">
                    <Box 
                        v-for="(item, index) in productsList" :key="index" :info="item"
                        :animate="getAnimate(index)"
                        :bg="getbgColor(index)"
                        :color="getColor(index)"
                         />
                </div>
            </div>
        </div>
        <FooterDom :item="result" />
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import Box from '@/self-components/product-box'
import FooterDom from '@/self-components/footer'

export default {
    name: 'PAGE_PRODUCT',
    components: {
		NavDom,
        Logo,
        Box,
        FooterDom
    },
    data() {
        return {
            width: 0,
            height: 0,
            current: 0,
            current2: null,
            showChildren: false,
            productsList: []
        }
    },
    head () {
        return {
            title: '举视产品列表',
            meta: [
                    { hid: 'description', name: 'description', content: '举视产品列表' },
                    { hid: 'keywords', name: 'keywords', content: '举视产品列表' },  
                ]
        }
    },
    async asyncData(app) {
        let result = await app.$axios.get('/init')
        let list = await app.$axios.get('/category')
        let menu = await app.$axios.get('/menus')
		menu = menu.data.data
        result = result.data.data
        list = list.data.data
		return { result, list, menu }
    },
    watch: {
        'list': {
            handler: function (val) {
                val[0] && this.getProductInside(val[0].ID)
            },
            immediate: true
        }
    },
    mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
    },
    methods: {
        /**
         * 获取背景颜色
         * @param { number } index
         */
        getbgColor(index) {
            switch(index) {
                case 1:
                    return '#ABB2BF'
                case 3:
                    return '#656E7D'
                case 4:
                    return '#656E7D'
                case 7:
                    return '#ABB2BF'
                case 10:
                    return '#ABB2BF'
                case 12:
                    return '#656E7D'
                case 13:
                    return '#656E7D'
                case 16:
                    return '#ABB2BF'
                default:
                    return ''
            }
        },
        /**
         * 获取动画效果
         * @param { number } index
         */
        getAnimate(index) {
            switch(index) {
                case 0:
                    return '1'
                case 4:
                    return '2'
                case 9:
                    return true
                default:
                    return ''
            }
        },
        /**
         * 获取字体颜色
         * @param { number } index
         */
        getColor(index) {
            switch(index) {
                case 1:
                    return 'white'
                case 7:
                    return 'white'
                case 10:
                    return 'white'
                default:
                    return ''
            }
        },
        /**
         * 改变当前类目
         * @param { number } index
         */
        handleChange(index) {
            const row = this.list[index]
            this.current = index
            this.current2 = null
            this.showChildren = null
            if (row.Children.length > 0) {  
                this.showChildren = index
                return 
            }
            this.getProductInside(row.ID)
        },
        /**
         * 改变当前类目
         * @param { number } index
         */
        handleSelectChildren(index) {
            this.current2 = index
            const row = this.list[this.current].Children[index]
            this.getProductInside(row.ID)
        },
        /**
         * 获取产品详情
         * @param { number } ID 产品ID
         */
        getProductInside(ID) {
            this.$axios.get(`/products?categoryID=${ ID }`)
                .then(res => {
                    let result = res.data.data
                    result.forEach((item, index) => {
                        item.Cover = '/api' + item.Cover
                    })
                    this.productsList = result
                })
        }
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
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        padding-left: 6.2rem;
        .nav {
            width: 6.2rem;
            height: 100%;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: top;
            position: fixed;
            top: 0;
            left: 0;
            .inside {
                width: 5.7rem;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                box-sizing: border-box;
                padding-left: .95rem;
                p {
                    font-size: .18rem;
                    color: #3E4045;
                    line-height: .25rem;
                    transition: all .2s linear;
                    position: relative;
                    margin-bottom: .36rem;
                    box-sizing: border-box;
                    padding-left: .2rem;
                    font-weight: bold;
                    cursor: pointer;
                    span {
                        display: inline-block;
                        width: 0;
                        height: .15rem;
                        opacity: .4;
                        position: absolute;
                        top: .15rem;
                        left: 0;
                        transition: width .4s linear;
                    }
                    ._list {
                        padding: .1rem;
                        margin-top: .2rem;
                        box-sizing: border-box;
                        background-color: rgba(223,226,229, .4);
                        border-radius: 4px;
                        ._list_box {
                            font-size: .14rem;
                            color: #3E4045;
                            display: inline-block;
                            vertical-align: top;
                            margin-right: .1rem;
                            padding: .02rem .1rem;
                            &:hover {
                                color: #399F62;
                            }
                        }
                        .active {
                            color: #fff !important;
                            background-color: #399F62;
                            border-radius: 3px;
                        }
                    }
                    &:hover {
                        span {
                            width: 1.2rem;
                            background-color: #DAE0E9;
                            height: .15rem;
                            opacity: .6;
                            top: .15rem;
                        }
                    }
                    @keyframes show {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {}
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
        .table {
            width: calc(100% - .81rem);
            height: 100%;
            vertical-align: top;
            display: inline-block;
            .inside {
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
            }
        }
    }
    .list-enter, list-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }
    .list-enter-active, my-leave-active {
        transition: all .8s ease;
    }
}
</style>