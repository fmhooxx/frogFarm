<template>
  <!-- 推荐有礼页面 ming -->
  <view class="recommend-courtesy">
    <!-- 头部的背景图片 -->
    <view class="header-bgi">
      <image src="/static/images/recommend-courtesy-bgi.jpg"></image>
    </view>
    <!-- 推荐有礼的中间部分 -->
    <view class="courtesy-content-box">
      <view class="courtesy-content">
				<view class="content-img">
					<!-- <image src="/static/images/recommend-courtesy-content.png" mode="scaleToFill"></image> -->
				</view>
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
image {
  width: 100%;
  height: 100%;
}
.recommend-courtesy {
	position: relative;
	background-color: #000;
	height: 1800rpx;
  // 头部的背景图片
  .header-bgi {
    height: 488rpx;
  }
  .courtesy-content-box {
    .courtesy-content {
			position: absolute;
			top: 200rpx;
			left: 125rpx;
			box-shadow: 0rpx 4rpx 30rpx 4rpx red, 0rpx 0rpx 1rpx 0rpx red;
			.content-img {
				height: 785rpx;
				width: 500rpx;
				background-color: skyblue;
			}
    }
  }
}
</style>