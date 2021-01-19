// miniprogram/pages/square/square.js
let keyWord = '' // 搜索的关键字
let currentBlogId = '' // 当前评论的广场ID
const db=wx.cloud.database()//初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    squareList: [],
    showComment: false,
    showLogin: false,
    userInfo: ''
  },
  goDetail (e) { // 跳转到试题的详情页同时把数据传过去（后面理应是传id去请求数据）
    const blogId = e.currentTarget.dataset.blogid
    wx.navigateTo({
      url: `/pages/squareDetail/squareDetail?blogId=${blogId}`
    })
  },
  showComment (e) { // 接收子组件传来的评论自定义事件
    this.authorization()
    if (this.data.userInfo) {
      this.setData({
        showComment: true
      })
    }
    currentBlogId = e.currentTarget.dataset.blogid
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
    })
  },
  authorization () { // 鉴权
    wx.getSetting({ // 判断授权与否
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => { // 授权成功时执行评论逻辑
             this.setData({
               userInfo: res.userInfo
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
  goPublish () { // 跳转到发布页
    this.authorization()
    if (this.data.userInfo) {
      wx.navigateTo({
        url: `/pages/publish/publish?nickName=${this.data.userInfo.nickName}&avatarUrl=${this.data.userInfo.avatarUrl}`
      })
    }
  },
  search (e) { // 根据搜索结果展示广场列表
    keyWord = e.detail.keyWord
    this.setData({
      squareList: []
    })
    this._loadSquareList(0)
  },
  onLoginSuccess (e) { // 登录成功关闭弹框
    this.setData({
      showLogin: false
    })
  },
  onLoginFail (e) { // 登录失败弹出提示框
    wx.showModal({
      title: '提示',
      content: '必须登录才能继续操作'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadSquareList()
  },
  _loadSquareList(start=0){//加载广场列表数据
    wx.showLoading({
      title: '拼命加载中',
    })
    wx.cloud.callFunction({
      name:'squareList',
      data:{
        keyWord,//多接收一个keyWord
        start,
        count: 5,
        $url:'list'
      }
    })
    .then((res)=>{
      this.setData({
        squareList:this.data.squareList.concat(res.result)//加载完就丢到我们的列表中合并
      })
      wx.hideLoading()
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