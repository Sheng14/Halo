// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sentence: '', // 金句
    categoryList: [ ] // 传给目录组件生成一个个目录
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getSentenceList()
    this._getCategoryList()
  },
  _getSentenceList () { // 随机调用金句
    let start1 = Math.random()*17
    let start2 = Math.floor(start1)
    wx.cloud.callFunction({
      name: 'dailysentence',
      data: {
        start: start2,
        count: 1,
        $url: 'getSentenceList'
      }
    })
    .then((res) => {
      console.log(res)
      console.log(res.result.data[0].sentece)
      this.setData({
        sentence: res.result.data[0].sentece
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },
  _getCategoryList () { // 获取试题分类列表并且缓存起来
    if (!wx.getStorageSync('categoryList')) {
      wx.cloud.database().collection('categoryList').get()
      .then((res) => {
        this.setData({
          categoryList: res.data
        })
        wx.setStorageSync('categoryList', this.data.categoryList)
      })
    } else {
      this.setData({
        categoryList:  wx.getStorageSync('categoryList')
      })
    }
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