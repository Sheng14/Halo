// components/category/category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categoryList: { // 接收外部传来的一个目录对象（这里只是单个的，循环在父组件做）
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
    toSubjectList() { // 负责获取当前目录名称并且跳转到对应的试题列表
      wx.navigateTo({
        url: `/pages/subjectList/subjectList?categoryName=${this.properties.categoryList.categoryType}`,
      })
    }
  }
})
