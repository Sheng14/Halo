// miniprogram/pages/squareDetail/squareDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: {
      avatarUrl: 'http://i0.hdslb.com/bfs/face/6d521ca622282a2759dfcbc4a3823fe7edfe0397.jpg',
      nickName: '星界军',
      createdTime: '2020-12-19',
      content: '我们的目标是星辰大海！',
      comments: [
        {
          avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
          nickName: '星界军小兵1号',
          createdTime: '2020-12-20',
          content: '为了帝皇！无限忠诚！'
        },
        {
          avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
          nickName: '星界军小兵2号',
          createdTime: '2020-12-20',
          content: '为了帝皇！无限忠诚！'
        },
        {
          avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
          nickName: '星界军小兵3号',
          createdTime: '2020-12-20',
          content: '为了帝皇！无限忠诚！'
        },
        {
          avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
          nickName: '星界军小兵4号',
          createdTime: '2020-12-20',
          content: '为了帝皇！无限忠诚！'
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // 在这里接受了传来的id获取了数据进行渲染
    console.log(options.item)
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