<template>
    <div class="home">
		<!-- 背景图 -->
		<full-page :options="options">
			<div class="section" v-for="(item, index) in imgs" :key="index">
                <img class="cover" :src="item" />
            </div>
		</full-page>
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
		<NavDom :current="0" touch />
		<!-- 产品中心 -->
		<div class="product-center">
			<span class="product-center-name">产品中心</span>
			<span class="line"></span>
		</div>
		<!-- logo -->
		<Logo />
    </div>
</template>

<script>
import mixin from '@/mixins'
import NavDom from '@/components/nav'
import Logo from '@/components/logo'

export default {
	name: 'PAGE_HOME',
	mixins: [ mixin ],
	components: {
		NavDom, Logo
	},
	data() {
		return {
			options: {					// full page config
				afterLoad: this.afterLoad,
				css3: true,
			},				
			activeIndex: 0,				// current full page index
			imgs: [
				require('@/assets/images/bg.png'),
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201209%2F19%2F110944ysa8m0c0omkhsk0p.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626963360&t=aa13f68b176a7a12216b635feec3d6b8',
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201108%2F21%2F214740e47vyinyi4yoo8vv.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626963445&t=561900215819dcccc2ffaf0486c9d89c',
			],
			activeMenu: 0
		}
	},
	methods: {
		/**
		 * 滚动首页
		 * @param { object } destination 全屏下一页信息
		 */
		afterLoad(origin, destination, direction) {
			this.activeIndex = destination.index
		},
	}
}
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;
	.cover {
		width: 100%;
		height: 100%;
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
	.active-point {
		position: fixed;
		left: .4rem;
		top: 50%;
		transform: translateY(-50%);
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
