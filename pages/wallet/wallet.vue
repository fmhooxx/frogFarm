<template>
<!-- 钱包页面 ming -->
  <view class="wallet">
		<view class="header">
			<view class="heade-img">
				<image src="/static/images/wallet-bgi.png"></image>
			</view>
			<view class="header-text">
				<view>钱包余额</view>
				<view class="price">450.50</view>
				<view class="tixian" @click="goCashWithdrawal">提现</view>
			</view>
		</view>
		<!-- 列表数据 -->
		<view class="footer">
			<view class="footer-box" @click="goWalletRecommendationDetails">
				<view class="text">推荐明细</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="gowWlletRecommendationRules">
				<view class="text">推荐规则</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="goWalletMyTeam">
				<view class="text">我的团队</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="goWalletWithdrawalRules">
				<view class="text">提现规则</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="goWalletPresentationDetails">
				<view class="text">提现明细</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="getCash">
				<view class="text">提现账户</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
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
	onLoad() {
		// this.getList()
	},
  methods: {
		// 获取用户信息
		getList() {
			uni.request({
				url: 'http://192.168.1.155:8086/WNC/wallet/getWallet',
				data: {
					userid: 1,
				},
				header: {
					'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
				},
				succeee(res) {
					console.log(res)
				}
			})
		},
		getCash() {
			uni.request({
				url: 'http://192.168.1.155:8086/WNC/wallet/getFriend',
				data: {
					id: 1
				},
				header: {
					'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
				},
				succeee(res) {
					console.log(res)
				}
			})
		},
		// 去提现页面
		goCashWithdrawal() {
			uni.navigateTo({
        url: '/pages/walletCashWithdrawal/walletCashWithdrawal'
      })
		},
		// 去推荐明细页面
		goWalletRecommendationDetails() {
			uni.navigateTo({
        url: '/pages/walletRecommendationDetails/walletRecommendationDetails'
      })
		},
		// 去推荐规则页面
		gowWlletRecommendationRules() {
			uni.navigateTo({
        url: '/pages/walletRecommendationRules/walletRecommendationRules'
      })
		},
		// 去我的团队页面
		goWalletMyTeam() {
			uni.navigateTo({
        url: '/pages/walletMyTeam/walletMyTeam'
      })
		},
		// 去提现规则页面
		goWalletWithdrawalRules() {
			uni.navigateTo({
        url: '/pages/walletWithdrawalRules/walletWithdrawalRules'
      })
		},
		// 去提现账户页面(如果没有绑定银行卡去我的银行卡页面)
		goWalletMyBankCard() {
			uni.navigateTo({
        url: '/pages/walletMyBankCard/walletMyBankCard'
      })
		},
		// 去提现明细页面
		goWalletPresentationDetails() {
			uni.navigateTo({
        url: '/pages/walletPresentationDetails/walletPresentationDetails'
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
.wallet {
	.header {
		margin-top: 35rpx;
		position: relative;
		.heade-img {
			width: 690rpx;
			height: 320rpx;
			margin: 0 auto;
		}
		.header-text {
			position: absolute;
			top: 80rpx;
			left: 292rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			text-align: center;
			color:rgba(255,255,255,1);
			font-size: 32rpx;
			.price {
				font-size: 56rpx;
				font-weight: 500;
				margin: 24rpx 0;
			}
			.tixian {
				width: 190rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size: 21rpx;
				border: 2rpx solid rgba(255,255,255,1);
				border-radius: 20rpx;
				font-family: Microsoft YaHei;
				font-weight: bold;
			}
		}
	}
	.footer {
		margin-top: 50rpx;
		.footer-box {
			margin: 1rpx 0;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			height: 90rpx;
			line-height: 90rpx;
			margin-bottom: 2rpx;
			padding: 0 30rpx;
			.text {
				font-size: 30rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color:rgba(51,51,51,1);
			}
			.box-img {
				width: 13rpx;
				height: 23rpx;
			}
		}
	}
}
</style>