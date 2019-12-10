<template>
  <!-- 我的银行卡页面 ming -->
  <view class="my-bank-card">
		<!-- 头部文字 -->
    <view class="card-title">
      我的卡
      <text>共两张</text>
    </view>
		<!-- 我的银行卡 第一张银行卡-->
		<view class="my-card">
			<!-- 银卡卡图片与文字 -->
			<view class="card-box">
				<!-- 图片 -->
				<view class="box-img">
					<image src="../../static/images/my-bank-card-2.png"></image>
				</view>
				<!-- 文字 -->
				<view class="box-content">
					<view class="content-title">
						<view class="one">农业银行</view>
						<view class="two">储蓄卡</view>
					</view>
					<view class="content-text">****1234</view>
				</view>
			</view>
			<!-- 第二张银行卡 -->
			<view class="card-box next">
				<!-- 图片 -->
				<view class="box-img">
					<image src="../../static/images/my-bank-card-1.png"></image>
				</view>
				<!-- 文字 -->
				<view class="box-content">
					<view class="content-title">
						<view class="one">建设银行</view>
						<view class="two">储蓄卡</view>
					</view>
					<view class="content-text">****1234</view>
				</view>
			</view>
		</view>
		<!-- 添加银行卡区域 -->
		<view class="footer">
			<view class="withdrawals-account">
				<view class="account-box" @click="goWalletBindingCard">
					<view class="box">
						<view class="box-img">
							<image src="/static/images/jiahao.png"></image>
						</view>
						<view>添加银行卡</view>
					</view>
				</view>
			</view>
		</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
		// 去绑定银行卡页面
		goWalletBindingCard() {
			uni.navigateTo({
        url: '/pages/walletBindingCard/walletBindingCard'
      })
		}
	}
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.my-bank-card {
	padding: 30rpx;
	// 头部文字
  .card-title {
    font-size: 36rpx;
    font-family: Microsoft YaHei;
    font-weight: bold;
		color: rgba(51, 51, 51, 1);
		margin-bottom: 20rpx;
    > text {
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-left: 16rpx;
    }
	}
	.my-card {
		// 银行卡图片与文字
		.card-box {
			position: absolute;
			width: 690rpx;
			height: 310rpx;
			border-radius: 10rpx;
			// 图片
			.box-img {
				width: 690rpx;
				height: 310rpx;
				border-radius: 10rpx;
			}
			// 文字
			.box-content {
				width: 560rpx;
				position: absolute;
				top: 28rpx;
				right: 0;
				display: flex;
				justify-content: space-between;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color:rgba(255,255,255,1);
				.content-title {
					.one {
						font-size: 34rpx;
					}
					.two {
						font-size: 24rpx;
						font-weight: 400;
						margin-top: 10rpx;
					}
				}
				.content-text {
					margin: 23rpx 37rpx 0 0;
				}
			}
		}
	}
	.next {
		top: 240rpx;
	}
	.footer {
		margin-top: 460rpx;
	}
	.withdrawals-account {
		// margin-top: 600rpx;
		position: absolute;
		top: 580rpx;
		width: 690rpx;
		height: 310rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		.account-box {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 348rpx;
			height: 93rpx;
			background: rgba(72, 188, 91, 1);
			border-radius: 4rpx;
			.box {
				display: flex;
				align-items: center;
				margin: 26rpx 0 0 62rpx;
				font-size: 34rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color:rgba(255,255,255,1);
				.box-img {
					width: 41rpx;
					height: 41rpx;
					background-color: #fff;
					border-radius: 50%;
					margin-right: 11rpx;
					vertical-align: middle;
				}
			}
		}
	}
}
</style>