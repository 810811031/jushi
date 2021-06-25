<template>
    <div class="container"> 
		<!-- 背景图 -->
		<Swiper :options="swiperOption" class="swiper-container" id="swiper" :style="{ height: height + 'px' }">
			<SwiperSlide v-for="(item, index) in imgs" :key="index" style="overflow: hidden">
				<img :src="item" 
					:style="{ 
						width: width + 'px', 
						height: `calc(${ height }px + 1rem)`, 
						transition: 'transform .2s linear',
						transform: active ? 'translateY(0)' : 'translateY(-.5rem)' }" />
			</SwiperSlide>
		</Swiper>

		<!-- 当前激活的点 -->
		<div class="active-point">
			<div :class="['active-point-block', { 'last': index == (imgs.length - 1), 'active': activeIndex == index }]" v-for="(item, index) in imgs" :key="`point-${ index }`">
				<span class="active-point-main">
					<span v-show="activeIndex == index">{{ '0' + (index + 1) }}</span>
				</span>
				<template v-if="index !== (imgs.length - 1)">
					<span class="active-point-normal"></span>
					<span class="active-point-normal"></span>
				</template>
			</div>
		</div>
		<!-- 菜单本体 -->
		<NavDom :current="0" touch product @change="handleChange" />
		<!-- logo -->
		<Logo :active="active" />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import NavDom from '@/components/nav'
import Logo from '@/components/logo'

export default {
	name: 'PAGE_HOME',
	components: {
		Swiper,
    	SwiperSlide,
		NavDom,
		Logo
	},
	data() {
		return {
			swiperOption: {					// full page config
				speed: 300,
				touchRatio: 1,
				enabled: true,
				mousewheel: true,
				eventsTarged: 'body',
				direction : 'vertical',
				on: {
					slideChange: s => {
						this.activeIndex = s.activeIndex
					}
				}
			},	
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			activeIndex: 0,				// current full page index
			imgs: [
				require('@/assets/images/bg.png'),
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201209%2F19%2F110944ysa8m0c0omkhsk0p.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626963360&t=aa13f68b176a7a12216b635feec3d6b8',
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201108%2F21%2F214740e47vyinyi4yoo8vv.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626963445&t=561900215819dcccc2ffaf0486c9d89c',
			],	
			activeMenu: 0,
			active: false,
			height: 0,	
			width: 0	
		}
	},
	mounted() {
		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
	},
	methods: {
		/**
		 * 滚动首页
		 * @param { object } destination 全屏下一页信息
		 */
		afterLoad(origin, destination, direction) {
			this.activeIndex = destination.index
		},
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
