<template>
<!-- 商圈发布页面 ming -->
  <view class="release">
    <view class="text">
      <textarea placeholder="分享你的健康生活" focus auto-height></textarea>
    </view>
    <view class="picture">
      <view v-for="(item, index) in pictureList" :key="index" @click="preview(index)" @longtap="del(index)">
        <image :src="item"></image>
      </view>
      <view v-for="(item, index) in videoList" :key="index">
        <video :src="item"></video>
      </view>
      <view @click="upload">
        <image src="/static/images/release.png"></image>
      </view>
    </view>
    <view class="btn">发布</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 上传图片存储的路径
      pictureList: [],
      // 视频列表
      videoList: []
    };
  },
  methods: {
    // 点击上传图片
    upload() {
      if (this.pictureList.length < 9) {
        return uni.chooseImage({
          count: 9 - this.pictureList.length,
          success: res => {
            this.pictureList.push(res.tempFilePaths[0])
          }
        })
      }
      return uni.showToast({
          title: '最多选择九张图片',
          duration: 2000,
          icon: 'none'
      })
    },
    // 点击预览图片
    preview(index) {
      uni.previewImage({
        urls: [this.pictureList[index]]
      })
    },
    del(index) {
      console.log(11)
    }
  }
};
</script>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.release {
  padding: 0 32rpx;
  .text {
    font-size: 26rpx;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    padding-top: 20rpx;
    textarea {
      height: 142rpx !important;
    }
  }
  .picture {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 132rpx;
    > view {
      margin: 10rpx;
      width: 208rpx;
      height: 208rpx;
    }
  }
  .btn {
    width: 660rpx;
    height: 84rpx;
    background:rgba(39,149,36,1);
    border-radius: 41rpx;
    line-height: 84rpx;
    text-align: center;
    font-size: 40rpx;
    font-family:Source Han Sans CN;;
    font-weight: 400;
    color:rgba(255,255,255,1);
  }
}
</style>