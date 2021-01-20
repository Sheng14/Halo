// miniprogram/pages/squareDetail/squareDetail.js
let currentBlogId = '' // 当前评论对应的广场Id
const db=wx.cloud.database()//初始化数据库
import formatTime from '../../utils/formatTime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: {},
    showComment: false,
    showLogin: false,
    userInfo: ''
  },
  showComment () { // 接收子组件传来的评论自定义事件
    wx.getSetting({ // 判断授权与否
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => { // 授权成功时执行收藏逻辑
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
  send (e) { // 发表评论
    let content = e.detail.content
    if(content.trim() == ''){
      wx.showModal({
        title: '提示',
        content: '评论内容不能为空',
      })
      return
    }
    wx.showLoading({
      title: '评论中',
      mask:true
    })
    db.collection('squareList-comment').add({
      data:{
        content,
        createTime:db.serverDate(),
        squareId:currentBlogId,
        nickName:this.data.userInfo.nickName,
        avatarUrl:this.data.userInfo.avatarUrl
      }
    })
    .then((res) => {
      wx.hideLoading()
      wx.showToast({
        title: '评论成功！',
        duration: 1500
      })
      this.setData({
        showComment: false
      })
      content = ''
      e.detail.content = ''
      this._getDetailList()
    })
    .catch((error) => {
      wx.hideLoading()
      wx.showToast({
        title: '评论失败',
        icon: 'none',
        duration: 1500
      })
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
  onLoad: function (options) { // 在这里接受了传来的id获取了数据进行渲染
    currentBlogId = options.blogId
    this._getDetailList()
  },
  _getDetailList () { // 获取评论列表
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'squareList',
      data: {
        $url: 'detail',
        blogId: currentBlogId,
        start: 0,
        count: 10
      }
    })
    .then((res) => {
      wx.hideLoading()
      let commentList = res.result.commentList
      for(let i = 0; i < commentList.length; i++) { // 对评论数组里面的日期格式化（详情的话有组件在格式化）
        commentList[i].createTime = formatTime(new Date(commentList[i]['createTime']))
        console.log(commentList)
      }
      let formatList = { // 格式化返回数据
        avatarUrl: res.result.detailList[0].avatarUrl,
        nickName: res.result.detailList[0].nickName,
        createTime: res.result.detailList[0].createTime,
        content: res.result.detailList[0].content,
        comments: commentList
      }
      this.setData({
        detailList: formatList
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})