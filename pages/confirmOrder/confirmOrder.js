// pages/confirmOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 去消息页面
  goAddrManageAdd() {
    wx.navigateTo({
      url: '/pages/addrManageAdd/addrManageAdd'
    })
  },
  // 去地址管理页面
  goAddressManagement() {
    wx.navigateTo({
      url: '/pages/addressManagement/addressManagement'
    })
  },
  // 去支付订单页面
  goPayment() {
    wx.navigateTo({
      url: '/pages/payment/payment'
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