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
    collect: '../../images/star-init.png' // 
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
