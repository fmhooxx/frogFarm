<template>
  <!-- 首页定位页面 ming -->
  <view class="index-location">
    <map
      style="width: 100%; height: 300px;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="covers"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 中心纬度
      latitude: 39.909,
      // 中心经度
      longitude: 116.39742,
      // 标记点
      covers: [
        {
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: "/static/images/posi-red.png"
        },
        {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: "/static/images/posi.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>
