// pages/packageDetails/packageDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goTopStatus: false
  },
  //监听页面高度(上滑或者下滑)
  onPageScroll(obj) {
    if (obj.scrollTop > 363) {
      this.setData({
        goTopStatus: true
      })
    }
    this.setData({
      goTopStatus: false
    })
  },
  //点击回到顶部
  goToTop() {
    uni.pageScrollTo({
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})