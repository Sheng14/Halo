// components/squareItem/squareItem.js
import formatTime from '../../utils/formatTime'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    squareItem: {
      type: Object
    }
  },
  observers:{
    ['squareItem.createTime'](val){//监听时间变化
      if(val){//如果时间存在
        this.setData({
          _createTime:formatTime(new Date(val))//就把时间转化成js中的date类型传入公共函数格式化赋值第三方变量
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _createTime: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    comment () { // 暴露评论和分享给父组件
      this.triggerEvent('showComment')
    },
    share () {
      this.triggerEvent('showShare')
    }
  }
})
