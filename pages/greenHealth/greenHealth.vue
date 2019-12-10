<template>
	<view class="container">
		<!-- VIP卡片开始 -->
		<view class="card">
			<image src="/static/images/vip-bac@2x.png"></image>
			<view class="card-con flex-row">
				<view class="left">
					<image src="../../static/images/vip-header@2x.png" class="header"></image>
				</view>
				<view class="right">
					<view class="name">小蛙</view>
					<view class="guanli flex-row">
						<view class="guanli-left">年卡会员</view>
						<view class="guanli-right" @click="toVipManage">管理</view>
					</view>
					<view class="time">到期时间2019-12-01</view>
				</view>
			</view>
		</view>
		<!-- VIP卡片结束 -->

		<!-- 会员商品列表开始 -->
		<view class="title">会员套餐</view>
		<view class='goods-list-box'>
			<view class="goods-list flex-row">
				<view class="left" @click="toVipGoodsDetailsInfo">
					<image src="../../static/images/img-goodsA@2x.png"></image>
				</view>
				<view class="right flex-column">
					<view class="top">
						<view class="top-left">年卡会员套餐</view>
						<view class="top-right">每月4次 共48次配送</view>
					</view>
					<view class="bottom flex-row">
						<view class="bot-left">
							<view class="original-price">原价：¥19999 拷贝</view>
							<view class="vip-price flex-row">
								<view class="vip-price-left">¥299</view>
								<view class="vip-price-right">年卡会员</view>
							</view>
						</view>
						<view class="bot-right flex-row">
							<view class="give">赠送好友</view>
							<view class="buy">购买</view>
						</view>
					</view>
				</view>
			</view>

			<view class="goods-list flex-row">
				<view class="left" @click="toVipGoodsDetailsInfo">
					<image src="../../static/images/img-goodsA@2x.png"></image>
				</view>
				<view class="right flex-column">
					<view class="top">
						<view class="top-left">年卡会员套餐</view>
						<view class="top-right">每月4次 共48次配送</view>
					</view>
					<view class="bottom flex-row">
						<view class="bot-left">
							<view class="original-price">原价：¥19999 拷贝</view>
							<view class="vip-price flex-row">
								<view class="vip-price-left">¥299</view>
								<view class="vip-price-right">年卡会员</view>
							</view>
						</view>
						<view class="bot-right flex-row">
							<view class="give">赠送好友</view>
							<view class="buy">购买</view>
						</view>
					</view>
				</view>
			</view>

			<view class="goods-list flex-row">
				<view class="left" @click="toVipGoodsDetailsInfo">
					<image src="../../static/images/img-goodsA@2x.png"></image>
				</view>
				<view class="right flex-column">
					<view class="top">
						<view class="top-left">年卡会员套餐</view>
						<view class="top-right">每月4次 共48次配送</view>
					</view>
					<view class="bottom flex-row">
						<view class="bot-left">
							<view class="original-price">原价：¥19999 拷贝</view>
							<view class="vip-price flex-row">
								<view class="vip-price-left">¥299</view>
								<view class="vip-price-right">年卡会员</view>
							</view>
						</view>
						<view class="bot-right flex-row">
							<view class="give">赠送好友</view>
							<view class="buy">购买</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 会员商品列表结束 -->

		<!-- 更多开始 -->
		<view class="title">更多绿色商品</view>
		<view class="more list-box">
				<view class="goods-more-list">
					<image src="../../static/images/vip-goodsB@2x.png" @click="toGoodsDetailsInfo"></image>
					<view class="info-title">有机宽豆现摘现发500g</view>
					<view class="info-subtitle">500g</view>
					<view class="flex-row share">
						<view class="share-left">分享立赚 ¥3</view>
						<view><image src="../../static/images/green-share.png" class="icon-image"></image></view>
					</view>
					
					<view  class="info-subtitle">￥29.90</view>
					<view class="flex-row">
						<view class="flex-row">
							<view class="vip-price-left">￥19.90</view>
							<view class="vip-price-right">会员价</view>
						</view>
						<view><image src="../../static/images/vip-add@2x.png" class="icon-image"></image></view>
					</view>
				</view>

				<view class="goods-more-list">
					<image src="../../static/images/vip-goodsB@2x.png" @click="toGoodsDetailsInfo"></image>
					<view class="info-title">有机宽豆现摘现发500g</view>
					<view class="info-subtitle">500g</view>
					<view class="flex-row share">
						<view class="share-left">分享立赚 ¥3</view>
						<view><image src="../../static/images/green-share.png" class="icon-image"></image></view>
					</view>
					
					<view  class="info-subtitle">￥29.90</view>
					<view class="flex-row">
						<view class="flex-row">
							<view class="vip-price-left">￥19.90</view>
							<view class="vip-price-right">会员价</view>
						</view>
						<view><image src="../../static/images/vip-add@2x.png" class="icon-image"></image></view>
					</view>
				</view>

				<view class="goods-more-list">
					<image src="../../static/images/vip-goodsB@2x.png" @click="toGoodsDetailsInfo"></image>
					<view class="info-title">有机宽豆现摘现发500g</view>
					<view class="info-subtitle">500g</view>
					<view class="flex-row share">
						<view class="share-left">分享立赚 ¥3</view>
						<view><image src="../../static/images/green-share.png" class="icon-image"></image></view>
					</view>
				
					<view  class="info-subtitle">￥29.90</view>
					<view class="flex-row">
						<view class="flex-row">
							<view class="vip-price-left">￥19.90</view>
							<view class="vip-price-right">会员价</view>
						</view>
						<view><image src="../../static/images/vip-add@2x.png" class="icon-image"></image></view>
					</view>
				</view>
		</view>
		<!-- 更多结束 -->

		<!-- 操作栏悬浮穿开始 -->
		<suspension></suspension>
		<!-- 操作栏悬浮穿结束 -->

		<!-- 点击查看更多开始 -->
		<view class="to-more little-text">
			<view class="more-tag flex-row" @click="goDetails">
				<view>查看更多</view>
				<view><image src="../../static/images/green-more-top.png"></image></view>
			</view>
			<view class="more-tag flex-row">
				<view>查看更多</view>
				<view><image src="../../static/images/green-more-bottom.png"></image></view>
			</view>
		</view>
		<!-- 点击查看更多结束 -->

		<!-- 底部操作栏开始 -->
		<!-- <view class="user-defined flex-row">
			<view>
				<image src="../../images/vip-add@2x.png" class="cart"></image>
			</view>
			<view  class="vip-price-left vertical-center">￥35.45</view>
			<view class="info-subtitle vertical-center">已优惠6.00元</view>
			<view class="toClear">去结算</view>
		</view> -->
		<!-- 底部操作栏结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//点击会员管理
			toVipManage() {
				uni.navigateTo({
					url: '/pages/vipManage/vipManage'
				});
			},
			//点击商品图片跳转到商品详情页
			toGoodsDetailsInfo() {
				uni.navigateTo({
					url: '/pages/goodsDetailsInfo/goodsDetailsInfo'
				});
			},
			// 去年卡会员套餐商品详情页面
			toVipGoodsDetailsInfo() {
				uni.navigateTo({
					url: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo'
				});
			},
			// 去购物车
			goGreenCart() {
				uni.switchTab({
					url: '/pages/greenCart/greenCart'
				});
			},
			// 去查看更多页面
			goDetails() {
				uni.navigateTo({
					url: '/pages/details/details'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.card {
	position: relative;
  height: 214rpx;
  width: 690rpx;
  margin: 0 auto;
  border-radius: 20rpx 20rpx 0rpx 0rpx;
}

.card-con {
	position: absolute;
	top: 0;
	left: 40rpx;
  margin: 0 auto;
  width: 630rpx;
  height: 214rpx;
  color: white;
}

.card-con .left {
  align-self: center;
}

.header {
  width: 112rpx;
  height: 120rpx;
}

.card-con .right {
  align-self: center;
}

.name {
  font-size: 34rpx;
  font-weight: bold;
}

.guanli {
  width: 450rpx;
  height: 50rpx;
}

.guanli-left {
  width: 120rpx;
  height: 34rpx;
  border: 2rpx solid rgba(254, 200, 37, 1);
  border-radius: 17rpx;
  text-align: center;
  font-size: 24rpx;
  font-weight: bold;
  color: rgba(254, 200, 37, 1);
  align-self: center;
}

.guanli-right {
  text-align: center;
  width: 126rpx;
  height: 50rpx;
  background: rgba(221, 178, 48, 1);
  box-shadow: 0px 0px 40rpx 0px rgba(186, 159, 77, 0.2);
  border-radius: 25rpx;
  align-self: center;
  font-size: 30rpx;
  font-weight: bold;
  line-height: 50rpx;
}

.time {
  font-size: 24rpx;
  font-family: Source Han Sans CN;
  font-weight: bold;
}

/* 卡片样式结束 */

/* 商品列表开始 */

.title {
  font-size: 40rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  padding: 30rpx 30rpx;
  box-sizing: border-box;
}

.goods-list-box {
  width: 750rpx;
  height: auto;
  padding: 20rpx 0;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
}

.goods-list {
  height: 268rpx;
  width: 690rpx;
  margin: 0 auto;
  margin-bottom: 28rpx
}

.goods-list>.left image {
  width: 200rpx;
  height: 198rpx;
}

.goods-list .right {
  width: 494rpx;
  height: 218rpx;
  margin-left: 26rpx;
}

.top-left {
  font-size: 32rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

.top-right {
  font-size: 26rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.original-price {
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.vip-price-left {
  font-size: 32rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 59, 57, 1);
  align-self: center
}

.vip-price-right {
  font-size: 20rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  align-self: center
}

.give {
  width: 119rpx;
  height: 48rpx;
  margin-right: 14rpx;
  border: 1rpx solid rgba(39, 149, 36, 1);
  border-radius: 10rpx;
  text-align: center;
  line-height: 46rpx;
  font-size: 26rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(39, 149, 36, 1);
}

.buy {
  width: 79rpx;
  height: 48rpx;
  background: rgba(39, 149, 36, 1);
  border-radius: 10rpx;
  font-size: 26rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 48rpx;
  text-align: center;
}
  
/* 商品列表结束 */

/* 更过商品列表开始 */

.more {
  background: rgba(242, 242, 242, 1);
  padding-bottom: 10rpx;
  box-sizing: border-box;
  padding-left: 20rpx;
  padding-right: 10rpx
  }

.goods-more-list {
  width:350rpx;
  height:570rpx;
  background: rgba(255, 255, 255, 1);
  padding: 40rpx 30rpx;
  box-sizing: border-box;
  border-radius:10px;
  margin-right: 10rpx;
  margin-bottom: 20rpx
}

.goods-more-list>image {
  width: 250rpx;
  height: 166rpx;
  display: block;
  margin: 0 auto;
}

.icon-image {
  width: 50rpx;
  height: 50rpx;
}

.share {
  font-size: 24rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 59, 57, 1);
  margin-top: 30rpx;
}

.share-left {
  width: 140rpx;
  height: 36rpx;
  background: rgba(255, 255, 255, 1);
  border: 1rpx solid rgba(255, 59, 57, 1);
  border-radius: 4rpx;
  text-align: center;
  line-height: 36rpx;
}


/* 操作悬浮样式开始 */
.hover{
  position: fixed;
  bottom: 206rpx;
  left: 28rpx
}
.hover view{
  padding: 10rpx 0;
  box-sizing: border-box
}
.hover image{
  width:90rpx;
  height:90rpx;
}

/* 更多样式开始 */
.to-more{
  width: 120rpx;
  height: 56rpx;
  margin: 0 auto;
  margin-bottom: 120rpx
}
.more-tag{
  width: 120rpx;
  height: 28rpx;
}
.more-tag image{
  width:20rpx;
  height:20rpx;
  align-self: center
}
.more-tag view{
  align-self: center;
}
// 悬浮窗样式
.suspension {
	position: fixed;
	bottom: 260rpx;
	left: 30rpx;
	z-index: 9;
	image {
		width: 100%;
		height: 100%;
	}
	.share {
		margin-bottom: 30rpx;
	}
	.cart {
		position: relative;
		.tag {
			width: 34rpx;
			height: 34rpx;
			line-height: 34rpx;
			text-align: center;
			color: #fff;
			border-radius:50%;
			background-color: #FC5854;
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	.w {
		width: 90rpx;
		height: 90rpx;
	}
}
/* 底部功能栏开始 */
/* .user-defined {
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
  width: 94rpx;
  height: 94rpx;
}

.toClear {
  width: 220rpx;
  height: 98rpx;
  background: rgba(39, 149, 36, 1);
  text-align: center;
  line-height: 98rpx;
} */

</style>