// miniprogram/pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    squareList: [
      {
        avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
        nickName: '玛维',
        createdTime: '2020-12-22',
        content: '前端是否有前途？',
        comments: [
          {
            avatarUrl: 'http://img2.ali213.net/picfile/News/2015/10/24/584_2015102415017792.jpg',
            nickName: '勇士',
            createdTime: '2020-12-23',
            content: '有'
          }
        ]
      },
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
        avatarUrl: 'http://img2.ali213.net/picfile/News/2015/10/24/584_2015102415008413.jpg',
        nickName: '神风烈士',
        createdTime: '2020-12-19',
        content: '手撕二代目超级战士',
        comments: [
          {
            avatarUrl: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_20/1604_5048043_202367.jpg',
            nickName: '玛维',
            createdTime: '2020-12-20',
            content: '确实'
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
    ],
    showComment: false,
    showLogin: false,
    userInfo: ''
  },
  goDetail (e) { // 跳转到试题的详情页同时把数据传过去（后面理应是传id去请求数据）
    const detail = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/squareDetail/squareDetail?item=${detail.nickName}`
    })
  },
  showComment () { // 接收子组件传来的评论自定义事件
    wx.getSetting({ // 判断授权与否
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => { // 授权成功时执行评论逻辑
             this.setData({
               userInfo: res.userInfo,
               showComment: true
             })
            }
          })
        } else { // 未授权时
          this.setData({
            showLogin: true
          })
        }
      }
    })
  },
  onLoginSuccess (e) { // 登录成功关闭弹框
    this.setData({
      showLogin: false
    })
  },
  onLoginFail (e) { // 登录失败弹出提示框
    wx.showModal({
      title: '提示',
      content: '必须登录才能评论'
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