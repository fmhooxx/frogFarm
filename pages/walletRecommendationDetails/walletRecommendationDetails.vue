<template>
  <!-- 推荐明细页面 ming -->
  <view class="recommendation">
		<view class="recommendation-box">
			<!-- 左边盒子 -->
			<view class="box-left">
				<!-- 左边的头像 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字 -->
				<view class="left-content">
					<!-- 左边文字头部 -->
					<view class="content-title">
						<view class="one">小蛙123</view>
						<view class="two">直接好友</view>
					</view>
					<!-- 中间以及底部 -->
					<view class="content-member">购买会员</view>
					<view>2019-10-13</view>
				</view>
			</view>
			<!-- 右边盒子 -->
			<view class="box-right">
				<view class="right-price">5.00</view>
				<view class="right-text">已到账</view>
			</view>
		</view>
		<view class="recommendation-box">
			<!-- 左边盒子 -->
			<view class="box-left">
				<!-- 左边的头像 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字 -->
				<view class="left-content">
					<!-- 左边文字头部 -->
					<view class="content-title">
						<view class="one">小蛙123</view>
						<view class="two">直接好友</view>
					</view>
					<!-- 中间以及底部 -->
					<view class="content-member">购买会员</view>
					<view>2019-10-13</view>
				</view>
			</view>
			<!-- 右边盒子 -->
			<view class="box-right">
				<view class="right-price">5.00</view>
				<view class="right-text">待入账</view>
			</view>
		</view>
		<view class="recommendation-box">
			<!-- 左边盒子 -->
			<view class="box-left">
				<!-- 左边的头像 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字 -->
				<view class="left-content">
					<!-- 左边文字头部 -->
					<view class="content-title">
						<view class="one">小蛙123</view>
						<view class="two">直接好友</view>
					</view>
					<!-- 中间以及底部 -->
					<view class="content-member">购买会员</view>
					<view>2019-10-13</view>
				</view>
			</view>
			<!-- 右边盒子 -->
			<view class="box-right">
				<view class="right-price">5.00</view>
				<view class="right-text">已到账</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.recommendation {
	margin-top: 20rpx;
	.recommendation-box {
		padding: 0 40rpx 0 16rpx;
		height: 152rpx;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 2rpx solid #f3f3f3;
		// 左边盒子
		.box-left {
			display: flex;
			// 左边头像
			.left-img {
				width: 68rpx;
				height: 68rpx;
				margin-right: 28rpx;
				margin-top: 12rpx;
			}
			// 左边的文字
			.left-content {
				margin-top: 29rpx;
				font-size: 24rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color:rgba(102,102,102,1);
				// 左边文字头部
				.content-title {
					display: flex;
					align-items: center;
					.one {
						font-size: 30rpx;
						font-weight: 500;
						color:rgba(0,0,0,1);
					}
					.two {
						width: 90rpx;
						height: 24rpx;
						line-height: 24rpx;
						text-align: center;
						font-size: 20rpx;
						color:rgba(255,255,255,1);
						background:rgba(39,149,36,1);
						border-radius: 2rpx;
						margin-left: 15rpx;
					}
				}
				// 左边文字的中间以及底部
				.content-member {
					margin: 8rpx 0;
				}
			}
		}
		// 右边的盒子
		.box-right {
			margin-top: 31rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			.right-price {
				font-size: 36rpx;
				color:rgba(51,51,51,1);
			}
			.right-text {
				font-size: 24rpx;
				color:rgba(102,102,102,1);
				margin-top: 27rpx;
			}
		}
	}
}
</style>