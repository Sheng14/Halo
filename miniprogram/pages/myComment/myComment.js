// miniprogram/pages/myComment/myComment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCommentList: [
      {
        avatarUrl: 'http://img2.ali213.net/picfile/News/2015/10/24/584_2015102415017792.jpg',
        nickName: '勇士',
        createdTime: '2020-12-21',
        content: '后端Java是否有前途？',
        comments: [
          {
            avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
            nickName: '玛维',
            createdTime: '2020-12-22',
            content: '有'
          }
        ]
      },
      {
        avatarUrl: 'http://img2.ali213.net/picfile/News/2015/10/24/584_2015102415007299.jpg',
        nickName: '士官长',
        createdTime: '2020-12-20',
        content: '能量护盾已充满',
        comments: [
          {
            avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
            nickName: '玛维',
            createdTime: '2020-12-21',
            content: '可'
          }
        ]
      },
      {
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
      },
    ]
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