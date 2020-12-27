// components/squareItem/squareItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    squareItem: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    comment () { // 暴露评论和校验登录给父组件
      this.triggerEvent('showComment')
    },
    share () {
      this.triggerEvent('showLogin')
    }
  }
})
