// components/comment/comment.js
let content = ''
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalShow: Boolean
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
    onSend () {
      this.triggerEvent('send', {
        content
      })
    },
    getContent(e) {
      content = e.detail.value
    }
  }
})
