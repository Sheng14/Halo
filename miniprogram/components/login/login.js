// components/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalShow: Boolean//虽然我们引用了弹出层组件，但是由于页面传入的是给我们登录的，所以我们还要接受并且给弹出层！
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
    onGotUserInfo(e){//进行授权操作
      const userInfo=e.detail.userInfo//拿到用户授权的个人信息
      if(userInfo){//如果授权了，就可以关闭弹出层
        this.setData({
          modalShow:false
        })
        this.triggerEvent('loginsuccess',userInfo)//同时暴露一个成功授权的自定义事件,把授权信息传出去
      }else{
        this.triggerEvent('loginfail')//不然就暴露一个弹出失败的自定义事件
      }
    }
  }
})
