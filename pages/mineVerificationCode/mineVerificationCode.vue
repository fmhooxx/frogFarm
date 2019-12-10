<template>
  <!-- 我的 手机验证码页面 ming -->
  <view class="verification-code">
    <!-- 填写手机号码区域 -->
    <view class="code-box">
      <input
        placeholder="请输入新手机号码"
        v-model="telVal"
        type="number"
        placeholder-class="placeholder-tel"
      />
    </view>
    <!-- 验证码区域 -->
    <view class="code-box">
      <input
        placeholder="请输入新手机号码"
        v-model="codeVal"
        type="number"
        placeholder-class="placeholder-tel"
      />
      <view class="box-text" v-show="isStart" @click="start">{{sendVal}}</view>
      <view class="box-text" v-show="isTime">剩余{{time}}秒</view>
    </view>
    <!-- 提交按钮 -->
    <view class="code-btn" :class="{ active: isActive }" @click="submitVal">
      <button class="btn" :class="{ active: isActive }">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 手机号码输入的内容
      telVal: "",
      // 验证码输入的内容
      codeVal: "",
      // 点击发送的内容
      sendVal: "点击发送",
      // 倒计时内容
      time: 60,
      // 控制剩余时间的显示与隐藏
      isTime: false,
      // 控制点击发送的显示与隐藏
      isStart: true
    };
  },
  methods: {
    // 点击提交按钮
    submitVal() {
      if (this.telVal !== "" && this.codeVal !== "") {
        return uni.navigateTo({
          url: "/pages/mineVerificationCodeSuccess/mineVerificationCodeSuccess"
        });
      }
      return uni.showToast({
        title: "请输入手机号码或验证码",
        duration: 2000,
        icon: "none"
      });
    },
    start() {
      this.isTime = !this.isTime;
      this.isStart = !this.isStart;
    }
  },
  computed: {
    isActive() {
      if (this.telVal === "" || this.codeVal === "") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less" scoped>
// 选中的时候的按钮的颜色以及文字
.active {
  background-color: #279524 !important;
  opacity: 1 !important;
}
.verification-code {
  // 填写手机号码区域
  margin-top: 20rpx;
  .code-box {
    padding: 35rpx 50rpx 30rpx 50rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 100%;
    }
    // placeholder 样式
    .placeholder-tel {
      font-size: 26rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .box-text {
      width: 150rpx;
      height: 50rpx;
      line-height: 50rpx;
      text-align: center;
      background: rgba(191, 191, 191, 1);
      border-radius: 10rpx;
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  // 提交按钮
  .code-btn {
    width: 630rpx;
    height: 90rpx;
    border-radius: 42rpx;
    margin: 73rpx auto;
    .btn {
      width: 100%;
      background: rgba(39, 149, 36, 1);
      opacity: 0.5;
      border-radius: 42rpx;
      font-size: 36rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>