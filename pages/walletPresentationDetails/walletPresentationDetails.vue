<template>
  <!-- 提现明页面 ming -->
  <view class="presentation-details">
		<!-- 头部区域 -->
		<view class="details-title">
			<!-- 日期选择 -->
			<view class="title-month">
				<picker class="month-data" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view>{{date}}</view>
				</picker>
			</view>
			<!-- 下拉小箭头 -->
			<image src="/static/images/down-arrow.png"></image>
		</view>
		<!-- 提现信息区域 -->
		<view class="list">
			<view class="list-item" @click="goWalletSuccessfulWithdrawals">
				<!-- 左边 -->
				<view class="item-left">
					<!-- 银行卡 -->
					<view class="left-card">提现到银行卡</view>
					<!-- 日期 -->
					<view class="left-data">2019-10-15</view>
				</view>
				<!-- 右边 -->
				<view class="item-right">
					<!-- 右边内容 -->
					<view class="right-content">
						<!-- 提现金额 -->
						<view class="content-price">-100.00</view>
						<!-- 余额 -->
						<view class="content-balance">80.00</view>
					</view>
					<!-- 右箭头图片 -->
					<view class="content-img">
						<image src="/static/images/arrow-right.png"></image>
					</view>
				</view>
			</view>
			<view class="list-item" @click="goWalletSuccessfulWithdrawals">
				<!-- 左边 -->
				<view class="item-left">
					<!-- 银行卡 -->
					<view class="left-card">提现到银行卡</view>
					<!-- 日期 -->
					<view class="left-data">2019-10-15</view>
				</view>
				<!-- 右边 -->
				<view class="item-right">
					<!-- 右边内容 -->
					<view class="right-content">
						<!-- 提现金额 -->
						<view class="content-price">-100.00</view>
						<!-- 余额 -->
						<view class="content-balance">80.00</view>
					</view>
					<!-- 右箭头图片 -->
					<view class="content-img">
						<image src="/static/images/arrow-right.png"></image>
					</view>
				</view>
			</view>
			<view class="list-item" @click="goWalletSuccessfulWithdrawals">
				<!-- 左边 -->
				<view class="item-left">
					<!-- 银行卡 -->
					<view class="left-card">提现到银行卡</view>
					<!-- 日期 -->
					<view class="left-data">2019-10-15</view>
				</view>
				<!-- 右边 -->
				<view class="item-right">
					<!-- 右边内容 -->
					<view class="right-content">
						<!-- 提现金额 -->
						<view class="content-price">-100.00</view>
						<!-- 余额 -->
						<view class="content-balance">80.00</view>
					</view>
					<!-- 右箭头图片 -->
					<view class="content-img">
						<image src="/static/images/arrow-right.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data() {
		const currentDate = this.getDate({
			format: true
		})
    return {
			date: '本月',
		};
  },
	methods: {
		// 当选择的日期发生改变的时候 改变页面的日期
		bindDateChange(e) {
			this.date = e.target.value
		},
		// 日期的格式
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;;
			return `${year}-${month}`;
		},
		// 去提现进度页面
		goWalletSuccessfulWithdrawals() {
			uni.navigateTo({
				url: '/pages/walletSuccessfulWithdrawals/walletSuccessfulWithdrawals'
			});
		}
	},
	computed: {
		// 日期的开始范围
		startDate() {
			return this.getDate('start');
		},
		// 日期的结束范围
		endDate() {
			return this.getDate('end');
		}
	}
}
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.presentation-details {
	// 头部区域
	.details-title {
		height: 54rpx;
		width: 230rpx;
		text-align: center;
		line-height: 54rpx;
		background:rgba(255,255,255,1);
		border: 1rpx solid rgba(237,237,237,1);
		border-radius: 27rpx;
		display: flex;
		align-items: center;
		margin: 30rpx;
		// 日期选择
		.title-month {
			margin: 0 18rpx 0 25rpx;
			font-size: 26rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color:rgba(27,27,27,1);
			.month-data {
				width: 146rpx;
			}
		}
		// 下拉小箭头
		> image {
			width: 16rpx;
			height: 12rpx;
			vertical-align: middle;
		}
	}
	// 提现信息区域
	.list {
		// padding: 0 30rpx 0 33rpx;
		.list-item {
			padding: 0 30rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: Microsoft YaHei;
			font-weight: 400;
			// margin: 28rpx 0 58rpx 0;
			height: 121rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid rgba(238,238,238,1);
			// 左边
			.item-left {
				// 银行卡
				.left-card {
					font-size: 30rpx;
					color:rgba(51,51,51,1);
				}
				// 日期
				.left-data {
					font-size: 24rpx;
					color:rgba(102,102,102,1);
					margin-top: 10rpx;
				}
			}
			// 右边
			.item-right {
				display: flex;
				align-items: center;
				// 右边内容
				.right-content {
					// 提现金额
					text-align: right;
					.content-price {
						font-size: 30rpx;
						color:rgba(51,51,51,1);
					}
					// 余额
					.content-balance {
						font-size: 24rpx;
						color:rgba(102,102,102,1);
						margin-top: 10rpx;
					}
				}
				// 右箭头图片
				.content-img {
					width: 16rpx;
					height: 26rpx;
					margin-left: 20rpx;
					// margin-bottom: 10rpx;
				}
			}
		}
	}
}
</style>