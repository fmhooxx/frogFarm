<template>
  <!--pages/greenNewGoods/greenNewGoods.wxml-->
  <view class="container">
    <view class="goods">
      <view class="title info-small-title">蔬菜类</view>
      <view class="list">
        <view class="box">
          <view>西红柿</view>
          <view>500g</view>
        </view>

        <view class="box">
          <view>胡萝卜</view>
          <view>500g</view>
        </view>

        <view class="box">
          <view>玉米</view>
          <view>500g</view>
        </view>
        <view class="box">
          <view>香菜</view>
          <view>500g</view>
        </view>

        <view class="box">
          <view>西红柿</view>
          <view>500g</view>
        </view>

        <view class="box">
          <view>胡萝卜</view>
          <view>500g</view>
        </view>

        <view class="box">
          <view>玉米</view>
          <view>500g</view>
        </view>
        <view class="box">
          <view>香菜</view>
          <view>500g</view>
        </view>
      </view>
    </view>

    <view class="goods">
      <view class="title info-small-title">粮油类</view>
      <view class="list">
        <view class="box">
          <view>西红柿</view>
          <view>500g</view>
        </view>

        <view class="box" style="border:1rpx solid rgba(39,149,36,1);">
          <view>胡萝卜</view>
          <view>500g</view>
        </view>

        <view class="box">
          <view>玉米</view>
          <view>500g</view>
        </view>
        <view class="box">
          <view>香菜</view>
          <view>500g</view>
        </view>
      </view>
    </view>

    <view class="goods">
      <view class="title info-small-title">肉类</view>
      <view class="list">
        <view class="box" style="border:1rpx solid rgba(39,149,36,1);">
          <view>花生油</view>
          <view>2L</view>
        </view>

        <view class="box">
          <view>玉米油</view>
          <view>2L</view>
        </view>

        <view class="box">
          <view>芝麻油</view>
          <view>500g</view>
        </view>
        <view class="box">
          <view>芝麻油</view>
          <view>2L</view>
        </view>
      </view>
    </view>
    <view class="btn-default-long btn">保存并使用</view>
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
.container {
  background: white;
}

.block {
  padding: 0 30rpx;
}
.title {
  margin: 40rpx 40rpx;
}

/* 内容盒子 */
.list {
  font-size: 28rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36rpx;
  padding-left: 30rpx;
  box-sizing: border-box;
}
.box {
  width: 144rpx;
  height: 88rpx;
  display: inline-block;
  margin-right: 30rpx;
  margin-bottom: 32rpx;
  background: rgba(247, 247, 247, 1);
  border-radius: 10rpx;
  text-align: center;
  padding: 10rpx 0;
  box-sizing: border-box;
}
.btn {
  margin-top: 70rpx;
}
</style>