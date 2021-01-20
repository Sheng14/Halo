// components/profileAction/profileAction.js
let content = '' //反馈内容
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showRecord: false,
    actionList: [ // 用户行为
      {
        img: '../../images/collect.png',
        content: '我的收藏'
      },
      {
        img: '../../images/issue.png',
        content: '我的发布'
      },
      {
        img: '../../images/comment.png',
        content: '我的评论'
      },
      {
        img: '../../images/record.png',
        content: '问题反馈'
      }
    ],
    showLogin: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    go (e) { // 检测登录与否和登录后的跳转
      const action = e.currentTarget.dataset.action
      wx.getSetting({ // 判断授权与否
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => { // 授权成功时执行跳转逻辑
               this.setData({
                 userInfo: res.userInfo
               })
               this._go(action)
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
    closeModel () {
      this.setData({
        showRecord: false
      })
    },
    _go (action) { // 跳转位置
      if (action === "我的收藏") {
        wx.navigateTo({
          url: '/pages/myCollect/myCollect',
        })
      } else if (action === "我的发布") {
        wx.navigateTo({
          url: '/pages/myIssue/myIssue',
        })
      } else if (action === "我的评论") {
        wx.navigateTo({
          url: '/pages/myComment/myComment',
        })
      } else {
        console.log('1')
        this.setData({
          showRecord: true
        })
      }
    },
    onInput (e) { // 监听输入的反馈内容
      content = e.detail.value
      if (content.length >= 40) {
        wx.showToast({
          title: '达到最大字数',
          icon: 'none'
        })
      }
    },
    pushRecord () { // 提交反馈
      if (content.trim() == '') {
        wx.showToast({
          title: '输入内容不能为空',
          icon: 'none'
        })
        return
      }
      const db = wx.cloud.database()
      db.collection('recordList').add({
        data: {
          ...this.data.userInfo,
          content,
          createTime: db.serverDate()
        }
      }).then((res) => {
        wx.showToast({
          title: '提交成功！',
        })
        this.setData({
          showRecord: false
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
        content: '必须登录才能进行操作'
      })
    }
  }
})
