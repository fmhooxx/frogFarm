<template>
<!--pages/goodsDetailsInfo/goodsDetailsInfo.wxml-->
	<view class="container">
			<!-- 商品轮播图开始 -->
			<view class="page-section page-section-spacing swiper">
				<swiper  autoplay="true"  interval="2500" circular='true' @change='getCurrentNum'>
						<swiper-item current='1'>
							<image src="../../static/images/detail-lunbo.png" mode="widthFix"></image>
						</swiper-item>
						<swiper-item current='2'>
							<image src="../../static/images/detail-lunbo.png" mode="widthFix"></image>
						</swiper-item>
						<swiper-item current='3'>
							<image src="../../static/images/detail-lunbo.png" mode="widthFix"></image>
						</swiper-item>
				</swiper>
				<view class="currentNum">{{currentNum}}/3</view>
			</view>
			<!-- 商品轮播图结束 -->

			<!-- 轮播图详情开始 -->
			<view class="swiper-info">
				<view class="swiper-info-title">夏黑葡萄 500g</view>
				<view class="swiper-info-introduce flex-row">
					<view>有机产品，营养丰富，味道鲜美</view>
					<view class="share">分享立赚10</view>
				</view>

				<view class="mon">
					<view class="price">29.9<text>元</text></view>
					<view class="original-price">原价：¥39.9</view>
				</view>
			</view>
			<!-- 轮播图详情结束 -->

			<!-- 服务开始 -->
				<view class="server">
					<view class="title">服务</view>
					<view class="sub-title" >付款后48小时内发货</view>
					<view class="sub-title">满99元包邮</view>
				</view>
			<!-- 服务结束 -->

			<!-- 规格开始 -->
				<view class="server">
					<view class="title">规格</view>
					<view class="sub-title">
						<text class="sub-title-left">净含量</text>
						<text class="sub-title-right">约500g</text>
					</view>
					<view class="sub-title">
						<text class="sub-title-left">保存条件</text>
						<text class="sub-title-right">冷藏</text>
					</view>
					<view class="sub-title">
						<text class="sub-title-left">保质期</text>
						<text class="sub-title-right">6天</text>
					</view>
				</view>
			<!-- 规格结束 -->

			<!-- 商品详情图富文本预留开始 -->
			<view class="img-title">商品详情</view>
			<view class="detail">
				<image src="../../static/images/green-orderlistA.png" class="detail-img"  mode="scallToFill"></image>
			</view>
			<!-- 商品详情图富文本预留结束 -->

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
			<view class="addCart">加入购物车</view>
			<view class="toClear">去结算</view>
		</view>
		<!-- 底部操作栏结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 控制轮播图的哪一项
				currentNum: 1,
				// 控制回到顶部显示与隐藏
				goTopStatus: false
			}
		},
		//监听页面高度(上滑或者下滑)
		onPageScroll(obj) {
			if (obj.scrollTop > 363) {
				return this.goTopStatus = true
			}
			this.goTopStatus = false
		},
		methods: {
			//轮播图切换时获取index
			getCurrentNum(e) {
				this.currentNum = e.detail.current
			},
			//点击回到顶部
			goToTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}
		}
	}
</script>

<style lang="less" scoped>
swiper{
  height:580rpx;

}
swiper-item image{
  width:100%;
  height: 452rpx
}
.currentNum{
  width:60rpx;
  height:36rpx;
  background:rgba(0,0,0,1);
  opacity:0.3;
  border-radius:18rpx;
  color: white;
  font-size:22rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  text-align: center;
  line-height: 36rpx;
  position: absolute;
  top: 520rpx;
  right: 24rpx
}
/* 轮播图详情结束 */
.swiper-info{
  background: white;
  padding-left: 20rpx;
  box-sizing: border-box
}

.swiper-info-title{
  font-size:40rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}

.swiper-info-introduce{
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.share{
  min-width:210rpx;
  height:70rpx;
  background:rgba(253,72,77,1);
  border-radius:36rpx 0px 0px 36rpx;
  line-height: 70rpx;
  text-align: center;
  color: white
}
.price{
  font-size:64rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(253,72,77,1);
}
.price text{
  font-size:32rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(86,86,86,1);
}
.original-price{
  font-size:24rpx;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  text-decoration:line-through;
  color:rgba(102,102,102,1);
  margin-left: 28rpx
}
.mon view{
  display: inline
}

/* 服务样式 */
.server{
  background: white;
  margin-top: 20rpx;
  padding: 20rpx;
  box-sizing: border-box
}
.server view{
  padding: 28rpx 0;
  box-sizing: border-box
}
.title{
  font-size:34rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
.sub-title{
  font-size:24rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(51,51,51,1);
  border-top:1rpx solid rgba(217,217,217,1);
  box-sizing: border-box;
}
.sub-title-left{
  min-width: 130rpx;
  display: inline-block
}
.sub-title-right{
  min-width: 130rpx;
  display: inline-block
}

/* 规格样式 */


/* 详情图样式 */
.detail{
  text-align: center;
  margin-top: 20rpx;
  padding-bottom: 118rpx;
  box-sizing: border-box
}
.img-title{
  font-size:34rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  padding: 32rpx 20rpx;
  box-sizing: border-box;
  float: left;
  background: white;
  width: 750rpx;
  margin-top: 20rpx
}
.detail-img{
  width: 100%;
  display: block;
  height: 5266rpx
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
.addCart{
  width:220rpx;
  height:70rpx;
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(39,149,36,1);
  background:rgba(255,255,255,1);
  border:2rpx solid rgba(39,149,36,1);
  border-radius:36rpx;
  text-align: center;
  line-height: 70rpx;
  align-self: center;
  margin-left: 180rpx
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