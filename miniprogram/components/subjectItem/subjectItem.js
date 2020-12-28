// components/subjectItem/subjectItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subjectItem: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCollect: false, // 是否收藏
    collected: '../../images/star-clicked.png', // 收藏图片
    collect: '../../images/star-init.png',
    showModel: false // 是否展示答案弹框
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail() { // 展示答案弹框
      this.setData({
        showModel: true
      })
      console.log(1)
    },
    collect (e) { // 收藏试题
      wx.getSetting({ // 判断授权与否
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => { // 授权成功时执行收藏逻辑
               this.setData({
                 userInfo: res.userInfo,
                 isCollect: !this.data.isCollect
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
        content: '必须登录才能收藏试题'
      })
    }
  }
})
