// components/subjectModel/subjectModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subjectItem: { // 接收传过来的具体题目
      type: Object
    },
    showModel: { // 显示弹窗与否（外部点击了就会传个是进来）
      type: Boolean
    }
  },
  observers: { // 用监听器获取接收到的数据，因为后面需要改动，无法直接在properties修改
    showModel(val) {
      this.setData({
        isShowModel: val
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    showAnswer: false, // 展示答案与否
    isShowModel: '' // 展示整个弹框与否
  },

  /**
   * 组件的方法列表
   */
  methods: {
    controlAnswer () { // 根据点击时状态显示或关闭答案
      this.setData({
        showAnswer: !this.data.showAnswer
      })
    },
    closeModel () { // 关闭弹框
      this.setData({
        isShowModel: false
      })
    }
  }
})
