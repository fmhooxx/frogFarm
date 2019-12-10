<template>
<!--pages/greenCart/greenCart.wxml-->
	<view class="container">
		<!-- 购物车列表开始 -->
		<view class="cart-box">
			<view class="cart-list-box">
				<view class="del"><image src="../../static/images/green-del.png"></image></view>
				<view class="list flex-row">
					<radio color="#39AC36"></radio>
					<view class="list-left"><image src="../../static/images/green-cart.png"></image></view>
					<view class="list-right flex-column">
						<view class="top">
							<view>玲珑小番茄500g</view>
						</view>

						<view class="bottom flex-row">
							<view><text class="price">¥9.9</text><text class="fen">/份</text><text class="original">¥19.9</text></view>
							<view>
								          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cart-list-box">
				<view class="del"><image src="../../static/images/green-del.png"></image></view>
				<view class="list flex-row">
					<radio color="#39AC36"></radio>
					<view class="list-left"><image src="../../static/images/green-cart.png"></image></view>
					<view class="list-right flex-column">
						<view class="top">
							<view>玲珑小番茄500g</view>
						</view>

						<view class="bottom flex-row">
							<view><text class="price">¥9.9</text><text class="fen">/份</text><text class="original">¥19.9</text></view>
							<view>
								          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cart-list-box">
				<view class="del"><image src="../../static/images/green-del.png"></image></view>
				<view class="list flex-row">
					<radio color="#39AC36"></radio>
					<view class="list-left"><image src="../../static/images/green-cart.png"></image></view>
					<view class="list-right flex-column">
						<view class="top">
							<view>玲珑小番茄500g</view>
						</view>

						<view class="bottom flex-row">
							<view><text class="price">¥9.9</text><text class="fen">/份</text><text class="original">¥19.9</text></view>
							<view>
								          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cart-list-box">
				<view class="del"><image src="../../static/images/green-del.png"></image></view>
				<view class="list flex-row">
					<radio color="#39AC36"></radio>
					<view class="list-left"><image src="../../static/images/green-cart.png"></image></view>
					<view class="list-right flex-column">
						<view class="top">
							<view>玲珑小番茄500g</view>
						</view>

						<view class="bottom flex-row">
							<view><text class="price">¥9.9</text><text class="fen">/份</text><text class="original">¥19.9</text></view>
							<view>
								          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 购物车列表结束 -->

		<!-- 底部操作栏开始 -->
		<view class="user-defined flex-row">
			<radio>全选</radio>
			<view class="vertical-center add">
				<text class="info-subtitle">合计</text>
				<text class="jiage">￥3.15</text>
			</view>
			<view class="toClear">去结算</view>
		</view>
		<!-- 底部操作栏结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// input 内容
				money: 0,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.bottom {
	position: relative;
}
.info-right {
	position: absolute;
	right: 0;
	bottom: 0rpx;
	width:103rpx;
	height:36rpx;
	background:rgba(255,255,255,1);
	border:1rpx solid rgba(153,153,153,1);
	border-radius:18rpx;
	padding: 0 10rpx;
	box-sizing: border-box;
	line-height: 36rpx;
	text-align: center;
	color:rgba(102,102,102,1);
	.num-red {
		color:rgba(153,153,153,1);
	}
	input {
		width:34rpx;
		height:32rpx;
		line-height: 32rpx;
		font-size: 24rpx;
		font-weight:400;
		color:rgba(0,0,0,1);
		background:rgba(204,204,204,1);
		min-height:0
	}
}
.cart-box{
  width: 690rpx;
  background: white;
  border-radius:20rpx 20rpx 0px 0px;
  margin: 0 auto;
  margin-top: 30rpx
}
.cart-list-box{
  padding-right: 20rpx;
  box-sizing: border-box;
  height: 176rpx;
}
.list{
  height: 108rpx;
  width: 690rpx;
  padding: 0rpx 20rpx;
  box-sizing: border-box
}
.del{
  float:right
}
.del image{
  width:26rpx;
  height:24rpx;
}
.list-left image{
  width:108rpx;
  height:108rpx;
}
.list-right{
  width: 446rpx;
  height: 108rpx
}
.top{
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:24rpx;
}
.bottom{
  padding-right: 20rpx;
  box-sizing: border-box
}
.price{
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(253,72,77,1);
}
.fen{
  font-size:22rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:24rpx;
}
.original{
  font-size:22rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  text-decoration:line-through;
  color:rgba(153,153,153,1);
  padding: 0 18rpx;
  box-sizing: border-box
}

/* 底部数量开始 */
.num{
  width:103rpx;
  height:36rpx;
  background:rgba(255,255,255,1);
  border:1rpx solid rgba(153,153,153,1);
  border-radius:18rpx;
  padding: 0 10rpx;
  box-sizing: border-box;
  line-height: 26rpx
}
input{
  width:34rpx;
  height:32rpx;
  background:rgba(204,204,204,1);
  min-height:0
}

/* 
底部操作栏样式开始 */
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
radio{
  align-self: center;
  transform: scale(0.8)
}
.jiage{
  font-size:24rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(239,58,55,1)
}
.add{
  margin-left: 200rpx
}


.flex-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex-column{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>