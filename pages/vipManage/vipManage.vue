<template>
  <!--pages/vipManage/vipManage.wxml-->
	<view>
		<!-- 会员卡片开始 -->
      <view class="vip-card">
        <image src="/static/images/vip-manage.png"></image>
        <view class="header-box">
          <view class="box-left">
            <view class="header-left">
              <image src="../../static/images/vip-header@2x.png"></image>
            </view>
            <view class="header-center">
              <view class="center-uname">小蛙</view>
              <view class="center-member">年卡会员</view>
              <view class="center-timer">到期时间：<text>2019-12-01</text></view>
            </view>
          </view>
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
			<view class="flex-row" @click="goVipMemberManagementRules">
				<view class="info-small-title">规则</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row" @click="goVipPurchaseRecord">
				<view class="info-small-title">购买记录</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row" @click="goVipGiveRecord">
				<view class="info-small-title">赠送记录</view>
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
    // 去会员中心页面
    goVipCard() {
      uni.navigateTo({
				url: '/pages/vipCard/vipCard'
			})
    },
    // 去赠送记录页面
    goVipGiveRecord() {
      uni.navigateTo({
        url: '/pages/vipGiveRecord/vipGiveRecord'
      })
    },
    // 去购买记录页面
    goVipPurchaseRecord() {
      uni.navigateTo({
        url: '/pages/vipPurchaseRecord/vipPurchaseRecord'
      })
    },
    // 去会员管理规则页面
    goVipMemberManagementRules() {
      uni.navigateTo({
        url: '/pages/vipMemberManagementRules/vipMemberManagementRules'
      })
    },
	}
};
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.vip-card{
  position: relative;
  width:690rpx;
  height:249rpx;
  background:rgba(57,172,54,1);
  box-shadow:0px 0px 40rpx 0px rgba(101,205,98,0.2);
  border-radius:20rpx;
  // padding: 70rpx 38rpx;
  box-sizing: border-box;
  position: absolute;
  top: 10rpx;
  left: 50%;
  margin-left: -345rpx;
  image {
    width: 100%;
    height: 100%;
  }
  .header-text {
    position: absolute;
    width: 600rpx;
    top: 80rpx;
    left: 40rpx;
  }
}
.header-box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 52rpx 0 40rpx;
  position: absolute;
  top: 58rpx;
  width: 100%;
  image {
    width: 100%;
    height: 100%;
  }
  .box-left {
    display: flex;
    .header-left {
      width: 102rpx;
      height: 102rpx;
      margin-right: 26rpx;
    }
    .header-center {
      .center-uname {
        font-size: 34rpx;
        font-family: PingFang;
        // font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .center-member {
        width: 128rpx;
        height: 34rpx;
        line-height: 34rpx;
        text-align: center;
        font-size: 26rpx;
        font-family: PingFang;
        border: 1rpx solid rgba(221,178,48,1);
        border-radius: 17rpx;
        // font-weight: bold;
        color:rgba(245,194,74,1);
        margin: 10rpx 0 20rpx 0;
      }
      .center-timer {
        // font-weight: bold;
        color:rgba(255,255,255,1);
        font-family: Source Han Sans CN;
        font-size: 24rpx;
        margin-right: 6rpx;
      }
    }
  }
  .box-right {
    width: 126rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    background:rgba(221,178,48,1);
    box-shadow: 0rpx 3rpx 7rpx 0rpx rgba(247, 111, 108, 0.35);
    border-radius: 30rpx;
    font-size: 30rpx;
    // font-weight: bold;
    color:rgba(255,255,255,1);
    font-family: PingFang;
    margin-top: 60rpx;
  }
}
/* 卡片样式开始 */


/* 会员管理内容样式开始 */
.manage{
  background: white;
  padding: 0 30rpx;
  box-sizing: border-box;
  margin-top: 300rpx;
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
