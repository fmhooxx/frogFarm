<template>
<!--pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo.wxml-->
	<view class="container">
		<!-- 商品轮播图开始 -->
			<view class="page-section page-section-spacing swiper">
				<swiper  autoplay="true"  interval="2500" circular='true' @change='getCurrentNum'>
						<swiper-item current='1'>
							<image src="../../static/images/vip-lunbo@2x.jpg" mode="widthFix"></image>
						</swiper-item>
						<swiper-item current='2'>
							<image src="../../static/images/vip-lunbo@2x.jpg" mode="widthFix"></image>
						</swiper-item>
						<swiper-item current='3'>
							<image src="../../static/images/vip-lunbo@2x.jpg" mode="widthFix"></image>
						</swiper-item>
				</swiper>
				<view class="currentNum">{{currentNum}}/3</view>
			</view>
			<!-- 商品轮播图结束 -->

			<!-- 轮播图详情开始 -->
			<view class="swiper-info">
				<view class="swiper-info-title">年卡会员套餐15种有机蔬</view>
				<view class="swiper-info-introduce flex-row">
					<view>每月4次 共48次配送</view>
					<view class="share">分享立赚10</view>
				</view>

				<view class="mon">
					<view class="price">299<text>元</text></view>
					<view class="original-price">原价：¥1199</view>
				</view>
			</view>
			<!-- 轮播图详情结束 -->

			<!-- 套餐 -->
			<view class="introduce">
				<view class="server">
					<view class="title">套餐说明</view>
					<view class="sub-title">
						<text class="sub-title-left">配送时间</text>
						<text class="sub-title-right">每月1、10/20、30号配送</text>
					</view>
					<view class="sub-title">
						<text class="sub-title-left">配送次数</text>
						<text class="sub-title-right">每月4次配送 共48次配送</text>
					</view>
					<view class="sub-title">
						<text class="sub-title-left">注</text>
						<text class="sub-title-right">配送时间、商品可以更改</text>
					</view>
				</view>
			<!-- 套餐 -->

			<!-- 商品详情图富文本预留开始 -->
			<view class="detail">
				<view class="img-title">商品详情</view>
				<image src="../../static/images/green-orderlistA.png" class="detail-img"  mode="scallToFill"></image>
			</view>
			<!-- 商品详情图富文本预留结束 -->
			</view>

			<!-- 回到顶部按钮测试开始 -->
			<view v-if="goTopStatus" @click='goToTop' class="upTop">
				<image src="../../static/images/upTop.png" style='' mode='widthFix'></image>
			</view>
			<!-- 回到顶部按钮测试结束 -->

			<!-- 底部操作栏开始 -->
		<view class="user-defined flex-row">
			<view id="cart">
				<image src="../../static/images/detail-cart.png" class="cart"></image>
			</view>
			<view class="toClear" @click="goConfirmOrder">去结算</view>
		</view>
		<!-- 底部操作栏结束 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentNum: 1,
				goTopStatus: false
			}
		},
		methods: {
			//轮播图切换时获取index
			getCurrentNum(e) {
				this.currentNum = e.detail.current + 1
			},
			//监听页面高度(上滑或者下滑)
			onPageScroll(obj) {
				if (obj.scrollTop > 363) {
					return this.goTopStatus = true
				}
				this.goTopStatus = false
			},
			//点击回到顶部
			goToTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
      },
      // 去结算页面
      goConfirmOrder() {
        uni.navigateTo({
          url: '/pages/confirmOrder/confirmOrder'
        })
      }
		}
	}
</script>

<style lang="less" scoped>
swiper {
  height: 580rpx;
}

swiper-item image {
  width: 100%;
  height: 452rpx;
}

.currentNum {
  width: 60rpx;
  height: 36rpx;
  background: rgba(0, 0, 0, 1);
  opacity: 0.3;
  border-radius: 18rpx;
  color: white;
  font-size: 22rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  text-align: center;
  line-height: 36rpx;
  position: absolute;
  top: 520rpx;
  right: 24rpx;
}

/* 轮播图详情结束 */
.swiper-info {
  background: white;
  padding-left: 20rpx;
  box-sizing: border-box;
}

.swiper-info-title {
  font-size: 40rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

.swiper-info-introduce {
  font-size: 28rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.share {
  min-width: 210rpx;
  height: 70rpx;
  background: rgba(253, 72, 77, 1);
  border-radius: 36rpx 0px 0px 36rpx;
  line-height: 70rpx;
  text-align: center;
  color: white;
}

.price {
  font-size: 64rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(253, 72, 77, 1);
}

.price text {
  font-size: 32rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(86, 86, 86, 1);
}

.original-price {
  font-size: 24rpx;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  text-decoration: line-through;
  color: rgba(102, 102, 102, 1);
  margin-left: 28rpx;
}

.mon view {
  display: inline;
}

/* 服务样式 */
.introduce {
  background-color: white;
}

.server {
  background: white;
  margin-top: 20rpx;
  padding: 20rpx;
  box-sizing: border-box;
}

.server view {
  padding: 28rpx 0;
  box-sizing: border-box;
}

.title {
  font-size: 34rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

.sub-title {
  font-size: 24rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  border-top: 1rpx solid rgba(217, 217, 217, 1);
  box-sizing: border-box;
}

.sub-title-left {
  min-width: 130rpx;
  display: inline-block;
}

.sub-title-right {
  min-width: 130rpx;
  display: inline-block;
}

/* 详情图样式 */
.detail {
  text-align: center;
  background: white;
  margin-top: 20rpx;
}

.img-title {
  font-size: 34rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  padding: 32rpx 20rpx;
  box-sizing: border-box;
  float: left;
}

.detail-img {
  width: 100%;
  display: block;
  height: 2487rpx;
}



/* 回到顶部样式 */
.upTop {
  position: fixed;
  right: 22rpx;
  bottom: 130rpx;
  width: 70rpx;
  height: 70rpx;
  z-index: 994;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #cacaca;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
}
.upTop image {
  width: 50rpx;
  height: auto;
  margin-top: 10rpx;
}


/* 底部功能栏开始 */
.user-defined {
  width: 750rpx;
  height: 98rpx;
  padding-left: 24rpx;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  left: 0;
}

.cart {
  width: 36rpx;
  height: 34rpx;
  line-height: 98rpx;
}

#cart {
  align-self: center;
}

.toClear {
  width: 220rpx;
  height: 70rpx;
  background: rgba(39, 149, 36, 1);
  border-radius: 34rpx;
  text-align: center;
  line-height: 70rpx;
  align-self: center;
  margin-right: 30rpx;
  color: white
}
</style>
