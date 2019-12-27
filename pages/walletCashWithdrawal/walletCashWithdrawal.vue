<template>
<!-- 提现页面 form ming -->
  <view class="cash">
		<!-- 未绑定银行卡 -->
    <view v-if="true" class="bank-card" @click="goWalletBindingCard">
			<image src="/static/images/jiahao.png"></image>
			<view class="card-text">绑定银行卡</view>
		</view>
		<!-- 绑定银行卡 -->
		<view v-if="true" class="card" @click="goWalletChoiceBankCard">
			<View class="card-left">
				<!-- <view class="card-img">
					<image src="/static/images/bank-card.png"></image>
				</view> -->
				<view class="card-text">
					<view class="card-title">农业银行</view>
					<view class="num">尾号1234 储蓄卡</view>
				</view>
			</View>
			<View class="card-right">
				<image src="/static/images/arrow-right.png"></image>
			</View>
		</view>
		<view class="footer">
			<View class="tixian">提现金额</View>
			<View class="money">
				<view>¥</view>
				<input placeholder="输入提现金额" v-model="money" focus placeholder-class="title" type="number" />
			</View>
			<View class="text">可提现金额0.00</View>
		</view>
		<View class="btn" :class="{ active: isActive }" @click="getAccount">申请提现</View>
  </view>
</template>

<script>
export default {
  data() {
    return {
			// 输入的金额内容
			money: '',
			// 提现返回的状态
			status: ''
		};
	},
	onLoad() {
		this.getAcc()
	},
  methods: {
		// 获取银行卡信息
		getAcc() {
			uni.request({
				url: 'http://192.168.1.155:8086/WNC/wallet/getAcc',
				data: {
					user_id: 1
				},
				header: {
					'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
				},
				succeee(res) {
					console.log(res)
				}
			})
		},
		// 去绑定银行卡页面
		goWalletBindingCard() {
			uni.navigateTo({
        url: '/pages/walletBindingCard/walletBindingCard'
      })
		},
		// 去选择银行卡页面
		goWalletChoiceBankCard() {
			uni.navigateTo({
        url: '/pages/walletChoiceBankCard/walletChoiceBankCard'
      })
		},
		// 申请提现接口
		getAccount() {
			if (this.money !== '' && this.money >= 0) {
				uni.request({
					url: 'http://192.168.1.155:8086/WNC/wallet/getAccount',
					data: {
						wallet_id: 1,
						acc_id: 1,
						// 提现金额
						money: this.money,
						user_id: 1
					},
					header: {
						'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
					},
					succeee(res) {
						console.log(res)
						this.status = res.data
						if (this.status == 200) {
							uni.showToast({
									title: '提现成功',
									duration: 2000,
									icon: 'none'
							})
						} else if (this.status == 500) {
							uni.showToast({
									title: '钱包余额不足',
									duration: 2000,
									icon: 'none'
							})
						} else {
							uni.showToast({
								title: '银行卡号或余额不能为空',
								duration: 2000,
								icon: 'none'
							})
						}
					}
				})
			} else {
				uni.showToast({
						title: '请输入提现金额',
						duration: 2000,
						icon: 'none'
				});
			}
		}
	},
	computed: {
		isActive() {
			if (this.money === '') {
				return false
			}
			return true
		}
	},
};
</script>

<style lang="less" scoped>
// 选中的样式
.active {
	color: #fff !important;
	background-color: #48BC5B !important;
}
.cash {
	// 未绑定银行卡样式
  .bank-card {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120rpx;
		line-height: 120rpx;
		margin: 20rpx 0;
		image {
			width: 30rpx;
			height: 30rpx;
		}
		.card-text {
			font-size: 30rpx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color:rgba(72,188,91,1);
			margin-left: 10rpx;
		}
	}
	// 绑定银行卡样式
	.card {
		background-color: #fff;
		display: flex;
		height: 120rpx;
		justify-content: space-between;
		align-items: center;
		// margin: 20rpx 0 60rpx 0;
		margin: 20rpx 0;
		padding: 0 30rpx;
		box-sizing: border-box;
		image {
			width: 100%;
			height: 100%;
		}
		.card-left {
			display: flex;
			.card-img {
				width: 80rpx;
				height: 80rpx;
				margin-right: 30rpx;
			}
			.card-text {
				font-size: 32rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				.card-title {
					color:rgba(51,51,51,1);
				}
				.num {
					color:rgba(102,102,102,1);
				}
			}
		}
		.card-right {
			width: 16rpx;
			height: 26rpx;
		}
	}
	.footer {
		height: 273rpx;
		padding: 40rpx 42rpx 0;
		// margin-top: 42rpx;
		background-color: #fff;
		.tixian {
			font-size: 30rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(51,51,51,1);
			margin-bottom: 42rpx;
		}
		.money {
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(51,51,51,1);
			display: flex;
			border-bottom: 1rpx solid rgba(232,232,232,1);
			view {
				font-size: 56rpx;
				margin-right: 34rpx;
			}
			input {
				padding-top: 22rpx;
				font-size: 36rpx;
			}
		}
		.text {
			font-size: 26rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(153,153,153,1);
			margin: 28rpx 0 74rpx;
		}
	}
}
.btn {
	margin: 40rpx auto;
	width: 620rpx;
	height: 90rpx;
	line-height: 90rpx;
	text-align: center;
	background:rgba(207,208,212,1);
	border-radius: 6rpx;
	font-size: 32rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color:rgba(255,255,255,1);
}
.title {
	font-size: 36rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color:rgba(153,153,153,1);
}
</style>