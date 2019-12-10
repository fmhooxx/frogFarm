<template>
  <!-- 绿色健康订单页面 ming -->
  <view class="order">
    <!-- tab栏数据 -->
    <view class="tabs">
      <view
        class="tabs-item"
        v-for="(item, index) in tabs"
        :key="index"
        :class="current == index ? 'active' : ''"
        @click="tabsChange(index)"
      >{{item.uname}}</view>
    </view>
    <!-- tab 栏下面的数据 -->
    <view class="list">
      <!-- 待发货状态 -->
      <view class="list-item" @click="goGreenOrderDetails">
        <!-- 头部 时间 状态样式 -->
        <view class="item-title">
          <view>2019-10-16 16:12:17</view>
          <view>待发货</view>
        </view>
        <!-- 放置图片的区域 -->
        <view class="item-img-box">
          <image src="/static/images/order-img.png"></image>
          <image src="/static/images/green-orderlistA.png"></image>
        </view>
        <!-- 商品件数以及金额 -->
        <view class="item-content">
          <text class="one">共 2 件商品 实付</text>
          <text class="two">￥</text>
          <text class="three">9.</text>
          <text class="four">00</text>
        </view>
        <!-- 修改地址 -->
        <view class="modify">修改地址</view>
      </view>
      <!-- 待收货状态 -->
      <view class="list-item">
        <!-- 头部 时间 状态样式 -->
        <view class="item-title">
          <view>2019-10-16 16:12:17</view>
          <view>待收货</view>
        </view>
        <!-- 放置图片的区域 -->
        <view class="item-img-box">
          <image src="/static/images/order-img.png"></image>
          <image src="/static/images/green-orderlistA.png"></image>
        </view>
        <!-- 商品件数以及金额 -->
        <view class="item-content">
          <text class="one">共 2 件商品 实付</text>
          <text class="two">￥</text>
          <text class="three">9.</text>
          <text class="four">00</text>
        </view>
        <!-- 底部区域 待支付区域 -->
        <view class="footer">
          <view>客服介入</view>
          <view class="logistics">查看物流</view>
          <view class="confirm">确认收货</view>
        </view>
      </view>
      <!-- 待支付状态 -->
      <view class="list-item" @click="goGreenStayPayment">
        <!-- 头部 时间 状态样式 -->
        <view class="item-title">
          <view>2019-10-16 16:12:17</view>
          <view>待支付</view>
        </view>
        <!-- 放置图片的区域 -->
        <view class="item-img-box">
          <image src="/static/images/order-img.png"></image>
          <image src="/static/images/green-orderlistA.png"></image>
        </view>
        <!-- 商品件数以及金额 -->
        <view class="item-content">
          <text class="one">共 2 件商品 实付</text>
          <text class="two">￥</text>
          <text class="three">9.</text>
          <text class="four">00</text>
        </view>
        <!-- 底部区域 -->
        <view class="payment">立即支付</view>
      </view>
      <!-- 已完成状态 -->
      <view class="list-item">
        <!-- 头部 时间 状态样式 -->
        <view class="item-title">
          <view>2019-10-16 16:12:17</view>
          <view>已完成</view>
        </view>
        <!-- 放置图片的区域 -->
        <view class="item-img-box">
          <image src="/static/images/order-img.png"></image>
          <image src="/static/images/green-orderlistA.png"></image>
        </view>
        <!-- 商品件数以及金额 -->
        <view class="item-content">
          <text class="one">共 2 件商品 实付</text>
          <text class="two">￥</text>
          <text class="three">9.</text>
          <text class="four">00</text>
        </view>
        <!-- 再次购买区域 -->
        <view class="modify">再次购买</view>
      </view>
      <!-- 已退款状态 -->
      <view class="list-item">
        <!-- 头部 时间 状态样式 -->
        <view class="item-title">
          <view>2019-10-16 16:12:17</view>
          <view>已退款</view>
        </view>
        <!-- 放置图片的区域 -->
        <view class="item-img-box">
          <image src="/static/images/order-img.png"></image>
          <image src="/static/images/green-orderlistA.png"></image>
        </view>
        <!-- 商品件数以及金额 -->
        <view class="item-content">
          <text class="one">共 2 件商品 实付</text>
          <text class="two">￥</text>
          <text class="three">9.</text>
          <text class="four">00</text>
        </view>
        <!-- 已退款区域 -->
        <view class="modify">已退款</view>
      </view>
      <!-- 已取消状态 -->
      <view class="list-item">
        <!-- 头部 时间 状态样式 -->
        <view class="item-title">
          <view>2019-10-16 16:12:17</view>
          <view>已取消</view>
        </view>
        <!-- 放置图片的区域 -->
        <view class="item-img-box">
          <image src="/static/images/order-img.png"></image>
          <image src="/static/images/green-orderlistA.png"></image>
        </view>
        <!-- 商品件数以及金额 -->
        <view class="item-content">
          <text class="one">共 2 件商品 实付</text>
          <text class="two">￥</text>
          <text class="three">9.</text>
          <text class="four">00</text>
        </view>
        <!-- 再次购买 -->
        <view class="modify">再次购买</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // tab 栏数据
      tabs: [
        {
          uname: "全部"
        },
        {
          uname: "待付款"
        },
        {
          uname: "待发货"
        },
        {
          uname: "待收货"
        },
        {
          uname: "已完成"
        }
      ],
      // 默认选中的那一项
      current: 0
    };
  },
  methods: {
    // 点击 tab 栏数据
    tabsChange(index) {
      this.current = index;
    },
    // 去绿色健康订单的后续其(退款、取消、已完成、待收货、待发货、)他页面
    goGreenOrderDetails() {
      uni.navigateTo({
        url: "/pages/greenOrderDetails/greenOrderDetails"
      });
    },
    goGreenStayPayment() {
      uni.navigateTo({
        url: "/pages/greenStayPayment/greenStayPayment"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.order {
  // tab 选中项的样式
  .active {
    color: rgba(39, 149, 36, 1) !important;
    border-bottom: 4rpx solid rgba(39, 149, 36, 1);
  }
  // tab 栏基本样式
  .tabs {
    display: flex;
    height: 86rpx;
    line-height: 86rpx;
    margin-bottom: 20rpx;
    // tab 栏数据样式
    .tabs-item {
      font-size: 30rpx;
      width: 90rpx;
      margin: 0 28rpx;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
  // tab 栏下面数据
  .list {
    .list-item {
      padding: 30rpx 28rpx 30rpx 28rpx;
      height: 425rpx;
      background: rgba(255, 255, 255, 1);
      font-size: 24rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: right;
      border-bottom: 20rpx;
      // 头部 时间 状态样式
      .item-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40rpx;
      }
      // 放置图片的区域
      .item-img-box {
        margin: auto;
        width: 710rpx;
        height: 170rpx;
        background: rgba(247, 247, 247, 1);
        border-radius: 10rpx;
        padding: 30rpx;
        box-sizing: border-box;
        text-align: left;
        image {
          width: 110rpx;
          height: 110rpx;
          margin-right: 22rpx;
        }
      }
      // 商品件数以及金额
      .item-content {
        font-family: Microsoft YaHei;
        font-weight: bold;
        margin: 31rpx 4rpx 44rpx 0;
        color: #333;
        .one {
          font-size: 24rpx;
          color: #666;
          font-weight: 400;
        }
        .two {
          font-size: 20rpx;
        }
        .three {
          font-size: 26rpx;
        }
        .four {
          font-size: 20rpx;
        }
      }
      // 修改地址
      .modify {
        float: right;
        width: 150rpx;
        height: 56rpx;
        line-height: 56rpx;
        text-align: center;
        background:rgba(255,255,255,1);
        border: 2rpx solid rgba(229, 229, 229, 1);
        border-radius: 28rpx;
        font-size: 26rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color:rgba(102,102,102,1);
      }
      // 底部区域 待收货区域
      .footer {
        float: right;
        display: flex;
        > view {
          width: 150rpx;
          height: 56rpx;
          line-height: 56rpx;
          text-align: center;
          background:rgba(255,255,255,1);
          border: 2rpx solid rgba(229, 229, 229, 1);
          border-radius: 28rpx;
          font-size: 26rpx;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color:rgba(102,102,102,1);
        }
        // 查看物流
        .logistics {
          margin: 0 16rpx;
        }
        // 确认收货
        .confirm {
          border: 2rpx solid rgba(90, 195, 107, 1);
          color:rgba(90,195,107,1);
        }
      }
      // 支付区域
      .payment {
        float: right;
        width: 150rpx;
        height: 56rpx;
        line-height: 56rpx;
        text-align: center;
        background:rgba(253,72,77,1);
        border-radius: 28rpx;
        font-size: 26rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color:rgba(255,255,255,1);
      }
    }
  }
}
</style>