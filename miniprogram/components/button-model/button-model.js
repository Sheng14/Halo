// components/button-model/button-model.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalShow:Boolean
  },
  options:{
    styleIsolation: 'apply-shared',//设置组件可以使用外部样式，同时不会影响外部样式
    multipleSlots: true,//设置组件可以使用多个插槽
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
    onClose(){
      this.setData({
        modalShow:false
      })
    }
  }
})
