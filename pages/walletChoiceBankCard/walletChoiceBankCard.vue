<template>
  <!-- 选择银行卡页面 ming -->
  <view>
    <view class="card" v-for="(item, index) in list" :key="index">
      <view class="left">
        <radio-group @change=checkboxChange>
          <radio :checked="item.checked" :value="item.value" color="#48BC5B"></radio>
        </radio-group>
        <view class="content">
          <view>{{item.type}}</view>
          <view class="num">{{item.card_num}}</view>
        </view>
      </view>
      <view class="right" @click="del(index)">删除</view>
    </view>
		<!-- 添加银行卡区域 -->
		<view class="footer">
			<view class="withdrawals-account">
				<view class="account-box" @click="goWalletBindingCard">
					<view class="box">
						<view class="box-img">
							<image src="/static/images/jiahao.png"></image>
						</view>
						<view>添加银行卡</view>
					</view>
				</view>
			</view>
		</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
					id: 0,
					value: 0,
          type: "农业银行",
					card_num: 12312315,
					checked: true
        },
        {
					id: 1,
					value: 1,
          type: "邮政储蓄",
					card_num: 564864656,
					checked: false
        },
        {
					id: 2,
					value: 2,
          type: "农业银行",
					card_num: 897988989,
					checked: false
        }
      ]
    };
  },
  methods: {
		// 点击删除
    del(index) {
      uni.showModal({
        content: "确定删除吗?",
        success: res => {
          if (res.confirm) {
            this.list.splice(index, 1);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
		},
		// 去绑定银行卡页面
		goWalletBindingCard() {
			uni.navigateTo({
        url: '/pages/walletBindingCard/walletBindingCard'
      })
		},
		checkboxChange(e) {
		for (let i = 0; i < this.list.length; i++) {
			this.list[i].checked = false			
		}
		console.log(e.detail.value)
		this.list[e.detail.value].checked = true
		}
  }
};
</script>

<style lang="less" scoped>
.card {
  margin-top: 20rpx;
  height: 120rpx;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  .left {
    display: flex;
    align-items: center;
    view {
      font-size: 32rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333;
    }
    .content {
      margin-left: 30rpx;
      .num {
        color: #666;
        margin-top: 10rpx;
      }
    }
  }
  .right {
    width: 100rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    font-size: 32rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333;
    border-radius: 50rpx;
    border: 1rpx solid #f1f1f1;
	}
}
.withdrawals-account {
		position: relative;
		margin: 20rpx auto;
		width: 690rpx;
		height: 310rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		.account-box {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 348rpx;
			height: 93rpx;
			background: rgba(72, 188, 91, 1);
			border-radius: 4rpx;
			.box {
				display: flex;
				align-items: center;
				margin: 26rpx 0 0 62rpx;
				font-size: 34rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color:rgba(255,255,255,1);
				.box-img {
					width: 41rpx;
					height: 41rpx;
					background-color: #fff;
					border-radius: 50%;
					margin-right: 11rpx;
					vertical-align: middle;
					 image {
						 width: 100%;
						 height: 100%;
					 }
				}
			}
		}
	}
</style>