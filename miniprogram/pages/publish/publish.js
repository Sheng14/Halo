// miniprogram/pages/publish/publish.js
let content = '' // 输入的内容
let timer = null // 防抖做的定时器
let userInfo = '' // 当前个人信息
const db = wx.cloud.database()//初始化化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordNum: '当前已输入字数：0',
    footerBottom: 0
  },
  onInput (e) { // 监听输入字数(已经做了防抖处理)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      if (e.detail.value.length >= 40) {
        this.setData({
          wordNum: '最大字数不能超过40'
        })
      } else {
        this.setData({
          wordNum: `当前已输入字数: ${e.detail.value.length}`
        })
      }
      content = e.detail.value
    }, 500)
  },
  publish () { // 发布（添加到数据库）
    if (content) {
      db.collection('squareList').add({
        data: {
          ...userInfo, // 实际上除了昵称和头像还会自动带上openid
          content,
          createTime: db.serverDate()
        }
      })
      .then((res) => {
        wx.showToast({
          title: '发布成功！',
          duration: 1500
        })
        wx.navigateBack({
          delta: 1,
        })
        const pages=getCurrentPages()//拿到当前经过的所有页面（只有两个）
        const prepage=pages[pages.length-2]//取到上一个页面也就是square
        prepage.onPullDownRefresh()//调用上一个页面的下拉刷新函数，实现发布后页面刷新
      })
    } else {
      wx.showToast({
        title: '发布的内容不能为空',
        icon: 'none'
      })
    }
  },
  onFocus(e){//在我们获得焦点的时候footer上升
    this.setData({
      footerBottom:e.detail.height
    })
  },
  onBlur(e){//相反，失去焦点则下降
    this.setData({
      footerBottom:0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    userInfo = options
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