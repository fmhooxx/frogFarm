<template>
<!--pages/orderDetails/orderDetails.wxml-->
	<view class="container">
	<!-- 订单详情头部开始 -->
		<view class="order-header">
			<view class="order-title level-center" style="line-height:30rpx">
				<image src="../../static/images/tips.png" class="tips"></image>
				<text>已退款</text>
			</view>
		</view>
		<view class="addr-info">
				<view class="info-small-title">小米 1234567890</view>
				<view class="info-small-title-sub">合肥市庐阳区银城公寓</view>
		</view>
		<!-- 订单详情头部结束 -->
		
		<!-- 订单列表展示开始 -->
		<view class="order-list">
			<view class="order-list-info flex-row">
				<view class="list-left">
					<image src="../../static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">红水蜜桃500g</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>

			<view class="order-list-info flex-row">
				<view class="list-left">
					<image src="../../static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">红水蜜桃500g</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>
		</view>
		<!-- 订单列表展示结束 -->

		<view class="info-title bei-title">订单备注</view>

		<!-- 订单备注开始 -->
		<view class="con-info">
			<view class="flex-row info-title con-list">
				<view>商品金额</view>
				<view>89.7</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>会员折扣</view>
				<view>7折</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>促销优惠</view>
				<view>-0.54</view>
			</view>
			<view class="total">
				<text class="info-title">合计：</text>
				<text class="price">￥62.6</text>
			</view>
		</view>
		<!-- 订单备注结束 -->

		<!-- 订单详情开始 -->
		<view class="info">
			<view>订单编号：101111231346</view>
			<view>订单类型：线上订单</view>
			<view>下单时间：2019-10-16 13:14:49</view>
			<view>支付时间：2019-10-16 13:15:00</view>
			<view>支付方式：微信</view>
		</view>
		<!-- 订单详情结束 -->
		<!-- <view class="geduan"></view> -->
		<!-- 底部操作栏 -->
		<!-- 已完成状态 -->
		<view class="footer">
			<view @click="delOrder">删除订单</view>
			<view>再次购买</view>
		</view>
		<!-- 待取货状态 -->
		<!-- <view class="footer">
			<view>退款</view>
			<view class="code">取货码</view>
		</view> -->
		<!-- 底部操作栏 -->
		<!-- 弹框区域 -->
		<BasePopup ref="popup" type="center">
			<view class="box" v-if="isBox">
				<view class="box-text">好货不等人，确认退款</view>
				<view class="choice">
					<view @click="cancel" :class="{ active: isCancel }">取消</view>
					<view @click="determine" :class="{ active: isDetermine }">确认</view>
				</view>
			</view>
			<view v-if="isReplace" class="box">
				<view class="box-content">订单已退款，退款金额将在3-5 个工作日内返还到您的支付账户</view>
				<view class="know" @click="closeKnow">知道了</view>
			</view>
		</BasePopup>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				// 控制确定按钮是否显示绿色
				isDetermine: false,
				// 控制取消按钮是否显示绿色
				isCancel: false,
				// 控制第一个弹框内容的显示与隐藏
				isBox: true,
				// 控制第二个弹框内容的显示与隐藏
				isReplace: false
			}
		},
		methods: {
			// 点击删除订单 打开弹框
			delOrder() {
				this.$refs.popup.open()
			},
			// 点击了取消按钮
			cancel() {
				this.isCancel = !this.isCancel
				// 关闭弹框
				this.$refs.popup.close()
			},
			// 点击了确定按钮
			determine() {
				this.isDetermine = !this.isDetermine
				this.isBox = !this.isBox
				this.isReplace = !this.isReplace
			},
			// 点击知道了 关闭弹框
			closeKnow() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="less" scoped>
.order-header{
  width:750rpx;
  height:162rpx;
  background:#279524

}
.tips{
  width:36rpx;
  height:36rpx;
  background:#279524;
}
.level-center image{
  padding: 0 10rpx;
}
.level-center text{
  padding: 0 10rpx;
}

.addr-info{
  width:710rpx;
  height:150rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  padding: 30rpx 18rpx;
  box-sizing: border-box;
  position: absolute;
  top: 80rpx;
  left: 50%;
  margin-left: -355rpx
}
.addr-info view{
  line-height: 48rpx
}


/* 订单列表展示 */
.order-list{
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin:0 auto;
  margin-top: 90rpx
}
.list-right{
  width: 580rpx;
  padding: 0 20rpx
}
.list-left image{
  width:96rpx;
  height:99rpx;
  border:1rpx solid rgba(229,229,229,1);
}
.order-list-info{
  padding: 20rpx 36rpx;
}

/* 订单备注样式开始 */
.bei-title{
  width:710rpx;
  height:88rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  line-height: 88rpx;
  margin-top: 20rpx;
  padding-left: 30rpx;
  box-sizing: border-box
}
.con-info{
  width:710rpx;
  height:360rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto
}
.con-info{
  padding: 32rpx 30rpx;
  box-sizing: border-box;
  margin-top: 20rpx
}
.con-list{
  padding-bottom: 40rpx
}
.total{
  float: right
}
.price{
  font-size:32rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:#FF4543;
}
.info{
  width:710rpx;
  height:340rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  margin-top: 20rpx;
  padding: 34rpx 32rpx;
  box-sizing: border-box;
}
// .geduan{
//   background:rgba(242,242,242,1);
//   height: 174rpx
// }
.info view{
  margin-bottom: 20rpx;
  font-size:26rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.footer {
	margin-top: 32rpx;
	display: flex;
	height: 98rpx;
	text-align: right;
	background:rgba(255,255,255,1);
	float: right;
	padding-left: 25rpx;
	box-sizing: border-box;
	> view {
		width: 140rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background:rgba(255,255,255,1);
		border: 2rpx solid rgba(229, 229, 229, 1);
		border-radius: 25rpx;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight:400;
		color:rgba(102,102,102,1);
		margin: 0 25rpx;
	}
	.code {
		border: 2rpx solid rgba(39, 149, 36, 1);
		color:rgba(39,149,36,1);
	}
}
	// 弹框区域
.box {
	width: 560rpx;
	height: 240rpx;
	box-sizing: border-box;
	background:rgba(255,255,255,1);
	// 第一个弹框的内容样式
	.box-text {
	font-size: 36rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	text-align: center;
	margin: 50rpx 0 84rpx 0;
	color:rgba(102,102,102,1);
	}
	.choice {
		display: flex;
		justify-content: space-around;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color:rgba(51,51,51,1);
		.active {
			color:rgba(39,149,36,1) !important;
		}
	}
	// 第二个弹框的内容样式
	.box-content {
		width: 497rpx;
		height: 82rpx;
		font-size: 35rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color:rgba(134,134,134,1);
		line-height: 48rpx;
		margin: 54rpx auto
	}
	.know {
		width: 108rpx;
		height: 34rpx;
		margin: auto;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color:rgba(102,102,102,1);
		line-height: 36rpx;
	}
}
</style>