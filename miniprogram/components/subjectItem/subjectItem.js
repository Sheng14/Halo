// components/subjectItem/subjectItem.js
const db = wx.cloud.database()
let collectList = [] // 获取当前已经收藏的试题列表
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subjectItem: {
      type: Object
    }
  },
  lifetimes: { // 页面一进入就开始判断并且赋予组件对应的收藏状态
    attached: function() {
     this.controlCollect()
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isCollect: false, // 是否收藏
    collected: '../../images/star-clicked.png', // 收藏图片
    collect: '../../images/star-init.png',
    showModel: false, // 是否展示答案弹框
    userInfo: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail() { // 展示答案弹框
      this.setData({
        showModel: true
      })
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
               if (this.data.isCollect) {
                 this.collectSubject()
               } else {
                 this.cancelSubject()
               }
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
    controlCollect () { // 判断当前试题是否被收藏
      wx.showLoading({
        title: '请稍候'
      })
      /*if (collectList.length === 0) {
        wx.cloud.callFunction({
          name: 'subjectList',
          data: {
            $url: 'getSubjectByOpenid',
            start: 0,
            count: 100
          }
        })
        .then((res) => {
          collectList = res.result
        })
      }*/
      wx.cloud.callFunction({
        name: 'subjectList',
        data: {
          $url: 'getSubjectByOpenid',
          start: 0,
          count: 20
        }
      })
      .then((res) => {
        collectList = res.result
        let length = collectList.length
        for(let i = 0; i < length; i++) {
          if(collectList[i].collectId === this.properties.subjectItem._field) {
            this.setData({
              isCollect: true
            })
          }
        }
        console.log(this.data.isCollect)
      })
      wx.hideLoading()
    },
    collectSubject () { // 收藏试题
      console.log('y')
      db.collection('subjectList-collect').add({
        data: {
          ...this.data.userInfo,
          collectId: this.properties.subjectItem._field,
          collectAnswer: this.properties.subjectItem.answer,
          collectTitle: this.properties.subjectItem.title,
          collectCategory: this.properties.subjectItem.categoryType,
          createTime: db.serverDate()
        }
      })
      .then((res) => {
        console.log(res)
        wx.showToast({
          title: '收藏成功！',
        })
        this.controlCollect()
      })
    },
    cancelSubject () { // 取消收藏！
      console.log('n')
      console.log(this.properties.subjectItem)
      let deleteId = ''
      for (let i = 0; i < collectList.length; i++) {
        if(collectList[i].collectId === this.properties.subjectItem._field) {
          deleteId = collectList[i]._id
        }
      }
      db.collection('subjectList-collect').doc(deleteId).remove({
        success: ((res) => {
          wx.showToast({
            title: '取消收藏成功！'
          })
        }),
        fail: ((error) => {
          wx.showToast({
            title: '取消收藏失败！',
            icon: 'none'
          })
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
        content: '必须登录才能收藏试题'
      })
    }
  }
})
