// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [ // 传给目录组件生成一个个目录
      {
        name: "HTML",
        img: "../../images/html.png"
      },
      {
        name: "CSS",
        img: "../../images/CSS.png"
      },
      {
        name: "JS",
        img: "../../images/js.png"
      },
      {
        name: "Vue",
        img: "../../images/vuejs.png"
      },
      {
        name: "React",
        img: "../../images/React.png"
      },
      {
        name: "计算机基础",
        img: "../../images/computer.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})