<template>
  <view class="container">
    <!-- 头部 -->
    <view class="head">
      <!-- 头部的背景图片 -->
      <image src="/static/images/bg.png"></image>
      <!-- 背景图片上面的内容 -->
      <view class="head-content">
        <!-- 左边 -->
        <view class="content-left">
          <!-- 头像 -->
          <image src="/static/images/head.png"></image>
          <!-- 左边的文字 -->
          <!-- 未登录区域 -->
          <view v-if="false" class="login">立即登录</view>
          <!-- 已登录区域 -->
          <view class="left-text">
            <!-- 用户昵称 -->
            <view class="user">蛙农场用户</view>
            <!-- 手机号码区域 -->
            <view class="tel">
              <!-- 手机标识 -->
              <image src="/static/images/phone.png"></image>
              <!-- 手机号码 -->
              <view class="tel-text">183****1234</view>
            </view>
          </view>
        </view>
        <!-- 右边 -->
        <view class="content-right" @click="goMineUserInformation">
          <view>账户管理</view>
          <image src="/static/images/a.png"></image>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="box">
        <view class="vip w" @click="goVipCard">
          <image src="../../static/images/vip.png" />
          <view>会员卡</view>
        </view>
        <view class="wallet w" @click="goWallet">
          <image src="../../static/images/wallet.png" />
          <view>我的钱包</view>
        </view>
      </view>
      <view class="container-list">
        <view class="list" v-for="(item, index) in list" :key="index" @click="goOther(index)">
          <view class="left">
            <image :src="item.url"></image>
          </view>
          <view class="right">
            <text>{{item.text}}</text>
            <image src="/static/images/arrow-right.png"></image>
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
          url: "/static/images/m1.png",
          text: "我的订单"
        },
        {
          id: 1,
          url: "/static/images/m2.png",
          text: "我的报名"
        },
        {
          id: 2,
          url: "/static/images/m3.png",
          text: "售后服务"
        },
        {
          id: 3,
          url: "/static/images/m4.png",
          text: "推荐有礼"
        },
        {
          id: 4,
          url: "/static/images/m5.png",
          text: "地址管理"
        },
        {
          id: 5,
          url: "/static/images/m6.png",
          text: "关于我们"
        },
        {
          id: 6,
          url: "/static/images/m7.png",
          text: "常见问题"
        },
        {
          id: 7,
          url: "/static/images/m8.png",
          text: "意见反馈"
        },
        {
          id: 8,
          url: "/static/images/m9.png",
          text: "设置"
        }
      ]
    };
  },
  methods: {
    // 去会员卡页面
    goVipCard() {
      uni.navigateTo({
        url: "/pages/vipCard/vipCard"
      });
    },
    // 去我的钱包页面
    goWallet() {
      uni.navigateTo({
        url: "/pages/wallet/wallet"
      });
    },
    // 去用户信息页面
    goMineUserInformation() {
      uni.navigateTo({
        url: "/pages/mineUserInformation/mineUserInformation"
      });
    },
    // 判断去不同的页面
    goOther(index) {
      // 去我的订单页面
      if (index === 0) {
        return uni.navigateTo({
          url: "/pages/myOrder/myOrder"
        });
        // 去推荐有礼页面
      } else if (index === 3) {
        return uni.navigateTo({
          url: "/pages/mineRecommendCourtesy/mineRecommendCourtesy"
        });
        // 去设置页面
      } else if (index === 8) {
        return uni.navigateTo({
          url: "/pages/mineSetUp/mineSetUp"
        });
        // 去地址管理页面
      } else if (index === 4) {
        return uni.navigateTo({
          url: "/pages/greenAddrManage/greenAddrManage"
        });
        // 去售后服务页面
      } else if (index === 2) {
        return uni.navigateTo({
          url: "/pages/mineAfterSaleService/mineAfterSaleService"
        });
      }
      // 去常见问题页面
      else if (index === 6) {
        return uni.navigateTo({
          url: "/pages/mineCommonProblem/mineCommonProblem"
        });
        // 去关于我们页面
      } else if (index === 5) {
        return uni.navigateTo({
          url: "/pages/mineAboutUs/mineAboutUs"
        });
      }
      // 去意见反馈页面
      else if (index === 7) {
        return uni.navigateTo({
          url: "/pages/mineFeedback/mineFeedback"
        });
      }
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.container {
  position: relative;
  background: #f2f2f2;
}

// 头部
.head {
  font-family: Source Han Sans CN;
  font-weight: 400;
  color:rgba(255,255,255,1);
  // 头部的背景图片
  > image {
    height: 305rpx;
    width: 100%;
  }
  // 背景图片上面的内容
  .head-content {
    width: 100%;
    position: absolute;
    top: 56rpx;
    padding-left: 33rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 左边
    .content-left {
      display: flex;
      // 头像
      > image {
        width: 106rpx;
        height: 106rpx;
        margin-right: 36rpx;
      }
      // 左边的文字 已登录区域
      .left-text {
        // 用户昵称
        .user {
          font-size: 28rpx;
          font-weight: 500;
        }
        // 手机号码区域
        .tel {
          display: flex;
          align-items: center;
          margin-top: 26rpx;
          // 手机标书
          > image {
            width: 17rpx;
            height: 23rpx;
          }
          // 手机号码
          .tel-text {
            font-size: 26rpx;
          }
        }
      }
      // 未登录区域
      .login {
        font-size: 28rpx;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color:rgba(255,255,255,1);
        margin-top: 32rpx;
      }
    }
    // 右边
    .content-right {
      width: 130rpx;
      height: 50rpx;
      display: flex;
      line-height: 50rpx;
      text-align: center;
      border: 2rpx solid #fff;
      border-right: transparent;
      border-radius: 25rpx 0 0 25rpx;
      > view {
        font-size: 24rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color:rgba(255,255,255,1);
        margin-left: 8rpx;
      }
      > image {
        width: 12rpx;
        height: 22rpx;
        vertical-align: middle;
        margin-top: 14rpx;
        margin-left: 10rpx;
      }
    }
  }
}
.footer {
  position: absolute;
  top: 216rpx;
  left: 20rpx;
  background: rgba(255, 255, 255, 1);
  width: 710rpx;
  border-radius: 20rpx;
}
.box {
  width: 710rpx;
  height: 126rpx;
  position: absolute;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 1rpx 5rpx 0rpx rgba(204, 204, 204, 0.35);
  border-radius: 20rpx;
  z-index: 9;
  .w {
    width: 50%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    > view {
      font-size: 32rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(51,51,51,1);
    }
  }
}
.container-list {
  position: absolute;
  width: 710rpx;
  top: 126rpx;
  background-color: #fff;
}
.list {
  display: flex;
  justify-content: space-between;
  height: 100rpx;
  line-height: 80rpx;
  padding: 0 30rpx;
  .left {
    image {
      width: 36rpx;
      height: 42rpx;
      vertical-align: middle;
      margin-right: 26rpx;
    }
  }
  .right {
    width: 90%;
    border-bottom: 2rpx solid rgba(220,220,220,1);
    text {
      font-size: 32rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    image {
      margin-top: 40rpx;
      float: right;
      width: 12rpx;
      height: 22rpx;
    }
  }
}
.box image {
  width: 35rpx;
  height: 35rpx;
  margin-right: 20rpx;
  vertical-align: middle;
}

.phone {
  display: flex;
  align-items: center;
}

.phone image {
  width: 17rpx;
  height: 23rpx;
  margin: 0 5rpx 0 40rpx;
}
.phone text {
  margin: 0 !important;
}
</style>
