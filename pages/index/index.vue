<template>
	<view class="container">
		<!-- 轮播图开始 -->
		<view class="banner">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
				<block v-for="(item, index) in imgUrls" :key="index">
					<swiper-item>
						<image :src="item" class="slide-image" mode="widthFix" bindtap="toPath" :data-id="item.id" />
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 轮播图结束 -->

		<!-- 导航栏开始 -->
		<view class="class">
			<view @click="goGreenHealth">
				<image src="/static/images/lv.png" />
				<text>绿色健康</text>
			</view>
			<view>
				<image src="/static/images/chao.png" />
				<text>超市便利</text>
			</view>
			<view>
				<image src="/static/images/zhu.png" />
				<text>电商助农</text>
			</view>
			<view>
				<image src="/static/images/xiang.png" />
				<text>乐享周末</text>
			</view>
		</view>
		<!-- 导航栏结束 -->

		<!-- 公告开始 -->
		<view class="sale">
			<image src="/static/images/sale.png" />
		</view>
		<!-- 公告开始 -->

		<!-- 健康专区开始 -->
		<view class="block">
			<view class="title">
				<image src="/static/images/health.png" />
			</view>

			<view class="list-item" v-for="(item, index) in health" :key="index">
				<image :src="item.img" />
				<view class="text">
					<text class="list-title">{{item.title}}</text>
					<text class="list-des">{{item.des}}</text>
					<image src="/static/images/special.png" />
					<view class="text-row">
						<text class="demo-list-price">{{item.price}}/份</text>
						<text class="demo-list-del-price">¥{{item.w_price}}</text>
					</view>
				</view>
				<image src="/static/images/car.png" class="add" />
			</view>
			<view class="footer-end">
				<text>查看更多</text>
				<image src="/static/images/arrow-right.png" class="more" />
			</view>
		</view>
		<!-- 健康专区结束 -->

		<!-- 超市便利开始 -->
		<view class="block shop">
			<view class="title">
				<image src="/static/images/shop.png" />
			</view>
			<!-- 超市信息开始 -->
			<view class="index">
				<view class="footer">
					<!-- 左边 -->
					<view class="left">
						<image src="/static/images/ds.png" mode="aspectFit">
					</view>
					<!-- 右边 -->
					<view class="right">
						<view class="titles">大商超市</view>
						<view class="center">合肥市庐阳区长江中路与北含山路交叉口向...</view>
						<view class="parity">平价菜场</view>
						<view class="full-reduction">
							<text class="full">满</text>
							<text>满40减10, 满70减20, 满100减30, 满...</text>
						</view>
						<view class="discount">
							<text class="fracture">折</text>
							<text>部分商品6折, 满500元享受9折</text>
						</view>
						<view class="info">
							<scroll-view scroll-x class="scroll-content">
								<block v-for="(item, index) in list" :key="index">
									<view class="info-box" @click="goList">
										<view class="info-img">
											<image :src="item.url" mode=""></image>
										</view>
										<view class="weight">{{item.weight}}</view>
										<view class="num">{{item.num}}</view>
										<view class="price">
											<text class="new">{{item.new}}</text>
											<text class="once">{{item.once}}</text>
										</view>
									</view>
								</block>
							</scroll-view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 超市便利结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrls: ["/static/images/banner.png", "/static/images/banner.png"],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				circular: true,
				duration: 2000,
				bannerData: null,
				url: ["", ""],
				health: [{
						img: "/static/images/good.png",
						title: "标题111标题标题标题标题",
						price: 156.23,
						w_price: 89.36,
						des: "蔬菜+油+调味料"
					},
					{
						img: "/static/images/good.png",
						title: "标题222标题标题标题标题",
						price: 256.23,
						w_price: 89.36,
						des: "蔬菜+油+调味料"
					},
					{
						img: "/static/images/good.png",
						title: "标题333标题标题标题标题",
						price: 356.23,
						w_price: 89.36,
						des: "蔬菜+油+调味料"
					}
				],
				list: [{
						id: 1,
						url: '../../static/images/green-orderlistA.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					},
					{
						id: 2,
						url: '../../static/images/green-orderlistB.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					},
					{
						id: 3,
						url: '../../static/images/1.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					},
					{
						id: 4,
						url: '../../static/images/green-orderlistB.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					}
				]
			};
		},
		onLoad() {},
		methods: {
			// 去绿色健康页面
			goGreenHealth() {
				uni.navigateTo({
					url: '/pages/greenHealth/greenHealth'
				})
			}
		}
	};
</script>

<style lang="less" scoped>
.footer-end {
	font-size: 26rpx;
	font-family:Microsoft YaHei;
	font-weight:400;
	color:rgba(102,102,102,1);
	margin-bottom: 44rpx;
	image {
		width: 14rpx;
		height: 24rpx;
		vertical-align: middle;
		margin-left: 74rpx;
	}
}
	.top {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
	}

	.position {
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.position image {
		width: 24rpx;
		height: 28rpx;
		vertical-align: middle;
		margin-right: 2rpx;
	}

	.position text {
		font-size: 32rpx;
		color: #fff;
	}

	.top .search {
		background: transparent !important;
	}

	.van-search__content {
		background: #fff !important;
		border-radius: 28rpx !important;
		display: initial !important;
	}

	.search-box {
		background: #fff;
	}

	.dialog image {
		width: 48rpx;
		margin-top: 30rpx;
		margin-left: 20rpx;
		height: 48rpx;
	}

	.banner image {
		width: 100%;
	}

	.banner swiper {
		height: 528rpx;
	}

	.class {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		margin: 26rpx 0 43rpx 0;
	}

	.class view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.class image {
		width: 85rpx;
		height: 85rpx;
	}

	// .class view:nth-child(4) image {
	// 	width: 100rpx;
	// 	height: 95rpx;
	// }

	// .class view:nth-child(2) image,
	// .class view:nth-child(3) image {
	// 	width: 85rpx;
	// 	height: 100rpx;
	// }

	// .class view:nth-child(1) image {
	// 	width: 85rpx;
	// 	height: 118rpx;
	// }

	.class text {
		white-space: nowrap;
		font-size: 24rpx;
		color: #555;
		margin-top: 23rpx;
	}

	.sale {
		margin: 0 30rpx 23rpx;
	}

	.sale image {
		width: 691rpx;
		height: 143rpx;
	}

	.block {
		padding: 0 25rpx;
		text-align: center;
	}

	.block .title {
		text-align: center;
	}

	.block .title image {
		width: 263rpx;
		height: 121rpx;
	}

	.list-item {
		display: flex;
		margin: 30rpx 0 28rpx;
		position: relative;
	}

	.list-item:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1rpx;
		background: #ececec;
	}

	.list-item image {
		width: 200rpx;
		height: 198rpx;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		justify-content: space-around;
		margin-left: 20rpx;
	}

	.text image {
		width: 119rpx;
		height: 31rpx;
	}

	.text-row {
		display: flex;
	}

	.demo-list-price {
		font-size: 32rpx;
		font-weight: bold;
		color: #ff3b39;
	}

	.list-item .add {
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.list-title {
		text-align: left;
		font-size: 32rpx;
		color: #606060;
	}

	.list-des {
		font-size: 22rpx;
		color: #9b9b9b;
		text-align: left;
	}

	.demo-list-del-price {
		font-size: 22rpx;
		color: #9b9b9b;
		margin-top: 13rpx;
		margin-left: 5rpx;
		position: relative;
	}

	.demo-list-del-price:after {
		content: "";
		position: absolute;
		top: 15rpx;
		left: 0;
		width: 100%;
		height: 2rpx;
		background: #9b9b9b;
	}

	.more {
		width: 32rpx;
		height: 18rpx;
	}

	.shop {
		text-align: left;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.index {
		.banner {
			height: 180rpx;
			width: 100%;
		}

		.business {
			margin: 34rpx 0 34rpx 38rpx;
			font-size: 40rpx;
			font-weight: 500;
		}

		.footer {
			display: flex;

			.left {
				margin: 0 22rpx;

				image {
					height: 170rpx;
					width: 180rpx;
				}
			}

			.right {
				width: 70%;
				font-size: 24rpx;
				color: #666;

				.titles {
					color: #333;
					font-size: 32rpx;
					font-weight: 600;
				}

				.center {
					margin: 18rpx 0;
				}

				.parity {
					width: 120rpx;
					height: 36rpx;
					line-height: 36rpx;
					padding: 0 12rpx;
				}

				.full-reduction {
					margin: 18rpx 0;

					.full {
						display: inline-block;
						width: 24rpx;
						height: 24rpx;
						line-height: 24rpx;
						text-align: center;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
						background-color: #fc4f4b;
						border-radius: 2rpx;
						margin-right: 10rpx;
					}
				}

				.discount {
					.fracture {
						display: inline-block;
						width: 24rpx;
						height: 24rpx;
						line-height: 24rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
						background-color: #ff9118;
						border-radius: 2rpx;
						margin-right: 11rpx;
					}
				}
			}
		}

		.info {
			.scroll-content {
				display: flex;
				white-space: nowrap;

				.info-box {
					margin: 0 16rpx;
					display: inline-block;

					.info-img {
						width: 180rpx;
						height: 180rpx;
					}

					.weight {
						font-size: 26rpx;
						color: #555;
						margin: 23rpx 0 16rpx 0;
					}

					.num {
						color: #999;
						font-size: 20rpx;
						margin-bottom: 19rpx;
					}

					.price {
						.new {
							font-size: 24rpx;
							color: #fc4f4b;
							margin-right: 13rpx;
						}

						.once {
							color: #999;
							font-size: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
