<template>
<!--pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo.wxml-->
	<view class="container">
		<!-- 商品图片开始 -->
      <view class="shop-img">
        <image src="../../static/images/vip-goods-details.jpg"></image>
      </view>
    <!-- 商品图片结束 -->

			<!-- 图片详情开始 -->
			<view class="swiper-info">
				<view class="swiper-info-title">年卡会员套餐</view>
				<view class="swiper-info-introduce flex-row">
					<view>新鲜美味, 品种多多</view>
					<!-- <view class="share">分享有礼</view> -->
          <button open-type="share" @click="shareClick" class="share">分享有礼</button>
				</view>
        <!-- 普通价格区域 -->
        <view class="ordinary-price">¥39999</view>
				<view class="mon">
					<view class="price">29999<text>元</text></view>
          <!-- 会员价格区域 -->
          <view class="member">
            <image src="../../static/images/6.png"></image>
            <view>会员价</view>
          </view>
				</view>
			</view>
			<!-- 图片详情结束 -->

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
      <view class="user-defined">
        <!-- <view id="cart">
          <image src="../../static/images/detail-cart.png" class="cart"></image>
          <view class="tag">3</view>
        </view>
        <view class="addCart">加入购物车</view> -->
        <view class="toClear" @click="goConfirmOrder">立即购买</view>
      </view>
      <!-- 底部操作栏结束 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
        goTopStatus: false,
        // 存储用户登录的凭证
        userLogin: ''
			}
    },
    onLoad() {
      this.userLogin = uni.getStorageSync('userLogin')
      // 设置导航条标题
      // uni.setNavigationBarTitle({
      //   title: ''
      // })
    },
		methods: {
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
      // 去确定订单页面
      goConfirmOrder() {
        if (this.userLogin !== '') {
          uni.navigateTo({
            url: '/pages/loginRegister/loginRegister'
          })
        } else {
          uni.navigateTo({
            url: '/pages/confirmOrder/confirmOrder'
          })
        }
      },
      shareClick() {
        uni.share({
          provider: "weixin",
          scene: "WXSceneSession",
          success: res => {
            console.log(res)
          }
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

// 商品图片区域
.shop-img {
  background-color: #fff;
  > image {
    width: 750rpx;
    height: 580rpx;
    vertical-align: middle;
    // margin: 30rpx  0 122rpx 55rpx
  }
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
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.share {
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color: #fff;
  position: absolute;
  right: 0;
  min-width: 210rpx;
  height: 70rpx;
  background: rgba(253, 72, 77, 1);
  border-radius: 36rpx 0px 0px 36rpx;
  line-height: 70rpx;
  text-align: center;
  color: white;
}
// 普通价格区域
.ordinary-price {
  text-decoration: line-through;
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #279524;
}
.mon {
  display: flex;
  align-items: flex-end;
  .price {
    font-size: 64rpx;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(253, 72, 77, 1);
    > text {
      font-size: 32rpx;
      margin-left: 12rpx;
    }
  }
  // 会员价格区域
  .member {
    position: relative;
    margin-left: 30rpx;
    > image {
      width: 90rpx;
      height: 33rpx;
    }
    > view {
      position: absolute;
      top: 0;
      left: 10rpx;
      font-size: 25rpx;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: red;
      color: #fff;
    }
  }
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
  // width: 50rpx;
  // height: auto;
  // margin-top: 10rpx;
  width: 100%;
  height: 100%;
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

// .cart {
//   width: 42rpx;
//   height: 42rpx;
//   line-height: 98rpx;
// }

// #cart {
//   align-self: center;
//   position: relative;
// }
// .addCart{
//   width:220rpx;
//   height:70rpx;
//   font-size:28rpx;
//   font-family:Source Han Sans CN;
//   font-weight:500;
//   color:rgba(39,149,36,1);
//   background:rgba(255,255,255,1);
//   border:2rpx solid rgba(39,149,36,1);
//   border-radius:36rpx;
//   text-align: center;
//   line-height: 70rpx;
//   align-self: center;
//   margin-left: 180rpx
// }
.toClear {
  margin-top: 16rpx;
  float: right;
  font-size: 28rpx;
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
// 数字小标识
// .tag {
//   position: absolute;
//   top: -10rpx;
//   right: -20rpx;
//   width: 30rpx;
//   height: 30rpx;
//   line-height: 30rpx;
//   text-align: center;
//   background-color: #FC5854;
//   border-radius: 50%;
//   font-size: 24rpx;
//   font-family: Source Han Sans CN;
//   font-weight: 500;
//   color: #fff;
// }
</style>
