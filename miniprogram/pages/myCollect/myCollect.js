// miniprogram/pages/myCollect/myCollect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCollectList()
  },
  getCollectList () { // 获取我的收藏列表
    wx.cloud.callFunction({
      name: 'subjectList',
      data: {
        $url: 'getSubjectByOpenid',
        start: 0,
        count: 20
      }
    })
    .then((res) => {
      let list = res.result
      let length = res.result.length
      let collectList = []
      for(let i = 0; i < length; i++) {
        collectList.push({
          title: list[i].collectTitle,
          categoryType: list[i].collectCategory,
          answer: list[i].collectAnswer,
          _field: list[i].collectId
        })
      }
      this.setData({
        collectList: collectList
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
    this.getCollectList()
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