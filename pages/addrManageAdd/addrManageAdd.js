// pages/addrManageAdd/addrManageAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 性别数据
    gender: [{
        id: 0,
        text: "先生",
        value: "0"
      },
      {
        id: 1,
        text: "女士",
        value: "1"
      }
    ],
    // 控制被选中性别的那一项
    current: null,
    // 地址选择
    address: '选择详细地址',
  },
  // 当选择性别发生改变的时候
  radioChange(e) {
    this.setData({
      current: e.detail.value
    })
  },
  // 当地址选择框发生变化的时候
  bindPickerChange(e) {
    this.setData({
      address: e.detail.value
    })
  },
  // 去地址管理页面
  goAddressManagement() {
    wx.navigateTo({
      url: '/pages/addressManagement/addressManagement'
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