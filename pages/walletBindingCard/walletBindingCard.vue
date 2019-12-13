<template>
  <!-- 绑定银行卡页面 form ming -->
  <view class="binding-card">
    <view class="binding">
      <view>
        <view class="w">真实姓名</view>
        <input placeholder="请输入您的真实姓名" v-model="uname" placeholder-class="text" />
      </view>
      <view>
        <view class="w">银行卡号</view>
        <input placeholder="请输入您的银行卡号" v-model="cardNum" placeholder-class="text" />
      </view>
    </view>
    <view class="btn" :class="{ active: isActive }">确认</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 真实姓名输入框内容
      uname: "",
      // 银行卡号输入框内容
      cardNum: ""
    };
  },
  methods: {},
  computed: {
    isActive() {
      if (this.uname === "" || this.cardNum === "") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less" scoped>
.binding-card {
  // 选中的背景颜色
  .active {
    background: rgba(72, 188, 91, 1) !important;
  }
  .binding {
    margin-top: 20rpx;
    > view {
      display: flex;
      align-items: center;
      height: 90rpx;
      line-height: 90rpx;
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      background: rgba(255, 255, 255, 1);
      padding-left: 25rpx;
      box-sizing: border-box;
      margin-bottom: 2rpx;
      .w {
        margin-right: 65rpx;
      }
      .text {
        font-size: 30rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .btn {
    margin: 50rpx auto;
    width: 620rpx;
    height: 90rpx;
    line-height: 90rpx;
    background: rgba(207, 208, 212, 1);
    border-radius: 10rpx;
    font-size: 32rpx;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>