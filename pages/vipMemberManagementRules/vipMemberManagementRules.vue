<template>
  <view class="box">会员管理规则</view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    // 获取规则接口
    this.getVip();
  },
  methods: {
    // 获取规则接口
    getVip() {
      this.$http
        .get("/memberPackage/getVip", { params: { user_id: 1 } })
        .then(res => console.log(res));
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 50rpx;
}
</style>
