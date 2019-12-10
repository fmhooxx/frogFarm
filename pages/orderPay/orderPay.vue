<template>
<!--pages/orderPay/orderPay.wxml-->
	<view class="container">
		<!-- 金额详情开始 -->
		<view class="price">
			<view class="con">
				<view class="top">应付金额</view>
				<view class="bottom">￥1.26</view>
			</view>
		</view>
		<!-- 金额详情结束 -->

		<!-- 支付方式开始 -->
		<view class="payWay">
			<view class="title info-three-title">选择支付方式</view>
			<view class="flex-row">
				<view class="flex-row pay-way">
					<view><image src="../../static/images/wx-pay.png"></image></view>
					<view>微信支付</view>
				</view>
				<image src="../../static/images/checked.png"  class="check"></image>
			</view>
			
		</view>
		<!-- 支付方式结束  -->

		<!-- 支付按钮 -->
		<view class="btn-default-longrad btn" @click="goOrderPaySuccess">微信支付￥1.26</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
      // 去支付成功页面
			goOrderPaySuccess() {
        uni.navigateTo({
          url: "/pages/orderPaySuccess/orderPaySuccess"
        });
      }
		}
	}
</script>

<style lang="less" scoped>
.price{
  width:750rpx;
  height:240rpx;
  background:rgba(255,255,255,1);
  margin: 20rpx 0;
  position: relative
}
.con{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -85rpx;
  margin-top: -60rpx
}
.top{
  font-size:36rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(2,2,2,1);
}
.bottom{
  font-size:44rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(2,2,2,1);
}


/* 支付方式样式开始 */

.payWay{
  height:176rpx;
  background:rgba(255,255,255,1);
  padding-right: 20rpx;
  box-sizing: border-box;
  align-self: center
}
.title{
  padding: 24rpx 34rpx;
  box-sizing: border-box
}
.payWay image{
  width:48rpx;
  height:42rpx;
}
.pay-way{
  width: 280rpx;
  padding: 0 34rpx;
  box-sizing: border-box;
  margin-top: 20rpx
}
.check{
  align-self: center
}
.btn{
  color:white;
  font-size:30rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  margin-top: 60rpx
}
</style>