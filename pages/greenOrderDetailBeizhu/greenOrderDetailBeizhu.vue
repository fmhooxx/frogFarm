<template>
  <!--pages/greenOrderDetailBeizhu/greenOrderDetailBeizhu.wxml-->
  <view class="container">
    <!-- 备注填写输入框开始 -->
    <view class="textarea">
      <textarea focus style="height: 3em" />
    </view>
    <!-- 备注填写输入框结束 -->

    <!-- 历史记录开始 -->
    <view class="history">
      <view class="history-list">请不要敲门，到了后打电话</view>
      <view class="history-list">如果没人就放门口</view>
    </view>
    <!-- 历史记录结束 -->

    <view class="btn-default-longrad btn-text btn" @click="goConfirmOrder">确定</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 去确认订单页面
    goConfirmOrder() {
      uni.navigateTo({
        url: "/pages/confirmOrder/confirmOrder"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.textarea {
  height: 290rpx;
  background: rgba(255, 255, 255, 1);
  border: 1rpx solid rgba(238, 238, 238, 1);
}
// .history{

// }
.history-list {
  width: 390rpx;
  height: 60rpx;
  background: rgba(255, 255, 255, 1);
  border: 2rpx solid rgba(229, 229, 229, 1);
  border-radius: 30rpx;
  text-align: center;
  line-height: 60rpx;
  margin: 20rpx 30rpx;
}
.btn {
  margin-top: 50rpx;
}
</style>