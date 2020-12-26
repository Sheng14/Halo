// components/profileAction/profileAction.js
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
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    go (e) { // 处理个人行为的页面跳转
    //  console.log(e.currentTarget.dataset.action)
      const action = e.currentTarget.dataset.action
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
        wx.showToast({
          title: '已经反馈',
          icon: 'none'
        })
      }
    }
  }
})
