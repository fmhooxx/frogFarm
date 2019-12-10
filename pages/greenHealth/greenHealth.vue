<template>
  <view class="green-health">
    <!-- 操作栏悬浮穿开始 -->
    <suspension></suspension>
    <!-- 操作栏悬浮穿结束 -->
    <!-- vip 区域 -->
    <view class="health-head">
			<!-- vip 的背景图片 -->
			<image src="/static/images/green-health-bgi.png"></image>
			<!-- 背景图片上面的内容 -->
			<view class="head-content">
				<!-- 左边 -->
				<view class="content-left">
					<!-- 左边的头部照片 -->
					<image src="/static/images/vip-header@2x.png"></image>
				</view>
				<!-- 右边 -->
				<view class="content-right">
					<!-- 右边的 vip 信息 -->
					<view class="vip-info">
						<!-- 用户昵称 -->
						<view class="user">小蛙</view>
						<!-- 年卡会员 -->
						<view class="member">年卡会员</view>
						<!-- 到期时间 -->
						<view class="timer">到期时间: 2019-12-01</view>
					</view>
					<!-- 管理 -->
					<view class="administration">管理</view>
				</view>
			</view>
		</view>
		<view class="title">会员套餐</view>
		<!-- 套餐区域 -->
		<view class="healthy">
			<view class="healthy-list w">
				<!-- 左边 -->
				<view class="list-left">
					<image src="/static/images/good.jpg"></image>
				</view>
				<!-- 右边 -->
				<view class="list-right">
					<!-- 头部区域 -->
					<view class="right-title">年卡全员套餐</view>
					<!-- 次数 -->
					<view class="right-num">
						<text class="number">品种多多，尽享优惠</text>
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
								<text class="price-num">299</text>
							</view>
							<!-- 划去的价格 -->
							<text class="delimit">¥19999</text>
						</view>
						<view class="list-footer">
							<!-- 赠送会员 -->
							<view class="give">赠送好友</view>
							<!-- 购买 -->
							<view class="purchase">购买</view>
						</view>
					</view>
				</view>
			</view>
			<view class="healthy-list w">
				<!-- 左边 -->
				<view class="list-left">
					<image src="/static/images/good.jpg"></image>
				</view>
				<!-- 右边 -->
				<view class="list-right">
					<!-- 头部区域 -->
					<view class="right-title">年卡全员套餐</view>
					<!-- 次数 -->
					<view class="right-num">
						<text class="number">品种多多，尽享优惠</text>
						
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
								<text class="price-num">299</text>
							</view>
							<!-- 划去的价格 -->
							<text class="delimit">¥19999</text>
						</view>
						<view class="list-footer">
							<!-- 赠送会员 -->
							<view class="give">赠送好友</view>
							<!-- 购买 -->
							<view class="purchase">购买</view>
						</view>
					</view>
				</view>
			</view>
			<view class="healthy-list w">
				<!-- 左边 -->
				<view class="list-left">
					<image src="/static/images/good.jpg"></image>
				</view>
				<!-- 右边 -->
				<view class="list-right">
					<!-- 头部区域 -->
					<view class="right-title">年卡全员套餐</view>
					<!-- 次数 -->
					<view class="right-num">
						<text class="number">品种多多，尽享优惠</text>
						
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
								<text class="price-num">299</text>
							</view>
							<!-- 划去的价格 -->
							<text class="delimit">¥19999</text>
						</view>
						<view class="list-footer">
							<!-- 赠送会员 -->
							<view class="give">赠送好友</view>
							<!-- 购买 -->
							<view class="purchase">购买</view>
						</view>
					</view>
				</view>
			</view>
			<view class="healthy-list w">
				<!-- 左边 -->
				<view class="list-left">
					<image src="/static/images/good.jpg"></image>
				</view>
				<!-- 右边 -->
				<view class="list-right">
					<!-- 头部区域 -->
					<view class="right-title">年卡全员套餐</view>
					<!-- 次数 -->
					<view class="right-num">
						<text class="number">品种多多，尽享优惠</text>
						
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
								<text class="price-num">299</text>
							</view>
							<!-- 划去的价格 -->
							<text class="delimit">¥19999</text>
						</view>
						<view class="list-footer">
							<!-- 赠送会员 -->
							<view class="give">赠送好友</view>
							<!-- 购买 -->
							<view class="purchase">购买</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="green-shop">绿色单品商品</view>
		<!-- 绿色单品商品区域 -->
		<view class="green-list">
			<view class="list-item"></view>
			<view class="list-item"></view>
		</view>

  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //点击会员管理
    toVipManage() {
      uni.navigateTo({
        url: "/pages/vipManage/vipManage"
      });
    },
    //点击商品图片跳转到商品详情页
    toGoodsDetailsInfo() {
      uni.navigateTo({
        url: "/pages/goodsDetailsInfo/goodsDetailsInfo"
      });
    },
    // 去年卡会员套餐商品详情页面
    toVipGoodsDetailsInfo() {
      uni.navigateTo({
        url: "/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo"
      });
    },
    // 去购物车
    goGreenCart() {
      uni.switchTab({
        url: "/pages/greenCart/greenCart"
      });
    },
    // 去查看更多页面
    goDetails() {
      uni.navigateTo({
        url: "/pages/details/details"
      });
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #000;
}
</style>

<style lang="less" scoped>
.green-health {
	padding: 10rpx;
	position: relative;
  // vip 区域
  .health-head {
		background-color: #fff;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		// vip 的背景图片
		> image {
			width: 730rpx;
			height: 215rpx;
			vertical-align: middle;
		}
		// 背景图片上面的内容
		.head-content {
			display: flex;
			position: absolute;
			top: 65rpx;
			left: 40rpx;
			width: 100%;
			// 左边
			.content-left {
				margin-right: 26rpx;
				// 左边的头部照片
				> image {
					width: 102rpx;
					height: 102rpx;
				}
			}
			// 右边
			.content-right {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: PingFang SC;
				font-weight: bold;
				color: #fff;
				width: 70%;
				// 右边的 vip 信息
				.vip-info {
					// 用户昵称
					.user {
						font-size: 32rpx;
					}
					// 年卡会员
					.member {
						width: 120rpx;
						height: 34rpx;
						line-height: 34rpx;
						text-align: center;
						margin: 10rpx 0;
						font-size: 24rpx;
						color: #FEC825;
						border: 2rpx solid rgba(254,200,37,1);
						border-radius: 17rpx;
					}
					// 到期时间
					.timer {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
					}
				}
				// 管理
				.administration {
					width: 126rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color:rgba(255,255,255,1);
					background:rgba(221,178,48,1);
					box-shadow: 0rpx 0rpx 4r0px 0rpx rgba(186,159,77,0.2);
					border-radius: 25rpx;
				}
			}
		}
	}
	.title {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color:rgba(51,51,51,1);
		margin: 30rpx 0 17rpx 30rpx;
	}
	// 绿色健康数据区域开始
	.healthy {
		text-align: left;
		font-family: Microsoft YaHei;
		font-weight: 400;
		width: 730rpx;
		border-radius: 20rpx;
		.w {
			padding: 10rpx;
		}
		.healthy-list {
			display: flex;
			border-bottom: 1rpx solid #F0F0F0;
			background-color: #fff;
			// padding: 10rpx;
			// border-radius: 20rpx;
			// 左边
			.list-left {
				image {
					width: 200rpx;
					height: 200rpx;
					margin-right: 24rpx;
					border-radius: 20rpx 0 0 0;
				}
			}
			// 右边
			.list-right {
				width: 100%;
				// 头部区域
				.right-title {
					font-size: 32rpx;
					font-weight: bold;
					color:rgba(51,51,51,1);
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
				// 价格以及会员
				.price-member {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					margin-bottom: 30rpx;
					margin-top: 52rpx;
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
							border: 1rpx solid rgba(39,149,36,1);
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
	.green-shop {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		margin: 30rpx 0 30rpx 27rpx;
		color: #333;
	}
	// 绿色单品商品区域
	.green-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 10rpx;
		:nth-child(odd) {
			margin-right: 10rpx;
		}
		.list-item {
			width: 350rpx;
			height: 430rpx;
			background:rgba(255,255,255,1);
			border-radius: 10rpx;
		}
	}
}
</style>