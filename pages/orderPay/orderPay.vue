<template>
<!--pages/orderPay/orderPay.wxml-->
	<view class="container">
		<!-- 金额详情开始 -->
		<view class="price">
			<view class="con">
				<view class="top">应付金额</view>
				<view class="bottom">￥1.26</view>
			</view>
		</view>
		<!-- 金额详情结束 -->

		<!-- 支付方式开始 -->
		<view class="payWay">
			<view class="title info-three-title">选择支付方式</view>
			<view class="flex-row">
				<view class="flex-row pay-way">
					<view><image src="../../static/images/wx-pay.png"></image></view>
					<view>微信支付</view>
				</view>
				<image src="../../static/images/checked.png"  class="check"></image>
			</view>
			
		</view>
		<!-- 支付方式结束  -->

		<!-- 支付按钮 -->
		<view class="btn-default-longrad btn" @click="payment">微信支付￥1.26</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
      // 去支付成功页面
			goOrderPaySuccess() {
        uni.navigateTo({
          url: "/pages/orderPaySuccess/orderPaySuccess"
        });
      },
      payment() {
        var that = this;
        // var pnum = that.data.pnum
        wx.showModal({
          title: '确认购买该商品',
          confirmText: '支付',
          confirmColor: "#39b5de",
          content: "您将以原价购买本商品，确认支付？",
          success: function (res) {
            if (res.confirm) {// 下单
              wx.showLoading({
                title: '加载中...',
                mask: true
              })
              // 微信支付购买
              wx.request({
                url: 'http://hosele.ngrok2.xiaomiqiu.cn/WNC/wxlogin/pay',
                // url: 'http://192.168.1.107:8188/ludanxinxi-web/api/order/toCartBuyGoods',
                method: 'post',
                header: {
                  'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
                },
                data: {
                  outTradeNo: '1234567891111',
                  body: '商品',
                  details: '111',
                  money: 100,
                  openid: 'oA9iQ4hFdc6J5VxjZhfbYMhvNv6M',
                },
                dateType: 'json',
                success: function (res) {
                  console.log(res)
                  if (res.data.success) {
                      wx.requestPayment({
                        'timeStamp': res.data.data.timeStamp,
                        'nonceStr': res.data.data.nonceStr,
                        'package': res.data.data.package,
                        'signType': 'MD5',
                        'paySign': res.data.data.paySign,
                        'success': function (res) {
                          console.log(res)
                          wx.showLoading({
                            title: '加载中...',
                            mask: true,
                          })
                          // wx.request({
                          //   url: app.globalData.serurl + '/api/bargain/getBargainBack',
                          //   // url: 'http://192.168.1.107:8188/ludanxinxi-web//api/order/toCartBuyBack',
                          //   method: 'POST',
                          //   header: {
                          //     'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
                          //   },
                          //   data: {
                          //     goodsId: that.data.goodsInfo.goods_id,
                          //     bid: that.data.bids,
                          //     orderNum: that.data.orderNum,
                          //     openid: that.data.openid
                          //   },
                          //   dateType: 'json',
                          //   success: function (res) {
                          //     console.log(that.data.orderNum)
                          //     console.log(res.data)
                          //     wx.hideLoading()
                          //     if (res.data.code == '200') {
                          //       wx.showModal({
                          //         title: '线上支付成功',
                          //         content: "支付成功",
                          //         showCancel: false,
                          //         confirmColor: "#39b5de",
                          //         success: function (res) {
                          //           wx.navigateTo({
                          //             url: '../myPayWait/myPayWait?myOrderId=' + 2,
                          //           })
                          //         }
                          //       })
                          //     }
                          //     else {
                          //       wx.showModal({
                          //         title: '支付失败',
                          //         content: '网络连接超时',
                          //         showCancel: false,
                          //         confirmColor: "#39b5de",
                          //         success: function (res) {
                          //           if (res.confirm) {
                          //             wx.navigateTo({
                          //               url: '../myPayWait/myPayWait?myOrderId=' + 1,
                          //             })
                          //           }
                          //         }
                          //       })
                          //     }


                          //   },
                          //   fail: function () {
                          //     wx.showToast({
                          //       title: '网络连接超时',
                          //       image: '/pages/imgs/icon/error.png',
                          //       mask: true,
                          //       duration: 3000,
                          //       success: function () {
                          //         wx.navigateTo({
                          //           url: '../myPayWait/myPayWait?myOrderId=' + 1,
                          //         })
                          //       }
                          //     })
                          //   },
                          //   complete: function () {
                          //   }
                          // })
                        },
                        'fail': function (resf) {
                          console.log(resf)
                          wx.showToast({
                            title: '已取消支付',
                            image: '/pages/imgs/icon/error.png',
                            mask: true,
                            duration: 2000,
                            success: function () {
                              wx.navigateTo({
                                url: '../myPayWait/myPayWait?myOrderId=' + 1,
                              })
                            }
                          })
                          // setTimeout(function () {
                          // }, 2000)
                        }
                      })
                  } 
                },
                fail: function () {
                  wx.hideLoading()
                }
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
		}
	}
</script>

<style lang="less" scoped>
.price{
  width:750rpx;
  height:240rpx;
  background:rgba(255,255,255,1);
  margin: 20rpx 0;
  position: relative
}
.con{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -85rpx;
  margin-top: -60rpx
}
.top{
  font-size:36rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(2,2,2,1);
}
.bottom{
  font-size:44rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(2,2,2,1);
}


/* 支付方式样式开始 */

.payWay{
  height:176rpx;
  background:rgba(255,255,255,1);
  padding-right: 20rpx;
  box-sizing: border-box;
  align-self: center
}
.title{
  padding: 24rpx 34rpx;
  box-sizing: border-box
}
.payWay image{
  width:48rpx;
  height:42rpx;
}
.pay-way{
  width: 280rpx;
  padding: 0 34rpx;
  box-sizing: border-box;
  margin-top: 20rpx
}
.check{
  align-self: center
}
.btn{
  color:white;
  font-size:30rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  margin-top: 60rpx
}
</style>