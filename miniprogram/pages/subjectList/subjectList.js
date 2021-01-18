// miniprogram/pages/subjectList/subjectList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryName: '', // 当前列表所在的目录名称
    showLogin: false, // 是否展示授权框
    userInfo: '', // 当前登录用户的信息
    subjectList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ // 获取当前目录名称并且给目录名称赋值
      categoryName: options.categoryName
    })
    this._getSubjectList(options.categoryName)
  },
  _getSubjectList (type) { // 获取对应类型的试题列表
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'subjectList',
      data: {
        $url: 'getSubjectList',
        categoryType: type
      }
    })
    .then((res) => {
      console.log(res)
      this.setData({
        subjectList: res.result.data
      })
      wx.hideLoading()
    })
    .catch((error) => {
      console.log(error)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})