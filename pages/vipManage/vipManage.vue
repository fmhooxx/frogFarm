<template>
  <!--pages/vipManage/vipManage.wxml-->
	<view class="container">
		<!-- 会员卡片开始 -->
			<view  class="card" style="background-image:url('../../static/images/vip-manage.png');background-repeat:no-repeat; background-size:cover">
				<view class="card-con flex-row">
					<view class="left">
						<image src="../../static/images/vip-header@2x.png" class="header"></image>
					</view>
					<view class="right">
						<view class="name">小蛙</view>
						<view class="guanli flex-row">
							<view class="guanli-left">年卡会员</view>
						</view>
						<view class="time">到期时间2019-12-01</view>
					</view>
				</view>
				<view class="num">
					<text>共48次配送  </text><text>剩余48次</text>
				</view>
			</view>
		<!-- 会员卡片结束 -->

		<!-- 会员管理开始 -->
		<view class="manage">
			<view class="flex-row" @click="toVipGoodsManage">
				<view class="info-small-title">商品管理</view>
				<view class="default">默认套餐</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row" @click="goVipCard">
				<view class="info-small-title">续费</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row">
				<view class="info-small-title">规则</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
		</view>
		<!-- 会员管理结束 -->
	</view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
		// 点击跳转到商品管理页
		toVipGoodsManage() {
			uni.navigateTo({
				url: '/pages/vipGoodsManage/vipGoodsManage'
			})
    },
    goVipCard() {
      uni.navigateTo({
				url: '/pages/vipCard/vipCard'
			})
    }
	}
};
</script>

<style lang="less" scoped>
/* 卡片样式开始 */
.container{
  background: white
}
.card{
  width:690rpx;
  height:286rpx;
  background:rgba(57,172,54,1);
  border-radius:20rpx;
  margin: 0 auto
  }
  .card-con {
  margin: 0 auto;
  width: 630rpx;
  height: 214rpx;
  color: white;
}

.card-con .left {
  align-self: center;
}

.header {
  width: 112rpx;
  height: 120rpx;
}

.card-con .right {
  align-self: center;
}

.name {
  font-size: 34rpx;
  font-weight: bold;
}

.guanli {
  width: 450rpx;
  height: 50rpx;
}

.guanli-left {
  width: 120rpx;
  height: 34rpx;
  border: 2rpx solid rgba(254, 200, 37, 1);
  border-radius: 17rpx;
  text-align: center;
  font-size: 24rpx;
  font-weight: bold;
  color: rgba(254, 200, 37, 1);
  align-self: center;
}

.time {
  font-size: 24rpx;
  font-family: Source Han Sans CN;
  font-weight: bold;
}
.num{
  font-size:24rpx;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:22px;
  padding: 0 40rpx;
}


/* 会员管理内容样式开始 */
.manage{
  background: white;
  margin-top: 88rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
}
.manage image{
  width:13rpx;
  height:22rpx;
}

.manage>view{
  height: 100rpx;
  border-bottom: 2rpx solid rgba(231,231,231,1)
}
.manage>view view{
  align-self: center
}
.default{
  font-size:30rpx;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
  margin-left: 400rpx
}
</style>
