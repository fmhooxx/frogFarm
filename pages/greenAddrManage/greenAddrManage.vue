<template>
	<!--pages/greenAddrManage/greenAddrManage.wxml-->
	<view class="container">
		<view class="addr">
			<view class="addrInfo" @click="goConfirmOrder">
				<view class="addrInfo_details">
					<view class="middle-title">姓名：小明</view>
					<view class="middle-title">1234567890</view>
				</view>
				<view class="middle-title-light">合肥市xxxxxxxxxxxxxxx</view>
			</view>

			<view class="addr_do">
				<view v-if='true'>
					<radio color="#279524" checked='true'>默认地址</radio>
				</view>
				<view v-else>
					<radio color="#CE0000" checked=''>默认地址</radio>
				</view>

				<view class="do">	
					<view class="one">
						<image src="../../static/images/addr-editor.png"></image>
						<text class="info-three-title">编辑</text>
					</view>
					<view class="two">
						<image src="../../static/images/addr-del.png"></image>
						<text class="info-three-title">删除</text>
					</view>
				
				</view>
			</view>
		</view>
		
		<view class="bottom">
			<view class="btn-default-longrad btn-text btn" @click="toGreenAddrManageAdd">+新建地址</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 去新建地址页面
			toGreenAddrManageAdd() {
				uni.navigateTo({
					url: '/pages/greenAddrManageAdd/greenAddrManageAdd'
				})
			},
			// 去确认订单页面
			goConfirmOrder() {
				uni.navigateTo({
          url: '/pages/confirmOrder/confirmOrder'
        })
			}
		}
	}
</script>

<style lang="less" scoped>
.addr{
  height:200rpx;
  background:rgba(255,255,255,1);
  // padding: 0 50rpx 0 20rpx;
  box-sizing: border-box;
  background: white;
  margin-top: 26rpx
}
.addr_do{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
	margin: 0 50rpx 0 20rpx;
  // padding: 20rpx 0;
}
.do {
}
.do view{
	 display: inline-block;
	 	> image {
		margin-right: 12rpx;
	}
}
.one {
	margin-right: 50rpx;
}
radio {
  transform:scale(0.8);
  margin-left: -16rpx;
	color:rgba(102,102,102,1);
}

.do image{
    width:28rpx;
		height:28rpx;
		vertical-align: middle;
  }
.addrInfo_details{
  display: flex;
  flex-direction: row;
	justify-content: space-between;
	margin: 0 0 20rpx 6rpx;
	padding-top: 10rpx;
}
.addrInfo {
	height: 120rpx;
	padding-bottom: 10rpx;
	margin: 0 50rpx 0 20rpx;
	border-bottom: 1rpx solid #efefef;
}

/* 底部样式开始 */
.bottom{
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -375rpx;
  height:130rpx;
  width: 750rpx;
  background:rgba(255,255,255,1);
}
.btn{
  position: relative;
  top: 50%;
  left: 50%;
  margin-top:-42rpx;
  margin-left:-330rpx;
}
</style>