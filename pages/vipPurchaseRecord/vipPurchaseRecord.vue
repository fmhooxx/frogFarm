<template>
<!-- from ming 赠送记录页面 -->
  <view class="give-record">
    <view class="record">
			<!-- 左边 -->
      <view class="record-left">
				<view class="left-box">
					<!-- 左边的图片以及文字 -->
					<image src="/static/images/year-card-bgi.png"></image>
					<view class="box-text">
						<view class="one">年卡会员</view>
						<view class="two">¥<text>299</text></view>
					</view>
				</view>
				<!-- 号码等信息 -->
				<view class="record-info">
					<view class="tel">13755131224</view>
					<view>到期时间:<text>100天</text></view>
					<view>购买时间:<text>2019-10-10</text></view>
				</view>
			</view>
			<!-- 右边 -->
      <view class="record-right">
				<image src="/static/images/vip-error.png"></image>
				<view class="error">未完成</view>
			</view>
    </view>
    <view class="record">
			<!-- 左边 -->
      <view class="record-left">
				<view class="left-box">
					<!-- 左边的图片以及文字 -->
					<image src="/static/images/year-card-bgi.png"></image>
					<view class="box-text">
						<view class="one">年卡会员</view>
						<view class="two">¥<text>299</text></view>
					</view>
				</view>
				<!-- 号码等信息 -->
				<view class="record-info">
					<view class="tel">13755131224</view>
					<view>到期时间:<text>100天</text></view>
					<view>购买时间:<text>2019-10-10</text></view>
				</view>
			</view>
			<!-- 右边 -->
      <view class="record-right">
				<image src="/static/images/vip-success.png"></image>
				<view class="error">已完成</view>
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
.give-record {
  .record {
		height: 132rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		margin: 10rpx 0;
		background-color: #fff;
		.record-left {
			display: flex;
			.left-box {
				position: relative;
				margin: 17rpx 25rpx 16rpx 0;
				image {
					width: 160rpx;
					height: 100rpx;
				}
				.box-text {
					position: absolute;
					top: 16rpx;
					left: 34rpx;
					font-family: PingFang;
					font-weight: 400;
					color:rgba(255,255,255,1);
					.one {
						font-size: 24rpx;
					}
					.two {
						font-size: 20rpx;
						padding-left: 10rpx;
						text {
							font-size: 30rpx;
							margin-left: 10rpx;
						}
					}
				}
			}
			.record-info {
				font-size: 20rpx;
				font-family: PingFang;
				font-weight: 500;
				color:rgba(153,153,153,1);
				padding: 16rpx 0;
				.tel {
					font-size: 26rpx;
					color:rgba(51,51,51,1);
				}
				text {
					margin-left: 12rpx;
				}
			}
		}
		.record-right {
			position: relative;
			image {
				width: 26rpx;
				height: 65rpx;
				line-height: 65rpx;
				border-radius: 0rpx 0rpx 13rpx 13rpx;
			}
			.error {
				// 让文字垂直显示
				writing-mode: tb-rl;
				font-family:PingFang;
				font-weight: 500;
				color:rgba(255,255,255,1);
				font-size: 16rpx;
				position: absolute;
				top: 5rpx;
				left: 2rpx;
			}
		}
  }
}
</style>
