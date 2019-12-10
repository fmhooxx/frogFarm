<template>
<!--pages/confirmOrder/confirmOrder.wxml-->
<!-- 确认订单页面 -->
	<view class="container">
		<!-- 添加地址信息开始 -->
		<view class="address flex-row" @click="toGreenAddrManage">
			<view class="addAddr">新建收货地址</view>
			<image src="/static/images/arrow-right.png"></image>
		</view>
		<!-- 添加地址信息结束 -->
		<!-- 商品列表信息开始 -->
		<view class="goods-list">
			<view class="order-list-info flex-row">
				<view class="list-left">
					<image src="/static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">红水蜜桃500g</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>
			<view class="order-list-info flex-row">
				<view class="list-left">
					<image src="/static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">红水蜜桃500g</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>
		</view>
		<!-- 商品列表信息结束 -->
		<view class="info-title bei-title" @click="toGreenOrderDetailBeizhu">订单备注</view>
		<!-- 订单备注开始 -->
		<view class="con-info">
			<view class="flex-row info-title con-list">
				<view>商品金额</view>
				<view>89.7</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>会员折扣</view>
				<view>7折</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>促销优惠</view>
				<view>-0.54</view>
			</view>
			<view class="total">
				<text class="info-title">合计：</text>
				<text class="price">￥62.6</text>
			</view>
		</view>
		<!-- 订单备注结束 -->

		<!-- 底部操作栏开始 -->
		<view class="user-defined flex-row">
			<view class="vertical-center">
				<text class="info-subtitle">预付款</text>
				<text class="jiage">￥7.26</text>
			</view>
			<view class="toClear" @click="goOrderPay">去支付</view>
		</view>
		<!-- 底部操作栏结束 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			//点击跳转地址管理
			toGreenAddrManage() {
				uni.navigateTo({
					url: '/pages/greenAddrManage/greenAddrManage'
				})
			},
			//点击填写备注
			toGreenOrderDetailBeizhu() {
				uni.navigateTo({
					url: '/pages/greenOrderDetailBeizhu/greenOrderDetailBeizhu'
				})
			},
			// 去支付页面
			goOrderPay() {
				uni.navigateTo({
          url: '/pages/orderPay/orderPay'
        })
			}
		}
	}
</script>

<style lang="less" scoped>
/* 地址栏样式开始 */
.address{
  width:710rpx;
  height:150rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  margin: 0 auto;
  margin-top: 20rpx;
  padding: 0 20rpx;
  box-sizing: border-box
}
.address image{
  width:14rpx;
  height:24rpx;
  align-self: center
}
.addAddr{
  align-self: center;
}

/* 订单列表展示 */
.goods-list{
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin:0 auto;
  margin-top: 90rpx
}
.list-right{
  width: 580rpx;
  padding: 0 20rpx
}
.list-left image{
  width:96rpx;
  height:99rpx;
  border:1rpx solid rgba(229,229,229,1);
}
.order-list-info{
  padding: 20rpx 36rpx;
}

/* 列表备注开始 */
.bei-title{
  width:710rpx;
  height:88rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  line-height: 88rpx;
  margin-top: 20rpx;
  padding-left: 30rpx;
  box-sizing: border-box
}
.con-info{
  width:710rpx;
  height:360rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto
}
.con-info{
  padding: 32rpx 30rpx;
  box-sizing: border-box;
  margin-top: 20rpx;
  margin-bottom: 242rpx
}
.con-list{
  padding-bottom: 40rpx
}
.total{
  float: right
}
.price{
  font-size:32rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:#FF4543;
}

/* 底部操作栏样式 */
.user-defined {
  width: 750rpx;
  height: 98rpx;
  padding-left: 24rpx;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  left: 0;
}

.cart {
  width: 94rpx;
  height: 94rpx;
}

.toClear {
  width: 220rpx;
  height: 98rpx;
  background:rgba(253,72,77,1);
  text-align: center;
  line-height: 98rpx;
  font-size:32rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.jiage{
  font-size:24rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(239,58,55,1)
}
</style>
