<template>
  <!-- form ming 会员赠送页面-->
  <view class="give">
    <!-- 头部图片以及内容 -->
		<view class="member">
			<image src="/static/images/vip-bgi.png" mode="scaleToFill"></image>
      <view class="vip">蛙农场·VIP会员</view>
      <view class="money">年卡会员299元</view>
		</view>
    <!-- 信息部分 -->
    <view class="info">
      <view class="info-title">
        <view class="info-tel">输入手机号赠送好友</view>
        <view class="record">记录</view>
      </view>
      <view class="info-input">
        <input placeholder="请输入好友手机号码" focus type="number" placeholder-class="input-text" />
      </view>
      <view class="notes">注：会员卡领取有效期为30天，30天内未领取将返回到本人账户.</view>
    </view>
    <view class="footer">
      <view class="price">¥<text>299</text></view>
      <view class="footer-give" @click="goVipGiveRecord">立即赠送</view>
    </view>
	</view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 去赠送记录页面
    goVipGiveRecord() {
      uni.navigateTo({
        url: '/pages/vipGiveRecord/vipGiveRecord'
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
.give {
  position: relative;
  padding: 0 32rpx;
  .member {
    position: relative;
    width: 688rpx;
    height: 350rpx;
    background:rgba(57,172,54,1);
    box-shadow: 0rpx 0rpx 7rpx 0rpx rgba(80,136,78,0.36);
    border-radius: 30rpx;
    margin: 0 auto;
    image {
      border-radius: 30rpx;
    }
    view {
      font-size: 36rpx;
      font-family: PingFang;
      color:rgba(255,255,255,1);
    }
    .vip {
      position: absolute;
      top: 66rpx;
      left: 54rpx;
      font-weight: 500;
    }
    .money {
      position: absolute;
      bottom: 48rpx;
      right: 30rpx;
      font-weight: bold;
    }
  }
  .info {
    .info-title {
      display: flex;
      justify-content: space-between;
      margin: 60rpx 0;
      .info-tel {
        font-size: 32rpx;
        font-family: PingFang;
        font-weight: 500;
        color:rgba(51,51,51,1);
      }
      .record {
        font-family: PingFang;
        color:rgba(102,102,102,1);
        font-size: 30rpx;
      }
    }
    .info-input {
      width: 100%;
      height: 88rpx;
      background:rgba(255,255,255,1);
      border-bottom: 2rpx solid rgba(204,204,204,1);
      border-radius: 5rpx;
      input {
        // margin-top: 20rpx;
        padding-top: 22rpx;
        background: none;  
        outline: none;  
        border: none;
        width: 100%;
        padding-left: 22rpx;
        .input-text {
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: 500;
          color:rgba(153,153,153,1);
        }
      }
    }
    .notes {
      font-size: 22rpx;
      margin-top: 30rpx;
      font-family: PingFang;
      font-weight: 500;
      color:rgba(153,153,153,1);
    }
  }
  .footer {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 96rpx;
    line-height: 96rpx;
    padding: 0 32rpx;
    background:rgba(255,255,255,1);
    box-shadow: 0rpx 3rpx 5rpx 0rpx rgba(153,153,153,0.3);
    .price {
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color:rgba(60,173,57,1);
      text {
        font-size: 36rpx;
      }
    }
    .footer-give {
      width: 162rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      background:rgba(253,72,77,1);
      border-radius: 30rpx;
      font-family: PingFang;
      font-weight: bold;
      color:rgba(255,255,255,1);
      font-size: 28rpx;
      margin-top: 18rpx;
    }
  }
}
</style>