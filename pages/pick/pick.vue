<template>
  <view class="container">
    <swiper :previous-margin="previousMargin" :next-margin="nextMargin" @click="swiperBindchange">
      <block v-for="(item, index) in qrCode" :key="index">
        <swiper-item>
          <view class="count">{{currentIndex+1}}/{{qrCode.length}}</view>
          <view class="slide-qr" :class=" currentIndex == index ? 'zoom-in' : 'zoom-out' ">
            <text class="order">订单编号：100012323466</text>
            <image src="/static/images/qr.png" mode="widthFix" />
            <view class="mess">
              <text class="tit">取货时间</text>
              <text>2019-10-15 07:00-19:00</text>
              <text class="tit">取货地点</text>
              <text class="address">合肥市蜀山区合肥市蜀山区合肥市蜀山区合肥市蜀山区合肥市蜀山区合肥市蜀山区合作化路与史河路交...</text>
            </view>
            <view class="share">
              <view class="save">
                <image src="/static/images/save.png" mode="widthFix" />
                <text>保存</text>
              </view>
              <view class="shareTo">
                分享到：
                <image src="/static/images/wechart.png" mode="widthFix" />
                <image src="/static/images/qq.png" mode="widthFix" />
              </view>
            </view>
          </view>
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      qrCode: [{ id: 0 }, { id: 1 }],
      previousMargin: "100rpx", //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      nextMargin: "100rpx", //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      currentIndex: 0 //swiper当前索引
    };
  },
  methods: {
    swiperBindchange(e) {
      this.currentIndex = e.detail.current;
    }
  }
};
</script>

<style>
swiper {
  margin-top: 50rpx;
  height: 1000rpx;
}

/* swiper-item {} */

.count {
  width: 102rpx;
  height: 40rpx;
  background: #999;
  border-radius: 20rpx;
  text-align: center;
  color: #fff;
  font-size: 26rpx;
  line-height: 40rpx;
  margin: 35rpx auto;
}

.slide-qr {
  padding: 56rpx 75rpx;
  width: 548rpx;
  height: 812rpx;
  background: #fff;
  box-shadow: 1.5rpx 2.6rpx 7rpx 0rpx rgba(123, 163, 127, 0.15);
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
}

.order {
  font-size: 22rpx;
  line-height: 34rpx;
  color: #666666;
  text-align: center;
}

.slide-qr image {
  width: 318rpx;
  height: 319rpx;
  display: block;
}

.zoom-out {
  transform: scale(0.8);
  transition: all 0.7s ease-out 0s;
}

.zoom-in {
  transform: scale(1);
  transition: all 0.7s ease-in 0s;
}

.mess text {
  font-size: 24rpx;
  color: #000;
  display: block;
  margin-top: 14rpx;
  margin-bottom: 38rpx;
}

.mess .tit {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #666666;
  margin: 0;
}

.share {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  font-size: 30rpx;
  color: #333;
}

.save {
  display: flex;
  align-items: center;
}

.shareTo {
  display: flex;
  align-items: center;
  margin-left: 56rpx;
}

.share image {
  width: 26rpx;
  height: 28rpx;
  margin-right: 20rpx;
}

.shareTo image {
  width: 39rpx;
  height: 39rpx;
}

.address {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-height: 100rpx;
  -webkit-box-orient: vertical;
}
</style>
