<template>
	<view class="container">
		<!-- 轮播图开始 -->
		<view class="banner">
			<swiper :indicator-dots="indicatorDots" indicator-active-color="#48BC5B" :indicator-color="indicatorColor" :autoplay="autoplay"
			 :interval="interval" :duration="duration" :circular="circular">
				<block v-for="(item, index) in imgUrls" :key="index">
					<swiper-item @click="goindexSwiperBanner">
						<image :src="item" class="slide-image" mode="widthFix" bindtap="toPath" :data-id="item.id" />
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 轮播图结束 -->

		<!-- 消息以及定位开始 -->
		<view class="news">
			<!-- 定位 -->
			<!-- <view class="location" @click="goIndexLocation"> -->
				<!-- 定位图片 -->
				<!-- <image class="location-img" src="/static/images/posi.png"></image> -->
				<!-- 地区内容 -->
				<!-- <view class="location-box">
					<view>合肥市</view>
				</view> -->
				<!-- 下拉小箭头 -->
				<!-- <image class="drop-down-img" src="/static/images/down-arrow.png"></image>
			</view> -->
			<!-- 信息 -->
			<view class="location-info" @click="goIndexNews">
				<image src="/static/images/dialog.png"></image>
			</view>
		</view>
		<!-- 消息以及定位结束 -->

		<!-- 导航栏开始 -->
		<view class="class">
			<view @click="goGreenHealth">
				<image src="/static/images/lv.png" />
				<text>绿色健康</text>
			</view>
			<view @click="goExpect">
				<image src="/static/images/chao.png" />
				<text>超市便利</text>
			</view>
			<view @click="goExpect">
				<image src="/static/images/zhu.png" />
				<text>电商助农</text>
			</view>
			<view @click="goExpect">
				<image src="/static/images/xiang.png" />
				<text>乐享周末</text>
			</view>
		</view>
		<!-- 导航栏结束 -->

		<!-- 健康专区开始 -->
		<view class="block">
			<view class="title">
				<image class="title-img" src="/static/images/health.png" />
				<view class="shop-text green-healthy">绿色健康推荐</view>
			</view>

			<!-- 健康专区数据区域 -->
			<view class="healthy">
				<view class="healthy-list" @click="goVipGoodsDetailsInfo">
					<!-- 左边 -->
					<view class="list-left">
						<image src="/static/images/good.jpg"></image>
					</view>
					<!-- 右边 -->
					<view class="list-right">
						<!-- 头部区域 -->
						<view class="right-title">年卡会员套餐</view>
						<!-- 次数 -->
						<view class="right-num">
							<text class="number">每月共4次</text>
							<text class="common">共48次配送</text>
						</view>
						<!-- 搭配 -->
						<view class="collocation">
							<text class="add">蔬菜+油+调味料</text>
							<text class="voluntarily">自行搭配</text>
						</view>
						<!-- 价格以及会员 -->
						<view class="price-member">
							<!-- 价格 -->
							<view class="price-box">
								<!-- 最新价格 -->
								<view class="new-price">
									<!-- 人民币符号 -->
									<text class="rmb">¥</text>
									<!-- 金额 -->
									<text class="price-num">29999</text>
								</view>
								<!-- 划去的价格 -->
								<text class="delimit">¥39999</text>
							</view>
							<view class="list-footer">
								<!-- 赠送会员 -->
								<view class="give" @click.stop="goVipGive">赠送好友</view>
								<!-- 购买 -->
								<view class="purchase" @click.stop="goVipGoodsDetailsInfo">购买</view>
							</view>
						</view>
					</view>
				</view>
				<view class="healthy-list" @click="goVipGoodsDetailsInfo">
					<!-- 左边 -->
					<view class="list-left">
						<image src="/static/images/good.jpg"></image>
					</view>
					<!-- 右边 -->
					<view class="list-right">
						<!-- 头部区域 -->
						<view class="right-title">半年卡会员套餐</view>
						<!-- 次数 -->
						<view class="right-num">
							<text class="number">每月共4次</text>
							<text class="common">共48次配送</text>
						</view>
						<!-- 搭配 -->
						<view class="collocation">
							<text class="add">蔬菜+油+调味料</text>
							<text class="voluntarily">自行搭配</text>
						</view>
						<!-- 价格以及会员 -->
						<view class="price-member">
							<!-- 价格 -->
							<view class="price-box">
								<!-- 最新价格 -->
								<view class="new-price">
									<!-- 人民币符号 -->
									<text class="rmb">¥</text>
									<!-- 金额 -->
									<text class="price-num">19999</text>
								</view>
								<!-- 划去的价格 -->
								<text class="delimit">¥29999</text>
							</view>
							<view class="list-footer">
								<!-- 赠送会员 -->
								<view class="give" @click.stop="goVipGive">赠送好友</view>
								<!-- 购买 -->
								<view class="purchase" @click.stop="goVipGoodsDetailsInfo">购买</view>
							</view>
						</view>
					</view>
				</view>
				<view class="healthy-list" @click="goVipGoodsDetailsInfo">
					<!-- 左边 -->
					<view class="list-left">
						<image src="/static/images/good.jpg"></image>
					</view>
					<!-- 右边 -->
					<view class="list-right">
						<!-- 头部区域 -->
						<view class="right-title">季卡会员套餐</view>
						<!-- 次数 -->
						<view class="right-num">
							<text class="number">每月共4次</text>
							<text class="common">共48次配送</text>
						</view>
						<!-- 搭配 -->
						<view class="collocation">
							<text class="add">蔬菜+油+调味料</text>
							<text class="voluntarily">自行搭配</text>
						</view>
						<!-- 价格以及会员 -->
						<view class="price-member">
							<!-- 价格 -->
							<view class="price-box">
								<!-- 最新价格 -->
								<view class="new-price">
									<!-- 人民币符号 -->
									<text class="rmb">¥</text>
									<!-- 金额 -->
									<text class="price-num">9999</text>
								</view>
								<!-- 划去的价格 -->
								<text class="delimit">¥19999</text>
							</view>
							<view class="list-footer">
								<!-- 赠送会员 -->
								<view class="give" @click.stop="goVipGive">赠送好友</view>
								<!-- 购买 -->
								<view class="purchase" @click.stop="goVipGoodsDetailsInfo">购买</view>
							</view>
						</view>
					</view>
				</view>
				<view class="healthy-list" @click="goVipGoodsDetailsInfo">
					<!-- 左边 -->
					<view class="list-left">
						<image src="/static/images/good.jpg"></image>
					</view>
					<!-- 右边 -->
					<view class="list-right">
						<!-- 头部区域 -->
						<view class="right-title">月卡会员套餐</view>
						<!-- 次数 -->
						<view class="right-num">
							<text class="number">每月共4次</text>
							<text class="common">共48次配送</text>
						</view>
						<!-- 搭配 -->
						<view class="collocation">
							<text class="add">蔬菜+油+调味料</text>
							<text class="voluntarily">自行搭配</text>
						</view>
						<!-- 价格以及会员 -->
						<view class="price-member">
							<!-- 价格 -->
							<view class="price-box">
								<!-- 最新价格 -->
								<view class="new-price">
									<!-- 人民币符号 -->
									<text class="rmb">¥</text>
									<!-- 金额 -->
									<text class="price-num">4999</text>
								</view>
								<!-- 划去的价格 -->
								<text class="delimit">¥9999</text>
							</view>
							<view class="list-footer">
								<!-- 赠送会员 -->
								<view class="give" @click.stop="goVipGive">赠送好友</view>
								<!-- 购买 -->
								<view class="purchase" @click.stop="goVipGoodsDetailsInfo">购买</view>
							</view>
						</view>
					</view>
				</view>
				<view class="healthy-list" @click="goVipGoodsDetailsInfo">
					<!-- 左边 -->
					<view class="list-left">
						<image src="/static/images/good.jpg"></image>
					</view>
					<!-- 右边 -->
					<view class="list-right">
						<!-- 头部区域 -->
						<view class="right-title">活动卡卡会员套餐</view>
						<!-- 次数 -->
						<view class="right-num">
							<text class="number">每月共4次</text>
							<text class="common">共48次配送</text>
						</view>
						<!-- 搭配 -->
						<view class="collocation">
							<text class="add">蔬菜+油+调味料</text>
							<text class="voluntarily">自行搭配</text>
						</view>
						<!-- 价格以及会员 -->
						<view class="price-member">
							<!-- 价格 -->
							<view class="price-box">
								<!-- 最新价格 -->
								<view class="new-price">
									<!-- 人民币符号 -->
									<text class="rmb">¥</text>
									<!-- 金额 -->
									<text class="price-num">1999</text>
								</view>
								<!-- 划去的价格 -->
								<text class="delimit">¥2999</text>
							</view>
							<view class="list-footer">
								<!-- 赠送会员 -->
								<view class="give" @click.stop="goVipGive">赠送好友</view>
								<!-- 购买 -->
								<view class="purchase" @click.stop="goVipGoodsDetailsInfo">购买</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="footer-end" @click="goGreenHealth">
				<text>查看更多</text>
				<image src="/static/images/arrow-right.png" class="more" />
			</view>
		</view>
		<!-- 健康专区结束 -->

		<!-- banner 区域开始 -->
		<view class="index-banner" @click="goIndexBanner">
			<image src="/static/images/index-banner.png"></image>
		</view>
		<!-- banner 区域结束 -->

		<!-- 超市便利开始 -->
		<view class="block shop">
			<view class="title">
				<image src="/static/images/shop.png" />
				<view class="shop-text">超市便利</view>
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
									<view class="info-box">
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
									<view class="info-box">
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
									<view class="info-box">
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
				imgUrls: ["/static/images/banner.jpg", "/static/images/banner.jpg", "/static/images/banner.jpg"],
				// 控制指示点
				indicatorDots: true,
				// 是否自动轮播
				autoplay: true,
				// 自动切换的时间
				interval: 3000,
				// 是否衔接滑动
				circular: true,
				// 滑动动画时长
				duration: 2000,
				// 指示点的颜色
				indicatorColor: '#ffffff',
				bannerData: null,
				// index: 0,
				// 需要渲染的省市区
				// array: ['合肥市'],
				// 控制默认渲染的城市的选择与隐藏
				isFlag: true,
				// 用户中心纬度
				latitude: null,
				// 用户中心经度,
				longitude: null,
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
		onLoad() {
			this.getList()
			// 显示弹框 获取用户位置信息
			this.getLocation()
		},
		methods: {
			getLocation() {
				uni.showModal({
						content: '获取您当前的位置',
						success: res => {
								if (res.confirm) {
										console.log('用户点击确定');
										this.getLocationInfo()
								} else if (res.cancel) {
										console.log('用户点击取消');
								}
						}
				});
			},
			// 获取当前的地理位置
			getLocationInfo() {
				//2. 获取地理位置
				uni.getLocation({
					type: "wgs84",
					success: res => {
						console.log(res)
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						console.log(this.latitude)
						console.log(this.longitude)
						let latitude, longitude;
						latitude = res.latitude.toString();
						longitude = res.longitude.toString();
						// uni.request({
						// 	header: {
						// 		"Content-Type": "application/text"
						// 	},
						// 	url:
						// 		"http://apis.map.qq.com/ws/geocoder/v1/?location=" +
						// 		latitude +
						// 		"," +
						// 		longitude +
						// 		"&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35",
						// 	success(re) {
						// 		console.log("中文位置");
						// 		console.log(re);
						// 		if (re.statusCode === 200) {
						// 			console.log("获取中文街道地理位置成功");
						// 		} else {
						// 			console.log("获取信息失败，请重试！");
						// 		}
						// 	}
						// });
					},
					fail: res => {
						console.log(res);
						if (res.errCode == 2) {
							uni.showToast({
								title: "请您打开GPS",
								duration: 3000,
								icon: "none"
							});
						}
					}
				});
			},
			// 去绿色健康页面
			goGreenHealth() {
				uni.navigateTo({
					url: '/pages/greenHealth/greenHealth'
				})
			},
			// 去定位页面
			goIndexLocation() {
				uni.navigateTo({
					url: '/pages/indexLocation/indexLocation'
				})
			},
			// 去消息页面
			goIndexNews() {
				uni.navigateTo({
					url: '/pages/indexNews/indexNews'
				})
			},
			// 去首页banner的详情
			goIndexBanner() {
				uni.navigateTo({
					url: '/pages/indexBanner/indexBanner'
				})
			},
			// 去首页轮播图的详情
			goindexSwiperBanner() {
				uni.navigateTo({
					url: '/pages/indexSwiperBanner/indexSwiperBanner'
				})
			},
			getList() {
				// uni.request({
				// 	url: "http://192.168.1.166:8086/WNC/banner/getBanner",
				// 	data: {},
				// 	header: {
				// 		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
				// 	},
				// 	success: res => {
				// 		console.log(res)
				// 	}
				// });
			},
			// 去正在开发页面
			goExpect() {
				uni.navigateTo({
					url: '/pages/expect/expect'
				})
			},
			// 去会员套餐页面详情
			goVipGoodsDetailsInfo() {
				uni.navigateTo({
					url: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo'
				})
			},
			// 去会员套餐详情
			goVipGoodsDetailsInfo() {
				uni.navigateTo({
					url: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo'
				})
			},
			// 去会员赠送页面
			goVipGive() {
				uni.navigateTo({
					url: '/pages/vipGive/vipGive'
				})
			}
		}
	};
</script>

<style>
	page {
		background-color: #fff;
	}
</style>

<style lang="less" scoped>
	// 消息以及定位开始
	.news {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		position: absolute;
		top: 0;
		background-color: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;

		// 定位
		.location {
			margin-left: 20rpx;
			display: flex;
			align-items: center;
			width: 23%;
			height: 60rpx;
			background-color: rgba(0, 0, 0, .3);
			border-radius: 44rpx;

			// 定位图片
			.location-img {
				margin-left: 8rpx;
				margin-right: 10rpx;
				width: 24rpx;
				height: 28rpx;
				vertical-align: middle;
			}

			// 地区内容
			.location-box {
				// width: 100%;
				min-width: 100rpx;
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #fff;

				// 首先显示在页面上的地区信息
				.array-text {
					margin-right: 8rpx;
				}

				// 需要渲染的真正的省市区区域
				.box-list {
					display: flex;

					>view {
						margin-right: 8rpx;
					}
				}
			}

			// 下拉小箭头
			.drop-down-img {
				width: 18rpx;
				height: 10rpx;
			}
		}

		// 信息
		.location-info {
			margin-right: 30rpx;
			position: absolute;
			right: 0;

			image {
				width: 44rpx;
				height: 44rpx;
				vertical-align: middle;
			}
		}
	}

	// 消息以及定位结束

	// 绿色健康数据区域开始
	.healthy {
		text-align: left;
		font-family: Microsoft YaHei;
		font-weight: 400;

		.healthy-list {
			display: flex;
			margin-top: 20rpx;
			border-bottom: 1rpx solid #F0F0F0;

			// 左边
			.list-left {
				image {
					width: 200rpx;
					height: 200rpx;
					margin-right: 24rpx;
				}
			}

			// 右边
			.list-right {
				width: 100%;

				// 头部区域
				.right-title {
					font-size: 32rpx;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}

				// 次数
				.right-num {
					font-size: 26rpx;
					color: #666;
					margin: 16rpx 0 20rpx 0;

					.number {
						margin-right: 16rpx;
					}
				}

				// 搭配
				.collocation {
					font-size: 26rpx;
					color: #666;
					margin-bottom: 40rpx;
				}

				// 价格以及会员
				.price-member {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					margin-bottom: 30rpx;

					.price-box {
						display: flex;
						align-items: center;

						// 最新价格
						.new-price {
							font-size: 32rpx;
							color: #FF3B39;
							font-weight: bold;
							// 人民币符号
							// 金额
						}

						// 划去的价格
						.delimit {
							text-decoration: line-through;
							font-size: 22rpx;
							color: #666;
							font-weight: bold;
							margin-left: 20rpx;
						}
					}

					.list-footer {
						display: flex;

						// 赠送会员
						.give {
							width: 120rpx;
							height: 48rpx;
							line-height: 48rpx;
							border-radius: 10rpx;
							border: 1rpx solid rgba(39, 149, 36, 1);
							text-align: center;
							font-size: 26rpx;
							color: #279524;
							margin-right: 15rpx;
						}

						// 购买
						.purchase {
							width: 80rpx;
							height: 48rpx;
							line-height: 48rpx;
							text-align: center;
							border-radius: 10rpx;
							background-color: #279524;
							font-size: 26rpx;
							color: #fff;
						}
					}
				}
			}
		}
	}

	// 绿色健康数据区域结束

	// index-banner 区域开始
	.index-banner {
		margin: 30rpx 0;

		image {
			height: 180rpx;
			width: 100%;
		}
	}

	// index-banner 区域结束
	// 查看更多
	.footer-end {
		height: 50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		border-bottom: 1rpx solid #F0F0F0;

		// margin-bottom: 44rpx;
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

	.class view:nth-child(4) image {
		width: 100rpx;
		height: 95rpx;
	}

	.class view:nth-child(2) image {
		width: 85rpx;
		height: 110rpx;
	}

	.class view:nth-child(1) image {
		width: 85rpx;
		height: 100rpx;
	}

	.class text {
		white-space: nowrap;
		font-size: 24rpx;
		color: #555;
		margin-top: 23rpx;
	}

	.block {
		padding: 0 25rpx;
		text-align: center;
	}

	.block .title {
		text-align: center;
		position: relative;
		margin-top: 30rpx;
	}

	.green-healthy {
		left: 288rpx !important;
	}

	.title-img {
		width: 324rpx !important;
		height: 120rpx !important;
	}

	.shop-text {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		position: absolute;
		top: 44rpx;
		left: 304rpx;
	}

	.block .title image {
		width: 263rpx;
		height: 121rpx;
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
			margin-top: 40rpx;

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
					margin: 14rpx 0;
				}

				.parity {
					width: 120rpx;
					height: 36rpx;
					line-height: 36rpx;
					text-align: center;
					border: 2rpx solid rgba(239, 239, 239, 1);
					border-radius: 19rpx 18rpx 18rpx 0rpx;
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
					margin-right: 16rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
					width: 200rpx;
					height: 330rpx;
					margin-top: 30rpx;
					border: 1rpx solid rgba(241, 241, 241, .6);
					display: inline-block;
					background: rgba(255, 255, 255, 1);
					border-radius: 10rpx;

					.info-img {
						width: 180rpx;
						height: 180rpx;
					}

					.weight {
						font-size: 26rpx;
						color: #555;
						margin-bottom: 16rpx;
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
