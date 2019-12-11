<template>
<!--pages/confirmOrder/confirmOrder.wxml-->
<!-- 确认订单页面 -->
	<view class="container">
		<!-- 添加地址信息开始 -->
		<!-- 没有地址区域 -->
		<view class="address flex-row" @click="toGreenAddrManage">
			<view class="addAddr">新建收货地址</view>
			<image src="/static/images/arrow-right.png"></image>
		</view>
		<!-- 有地址区域 -->
		<view v-if="false" class="address flex-row">
			<!-- 左边 -->
			<view class="info-left">
				<!-- 个人信息 -->
				<view class="user">
					<!-- 用户名 -->
					<text>小米</text>
					<!-- 手机号码 -->
					<text class="tel">12345678990</text>
				</view>
				<!-- 地址 -->
				<view class="info-address">合肥市庐阳区银城公寓</view>
			</view>
			<!-- 右边 -->
			<view class="info-right">
				<!-- 切换城市 -->
				<view class="right-switch">切换城市</view>
				<!-- 右箭头 -->
				<image src="/static/images/arrow-right.png"></image>
			</view>
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
						<view class="info-two-title">
							<!-- 折扣 -->
							<view class="discount">折</view>
							<view>红水蜜桃500g</view>
						</view>
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
						<view class="info-two-title">
							<!-- 折扣 -->
							<view class="discount">折</view>
							<view>红水蜜桃500g</view>
						</view>
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
						<view class="info-two-title">
							<!-- 折扣 -->
							<view v-if="false" class="discount">折</view>
							<view>红水蜜桃500g</view>
						</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>
			<!-- 绿色健康 -->
			<view class="green-healthy">
				<!-- 背景图片 -->
				<image src="/static/images/green-healthy.png"></image>
				<!-- 文字 -->
				<view>绿色健康</view>
			</view>
		</view>
		<!-- 商品列表信息结束 -->
		<view class="info-title bei-title" @click="toGreenOrderDetailBeizhu">
			<view>订单备注</view>
			<image src="../../static/images/arrow-right.png"></image>
		</view>
		<!-- 订单备注开始 -->
		<view class="con-info">
			<view class="flex-row info-title con-list">
				<view>商品金额</view>
				<view>¥89.7</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>会员折扣</view>
				<view>7折</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>配送费</view>
				<view>+6.00</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>促销优惠</view>
				<view>-0.54</view>
			</view>
			<view class="total">
				<view>合计:</view>
				<view class="price"><text>￥</text>62.6</view>
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
	box-sizing: border-box;
	align-items: center;
}
.address image{
  width:14rpx;
  height:24rpx;
  align-self: center
}
.addAddr{
	font-weight: 500;
	font-size: 36rpx;
	color: #333;
	font-family: Source Han Sans CN;
  align-self: center;
}
// 有地址样式区域
// 左边
.info-left {
	// 个人信息
	.user {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: #333;
		// 手机号码
		.tel {
			margin-left: 20rpx;
		}
	}
	// 地址
	.info-address {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #333;
		margin-top: 10rpx;
	}
}
// 右边
.info-right {
	display: flex;
	align-items: center;
	// 切换城市
	.right-switch {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #333;
		margin-right: 24rpx;
	}
}

/* 订单列表展示 */
.goods-list{
	position: relative;
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  margin-top: 20rpx
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
.info-two-title {
	display: flex;
	align-items: center;
	// 折扣
	.discount {
		width: 24rpx;
		height: 24rpx;
		line-height: 24rpx;
		text-align: center;
		background:rgba(252,79,75,1);
		border-radius: 2rpx;
		font-size: 20rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color:rgba(255,255,255,1);
		margin-right: 14rpx;
	}
}
// 绿色健康
.green-healthy {
	position: absolute;
	top: -22rpx;
	left: -1rpx;
	width: 150rpx;
	height: 34rpx;
	// 背景图片
	> image {
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
	// 文字
	> view {
		position: absolute;
		top: 10rpx;
		left: 18rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #f7f7f7;
	}
}
/* 列表备注开始 */
.bei-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
  width:710rpx;
  height:88rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  line-height: 88rpx;
  margin-top: 20rpx;
  padding: 0 30rpx;
	box-sizing: border-box;
	> image {
		width: 13rpx;
		height: 23rpx;
		vertical-align: middle;
	}
}
.con-info{
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto
}
.con-info{
  padding: 0 30rpx;
  box-sizing: border-box;
	margin-top: 20rpx;
	margin-bottom: 100rpx;
}

.con-list{
	height: 88rpx;
	line-height: 88rpx;
	border-bottom: 1rpx solid #F3F3F3;
}
.total {
	height: 88rpx;
	line-height: 88rpx;
	text-align: right;
	font-family: Microsoft YaHei;
	font-weight: bold;
	> view {
		display: inline-block;
		font-size: 26rpx;
		color: #333;
	}
	.price {
		font-size: 36rpx;
		color: #FF4543;
		> text {
			font-size: 26rpx;
		}
	}
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
