<template>
  <!-- from ming 赠送记录页面 -->
  <view class="give-record">
    <view class="head">
      <view>购买期限</view>
      <view>金额</view>
      <view>购买时间</view>
    </view>
    <view class="footer">
      <view class="content">
        <view>3个月</view>
        <view>29999</view>
        <view>2019-10-12</view>
      </view>
      <view class="content">
        <view>6个月</view>
        <view>39999</view>
        <view>2019-11-12</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.give-record {
  .head {
    width: 690rpx;
    height: 62rpx;
    margin: 20rpx auto;
    background-color: #fff;
    border-radius: 10rpx;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    > view {
      font-size: 28rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333;
      width: 33.33%;
    }
  }
  .footer {
    border-radius: 10rpx;
    width: 690rpx;
    height: 100%;
    margin: auto;
    box-sizing: border-box;
    background-color: #fff;
    .content {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      border-bottom: 1rpx solid #f1f1f1;
      > view {
        height: 80rpx;
        line-height: 80rpx;
        font-size: 28rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333;
        width: 33.33%;
      }
    }
  }
}
</style>
