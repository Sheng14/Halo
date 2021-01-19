// miniprogram/pages/myIssue/myIssue.js
const MAX_LIMIT = 5//定义能拿到的最大的广场数量一次
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issueList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getSquareList()
  },
  _getSquareList () { // 获取自己的广场列表
    wx.showLoading({
      title: '拼命加载中',
    })
    wx.cloud.callFunction({
      name: 'squareList',
      data: {
        $url: 'getListByOpenid',
        start: this.data.issueList.length,
        count: MAX_LIMIT
      }
    })
    .then((res) => {
      wx.hideLoading()
      this.setData({
        issueList: this.data.issueList.concat(res.result)
      })
    })
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
    this._getSquareList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})