<template>
  <!--pages/greenAddrManageAdd/greenAddrManageAdd.wxml-->
  <!-- 新建收货地址页面 ming -->
  <view class="container">111</view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 去确认订单页面
    goConfirmOrder() {
      uni.navigateTo({
        url: "/pages/confirmOrder/confirmOrder"
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>