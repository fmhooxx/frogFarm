<template>
  <!-- 提现规则页面 ming -->
  <view class="withdrawal-rules">
    <view>1.提现金额将在24小时内到账;</view>
    <view>2.每人每日最多提现10次；</view>
    <view>3.每月15日是提现日，只有当天可以提现</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.withdrawal-rules {
  margin: 28rpx 0rpx 0rpx 32rpx;
  box-sizing: border-box;
  width: 504rpx;
  height: 125rpx;
  font-size: 28rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
</style>
