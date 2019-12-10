<template>
	<!--pages/greenAddrManageAdd/greenAddrManageAdd.wxml-->
	<view class="container">
		<view class="addrAdd">
			<view class="inpOne">
				<view>地址</view>
				<view>
					<input placeholder="选择详细地址" />
				</view>
				<view class="icon">
					<image src=""></image>
				</view>
			</view>

			<view class="inp">
				<view><view style="width:200rpx">门牌号</view></view>
				<view>
					<input placeholder="例：15栋3层301室" />
				</view>
			</view>

			<view class="inp">
				<view><view style="width:200rpx">收货人</view></view>
				<view>
					<input placeholder="收货人姓名" />
				</view>
			</view>

			<view class="inp">
				<view><view style="width:200rpx">手机号</view></view>
				<view>
					<input placeholder="收货人手机号" />
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="btn-default-longrad btn-text btn" @click="goConfirmOrder">保存</view>
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
.addrAdd{
  height: 550rpx;
  background: white;
  margin-top: 20rpx
}
.inpOne{
  border-bottom: 2rpx  solid  rgb(151, 151, 151,0.29);
  border-top: 2rpx  solid rgb(151, 151, 151,0.29);
  height: 98rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28rpx;
  padding-left:40rpx;
  padding-right: 40rpx 
}
.inpOne image{
  width:42rpx;
  height:48rpx
}
.inpOne input{
  padding-left: 110rpx;
  box-sizing: border-box
}
.inp{
  border-bottom: 2rpx  solid rgb(151, 151, 151,0.29);
  height: 98rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28rpx;
  padding-left:40rpx;
  padding-right: 40rpx 
}
.inpadd{
   border-bottom: 2rpx  solid rgb(151, 151, 151,0.29);
  height: 98rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28rpx;
  /* padding-left: 30rpx */
}
input{
  height: 98rpx;
  line-height: 98rpx;
  width: 504rpx
}
.inpOne view{
  line-height: 98rpx;
  height: 98rpx;
}
.inp view{
  line-height: 98rpx;
  height: 98rpx;
}
image{
  vertical-align: middle
}

/* 底部样式开始 */
.bottom{
  position: absolute;
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