<template>
    <div class="container"> 
		<!-- 背景图 -->
		<swiper :options="swiperOption" class="swiper-container" id="swiper" :style="{ height: height + 'px' }">
			<swiper-slide v-for="(item, index) in banners" :key="index" style="overflow: hidden">
				<img :src="item.Src" :alt="item.Alt" style="width: 100%; height: 100%" />
			</swiper-slide>
		</swiper>

		<!-- 当前激活的点 -->
		<div class="active-point">
			<div :class="['active-point-block', { 'last': index == (banners.length - 1), 'active': activeIndex == index }]" v-for="(item, index) in banners" :key="`point-${ index }`">
				<span class="active-point-main">
					<span v-show="activeIndex == index">{{ '0' + (index + 1) }}</span>
				</span>
				<template v-if="index !== (banners.length - 1)">
					<span class="active-point-normal"></span>
					<span class="active-point-normal"></span>
				</template>
			</div>
		</div>
		<!-- 菜单本体 -->
		<NavDom :current="0" touch product @change="handleChange" />
		<!-- logo -->
		<Logo :active="active" />
		<FooterDom :item="result" :menu="menu" />
    </div>
</template>

<script>
import NavDom from '@/self-components/nav'
import Logo from '@/self-components/logo'
import FooterDom from '@/self-components/footer'
import axios from 'axios'

export default {
	name: 'PAGE_HOME',
	components: {
		NavDom,
		Logo,
		FooterDom
	},
	data() {
		const that = this
		return {
			swiperOption: {					// full page config
				speed: 300,
				touchRatio: 1,
				enabled: true,
				mousewheel: true,
				eventsTarged: 'body',
				direction : 'vertical',
				on: {
					slideChange: function() {
						that.activeIndex = this.activeIndex
					}
				}
			},	
			activeIndex: 0,				// current full page index
			activeMenu: 0,
			active: false,
			height: 0,	
			width: 0,
		}
	},
	head () {
        return {
            title: this.result.Title,
            meta: [
                    { hid: 'description', name: 'description', content: this.result.SeoDescription },
                    { hid: 'keywords', name: 'keywords', content: this.result.SeoKeyword },  
                ]
        }
    },
	async asyncData(app) {
		let result = await app.$axios.get('/init')
		let banners = await app.$axios.get('/banner')
		let menu = await app.$axios.get('/menus')
		menu = menu.data.data
		result = result.data.data
		banners = banners.data.data
		banners.forEach(r => {
            if (process.env.NODE_ENV == 'development') r.Src = '/api' + r.Src
		})
		console.log(menu)
		return { result, banners, menu }
	},
	mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight - window.font_size * .3
	},
	methods: {
		/**
		 * 滚动首页
		 * @param { object } destination 全屏下一页信息
		 */
		afterLoad(origin, destination, direction) {
			this.activeIndex = destination.index
		},
		/**
		 * 改变当前的选中状态
		 */
		handleChange(val) {
			this.active = val
		}
	}

}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.cover {
		width: 100%;
		height: 100%;
		overflow: hidden;
		img {
			width: 100%;
			height: calc(100% + 1rem);
			transform: translateY(-.7rem);
			transition: transform .2s linear;
		}
		.active {
			transform: translateY(0);
		}
	}
	.active-point {
		position: fixed;
		left: .4rem;
		top: 50%;
		transform: translateY(-50%);
		z-index: 9999;
		.active-point-block {
			width: .26rem;
			height: .58rem;
			position: relative;
		}
		.active-point-main {
			width: .08rem;
			height: .08rem;
			background-color: #fff;
			border-radius: 50%;
			display: block;
			transition: all .1s linear;
			position: absolute;
			left: 0;
			span {
				font-size: .14rem;
				color: #fff;
				position: absolute;
				right: -.24rem;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.active-point-normal {
			display: block;
			width: .04rem;
			height: .04rem;
			background-color: #f7f7f7;
			opacity: .5;
			border-radius: 50%;
			position: absolute;
			left: .02rem;
			&:nth-of-type(2) {
				top: .2rem;
			}
			&:nth-of-type(3) {
				top: .38rem;
			}
		}
		.last {
			height: .08rem;
		}
		.active {
			.active-point-main {
				width: .26rem;
				height: .02rem;
				border-radius: 0;
			}
		}
	}
}
</style>
