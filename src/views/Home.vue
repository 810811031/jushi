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
		<div :class="['menu', { 'menu-active': active }]">
			<div class="background">
				<img v-if="active" class="open-menu" @click="handleTrigger" :src="require('@/assets/images/close@2x.png')" />
				<img v-else class="open-menu" @click="handleTrigger" :src="require('@/assets/images/menu@2x.png')" />
			
				<div class="harf aboutUs" v-if="active">
					<p class="title">关于我们</p>
					<p class="sub-title">自 2011 年以来</p>
					<p class="normal">
						举视（上海）新能源科技有限公司成立于新能源汽车发展元年，是一家集新能源汽车充电设备研发、生产、销售、安装服务为一体的综合性科技企业。
					</p>
					<p class="normal indent">
						公司秉持“精益求精·敬天爱人”的企业宗旨，坚持在新能源汽车充电领域发展，为客户提供新能源汽车充电设备与充电整体解决方案，服务于充电运营商，为国家新能源新基建计划作服务。迎合党中央新基建号召的发展机遇，迅速成长为新能源汽车充电服务领域的一支生力军。
					</p>
					<p class="normal indent">
						公司现有专利25项，其中外观专利18项，结构实用新型专利7项，获得CQC检验认证、CE认证，拥有一个控制软件著作权，一个平台服务软件著作权      
					</p>
					<p class="normal">
						举视新能源，期待与您共同进步，共享美好！
					</p>
					<p class="normal call-us">打电话给我们</p>
					<p class="phoneNo">199-5172-3459</p>

					<div class="shop-group">
						<img :src="require('@/assets/images/cat-shop@2x.png')" />
						<img :src="require('@/assets/images/jushi-shop@2x.png')" />
					</div>

					<div class="logo-group">

					</div>
				</div>

				<div class="harf menu-botton" v-if="active">
					<div class="inside">
						<div :class="['block', { 'active': activeMenu == index }]" 
							v-for="(item, index) in menus" :key="index"
							@click="handleTo(item.routeName)" >
							<div class="title">{{ item.title }}<span></span></div>
							<div class="transform">{{ item.transform }}</div>
						</div>
					</div>
				</div>
			
			
			</div>
			<ul class="tool" v-if="active">
				<li><img :src="require('@/assets/images/QQ-grey@2x.png')" /></li>
				<li><img :src="require('@/assets/images/wechat-grey@2x.png')" /></li>
				<li><img :src="require('@/assets/images/search-grey@2x.png')" /></li>
			</ul>
			<ul class="tool" v-else>
				<li><img :src="require('@/assets/images/QQ@2x.png')" /></li>
				<li><img :src="require('@/assets/images/wechat@2x.png')" /></li>
				<li><img :src="require('@/assets/images/search@2x.png')" /></li>
			</ul>
		</div>
		<!-- 点击空白处隐藏菜单 -->
		<div class="mask" v-show="active" @click="active = false"></div>
		<!-- 产品中心 -->
		<div class="product-center">
			<span class="product-center-name">产品中心</span>
			<span class="line"></span>
		</div>
		<!-- logo -->
		<img :src="require('@/assets/images/logo@2x.png')" class="logo" @click="handleBackHome" />
    </div>
</template>

<script>
import mixin from '@/mixins'

export default {
	name: 'PAGE_HOME',
	mixins: [ mixin ],
	data() {
		return {
			options: {					// full page config
				afterLoad: this.afterLoad,
			},				
			active: true,				// menu state
			activeIndex: 0,				// current full page index
			imgs: [
				require('@/assets/images/bg.png'),
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201209%2F19%2F110944ysa8m0c0omkhsk0p.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626963360&t=aa13f68b176a7a12216b635feec3d6b8',
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201108%2F21%2F214740e47vyinyi4yoo8vv.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626963445&t=561900215819dcccc2ffaf0486c9d89c',
			],
			menus: [
				{
					title: '首页',
					transform: 'Home',
					routeName: 'Home'
				},
				{
					title: '产品中心',
					transform: 'Product list',
					routeName: 'Product'
				},
				{
					title: '解决方案与应用',
					transform: 'Equipment customization',
					routeName: 'function'
				},
				{
					title: '举视合伙人',
					transform: 'Company profile',
					routeName: 'Partner'
				},
				{
					title: '云管理服务中心',
					transform: 'Company profile',
					routeName: 'CloudCenter'
				},
				{
					title: '公司简介',
					transform: 'Company profile',
					routeName: 'Company'
				}
			],
			activeMenu: 0
		}
	},
	methods: {
		/**
		 * 展开 或 收起菜单
		 */
		handleTrigger() {
			this.active = !this.active
		},
		/**
		 * 返回首页
		 */
		handleBackHome() {
			window.location.reload()
		},
		/**
		 * 滚动首页
		 * @param { object } destination 全屏下一页信息
		 */
		afterLoad(origin, destination, direction) {
			this.activeIndex = destination.index
		},
		/**
		 * 转跳到
		 * @param { string } name routeName
		 */
		handleTo(name) {
			this.$router.push({ name })
		}
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
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
	}
	.menu {
		width: 80px;
		height: 100%;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 99999;
		box-sizing: border-box;
		transition: all .3s ease-in-out;
		.open-menu {
			width: 80px;
			height: 80px;
			position: fixed;
			right: 0;
			top: 0;
			z-index: 999;
		}
		.background {
			width: 100%;
			height: calc(100% - 320px);
			position: absolute;
			top: 80px;
			left: 0;
			border-left: 1px solid rgba(255,255,255, .14);
			background-color: rgba(255,255,255, .08);
			.harf {
				width: 50%;
				height: 100%;
				display: inline-block;
				vertical-align: top;
				box-sizing: border-box;
			}
			.aboutUs {
				padding-top: 13.296%;
				padding-left: .47rem;
				padding-right: .73rem;
				.title {
					font-size: .24rem;
					color: #656E7D;
					width: .57rem;
				}
				.sub-title {
					font-size: .14rem;
					color: #656E7D;
					font-weight: bold;
					margin-top: .1rem;
					margin-bottom: .2rem;
				}
				.normal {
					font-size: 14px;
					color: #9BA2AE;
					line-height: 16px;
					margin-bottom: 20px;
				}
				.indent {
					text-indent: 2em;
				}
				.call-us {
					margin-top: 20px;
				}
				.phoneNo {
					font-size: 22px;
					line-height: 22px;
					color: #656E7D;
					margin-top: 20px;
					font-weight: bold;
				}
				.shop-group {
					width: 352px;
					margin-top: 20px;
					display: flex;
					justify-content: space-between;
					img {
						width: 160px;
						height: 48px;
						cursor: pointer;
					}
				}
				.logo-group {
					max-width: 445px;
					height: 185px;
					background-color: #ccc;
					margin-top: 35px;
				}
			}
			.menu-botton {
				padding-left: 100px;
				position: relative;
				.inside {
					position: absolute;
					top: 50%;
					overflow: hidden;
					transform: translateY(-50%);
				}
				.block {
					cursor: pointer;
					margin-bottom: 40px;
					&:last-child {
						margin-bottom: 0;
					}
					.title {
						display: inline-block;
						font-size: 28px;
						color: #656E7D;
						line-height: 40px;
						position: relative;
						span {
							width: 110%;
							height: 12px;
							display: block;
							position: absolute;
							left: -100%;
							bottom: 3px;
							opacity: .4;
							transition: left .3s linear;
						}
					}
					.transform {
						color: #9BA2AE;
						font-size: 16px;
						margin-top: 11px;
						line-height: 14px;
					}
					&:hover .title span{
						background-color: #DAE0E9;
						opacity: .6;
						left: 0;
					}
				}
				.active {
					span {
						background-color: #008DDC !important;
						left: 0 !important;
						opacity: .6 !important;
					}
				}
			}
		}
		.tool {
			position: fixed;
			bottom: 0;
			right: 0;
			li {
				img {
					width: 80px;
					height: 80px;
					cursor: pointer;
					transition: all .2s linear;
					&:hover {
						background-color: rgba(255,255,255, .1);
					}
				}
			}
		}
	}
	.menu-active {
		width: 57.29%;
		background-color: #fff;
		.background {
			height: 100%;
			top: 0px;
		}
	}
	.product-center {
		width: 119px;
		height: 182px;
		position: fixed;
		right: 0;
		top: 50%;
		margin-top: -91px;
		background-color: rgba(35, 52, 77, 0.52);
		border-radius: 100px 0px 0px 100px;
		.product-center-name {
			width: 22px;
			display: inline-block;
			font-size: 22px;
			word-wrap: break-word;
			color: #fff;
			position: absolute;
			top: 50%;
			right: 26px;
			transform: translateY(-50%);
			z-index: 99999;
		}
		.line {
			display: block;
			width: 28px;
			height: 4px;
			background-color: #fff;
			position: absolute;
			top: 50%;
			margin-top: -2px;
			right: 66px;
		}
	}
	.logo {
		width: 210px;
		position: fixed;
		top: 20px;
		left: 40px;
		z-index: 999;
		cursor: pointer;
	}
	.active-point {
		position: fixed;
		left: 40px;
		top: 50%;
		transform: translateY(-50%);
		.active-point-block {
			width: 26px;
			height: 58px;
			position: relative;
		}
		.active-point-main {
			width: 8px;
			height: 8px;
			background-color: #fff;
			border-radius: 50%;
			display: block;
			transition: all .1s linear;
			position: absolute;
			left: 0;
			span {
				font-size: 14px;
				color: #fff;
				position: absolute;
				right: -24px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.active-point-normal {
			display: block;
			width: 4px;
			height: 4px;
			background-color: #f7f7f7;
			opacity: .5;
			border-radius: 50%;
			position: absolute;
			left: 2px;
			&:nth-of-type(2) {
				top: 20px;
			}
			&:nth-of-type(3) {
				top: 38px;
			}
		}
		.last {
			height: 8px;
		}
		.active {
			.active-point-main {
				width: 26px;
				height: 2px;
				border-radius: 0;
			}
		}
	}
}
</style>
