// components/search/search.js
let keyWord = ''
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    publish () {
      this.triggerEvent('publish')
    },
    getKeyWord (e) {
      keyWord = e.detail.value
    },
    search () {
      this.triggerEvent('search', {
        keyWord
      })
    }
  }
})
