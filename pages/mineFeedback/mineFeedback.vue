<template>
  <!-- 意见反馈页面 ming -->
  <view class="feedback">
    <view class="title">我们想听听你的心声,如果愿意,你也可以留下联系 方式,我们期待与您真诚沟通</view>
    <view class="box">
			<view class="preview" v-for="(item, index) in previewList" :key="index" @click="preview(index)">
				<image :src="item" mode="scaleToFill"></image>
			</view>
			<view class="content" @click="upload">
				<image src="/static/images/feedback-photograph.png"></image>
				<view class="content-text">上传照片</view>
			</view>
		</view>
    <view class="btn">
      <button>提交</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
			// 预览图片的地址
			previewList: []
		};
  },
  methods: {
		// 点击上传图片
		upload() {
			uni.chooseImage({
				count: 9, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: res => {
					this.previewList.push(res.tempFilePaths[0])
				}
			})
		},
		// 点击预览图片
    preview(index) {
      uni.previewImage({
        urls: [this.previewList[index]]
      })
    }
	}
};
</script>

<style>
page {
	background-color: #fff;
}
</style>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.feedback {
  padding: 0 30rpx;
  .title {
    height: 222rpx;
    font-size: 32rpx;
    line-height: 60rpx;
    padding-top: 52rpx;
    box-sizing: border-box;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
	}
	.box {
		margin: 50rpx 0 70rpx 0;
		display: flex;
		flex-wrap: wrap;
		> view {
			margin-right: 12rpx;
			margin-bottom: 12rpx;
		}
		.preview {
			width: 160rpx;
			height: 160rpx;
		}
		.content {
			width: 160rpx;
			height: 160rpx;
			text-align: center;
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);
			border: 2rpx dashed rgba(197, 197, 197, 1);
			border-radius: 10rpx;
			image {
				margin-top: 31rpx;
				width: 60rpx;
				height: 50rpx;
			}
			.content-text {
				font-size:24rpx;
				font-family:Source Han Sans CN;
				font-weight:400;
				color:rgba(197,197,197,1);
			}
		}
	}
  .btn {
    width: 660rpx;
    height: 84rpx;
    line-height: 84rpx;
    text-align: center;
    background: rgba(39, 149, 36, 1);
    border-radius: 41rpx;
    margin: 0 auto;
    button {
      width: 100%;
      height: 100%;
      background: rgba(39, 149, 36, 1);
      border-radius: 41rpx;
      font-size: 36rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 254, 254, 1);
    }
  }
}
</style>