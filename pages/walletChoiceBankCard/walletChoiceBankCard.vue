<template>
<!-- 选择银行卡页面 ming -->
	<view>
		<view class="card">
			<View class="card-left">
				<view class="card-img">
					<image src="/static/images/bank-card.png"></image>
				</view>
				<view class="card-text">
					<view class="card-title">农业银行</view>
					<view class="num">尾号1234 储蓄卡</view>
				</view>
			</View>
			<View class="card-right">
				<radio-group @change="radioChange">
					<radio color="#39AC36"></radio>
				</radio-group>
			</View>
		</view>
		<view class="card">
			<View class="card-left">
				<view class="card-img">
					<image src="/static/images/bank-card.png"></image>
				</view>
				<view class="card-text">
					<view class="card-title">农业银行</view>
					<view class="num">尾号1234 储蓄卡</view>
				</view>
			</View>
			<View class="card-right">
				<radio-group @change="radioChange">
					<radio color="#39AC36"></radio>
				</radio-group>
			</View>
		</view>
		<view class="card">
			<View class="card-left">
				<view class="card-img">
					<image src="/static/images/bank-card.png"></image>
				</view>
				<view class="card-text">
					<view class="card-title">农业银行</view>
					<view class="num">尾号1234 储蓄卡</view>
				</view>
			</View>
			<View class="card-right">
				<radio-group @change="radioChange">
					<radio color="#39AC36"></radio>
				</radio-group>
			</View>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
		radioChange(e) {
			console.log(e)
		}
	}
};
</script>

<style lang="less" scoped>
.card {
	margin: 20rpx 0;
	display: flex;
	height: 120rpx;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
	background-color: #fff;
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
		margin-right: 72rpx;
	}
}
</style>